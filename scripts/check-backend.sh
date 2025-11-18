#!/bin/bash
echo "------------------------------------------------------------"
echo "🧩 Sheet2Scene – Backend QA & API Health Check"
echo "------------------------------------------------------------"
echo "📅 Started at: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

set -a
[ -f .env ] && source .env
set +a

FAIL=false

# ---- OpenAI -------------------------------------------------
echo "🧠 Checking OpenAI API..."
if [ -z "$OPENAI_API_KEY" ]; then
  echo "❌ No OPENAI_API_KEY in .env"
  FAIL=true
else
  resp=$(curl -s https://api.openai.com/v1/models \
    -H "Authorization: Bearer $OPENAI_API_KEY")
  if echo "$resp" | grep -q '"object": *"list"'; then
    echo "✅ OpenAI API OK"
  else
    echo "❌ OpenAI API failed:"
    echo "$resp" | head -n 4
    FAIL=true
  fi
fi

# ---- Supabase -----------------------------------------------
echo ""
echo "🧱 Checking Supabase..."
if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_SERVICE_KEY" ]; then
  echo "⚠️  Missing Supabase credentials"
  FAIL=true
else
  resp=$(curl -s "$SUPABASE_URL/rest/v1/" \
    -H "apikey: $SUPABASE_SERVICE_KEY" \
    -H "Authorization: Bearer $SUPABASE_SERVICE_KEY" \
    | head -n 20)

  if echo "$resp" | grep -q 'swagger'; then
    echo "✅ Supabase reachable (Swagger response OK)"
  elif echo "$resp" | grep -q 'Invalid API key'; then
    echo "❌ Invalid Supabase key"
    FAIL=true
  elif [ -z "$resp" ]; then
    echo "❌ Supabase did not respond"
    FAIL=true
  else
    echo "✅ Supabase API OK"
  fi
fi

# ---- Fichiers critiques -------------------------------------
echo ""
echo "📂 Checking critical backend files..."
for f in middleware.ts scripts/check-backend.sh docs/Section5-Backend.md; do
  if [ -f "$f" ]; then
    echo "✅ $f present"
  else
    echo "❌ Missing $f"
    FAIL=true
  fi
done

# ---- Rapport ------------------------------------------------
echo "------------------------------------------------------------"
if [ "$FAIL" = true ]; then
  echo "❌ Backend QA FAILED at $(date '+%H:%M:%S')"
else
  echo "✅ Backend QA PASSED successfully at $(date '+%H:%M:%S')"
fi
echo "------------------------------------------------------------"

# ---- Discord Reporting (optional) ----------------------------
if [ -n "$DISCORD_WEBHOOK" ]; then
  STATUS_COLOR=65280  # vert
  STATUS_TEXT="✅ Backend QA Passed"

  if [ "$FAIL" = true ]; then
    STATUS_COLOR=16711680  # rouge
    STATUS_TEXT="❌ Backend QA Failed"
  fi

  payload=$(jq -n \
    --arg title "Sheet2Scene Backend QA" \
    --arg desc "$STATUS_TEXT at $(date '+%Y-%m-%d %H:%M:%S')" \
    --argjson color $STATUS_COLOR \
    '{embeds: [{title: $title, description: $desc, color: $color}]}')

  curl -s -H "Content-Type: application/json" \
    -d "$payload" "$DISCORD_WEBHOOK" >/dev/null
fi
