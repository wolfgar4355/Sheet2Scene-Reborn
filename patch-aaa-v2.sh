#!/usr/bin/env bash
set -euo pipefail

echo "=== 🧙 Patch AAA v2 – Ambient alias fix ==="

# Vérification rapide
if [ ! -f apps/web/next.config.mjs ]; then
  echo "❌ apps/web/next.config.mjs introuvable."
  echo "   Lance ce script depuis la racine du repo (dossier sheet2scene)."
  exit 1
fi

echo "-> Backup de apps/web/next.config.mjs"
cp apps/web/next.config.mjs apps/web/next.config.mjs.aaa-v2.bak

echo "-> Normalisation de l'alias @ambient (suppression du .ts)..."

# Cas 1 : chemin en double quotes
sed -i \
  's|@ambient":[[:space:]]*r("../../packages/engine/src/ambient.config.ts")|@ambient": r("../../packages/engine/src/ambient.config")|g' \
  apps/web/next.config.mjs

# Cas 2 : chemin en simple quotes (au cas où)
sed -i \
  "s|@ambient\":[[:space:]]*r('../../packages/engine/src/ambient.config.ts')|@ambient\": r('../../packages/engine/src/ambient.config')|g" \
  apps/web/next.config.mjs

echo
if grep -n "@ambient" apps/web/next.config.mjs; then
  echo "✅ Alias @ambient trouvé et normalisé."
else
  echo "⚠️ Attention : aucune occurrence de @ambient trouvée dans next.config.mjs."
  echo "   Le patch n'a rien modifié, vérifie le fichier manuellement."
fi

echo
echo "=== ✅ Patch AAA v2 appliqué."
echo "Prochaine étape :"
echo "  git add ."
echo "  git commit -m \"AAA v2 ambient alias fix\""
echo "  git push"
echo "Puis relance le déploiement sur Vercel."
