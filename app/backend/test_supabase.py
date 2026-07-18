"""Test script: submit a contact inquiry and verify it lands in Supabase."""
import httpx
import json

BASE_URL = "http://localhost:8000/api"

payload = {
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "service": "Web Development",
    "message": "This is a test inquiry to verify Supabase integration."
}

response = httpx.post(f"{BASE_URL}/contact", json=payload)
print(f"Status: {response.status_code}")
print(f"Response: {json.dumps(response.json(), indent=2)}")

if response.status_code == 200:
    print("\n✅ Inquiry submitted successfully! Check your Supabase Table Editor for the new row.")
else:
    print(f"\n❌ Failed: {response.text}")
