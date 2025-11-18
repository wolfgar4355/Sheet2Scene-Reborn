#!/bin/bash
echo "🧹 Nettoyage complet du cache Next.js / TS / Vite..."
rm -rf .next node_modules/.cache node_modules/.vite
npx tsc --build --clean
echo "🚀 Relancement du serveur dev..."
npm run dev
