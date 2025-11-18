#!/bin/bash
# ============================================================
#  Script : check-assets-names.sh
#  Objectif : Vérifier la cohérence des noms d’assets visuels
#  Projet : Sheet2Scene (GodinVerse)
# ============================================================

echo "🔍 Vérification des conventions de nommage dans le dossier public..."

# Détermination automatique du dossier cible
if [ -d "apps/web/public" ]; then
  TARGET_DIR="apps/web/public"
elif [ -d "public" ]; then
  TARGET_DIR="public"
else
  echo "❌ Aucun dossier 'public' trouvé à cet emplacement."
  echo "💡 Conseil : exécute ce script depuis la racine du projet (~/s2s)"
  exit 1
fi

echo "📁 Dossier détecté : $TARGET_DIR"

# Préfixes autorisés
ALLOWED_PREFIXES="\(bg-\|ui-\|fx-\|sound-\|ambience-\|video-\|font-\|icon-\)"
INVALID_FILES=$(find "$TARGET_DIR" -type f ! -regex ".*/${ALLOWED_PREFIXES}.*")

# Résultats
if [ -n "$INVALID_FILES" ]; then
  echo -e "\n❌ Fichiers non conformes détectés :\n"
  echo "$INVALID_FILES"
  echo -e "\n🛠️  Veuillez renommer ces fichiers selon la nomenclature d’assets."
  echo -e "   Exemples : bg-hall.webp, fx-rune-burst.mp3, icon-rune.svg\n"
  exit 1
else
  echo -e "\n✅ Tous les fichiers respectent les conventions de nommage.\n"
  exit 0
fi
