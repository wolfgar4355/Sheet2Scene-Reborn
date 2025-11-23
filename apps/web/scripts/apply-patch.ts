// scripts/apply-patch.ts
// Auto-fix des anciens imports vers les nouveaux alias Webpack

import fs from "fs";
import path from "path";

// On lance le script depuis apps/web
const WEB_DIR = process.cwd();
const EXTS = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"];

console.log("🌐 WEB_DIR:", WEB_DIR);

// ===============================
// Paires [regexp, replacement]
// ===============================
const REWRITES: [RegExp, string][] = [
  // === AAA Fantasy vers alias ===
  [/from\s+["']lib\/s2s\/fantasy["']/g, 'from "@fantasy"'],
  [/from\s+["']lib\/s2s\/fantasy\/bestiary["']/g, 'from "@bestiary"'],
  [/from\s+["']lib\/s2s\/fantasy\/spells["']/g, 'from "@spells"'],
  [/from\s+["']lib\/s2s\/fantasy\/eras["']/g, 'from "@eras"'],
  [/from\s+["']lib\/s2s\/fantasy\/worlds["']/g, 'from "@worlds-content"'],

  // === Ancien moteur s2s ===
  [/from\s+["']lib\/s2s\/engine["']/g, 'from "@engine"'],

  // === Utils IA / ambient / discord ===
  [/from\s+["']lib\/ai["']/g, 'from "@engine/utils/ai"'],
  [/from\s+["']lib\/ambient["']/g, 'from "@engine/ambient"'],
  [/from\s+["']lib\/discord["']/g, 'from "@engine/utils/discord"'],

  // === Ancien grimoire local ===
  [/from\s+["']lib\/grimoire["']/g, 'from "@lib/grimoire"'],
];

// Dossiers à ignorer
const IGNORE_DIRS = new Set<string>([
  "node_modules",
  ".next",
  ".git",
  "public",
]);

function shouldProcessFile(file: string): boolean {
  return EXTS.some((ext) => file.endsWith(ext));
}

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) {
        walk(full, files);
      }
    } else if (entry.isFile() && shouldProcessFile(full)) {
      files.push(full);
    }
  }
  return files;
}

function applyRewrites(content: string): { changed: boolean; result: string } {
  let changed = false;
  let result = content;

  for (const [regex, replacement] of REWRITES) {
    if (regex.test(result)) {
      result = result.replace(regex, replacement);
      changed = true;
    }
  }

  return { changed, result };
}

function main() {
  console.log("🛠️ Running patch...");

  const files = walk(WEB_DIR);
  console.log(`📄 Fichiers à scanner: ${files.length}`);

  let patchedCount = 0;

  for (const file of files) {
    const src = fs.readFileSync(file, "utf8");
    const { changed, result } = applyRewrites(src);

    if (changed) {
      fs.writeFileSync(file, result, "utf8");
      patchedCount++;
      console.log("✅ Patched:", path.relative(WEB_DIR, file));
    }
  }

  console.log(`🎉 Terminé. Fichiers modifiés: ${patchedCount}`);
}

try {
  main();
} catch (err) {
  console.error("❌ Patch error:", err);
  process.exit(1);
}
