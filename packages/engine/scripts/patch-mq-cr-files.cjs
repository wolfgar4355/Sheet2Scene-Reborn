// patch-mq-cr-files.cjs
const fs = require("fs");
const path = require("path");

// ADAPTE ici pour pointer vers TON dossier réel
const CR_DIR = path.resolve(
  __dirname,
  "../src/data/mithril-quest/bestiary/sources/cr"
);

console.log("📂 Dossier CR:", CR_DIR);

// Vérifie si le dossier existe
if (!fs.existsSync(CR_DIR)) {
  console.error("❌ CR_DIR introuvable :", CR_DIR);
  process.exit(1);
}

// Patch pour chaque fichier
const files = fs.readdirSync(CR_DIR).filter(f => f.endsWith(".ts"));

for (const file of files) {
  const full = path.join(CR_DIR, file);
  console.log("➡️ Patch", file);

  let content = fs.readFileSync(full, "utf8");

  // Remplacement du mauvais import
  content = content.replace(
    /@s2s\/fantasy\/types/g,
    "@engine/data/mithril-quest/_schema/types"
  );

  fs.writeFileSync(full, content, "utf8");
}

console.log("✅ Patch terminé");
