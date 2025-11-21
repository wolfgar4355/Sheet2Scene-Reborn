#!/bin/bash

echo "🚀 AAA v2 Cleanup – Démarrage..."

# Corrige tous les anciens imports @lib/mithril
echo "➡️ Correction imports @lib/mithril → @mithril/"
grep -Rl "@lib/mithril" packages/engine/src | xargs sed -i "s/@lib\/mithril/@mithril/g"

# Corrige les imports @engine/ambient → @mithril/ambient
echo "➡️ Correction imports @engine/ambient → @mithril/ambient"
grep -Rl "@engine/ambient" packages/engine/src | xargs sed -i "s/@engine\/ambient/@mithril\/ambient/g"

# Corrige @ambient legacy
echo "➡️ Correction imports @ambient → @mithril/ambient"
grep -Rl "@ambient" packages/engine/src | xargs sed -i "s/@ambient/@mithril\/ambient/g"

# Corrige @engineTypes legacy
echo "➡️ Correction imports @engineTypes → @engine/types"
grep -Rl "@engineTypes" packages/engine/src | xargs sed -i "s/@engineTypes/@engine\/types/g"

# Supprime les imports relatifs cassés pour mithril
echo "➡️ Correction imports relatifs './SceneController' → '@mithril/SceneController'"
grep -Rl "from \"\./SceneController" packages/engine/src | xargs sed -i "s/from \"\.\/SceneController\"/from \"@mithril\/SceneController\"/g"

# Purge tous les .DS_Store et prélèvements legacy
echo "🧹 Nettoyage fichiers parasites"
find . -name ".DS_Store" -type f -delete

echo "✔ Cleanup terminé"
echo "➡️ Faire un commit puis: pnpm build"
