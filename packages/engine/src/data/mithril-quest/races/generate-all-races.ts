// @ts-nocheck
/**********************************************************************
 * Script MQ — Génération automatique de TOUTES les races MQ
 * Version robuste : plus de regex, plus de eval()
 **********************************************************************/

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "sources");
const OUT_FILE = path.join(__dirname, "ALL_RACES.ts");

export type RawRace = {
  key: string;
  label: string;
  description: string;
  traits: string[];
};

async function loadRaces(): Promise<RawRace[]> {
  if (!fs.existsSync(SRC_DIR)) {
    console.error("❌ Répertoire /sources introuvable !");
    return [];
  }

const files = fs.readdirSync(SRC_DIR)
  .filter(f => f.endsWith(".ts") && f !== "index.ts");
  const results: RawRace[] = [];

  for (const file of files) {
    const fullPath = path.join(SRC_DIR, file);
    const moduleUrl = pathToFileURL(fullPath).href;

    try {
      // Import dynamique ESM fiable à 100%
      const mod = await import(moduleUrl);

      const raceKey = Object.keys(mod).find(k => k.startsWith("MQ_RACES_"));
      if (!raceKey) {
        console.warn(`⚠ Aucun tableau MQ_RACES_* trouvé dans: ${file}`);
        continue;
      }

      console.log(`🟢 MQ_RACES détecté dans: ${file}`);
      results.push(...mod[raceKey]);
    } catch (err) {
      console.error(`❌ ERREUR dans ${file}:`, err);
    }
  }

  return results;
}

function validateRaces(races: RawRace[]) {
  const errors: string[] = [];

  for (const r of races) {
    if (!r.key) errors.push(`Race sans key (${r.label})`);
    if (!r.label) errors.push(`Race sans label (${r.key})`);
    if (!r.description) errors.push(`Race sans description (${r.key})`);
    if (!Array.isArray(r.traits)) errors.push(`Traits invalides (${r.key})`);
  }

  return errors;
}

function writeOutput(races: RawRace[]) {
  const content =
    "/** Fichier généré automatiquement — NE PAS MODIFIER ! */\n\n" +
    `export const ALL_FANTASY_RACES = ${JSON.stringify(races, null, 2)} as const;\n\n` +
    `export type FantasyRace = (typeof ALL_FANTASY_RACES)[number];\n`;

  fs.writeFileSync(OUT_FILE, content, "utf8");
  console.log("🎉 ALL_RACES.ts généré !");
}

async function main() {
  console.log("🔎 Chargement des races MQ…");

  const races = await loadRaces();

  console.log(`📦 ${races.length} races détectées.`);

  const errors = validateRaces(races);
  if (errors.length > 0) {
    console.error("❌ Erreurs détectées:");
    errors.forEach(e => console.error(" - " + e));
    return;
  }

  console.log("✅ Validation OK");

  writeOutput(races);
}

main();
