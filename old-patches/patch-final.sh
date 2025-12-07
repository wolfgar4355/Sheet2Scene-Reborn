#!/bin/bash
echo "=== [ENGINE-PATCH-FINAL] Démarrage ==="

# 1. Nettoyage du moteur
echo "Nettoyage des artefacts..."
rm -rf packages/engine/dist
rm -rf packages/engine/src/data/mithril-quest/mithril-quest

# 2. Copie du contenu corrigé
echo "Copie du contenu fantasy-import vers mithril-quest..."
cp -R packages/engine/src/data/mithril-quest/fantasy-import/* packages/engine/src/data/mithril-quest/

# 3. Correction des imports
echo "Remplacement automatique des anciens imports..."
find packages/engine/src -type f -name "*.ts" -exec sed -i \
  -e 's#\.\./content/fantasy#\.\./data/mithril-quest#g' \
  -e 's#@content/fantasy#@data/mithril-quest#g' {} +

# 4. Vérification des types
echo "Mise à jour tsconfig pour ignorer ancien système..."
sed -i '/content\/fantasy/d' packages/engine/tsconfig.json

# 5. Build test
echo "Lancement du build de test..."
npm run build:engine

echo "=== [ENGINE-PATCH-FINAL] Terminé ==="
