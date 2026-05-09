#!/usr/bin/env bash
set -euo pipefail

# VibeCoLingo local dev setup
# Sets up Firebase emulators for Auth + Firestore, no real Firebase project needed.

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log()  { echo -e "${BLUE}[setup]${NC} $*"; }
ok()   { echo -e "${GREEN}[ok]${NC}    $*"; }
warn() { echo -e "${YELLOW}[warn]${NC}  $*"; }
die()  { echo -e "${RED}[error]${NC} $*"; exit 1; }

# --- Prerequisites ---

log "Checking prerequisites..."

command -v node &>/dev/null || die "Node.js not found. Install v20+ from https://nodejs.org"
command -v npm  &>/dev/null || die "npm not found."

NODE_MAJOR=$(node -v | sed 's/v//' | cut -d. -f1)
(( NODE_MAJOR >= 18 )) || warn "Node.js 18+ recommended, found $(node -v)"
ok "Node.js $(node -v)"

if ! command -v java &>/dev/null; then
  warn "Java not found. The Firestore emulator requires Java 11+."
  warn "Install: https://adoptium.net  (or: brew install --cask temurin)"
fi

# --- Firebase CLI ---

if ! command -v firebase &>/dev/null; then
  log "Firebase CLI not found, installing globally..."
  npm install -g firebase-tools
fi
ok "Firebase CLI $(firebase --version 2>/dev/null | head -1)"

# --- npm install ---

log "Installing npm dependencies..."
npm install
ok "Dependencies ready"

# --- .env.local ---
# Emulators don't validate API keys — only project ID matters.
# These stub values let the app start and connect to local emulators.

log "Configuring .env.local for emulator mode..."

[[ -f .env.local ]] || cp .env.local.example .env.local

set_env() {
  local key=$1 val=$2
  if grep -q "^${key}=" .env.local 2>/dev/null; then
    local tmp
    tmp=$(mktemp)
    sed "s|^${key}=.*|${key}=${val}|" .env.local > "$tmp"
    mv "$tmp" .env.local
  else
    printf '\n%s=%s\n' "$key" "$val" >> .env.local
  fi
}

set_env NEXT_PUBLIC_USE_FIREBASE_EMULATOR   true
set_env NEXT_PUBLIC_FIREBASE_PROJECT_ID     vibecolingo-dev
set_env NEXT_PUBLIC_FIREBASE_API_KEY        fake-key-emulator-only
set_env NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN    localhost
set_env NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET vibecolingo-dev.appspot.com
set_env NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID 000000000000
set_env NEXT_PUBLIC_FIREBASE_APP_ID         "1:000000000000:web:emulator"

ok ".env.local set to emulator mode"

# --- .firebaserc ---

if [[ ! -f .firebaserc ]]; then
  cat > .firebaserc <<'FIREBASERC'
{
  "projects": {
    "default": "vibecolingo-dev"
  }
}
FIREBASERC
  ok "Created .firebaserc (project: vibecolingo-dev)"
fi

# --- Emulator data dir ---

mkdir -p .firebase-data
ok "Emulator data dir ready (.firebase-data)"

# --- Done ---

echo ""
echo -e "${GREEN}Setup complete.${NC}"
echo ""
echo "  Run emulators:   npm run emulators"
echo "  Run dev server:  npm run dev      (in a second terminal)"
echo ""
echo "  Or both at once: npm run dev:full"
echo ""
echo "  Emulator UI:     http://localhost:4000"
echo "  App:             http://localhost:3000"
