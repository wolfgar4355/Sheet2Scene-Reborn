#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOUNDS_DIR="$ROOT_DIR/apps/web/public/sounds"
RAW_DIR="$SOUNDS_DIR/raw"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Erreur: ffmpeg n'est pas installé." >&2
  exit 1
fi

echo "➡  Construction des SFX depuis $RAW_DIR"

# 1) Normalisation & export en .wav clean 16-bit 44.1k (optionnel)
find "$RAW_DIR" -type f -name "*.wav" | while read -r src; do
  rel="${src#$RAW_DIR/}"                 # ex: thunder/thunder_far_01.wav
  out_wav="$SOUNDS_DIR/${rel}"

  mkdir -p "$(dirname "$out_wav")"

  echo "  • Normalise $rel"
  ffmpeg -y -i "$src" -sample_fmt s16 -ar 44100 -af "loudnorm" "$out_wav"
done

# 2) Génère MP3 + OGG pour chaque WAV
find "$SOUNDS_DIR" -type f -name "*.wav" ! -path "*/raw/*" | while read -r wav; do
  base="${wav%.wav}"
  mp3="${base}.mp3"
  ogg="${base}.ogg"

  echo "  • Encode $(basename "$wav") -> mp3/ogg"
  ffmpeg -y -i "$wav" -codec:a libmp3lame -qscale:a 2 "$mp3"
  ffmpeg -y -i "$wav" -codec:a libvorbis -qscale:a 5 "$ogg"
done

echo "✅ SFX pack construit."
