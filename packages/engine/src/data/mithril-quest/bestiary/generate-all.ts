// @ts-nocheck
/**
 * generate-all.ts — Reconstruit automatiquement ALL_MONSTERS.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Monster } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dossier contenant tes fichiers sources
const SOURCES_DIR = path.join(__dirname, "sources");

// destination du ALL_MONSTERS.ts final
const OUTPUT_FILE = path.join(__dirname, "ALL_MONSTERS.ts");

// lecture recursive du dossier sources
function loadSources(): Monster[] {
  const files = fs.readdirSync(SOURCES_DIR);

  const monsters: Monster[] = [];

  for (const file of files) {
    if (!file.endsWith(".ts")) continue;

    const fullPath = path.join(SOURCES_DIR, file);

    // import dynamique ESM
    const module = require(fullPath);

    const data = module.default ?? module.MONSTERS ?? module.monsters;

    if (!data) {
      console.warn(`⚠️ Avertissement: fichier ${file} ne contient aucun export valide.`);
      continue;
    }

    monsters.push(...data);
  }

  return monsters;
}

// Génération du fichier final avec horodatage
function generateFile(monsters: Monster[]) {
  const content =
`// AUTO-GENERATED — DO NOT EDIT
// Generated on: ${new Date().toISOString()}

import type { Monster } from "./types";

export const ALL_MONSTERS: Monster[] = ${JSON.stringify(monsters, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, content, "utf-8");
  console.log(`✅ ALL_MONSTERS.ts généré (${monsters.length} monstres)`);
}

// MAIN
const monsters = loadSources();
generateFile(monsters);
