/**
 * generate-all.ts
 * Fusionne automatiquement tout le bestiaire Fantasy.
 */

import fs from "fs";
import path from "path";

// Racine du dossier bestiary
const BASE = path.join(process.cwd(), "apps/web/lib/s2s/fantasy/bestiary");

// Dossiers sources
// IMPORTANT — Ces noms correspondent EXACTEMENT à ton arborescence.
const SOURCE_DIRS = [
  "sources/boss.ts",
  "sources/categories.ts",
  "sources/encounters.ts",
  "sources/minions",
  "sources/mystic",
  "sources/filters/biomes",
  "sources/filters/categories",
  "sources/filters/encounters",
  "sources/filters/types",
  "sources/cr"
];

// Lecture d’un fichier .ts qui contient une export const X = [...]
function loadTSArray(filePath: string) {
  const content = fs.readFileSync(filePath, "utf-8");

  // Trouver : export const ??? = [...]
  const match = content.match(/export const .*?=\s*(\[.*\]);/s);
  if (!match) return [];

  try {
    return eval(match[1]); // on parse le tableau
  } catch (e) {
    console.error("❌ Erreur parsing:", filePath, e);
    return [];
  }
}

// Récupère tous les monstres d’un dossier ou sous-dossier
function loadFromFolder(relPath: string) {
  const full = path.join(BASE, relPath);

  if (!fs.existsSync(full)) return [];

  const stats: any[] = [];

  if (fs.statSync(full).isFile()) {
    // fichier .ts
    return loadTSArray(full);
  }

  // dossier
  for (const file of fs.readdirSync(full)) {
    if (file.endsWith(".ts") && !file.startsWith("index")) {
      stats.push(...loadTSArray(path.join(full, file)));
    }
  }

  return stats;
}

// 1. Charger tout
let ALL: any[] = [];

for (const entry of SOURCE_DIRS) {
  ALL.push(...loadFromFolder(entry));
}

// 2. Nettoyage et valeurs par défaut
ALL = ALL.map((m, i) => ({
  id: m.id ?? `monster_${i}`,
  name: m.name ?? "Unknown",
  cr: m.cr ?? 0,
  category: m.category ?? "unknown",
  biome: m.biome ?? "any",
  type: m.type ?? "normal",
  hp: m.hp ?? 1,
  abilities: m.abilities ?? [],
  notes: m.notes ?? "",
}));

// 3. Trie final par CR
ALL.sort((a, b) => a.cr - b.cr);

// 4. Export final
const output =
  `// AUTO-GENERATED — DO NOT EDIT\n` +
  `// Generated on: ${new Date().toISOString()}\n\n` +
  `import type { Monster } from "@engine/content/fantasy/types";\n\n` +
  `export const ALL_MONSTERS: Monster[] = ${JSON.stringify(ALL, null, 2)};\n`;

fs.writeFileSync(path.join(BASE, "ALL_MONSTERS.ts"), output);

console.log("🔥 Bestiaire Fantasy reconstruit !");
console.log(`📦 ${ALL.length} créatures fusionnées.`);
console.log("📁 Fichier généré : ALL_MONSTERS.ts");
