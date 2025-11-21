// generate-all-classes.ts
// -----------------------------------------------------------------------------
// Script PRO — Fusion automatique de toutes les classes Fantasy
// Identique au système Bestiary & Races
// -----------------------------------------------------------------------------

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM -> __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = __dirname;
const SRC_DIR = path.join(BASE, "sources");
const OUT_FILE = path.join(BASE, "ALL_CLASSES.ts");

type RawClass = {
  key: string;
  label: string;
  description: string;
  hitdice: string;
  primaryAbility: string;
  archetypes: string[];
  role?: string;
  complexity?: string;
  resourceType?: string;
  weaponAffinity?: string;
  armorTraining?: string;
  recommendedRaces?: string[];
  visualTags?: string[];
  gameplayTags?: string[];
  [k: string]: any;
};

function loadClasses(): RawClass[] {
  const results: RawClass[] = [];

  if (!fs.existsSync(SRC_DIR)) {
    console.warn("⚠️ Dossier introuvable :", SRC_DIR);
    return [];
  }

  const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith(".ts"));

  for (const file of files) {
    const fileContent = fs.readFileSync(path.join(SRC_DIR, file), "utf8");

    const match = fileContent.match(/=\s*\[\s*([\s\S]*?)\]\s*as const/);
    if (!match) {
      console.warn("⚠️ Aucun tableau exporté trouvé dans :", file);
      continue;
    }

    try {
      const arr = eval("[" + match[1] + "]") as RawClass[];
      arr.forEach((c) => ((c as any)._src = file));
      results.push(...arr);
    } catch (err) {
      console.error("❌ Erreur parsing dans", file, err);
    }
  }

  return results;
}

function validateClasses(classes: RawClass[]): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();

  for (const c of classes) {
    const src = (c as any)._src || "???";

    if (!c.key) errors.push(`Classe sans key (fichier ${src})`);
    if (!c.label) errors.push(`Classe ${c.key} sans label (${src})`);
    if (!c.description)
      errors.push(`Classe ${c.key} sans description (${src})`);

    if (seen.has(c.key)) {
      errors.push(`Doublon key "${c.key}" (${src})`);
    }
    seen.add(c.key);
  }

  return errors;
}

function writeOutput(classes: RawClass[]) {
  const clean = classes.map(({ _src, ...rest }) => rest);

  clean.sort((a, b) =>
    (a.label || a.key).localeCompare(b.label || b.key, "fr")
  );

  const content = `// ALL_CLASSES.ts
// -----------------------------------------------------------------------------
// ⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT — NE PAS MODIFIER
// -----------------------------------------------------------------------------

export const ALL_FANTASY_CLASSES = ${JSON.stringify(clean, null, 2)} as const;

export type FantasyClass = typeof ALL_FANTASY_CLASSES[number];
`;

  fs.writeFileSync(OUT_FILE, content, "utf8");
}

function main() {
  console.log("✨ Génération des classes Fantasy…");

  const classes = loadClasses();
  console.log(`🔍 ${classes.length} classes détectées dans sources/`);

  const errors = validateClasses(classes);

  writeOutput(classes);

  console.log(`📦 ALL_CLASSES.ts généré dans : ${OUT_FILE}`);

  if (errors.length) {
    console.log("⚠️ Avertissements:");
    errors.forEach((e) => console.log("   •", e));
  } else {
    console.log("🧪 Validation OK — aucune erreur.");
  }
}

main();
