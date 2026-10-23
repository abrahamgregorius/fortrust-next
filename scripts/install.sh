#!/usr/bin/env bash
#
# One-shot installer for the Fortrust AI Blog cron job (systemd timer).
#
#   sudo bash scripts/install.sh
#
# What it does:
#   1. creates /etc/fortrust/ai-blog.env (if missing) and reminds you to fill it
#   2. checks that the app's own environment has CRON_SECRET + GEMINI_API_KEY
#   3. installs fortrust-ai-blog.service + .timer with the REAL repo path
#   4. daemon-reload + enable the timer
#   5. prints the schedule, the log command and a manual test command
#
# Overridable via environment variables:
#   SERVICE_USER  systemd user to run as          (default: www-data)
#   ENV_DIR       where the env file lives        (default: /etc/fortrust)
#
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_DIR="${ENV_DIR:-/etc/fortrust}"
ENV_FILE="$ENV_DIR/ai-blog.env"
UNIT_DIR="/etc/systemd/system"
SERVICE_USER="${SERVICE_USER:-www-data}"
TIMER_NAME="fortrust-ai-blog.timer"
SERVICE_NAME="fortrust-ai-blog.service"

c_info() { printf '\033[1;36m==>\033[0m %s\n' "$*"; }
c_warn() { printf '\033[1;33m[!]\033[0m %s\n' "$*"; }
c_ok()   { printf '\033[1;32m[+]\033[0m %s\n' "$*"; }
c_fail() { printf '\033[1;31m[x]\033[0m %s\n' "$*" >&2; exit 1; }

[[ "${EUID:-$(id -u)}" -eq 0 ]] || c_fail "Run as root: sudo bash scripts/install.sh"
command -v systemctl >/dev/null 2>&1 || c_fail "systemd is not available on this machine"
[[ -f "$REPO_DIR/scripts/fortrust-ai-blog.service" ]] || c_fail "unit files not found in $REPO_DIR/scripts — run git pull first"
[[ -f "$REPO_DIR/scripts/generate-articles.sh" ]] || c_fail "runner not found: $REPO_DIR/scripts/generate-articles.sh"

# ---------------------------------------------------------------------------
# 1. Environment file
# ---------------------------------------------------------------------------
c_info "Repository:       $REPO_DIR"
c_info "Environment file: $ENV_FILE"

if [[ -f "$ENV_FILE" ]]; then
  c_warn "$ENV_FILE already exists — keeping it untouched."
else
  mkdir -p "$ENV_DIR"
  cat > "$ENV_FILE" <<'EOF'
# Fortrust AI Blog Generator
# APP_URL  = base URL of the running Next.js app
APP_URL=https://fortrust.com
# CRON_SECRET = must be IDENTICAL to CRON_SECRET in the app's own environment
CRON_SECRET=
# number of articles per run (the API caps this at 5)
ARTICLE_COUNT=5
EOF
  chmod 600 "$ENV_FILE"
  c_warn "Created $ENV_FILE — EDIT IT NOW (APP_URL + CRON_SECRET are required)."
fi

if ! grep -qE '^[[:space:]]*APP_URL=.+' "$ENV_FILE"; then
  c_warn "APP_URL is empty in $ENV_FILE — the runner will refuse to start."
fi
if ! grep -qE '^[[:space:]]*CRON_SECRET=.+' "$ENV_FILE"; then
  c_warn "CRON_SECRET is empty in $ENV_FILE — the API will reject the call."
fi

# ---------------------------------------------------------------------------
# 2. Does the app itself have the secrets it needs?
# ---------------------------------------------------------------------------
c_info "Checking the app environment in $REPO_DIR"
found_any_env=0
for env_file in .env.local .env.production .env; do
  [[ -f "$REPO_DIR/$env_file" ]] || continue
  found_any_env=1
  if grep -qE '^[[:space:]]*CRON_SECRET=.+' "$REPO_DIR/$env_file"; then
    c_ok "CRON_SECRET found in $env_file"
  else
    c_warn "CRON_SECRET is NOT set in $env_file — the API will answer 401."
  fi
  if grep -qE '^[[:space:]]*GEMINI_API_KEY=.+' "$REPO_DIR/$env_file"; then
    c_ok "GEMINI_API_KEY found in $env_file"
  else
    c_warn "GEMINI_API_KEY is NOT set in $env_file — article generation will fail."
  fi
done
if [[ "$found_any_env" -eq 0 ]]; then
  c_warn "No .env* file in $REPO_DIR — is the app deployed from this directory?"
  c_warn "Make sure CRON_SECRET and GEMINI_API_KEY are set, then restart the app."
fi

# ---------------------------------------------------------------------------
# 3. systemd units — path and user are patched to match this machine
# ---------------------------------------------------------------------------
if ! id -u "$SERVICE_USER" >/dev/null 2>&1; then
  c_warn "User '$SERVICE_USER' does not exist on this server."
  c_warn "Re-run with: sudo SERVICE_USER=\$(whoami) bash scripts/install.sh"
  exit 1
fi

c_info "Installing systemd units into $UNIT_DIR"

sed \
  -e "s#^User=.*#User=$SERVICE_USER#" \
  -e "s#^WorkingDirectory=.*#WorkingDirectory=$REPO_DIR#" \
  -e "s#^ExecStart=.*#ExecStart=/bin/bash $REPO_DIR/scripts/generate-articles.sh#" \
  "$REPO_DIR/scripts/fortrust-ai-blog.service" > "$UNIT_DIR/fortrust-ai-blog.service"

cp "$REPO_DIR/scripts/fortrust-ai-blog.timer" "$UNIT_DIR/fortrust-ai-blog.timer"

chmod 644 "$UNIT_DIR/fortrust-ai-blog.service" "$UNIT_DIR/fortrust-ai-blog.timer"
chmod 755 "$REPO_DIR/scripts/generate-articles.sh" 2>/dev/null || true

systemctl daemon-reload
systemctl enable --now "$TIMER_NAME"
c_ok "Timer enabled."

# ---------------------------------------------------------------------------
# 4. Verify
# ---------------------------------------------------------------------------
c_info "Verifying the installed unit"
if ! systemctl cat "$SERVICE_NAME" >/dev/null 2>&1; then
  c_fail "systemctl cannot read $SERVICE_NAME"
fi

echo
c_ok "Installed $SERVICE_NAME"
echo
echo "  Repository:  $REPO_DIR"
echo "  Runs as:     $SERVICE_USER"
echo "  Env file:    $ENV_FILE"
echo
systemctl list-timers "$TIMER_NAME" --no-pager || true
echo
echo "Next steps:"
echo "  1. Fill in $ENV_FILE  (APP_URL + CRON_SECRET), then:"
echo "       sudo systemctl start $SERVICE_NAME"
echo "       journalctl -u fortrust-ai-blog -f"
echo "  2. Make sure the app has the SAME CRON_SECRET + a valid GEMINI_API_KEY, then restart it."
echo "  3. Optional: ALTER TABLE blogs ADD COLUMN IF NOT EXISTS topic_notes TEXT;  (Supabase SQL editor)"
echo
