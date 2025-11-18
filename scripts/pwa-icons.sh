#!/usr/bin/env bash
set -euo pipefail

# Toujours exécuter depuis la racine du repo
cd "$(git rev-parse --show-toplevel)"

ICON_DIR="apps/web/public/icons"
IMG_DIR="apps/web/public/images"

# Candidats possibles pour la cover (ajoute-en si besoin)
CANDIDATES=(
  "$IMG_DIR/grimoire-cover.png"
  "$IMG_DIR/grimoire-cover.jpg"
  "$IMG_DIR/grimoire-cover.jpeg"
  "$IMG_DIR/grimoire-cover.webp"
  "$IMG_DIR/cover.png"
  "$IMG_DIR/cover.jpg"
)

mkdir -p "$ICON_DIR"

# 1) Trouver une source valide (ImageMagick rejettera les faux PNG)
SRC=""
for c in "${CANDIDATES[@]}"; do
  if [[ -f "$c" ]] && magick identify "$c" >/dev/null 2>&1; then
    SRC="$c"
    break
  fi
done

# 2) Générer les icônes
if [[ -n "$SRC" ]]; then
  echo "✔ Source image détectée: $SRC"
  magick "$SRC[0]" -resize 192x192^ -gravity center -extent 192x192 "$ICON_DIR/icon-192.png"
  magick "$SRC[0]" -resize 512x512^ -gravity center -extent 512x512 "$ICON_DIR/icon-512.png"
else
  echo "ℹ️ Aucune image valide trouvée → génération de placeholders"
  # Fond sombre + texte S2S (couleurs alignées avec ton manifest/layout)
  magick -size 192x192 canvas:none \
    -fill "#0b0b0b" -draw "rectangle 0,0 192,192" \
    -fill "#8b5e34" -gravity center -pointsize 72 -font DejaVu-Sans-Bold \
    -annotate 0 "S2S" "$ICON_DIR/icon-192.png"

  magick -size 512x512 canvas:none \
    -fill "#0b0b0b" -draw "rectangle 0,0 512,512" \
    -fill "#8b5e34" -gravity center -pointsize 200 -font DejaVu-Sans-Bold \
    -annotate 0 "S2S" "$ICON_DIR/icon-512.png"
fi

# 3) Vérification (doit afficher PNG 192x192 / PNG 512x512)
magick identify "$ICON_DIR/icon-192.png"
magick identify "$ICON_DIR/icon-512.png"

# 4) Commit auto si changement
if ! git diff --quiet -- "$ICON_DIR/icon-192.png" "$ICON_DIR/icon-512.png"; then
  git add "$ICON_DIR/icon-192.png" "$ICON_DIR/icon-512.png"
  git commit -m "pwa: generate/refresh PWA icons (192/512)"
  git push origin "$(git rev-parse --abbrev-ref HEAD)"
else
  echo "Icônes inchangées — aucun commit."
fi
