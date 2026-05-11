import requests
import os

OUTPUT_DIR = "images"
FAVICON_API = "https://www.google.com/s2/favicons"
OPENBRAND_API = "https://openbrand.sh/api/extract"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Optional: Get free API key from openbrand.sh/dashboard
OPENBRAND_KEY = os.environ.get("OPENBRAND_KEY", "")

def download_file(url, filepath):
    """Helper to download with timeout and error handling."""
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
    resp = requests.get(url, headers=headers, timeout=15)
    resp.raise_for_status()
    with open(filepath, "wb") as f:
        f.write(resp.content)
    return True

def fetch_favicon(domain, filepath):
    """Fetch favicon from Google's public API."""
    favicon_url = f"{FAVICON_API}?domain={domain}&sz=256"
    return download_file(favicon_url, filepath)

def fetch_openbrand(domain, filepath):
    """Use OpenBrand to extract the best logo from a website."""
    if not OPENBRAND_KEY:
        return False
    try:
        url = f"https://{domain}"
        headers = {"Authorization": f"Bearer {OPENBRAND_KEY}"}
        resp = requests.get(OPENBRAND_API, headers=headers, params={"url": url}, timeout=20)
        resp.raise_for_status()
        data = resp.json()
        # Pick first available logo or fallback
        logos = data.get("logos", [])
        if logos:
            logo_url = logos[0].get("url")
            if logo_url:
                return download_file(logo_url, filepath)
    except Exception:
        pass
    return False

def guess_domain(name):
    """Guess the domain from a brand name."""
    name = name.strip().lower().replace(" ", "")
    return f"{name}.com"

# --- Main interactive loop ---
print("Dynamic Logo Downloader")
print("Type a brand name (or 'quit' to exit)\n")

while True:
    query = input("Brand: ").strip()
    if query.lower() in ("quit", "exit", "q"):
        break
    if not query:
        continue

    domain = guess_domain(query)
    filename = f"{query}_logo.png"
    filepath = os.path.join(OUTPUT_DIR, filename)

    print(f"  Trying {domain}...")

    # Priority 1: OpenBrand (if configured)
    if OPENBRAND_KEY:
        try:
            if fetch_openbrand(domain, filepath):
                print(f"  ✅ Downloaded via OpenBrand → {filename}\n")
                continue
        except Exception as e:
            print(f"  ⚠️ OpenBrand failed: {e}")

    # Priority 2: Google Favicon API
    try:
        fetch_favicon(domain, filepath)
        print(f"  ✅ Downloaded via Favicon → {filename}\n")
    except Exception as e:
        print(f"  ❌ Failed for '{query}': {e}\n")