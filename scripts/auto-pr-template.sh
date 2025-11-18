#!/bin/bash
# 🚀 Auto PR Template Generator + Vérification des assets Sheet2Scene

TEMPLATE=".github/PULL_REQUEST_TEMPLATE.md"
TMP_FILE="/tmp/pr_template_tmp.md"

echo "🧩 Vérification automatique des assets visuels..."
if bash ./scripts/check-assets-names.sh; then
  echo "✅ Nommage des assets conforme."
else
  echo "❌ Erreurs détectées dans le nommage des assets !"
  echo "🛑 Interruption de la génération du template PR."
  exit 1
fi

# --- Section génération PR ---
echo "🪶 Génération automatique de la section 'Changements principaux' dans le template PR"

CHANGED_FILES=$(git diff --name-only HEAD~1)
if [ -z "$CHANGED_FILES" ]; then
  echo "Aucun fichier modifié depuis le dernier commit."
  exit 0
fi

cp "$TEMPLATE" "$TMP_FILE"

awk -v files="$CHANGED_FILES" '
/## 📜 Changements principaux/ {
  print;
  print "\n### Fichiers modifiés :\n";
  n = split(files, f, "\n");
  for (i = 1; i <= n; i++) print "- " f[i];
  next
}
{ print }
' "$TMP_FILE" > "$TEMPLATE"

echo "✅ Fichiers modifiés ajoutés dans $TEMPLATE"
