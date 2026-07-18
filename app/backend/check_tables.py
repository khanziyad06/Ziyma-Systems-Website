"""Check what tables exist in the Supabase project."""
import os
from dotenv import load_dotenv
from pathlib import Path
from supabase import create_client

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

# Try to list tables via a raw SQL query
try:
    result = supabase.table("consultations").select("*").limit(1).execute()
    print("Table 'consultations' exists!")
    print(result)
except Exception as e:
    print(f"Table 'consultations' not found: {e}")

# Try the name from the hint
try:
    result = supabase.table("ZIyma Systems consultation").select("*").limit(1).execute()
    print("\nTable 'ZIyma Systems consultation' exists!")
    print(result)
except Exception as e:
    print(f"\nTable 'ZIyma Systems consultation' not found: {e}")

# Try lowercase version
try:
    result = supabase.table("ziyma systems consultation").select("*").limit(1).execute()
    print("\nTable 'ziyma systems consultation' exists!")
    print(result)
except Exception as e:
    print(f"\nTable 'ziyma systems consultation' not found: {e}")
