#!/usr/bin/env bash
#
# Daily AI article generator.
# Calls POST <APP_URL>/api/ai/generate-articles with the cron secret.
#
# Required environment variables:
#   APP_URL       - base URL of the running app (e.g. https://fortrust.com)
#   CRON_SECRET   - shared secret, must match the app's CRON_SECRET
#
# Optional:
#   ARTICLE_COUNT - number of articles to generate (default 5)
#   LOG_FILE      - where to append the output (default /var/log/fortrust-ai-blog.log)

set -euo pipefail

: "${APP_URL:?APP_URL is required}"
: "${CRON_SECRET:?CRON_SECRET is required}"

ARTICLE_COUNT="${ARTICLE_COUNT:-5}"
LOG_FILE="${LOG_FILE:-/var/log/fortrust-ai-blog.log}"
ENDPOINT="${APP_URL%/}/api/ai/generate-articles"

log() {
  echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] $*" | tee -a "$LOG_FILE"
}

log "--- AI blog generation starting (count=${ARTICLE_COUNT}) ---"

RESPONSE_FILE="$(mktemp)"
HTTP_CODE="$(curl -sS \
  -X POST "$ENDPOINT" \
  -H "Content-Type: application/json" \
  -H "x-cron-secret: ${CRON_SECRET}" \
  -d "{\"count\": ${ARTICLE_COUNT}}" \
  -o "$RESPONSE_FILE" \
  -w '%{http_code}' \
  --max-time 900 \
  || echo "000")"

BODY="$(cat "$RESPONSE_FILE")"
rm -f "$RESPONSE_FILE"

if [ "$HTTP_CODE" = "200" ]; then
  log "SUCCESS (http ${HTTP_CODE}): ${BODY}"
  exit 0
fi

log "FAILED (http ${HTTP_CODE}): ${BODY}"

# Retry once after 2 minutes — Gemini sometimes rate-limits.
log "Retrying in 120s..."
sleep 120

HTTP_CODE="$(curl -sS \
  -X POST "$ENDPOINT" \
  -H "Content-Type: application/json" \
  -H "x-cron-secret: ${CRON_SECRET}" \
  -d "{\"count\": ${ARTICLE_COUNT}}" \
  --max-time 900 \
  -w '\n%{http_code}' \
  || echo "000")"

if echo "$HTTP_CODE" | tail -n1 | grep -q "^200$"; then
  log "SUCCESS on retry: ${HTTP_CODE}"
  exit 0
fi

log "FAILED on retry: ${HTTP_CODE}"
exit 1
