// @ts-nocheck
// generate-all-spells.ts — Fusionne toutes les sources MQ en un fichier ALL_SPELLS.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Résoudre __dirname en mode ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dossier contenant les fichiers sources (defense.ts, offense.ts, etc.)
const SRC_DIR = path.join(__dirname, "sources");

// Liste stricte des fichiers MQ
const SOURCE_FILES = ["defense.ts", "healing.ts", "offense.ts", "utility.ts"];

// Le fichier final généré
const OUTPUT_FILE = path.join(__dirname, "ALL_SPELLS.ts");

console.log("✨ Fusion des sorts Mithril-Quest…");

async function loadAllSources() {
  const allSpells = [];

  for (const filename of SOURCE_FILES) {
    const fullPath = path.join(SRC_DIR, filename);
    console.log(`📖 Lecture : ${filename}`);

    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Fichier introuvable : ${filename}`);
      continue;
    }

    // Import dynamique ES module
    const mod = await import("file://" + fullPath);

    // On récupère la constante exportée : DEFENSE_SPELLS, HEALING_SPELLS, etc.
    const exportedArray =
      Object.values(mod).find((v) => Array.isArray(v)) ?? [];

    if (exportedArray.length === 0) {
      console.warn(`⚠️ Aucun tableau exporté trouvé dans ${filename}`);
    }

    console.log(`➕ ${exportedArray.length} sorts`);
    allSpells.push(...exportedArray);
  }

  console.log(`📦 Total : ${allSpells.length} sorts détectés.`);

  // Écriture du fichier ALL_SPELLS.ts
  const content =
    `// Fichier généré automatiquement — NE PAS MODIFIER À LA MAIN\n` +
    `import type { Spell } from "./schema";\n\n` +
    `export const ALL_SPELLS: Spell[] = ${JSON.stringify(allSpells, null, 2)} as const;\n`;

  fs.writeFileSync(OUTPUT_FILE, content, "utf8");

  console.log(`📁 Fichier généré : ${OUTPUT_FILE}`);
}

loadAllSources();
