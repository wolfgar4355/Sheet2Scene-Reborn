// fantasy-to-mq.cjs
// ---------------------------------------------------------
// PATCH UNIQUE : Migration Fantasy -> Mithril-Quest v2
// ---------------------------------------------------------

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const FANTASY_DIR = path.join(ROOT, "src/content/fantasy");
const MQ_DIR = path.join(ROOT, "src/data/mithril-quest");

// ---------------------------------------------------------
// UTILITAIRES
// ---------------------------------------------------------
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function log(msg) {
  console.log("  • " + msg);
}

// ---------------------------------------------------------
// DÉTECTION DU TYPE DE FICHIER (monstre, sorts, item, etc.)
// ---------------------------------------------------------
function detectCategory(filepath) {
  const parts = filepath.split(path.sep);

  if (parts.includes("bestiary")) return "monster";
  if (parts.includes("items")) return "item";
  if (parts.includes("spells")) return "spell";
  if (parts.includes("classes")) return "class";
  if (parts.includes("races")) return "race";
  if (parts.includes("habitats")) return "habitat";
  if (parts.includes("tags")) return "tag";
  if (parts.includes("rituals")) return "ritual";

  return "unknown";
}

// ---------------------------------------------------------
// CONVERSION GENERIQUE
// ---------------------------------------------------------
function convertContent(raw, category) {
  // Conversion minimale + complète si stats/role déjà présents  
  // Auto-détection des champs
  let payload = raw;

  // Convertit export const MONSTERS en MQ
  payload = payload.replace(/export const .*?=/, "export const DATA =");

  // Convertit GmeMonster → MQMonster
  payload = payload.replace(/GmeMonster/g, "MQMonster");

  // Ajoute ref.source = 'converted'
  payload = payload.replace(/ref:\s*{/, "ref: { source: 'converted', ");

  return payload;
}

// ---------------------------------------------------------
// PATCH PRINCIPAL
// ---------------------------------------------------------
function processDirectory(dir, base = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name);

    if (entry.isDirectory()) {
      processDirectory(full, rel);
      continue;
    }

    if (!entry.name.endsWith(".ts")) continue;
    if (entry.name === "index.ts") continue; // on ignore

    const category = detectCategory(rel);

    log(`Patch du fichier ${rel}  →  type: ${category}`);

    const raw = fs.readFileSync(full, "utf8");
    const converted = convertContent(raw, category);

    // PATH DE DESTINATION
    const dest = path.join(MQ_DIR, "fantasy-import", rel);
    ensureDir(path.dirname(dest));

    fs.writeFileSync(dest, converted, "utf8");
  }
}

// ---------------------------------------------------------
// DÉBUT DU PATCH
// ---------------------------------------------------------
console.log("----------------------------------------------------");
console.log("PATCH UNIQUE : Migration complète Fantasy -> MQ v2");
console.log("Source :", FANTASY_DIR);
console.log("Destination :", MQ_DIR);
console.log("----------------------------------------------------");

if (!fs.existsSync(FANTASY_DIR)) {
  console.error("❌ ERREUR : Le dossier fantasy n'existe pas.");
  process.exit(1);
}

processDirectory(FANTASY_DIR);

console.log("----------------------------------------------------");
console.log("✔️ Patch terminé !");
console.log("Tous les fichiers Fantasy convertis dans :");
console.log("  → src/data/mithril-quest/fantasy-import/");
console.log("----------------------------------------------------");
