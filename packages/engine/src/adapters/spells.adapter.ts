// spells.adapter.ts
import fs from "fs";
import path from "path";

export interface Spell {
  name: string;
  school: string;
  tier: string;
  type: string;
  tags?: string[];
  description?: string;
  [key: string]: any;
}

const SPELLS_DIR = path.join(
  process.cwd(),
  "content/fantasy/spells/sources"
);

function loadSpellFile(filePath: string): Spell[] {
  const data = require(filePath);
  // Chaque fichier exporte par défaut un tableau ou un objet => on normalise
  return Array.isArray(data) ? data : Object.values(data);
}

export function getAllSpells(): Spell[] {
  const spells: Spell[] = [];

  const files = fs.readdirSync(SPELLS_DIR);

  for (const file of files) {
    if (!file.endsWith(".ts") && !file.endsWith(".js")) continue;
    if (file === "index.ts" || file === "index.js") continue;

    const filePath = path.join(SPELLS_DIR, file);
    const loaded = loadSpellFile(filePath);
    spells.push(...loaded);
  }

  return spells;
}
