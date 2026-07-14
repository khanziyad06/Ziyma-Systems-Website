"""Contact API tests for Ziyma Systems"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://portfolio-showcase-3065.preview.emergentagent.com").rstrip("/")


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


class TestContact:
    def test_root(self, api):
        r = api.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert "message" in r.json()

    def test_create_contact_valid(self, api):
        payload = {
            "name": "TEST_User",
            "email": "test_user@example.com",
            "message": "Hello, this is a test inquiry from pytest",
            "phone": "+919999999999",
            "service": "Website Systems",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert "created_at" in data

    def test_create_contact_minimal(self, api):
        r = api.post(f"{BASE_URL}/api/contact", json={
            "name": "TEST_Min",
            "email": "min@example.com",
            "message": "Short but enough",
        })
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["phone"] is None
        assert d["service"] is None

    def test_create_contact_invalid_email(self, api):
        r = api.post(f"{BASE_URL}/api/contact", json={
            "name": "TEST_X", "email": "not-an-email", "message": "Hello world"
        })
        assert r.status_code == 422

    def test_create_contact_short_message(self, api):
        r = api.post(f"{BASE_URL}/api/contact", json={
            "name": "TEST_X", "email": "x@example.com", "message": "hi"
        })
        assert r.status_code == 422

    def test_create_contact_short_name(self, api):
        r = api.post(f"{BASE_URL}/api/contact", json={
            "name": "A", "email": "x@example.com", "message": "Hello world"
        })
        assert r.status_code == 422

    def test_list_contacts(self, api):
        r = api.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        # Should include the recently created test contact
        assert any(item.get("name", "").startswith("TEST_") for item in data)
        # Ensure no _id leaks
        for item in data:
            assert "_id" not in item

    def test_persistence_after_create(self, api):
        payload = {
            "name": "TEST_Persist",
            "email": "persist@example.com",
            "message": "Verify persistence in DB",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        created_id = r.json()["id"]
        lst = api.get(f"{BASE_URL}/api/contact").json()
        assert any(item["id"] == created_id for item in lst)
