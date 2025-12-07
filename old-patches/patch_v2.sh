#!/bin/bash
set -e

echo "=== 🛠️ Patch AAA-v2 — Mithril Engine Full Migration ==="

# 1. Create engine mithril directory if missing
mkdir -p packages/engine/src/mithril

# 2. Move all mithril files from front → engine
if [ -d apps/web/lib/mithril ]; then
  echo "> Moving Mithril files into engine..."
  mv apps/web/lib/mithril/* packages/engine/src/mithril/
  rm -rf apps/web/lib/mithril
fi

# 3. Fix imports inside engine files
echo "> Fixing imports inside Mithril engine..."
for f in packages/engine/src/mithril/*; do
  sed -i 's|from "@ambient"|from "@engine/ambient"|' "$f"
  sed -i 's|from "@types"|from "@engine/types"|' "$f"
  sed -i 's|from "@/lib/mithril"|from "@engine/mithril"|' "$f"
done

# 4. Update engine index.ts exports
echo "> Updating engine exports..."
cat > packages/engine/src/mithril/index.ts <<EOF
export * from "./SceneController";
export * from "./TransitionLayer";
export * from "./engine";
EOF

# 5. Update NEXT aliases
echo "> Updating Next.js aliases..."
sed -i '/@mithril/d' apps/web/next.config.mjs
sed -i '/@ambient/d' apps/web/next.config.mjs

sed -i '/resolve.alias = {/a \
        "@mithril": r("../../packages/engine/src/mithril"),\
        "@ambient": r("../../packages/engine/src/ambient"),' apps/web/next.config.mjs

# 6. Update all React imports in app/
echo "> Fixing all imports in apps/web/app..."
grep -Rl '@ambient' apps/web/app | while read file; do
  sed -i 's|@ambient|@engine/ambient|g' "$file"
done

grep -Rl 'lib/mithril' apps/web/app | while read file; do
  sed -i 's|@/lib/mithril|@engine/mithril|g' "$file"
done

echo "=== ✅ AAA-v2 applied! ==="
echo "Run now:"
echo "git add . && git commit -m 'AAA-v2 engine migration' && git push"
