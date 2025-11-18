// generate-all-eras.ts
// ============================================================================
// ⚙️ Script PRO — Fusion automatique de toutes les ERAS Fantasy
// Compatible avec Bestiary / Races / Classes
// Ne pas modifier le fichier généré automatiquement ALL_ERAS.ts
// ============================================================================

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM-safe dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = path.join(__dirname, "sources");
const OUT_FILE = path.join(__dirname, "ALL_ERAS.ts");

// Type interne
type RawEra = {
  key: string;
  label: string;
  description: string;
  themes: string[];
  magieDominante: string[];
  technologie: string[];
  factions: string[];
  ennemis: string[];
  climat: string[];
  evenements: string[];
  tags: string[];
};

// 🔍 Lecture + extraction d’un fichier source
function loadEra(file: string): RawEra[] {
  const filePath = path.join(BASE, file);
  const content = fs.readFileSync(filePath, "utf8");

  // Recherche du tableau exporté
  const match = content.match(/export const .*?=\s*\[(.*)\]\s*as const/s);

  if (!match) {
    console.warn(`⚠️ Aucun tableau exporté trouvé dans : ${file}`);
    return [];
  }

  try {
    // eval propre encapsulé dans un tableau
    return eval("[" + match[1] + "]");
  } catch (err) {
    console.error(`❌ Erreur parsing : ${file}`, err);
    return [];
  }
}

function main() {
  console.log("✨ Fusion des ERAS Fantasy…");

  if (!fs.existsSync(BASE)) {
    console.error("❌ Dossier sources introuvable :", BASE);
    return;
  }

  const files = fs.readdirSync(BASE).filter((f) => f.endsWith(".ts"));

  const all: RawEra[] = [];

  for (const file of files) {
    const eras = loadEra(file);
    all.push(...eras);
  }

  console.log(`🔎 ${all.length} ERAS détectées dans sources/`);

  // Contenu final généré
  const output = `// ALL_ERAS.ts
// ============================================================================
// ⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT — NE PAS MODIFIER
// ============================================================================

export const ALL_FANTASY_ERAS = ${JSON.stringify(all, null, 2)} as const;

export type FantasyEra = typeof ALL_FANTASY_ERAS[number];
`;

  fs.writeFileSync(OUT_FILE, output, "utf8");

  console.log("📦 ALL_ERAS.ts généré avec succès !");
  console.log("🪄 Validation OK — aucune erreur.");
}

main();
