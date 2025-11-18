#!/usr/bin/env bash

echo "🧙‍♂️ Sheet2Scene — Bestiary Canonical Standardizer"
echo "--------------------------------------------------"

ROOT="apps/web"
CANON_PATH="apps/web/lib/s2s/fantasy/bestiary/types.ts"
BACKUP_DIR="scripts/bestiary-backups"

mkdir -p "$BACKUP_DIR"

echo "📁 Canonical types: $CANON_PATH"
echo "📦 Backup directory: $BACKUP_DIR"
echo ""

###########################################
# 🔍 1. Identify all files referencing old types
###########################################
echo "🔍 Scanning project for outdated bestiary types..."

FILES=$(grep -RIl \
  -e "CreatureSize" \
  -e "CreatureType" \
  -e "StatBlock" \
  -e "AttackAction" \
  -e "MonsterDefinition" \
  -e "Trait" \
  $ROOT | grep -v "lib/s2s/fantasy/bestiary")

echo "$FILES" | sed 's/^/• /'
echo ""

###########################################
# 🛡️ 2. Process each file
###########################################
for FILE in $FILES; do
  echo "📝 Fixing: $FILE"

  # Backup
  cp "$FILE" "$BACKUP_DIR/$(basename $FILE).bak"

  # Remove ALL legacy imports
  sed -i \
    -e 's|from .*bestiary.*|from "apps/web/lib/s2s/fantasy/bestiary/types"|g' \
    -e 's|from .*UNIVERSAL.*|from "apps/web/lib/s2s/fantasy/bestiary/types"|g' \
    "$FILE"

  # Remove named imports duplicates (e.g., { CreatureType as X })
  sed -i \
    -e 's/as [A-Za-z_]\+//g' \
    "$FILE"

  # Replace remaining possible broken paths
  sed -i \
    -e 's|\.\./\.\./types|apps/web/lib/s2s/fantasy/bestiary/types|g' \
    -e 's|\.\./types|apps/web/lib/s2s/fantasy/bestiary/types|g' \
    "$FILE"

  echo "   ✔ Imports unified"
done

###########################################
# 🧹 3. Cleanup folder structure
###########################################
echo ""
echo "🧹 Checking for legacy bestiary folders..."

find $ROOT -type d -iname "*bestiary*" | grep -v "lib/s2s/fantasy/bestiary"

echo ""
echo "🚮 You may manually remove folders that are NOT:"
echo "    → apps/web/lib/s2s/fantasy/bestiary"
echo ""

###########################################
# 🎉 4. Summary
###########################################
echo "--------------------------------------------------"
echo "✨ Bestiary standardization complete!"
echo "✨ Backups saved in: $BACKUP_DIR"
echo "--------------------------------------------------"
