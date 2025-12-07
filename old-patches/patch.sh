#!/bin/bash
set -e

echo "=== 🔧 Patch AAA – Mithril Engine Unification ==="

### 1. --- Nettoyage des anciens alias ---
echo "> Removing legacy aliases..."
rm -f apps/web/next.config.mjs.bak || true
cp apps/web/next.config.mjs apps/web/next.config.mjs.bak

### 2. --- Nouveau next.config.mjs AAA ---
echo "> Rewriting next.config.mjs..."

cat > apps/web/next.config.mjs << 'EOF'
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const r = p => path.resolve(__dirname, p);

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,

      // ===== App =====
      "@": r("app"),
      "@config": r("config"),
      "@components": r("components"),
      "@utils": r("utils"),

      // ===== Mithril Engine (AAA) =====
      "@engine": r("../packages/engine/src"),
      "@engine/content": r("../packages/engine/src/content"),
      "@engine/types": r("../packages/engine/src/types"),
      "@engine/ambient": r("../packages/engine/src/ambient.config.ts"),

      // ===== RPG =====
      "@fantasy": r("lib/s2s/fantasy"),
      "@bestiary": r("lib/s2s/fantasy/bestiary"),

      // ===== Mithril (UI + Rendering) =====
      "@mithril": r("lib/mithril"),
      "@mithril/hooks": r("lib/mithril/hooks"),

      // ===== Grimoire =====
      "@grimoire": r("lib/grimoire"),

      // ===== Shared =====
      "@lib": r("lib"),
    };

    return config;
  },
};

export default nextConfig;

console.log("🔨 Building commit:", process.env.VERCEL_GIT_COMMIT_SHA || "local");
EOF


### 3. --- Correction des imports @ambient partout ---
echo "> Fixing @ambient imports in lib/mithril..."

grep -Rl "@ambient" lib/mithril | while read file; do
  echo "  - Fixing $file"
  sed -i 's|@ambient|@engine/ambient|' "$file"
done

### 4. --- Correction des imports @content, @types, etc. ---
echo "> Fixing @content, @types, @engineTypes, etc. in apps/web..."

grep -Rl "@content" apps/web | while read file; do
  echo "  - Fixing $file"
  sed -i 's|@content|@engine/content|' "$file"
done

grep -Rl "@types/worlds" apps/web | while read file; do
  echo "  - Fixing $file"
  sed -i 's|@types|@engine/types|' "$file"
done

### 5. --- Correction getWorlds(), getErasForWorld() ---
echo "> Ensuring engine export structure is valid..."

cat > packages/engine/src/index.ts << 'EOF'
export * from "./getWorlds";
export * from "./content/worlds";
export * from "./types/worlds";
export * from "./ambient.config";
EOF


### 6. --- Vérification fichier clé getWorlds.ts ---
echo "> Rewriting getWorlds.ts..."

cat > packages/engine/src/getWorlds.ts << 'EOF'
import worlds from "./content/worlds";

export function getWorlds() {
  return worlds;
}

export function getErasForWorld(worldId: string) {
  const world = worlds.find(w => w.id === worldId);
  return world ? world.eras : [];
}
EOF

echo "=== ✔ Patch AAA applied successfully ==="
echo "Tu peux maintenant : git add . && git commit -m 'AAA patch' && git push"
