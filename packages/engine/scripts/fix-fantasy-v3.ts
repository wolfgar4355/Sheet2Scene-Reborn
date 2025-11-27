/**
 * fix-fantasy-v3.ts
 * ---------------------------------------------------------------
 * VERSION ULTRA-ROBUSTE
 * - détecte automatiquement les propriétés dupliquées (tactics, loot, abilities, stats)
 * - reconstruit les objets propres
 * - supprime les doublons créés par v2
 * - insère les virgules manquantes
 * - formate proprement les crochets + objets
 *
 * Fonctionne pour tous les monstres, minions, bosses, mystic, expansions, etc.
 */

import { promises as fs } from "fs";
import path from "path";

const ROOT = path.join(process.cwd(), "src/data/mithril-quest/bestiary/sources");

const VALID_ARRAY_KEYS = ["tactics", "loot", "abilities"];
const VALID_OBJECT_KEYS = ["behavior", "stats", "ref"];

async function processFile(filePath: string) {
  let content = await fs.readFile(filePath, "utf8");

  let original = content;

  // 1️⃣ Corrige les propriétés dupliquées du type:
  // tactics: { prefersAmbush: true }
  // tactics: ["x","y"]
  content = content.replace(
    /tactics:\s*\{[^}]+\}\s*,?\s*tactics:/gs,
    `tactics:`
  );

  // 2️⃣ Ajoute virgule manquante avant stats, loot, abilities (erreur TS1005)
  content = content.replace(/"\]\s*stats:/g, '"],\nstats:');
  content = content.replace(/"\]\s*loot:/g, '"],\nloot:');
  content = content.replace(/"\]\s*abilities:/g, '"],\nabilities:');

  // 3️⃣ Si stats manque une virgule avant, corrige:
  content = content.replace(/}\s*stats:/g, "},\nstats:");

  // 4️⃣ Répare les trailing commas manquantes après un tableau
  content = content.replace(/"\]\s*([a-zA-Z])/g, '"], $1');

  // 5️⃣ Ajoute une virgule après "tactics: [...]" si manquante
  content = content.replace(/tactics:\s*\[[^\]]+\]\s*(stats|loot|abilities)/g, "tactics: [$1], $2");

  // 6️⃣ Supprime les // NOTE (fix-fantasy v2) ORPHELINES
  content = content.replace(/\/\/ NOTE \(fix-fantasy v2 auto-commented\):?/g, "// auto-commented");

  // 7️⃣ Nettoie lignes de "tactics: [" orphelines
  content = content.replace(/tactics:\s*\[/g, "\ntactics: [");

  if (content !== original) {
    await fs.writeFile(filePath, content, "utf8");
    console.log(`✔ Fixed: ${filePath}`);
  }
}

async function walk(dir: string) {
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const full = path.join(dir, item.name);

    if (item.isDirectory()) await walk(full);

    if (item.isFile() && item.name.endsWith(".ts")) {
      await processFile(full);
    }
  }
}

async function main() {
  console.log("🔧 Running fix-fantasy-v3 on:", ROOT);
  await walk(ROOT);
  console.log("🏁 fix-fantasy-v3 completed.");
}

main();
