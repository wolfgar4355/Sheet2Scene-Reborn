#!/bin/bash
echo "=== AAA v3 – Ambient Full Migration ==="

echo "> Creating ambient folder..."
mkdir -p packages/engine/src/ambient

echo "> Moving ambient files into engine..."
mv apps/web/lib/ambient/* packages/engine/src/ambient/ 2>/dev/null
mv apps/web/lib/ambient.ts packages/engine/src/ambient/ 2>/dev/null
mv apps/web/config/ambient.config.ts packages/engine/src/ambient/ 2>/dev/null

echo "> Fixing @ambient imports in engine..."
grep -Rl "@ambient" packages/engine/src | while read f; do
  sed -i 's|@ambient.*"|@ambient"|' "$f"
done

echo "> Updating next.config alias..."
sed -i 's|@ambient.*|@ambient": r("../../packages/engine/src/ambient"),|' apps/web/next.config.mjs

echo "=== Patch AAA v3 appliqué ==="
echo "➡️  git add ."
echo "➡️  git commit -m \"AAA v3 ambient migration\""
echo "➡️  git push"
