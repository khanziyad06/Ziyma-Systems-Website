from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import json
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import asyncio

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# JSON file for backup storage
INQUIRIES_FILE = ROOT_DIR / "inquiries.json"

app = FastAPI()
api_router = APIRouter(prefix="/api")


class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactInquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=20)
    service: Optional[str] = Field(default=None, max_length=60)
    message: str = Field(min_length=5, max_length=2000)


def _save_to_json(inquiry: dict):
    """Save inquiry to a local JSON file as backup."""
    try:
        if INQUIRIES_FILE.exists():
            data = json.loads(INQUIRIES_FILE.read_text(encoding="utf-8"))
        else:
            data = []
        data.append(inquiry)
        INQUIRIES_FILE.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    except Exception as e:
        logger.error(f"Failed to save inquiry to JSON: {e}")


def _send_email(inquiry: ContactInquiry):
    """Send an email notification via Gmail SMTP."""
    smtp_email = os.environ.get("SMTP_EMAIL")
    smtp_password = os.environ.get("SMTP_PASSWORD")
    notify_email = os.environ.get("NOTIFY_EMAIL")

    if not all([smtp_email, smtp_password, notify_email]):
        logger.error("SMTP credentials not configured. Skipping email.")
        return False

    # Build a clean HTML email
    html_body = f"""
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; border-radius: 12px; overflow: hidden;">
        <div style="background: #142523; padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">New Consultation Request</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 6px 0 0; font-size: 13px;">via Ziyma Systems website</p>
        </div>
        <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 100px; vertical-align: top;">Name</td>
                    <td style="padding: 10px 0; color: #142523; font-size: 14px; font-weight: 500;">{inquiry.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
                    <td style="padding: 10px 0; color: #142523; font-size: 14px;">
                        <a href="mailto:{inquiry.email}" style="color: #E2603B; text-decoration: none;">{inquiry.email}</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Phone</td>
                    <td style="padding: 10px 0; color: #142523; font-size: 14px;">{inquiry.phone or "Not provided"}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Service</td>
                    <td style="padding: 10px 0; color: #142523; font-size: 14px;">{inquiry.service or "Not specified"}</td>
                </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;">
            <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Message</p>
            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; color: #142523; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">{inquiry.message}</div>
            <p style="color: #9ca3af; font-size: 11px; margin: 20px 0 0; text-align: center;">
                Received at {inquiry.created_at}
            </p>
        </div>
    </div>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"New Inquiry from {inquiry.name} — Ziyma Systems"
    msg["From"] = smtp_email
    msg["To"] = notify_email

    # Plain text fallback
    plain_body = (
        f"New Consultation Request\n"
        f"{'='*40}\n\n"
        f"Name:    {inquiry.name}\n"
        f"Email:   {inquiry.email}\n"
        f"Phone:   {inquiry.phone or 'Not provided'}\n"
        f"Service: {inquiry.service or 'Not specified'}\n\n"
        f"Message:\n{inquiry.message}\n\n"
        f"Received at {inquiry.created_at}"
    )

    msg.attach(MIMEText(plain_body, "plain"))
    msg.attach(MIMEText(html_body, "html"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(smtp_email, smtp_password)
            server.sendmail(smtp_email, notify_email, msg.as_string())
        logger.info(f"Email sent for inquiry from {inquiry.name}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {e}")
        return False


@api_router.get("/")
async def root():
    return {"message": "Ziyma Systems API"}


@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact(payload: ContactInquiryCreate):
    inquiry = ContactInquiry(**payload.model_dump())

    # Save to JSON backup
    _save_to_json(inquiry.model_dump())

    # Send email (run in thread pool to avoid blocking)
    email_sent = await asyncio.to_thread(_send_email, inquiry)

    if not email_sent:
        logger.warning("Email notification failed, but inquiry was saved to JSON backup.")

    return inquiry


@api_router.get("/contact", response_model=List[ContactInquiry])
async def list_contacts():
    if not INQUIRIES_FILE.exists():
        return []
    try:
        data = json.loads(INQUIRIES_FILE.read_text(encoding="utf-8"))
        # Return sorted by newest first
        data.sort(key=lambda x: x.get("created_at", ""), reverse=True)
        return data
    except Exception:
        return []


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)
