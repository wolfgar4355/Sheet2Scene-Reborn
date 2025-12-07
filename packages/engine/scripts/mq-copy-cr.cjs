// packages/engine/scripts/mq-copy-cr.cjs

const fs = require("fs");
const path = require("path");

// Racine du workspace "engine"
const ROOT = path.join(__dirname, "..");

// Dossier source = tes fichiers originaux Fantasy
const SRC = path.join(
  ROOT,
  "src/content/fantasy/bestiary/sources/cr"
);

// Dossier cible = copie de test, NE REMPLACE RIEN
const DEST = path.join(
  ROOT,
  "src/data/mithril-quest/bestiary/sources/cr-auto"
);

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyDir(srcDir, destDir) {
  ensureDir(destDir);

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith(".ts")) {
      const raw = fs.readFileSync(srcPath, "utf8");

      // 🔹 Normalisation ultra-minimale (pas de magie bizarre)
      const normalized = raw.replace(/\r\n/g, "\n");

      fs.writeFileSync(destPath, normalized, "utf8");
      console.log("✅ Copié:", path.relative(ROOT, destPath));
    }
  }
}

console.log("🚀 mq-copy-cr.cjs – copie SAFE en cours…");
console.log("   SRC :", path.relative(ROOT, SRC));
console.log("   DEST:", path.relative(ROOT, DEST));

copyDir(SRC, DEST);

console.log("✨ Terminé sans toucher aux fichiers originaux.");
