#!/bin/bash

echo "🔎 Scan Sheet2Scene — bestiary duplicates"
echo "----------------------------------------"

# mots-clés des modules bestiary
KEYWORDS=(
  "CreatureSize"
  "CreatureType"
  "MonsterDefinition"
  "StatBlock"
  "AttackAction"
  "Trait"
)

SEARCH_DIR="."

echo "📁 Scanning directory: $SEARCH_DIR"
echo ""

for key in "${KEYWORDS[@]}"; do
  echo "🔍 Searching for: $key"
  grep -R --line-number "$key" "$SEARCH_DIR" | grep -v "node_modules" | grep -v "types.ts"
  echo ""
done

echo "📁 Searching for any folder named 'bestiary'"
find "$SEARCH_DIR" -type d -iname "*bestiary*" | grep -v "node_modules"
echo ""

echo "🚀 Scan complete."
