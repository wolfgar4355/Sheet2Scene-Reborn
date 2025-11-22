#!/usr/bin/env bash
set -e

echo ""
echo "=============================="
echo " AAA v3 – CLEANUP AUTOMATIQUE "
echo "=============================="
echo ""

ROOT=$(pwd)
WEB="$ROOT/apps/web"

# Vérifier si apps/web existe
if [ ! -d "$WEB" ]; then
  echo "❌ Erreur : apps/web introuvable."
  exit 1
fi

echo "📁 Web app détectée : $WEB"
echo ""

# --- 1. Dossiers cibles ---
mkdir -p "$WEB/components"
mkdir -p "$WEB/lib"
mkdir -p "$WEB/utils"

# --- 2. Fichiers TSX à déplacer ---
FILES_TSX=(
  "GrimoireFrame.tsx"
  "SceneController.tsx"
  "TransitionLayer.tsx"
)

echo "📦 Déplacement des composants TSX…"

for file in "${FILES_TSX[@]}"; do
  if [ -f "$ROOT/$file" ]; then
    echo "➡️  Déplace : $file → apps/web/components/"
    mv "$ROOT/$file" "$WEB/components/$file"
  else
    echo "⚪ $file — absent, ok."
  fi
done

# --- 3. Fichiers utilitaires (TS) ---
FILES_TS=(
  "ambient.ts"
)

echo ""
echo "📦 Déplacement des utilitaires TS…"

for file in "${FILES_TS[@]}"; do
  if [ -f "$ROOT/$file" ]; then
    echo "➡️  Déplace : $file → apps/web/lib/"
    mv "$ROOT/$file" "$WEB/lib/$file"
  else
    echo "⚪ $file — absent, ok."
  fi
done

# --- 4. Correction automatique des imports ---
echo ""
echo "🔧 Correction automatique des imports…"

# remplace: import X from "../SceneController"
# par:      import X from "@/components/SceneController"

find "$WEB" -type f -name "*.tsx" -o -name "*.ts" | while read f; do
  sed -i \
    -e 's|\.\./SceneController|@/components/SceneController|g' \
    -e 's|\.\./GrimoireFrame|@/components/GrimoireFrame|g' \
    -e 's|\.\./TransitionLayer|@/components/TransitionLayer|g' \
    -e 's|\.\./ambient|@/lib/ambient|g' \
    "$f"
done

# --- 5. Nettoyage imports relatifs cassés ---
echo ""
echo "🧹 Nettoyage des imports relatifs cassés…"

find "$WEB" -type f -name "*.tsx" -o -name "*.ts" | while read f; do
  sed -i 's|from ""|from "@/components"|g' "$f"
done

# --- 6. Résumé ---
echo ""
echo "=============================="
echo "     ✔ CLEANUP TERMINÉ        "
echo "=============================="
echo ""
echo "📌 Fichiers déplacés dans apps/web"
echo "📌 Imports corrigés automatiquement"
echo "📌 Structure monorepo maintenant propre"
echo ""
echo "Tu peux maintenant relancer :"
echo "  npm run dev"
echo ""
