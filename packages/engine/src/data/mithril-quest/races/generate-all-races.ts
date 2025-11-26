// generate-all-races.ts
// Script PRO — Fusion automatique de toutes les races Fantasy
// ----------------------------------------------------------------------------
// Ce script scanne le dossier `sources/` et génère ALL_RACES.ts
// avec validation, tri et petits logs propres.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM helper pour avoir __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dossiers / fichiers
const BASE = __dirname; // apps/web/lib/s2s/fantasy/races
const SRC_DIR = path.join(BASE, "sources");
const OUT_FILE = path.join(BASE, "ALL_RACES.ts");

// Type attendu (pour la validation)
type RawRace = {
  key: string;
  label: string;
  description: string;
  traits?: string[];
  world?: string;
  [k: string]: any;
};

function loadRaces(): RawRace[] {
  if (!fs.existsSync(SRC_DIR)) {
    console.warn("⚠️ Dossier sources introuvable:", SRC_DIR);
    return [];
  }

  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => f.endsWith(".ts"));

  const all: RawRace[] = [];

  for (const file of files) {
    const filePath = path.join(SRC_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");

    // On cherche le tableau exporté, ex:
    // export const FANTASY_RACES = [ ... ] as const;
    const match = content.match(/=\s*\[\s*([\s\S]*?)\]\s*as const/);

    if (!match) {
      console.warn("⚠️ Impossible de trouver un tableau exporté dans", file);
      continue;
    }

    try {
      // On évalue juste le contenu du tableau
      const arr = eval("[" + match[1] + "]") as RawRace[];
      arr.forEach((race) => {
        // On garde la provenance pour les messages d'erreur
        (race as any)._sourceFile = file;
        all.push(race);
      });
    } catch (e) {
      console.error("❌ Erreur de parsing dans", file, e);
    }
  }

  return all;
}

function validateRaces(races: RawRace[]): string[] {
  const errors: string[] = [];
  const seenKeys = new Set<string>();

  for (const r of races) {
    const from = (r as any)._sourceFile || "inconnu";

    if (!r.key) errors.push(`Race sans "key" (fichier ${from})`);
    if (!r.label) errors.push(`Race ${r.key || "?"} sans "label" (${from})`);
    if (!r.description)
      errors.push(`Race ${r.key || "?"} sans "description" (${from})`);

    if (r.key) {
      if (seenKeys.has(r.key)) {
        errors.push(`Doublon de key "${r.key}" (fichier ${from})`);
      }
      seenKeys.add(r.key);
    }
  }

  return errors;
}

function writeAllRaces(races: RawRace[]) {
  // On nettoie la méta interne
  const clean = races.map(({ _sourceFile, ...rest }) => rest);

  // Tri : par label FR, puis par key
  clean.sort((a, b) => {
    const la = (a.label || a.key || "").toString();
    const lb = (b.label || b.key || "").toString();
    const cmp = la.localeCompare(lb, "fr");
    if (cmp !== 0) return cmp;
    return (a.key || "").localeCompare(b.key || "", "fr");
  });

  const header = `// ALL_RACES.ts
// -----------------------------------------------------------------------------
// ⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT — NE PAS MODIFIER À LA MAIN
// Source : apps/web/lib/s2s/fantasy/races/sources/*
// -----------------------------------------------------------------------------

export const ALL_FANTASY_RACES = ${JSON.stringify(clean, null, 2)} as const;

export type FantasyRace = typeof ALL_FANTASY_RACES[number];
`;

  fs.writeFileSync(OUT_FILE, header, "utf8");
}

function main() {
  console.log("✨ Génération des races Fantasy…");

  const races = loadRaces();
  console.log(`🔍 ${races.length} entrées brutes trouvées dans sources/`);

  const errors = validateRaces(races);

  writeAllRaces(races);

  console.log(`✅ Fichier généré : ${OUT_FILE}`);

  if (errors.length) {
    console.warn("⚠️ Validation terminée avec avertissements :");
    for (const e of errors) {
      console.warn("   •", e);
    }
  } else {
    console.log("🧪 Validation OK — aucune erreur critique détectée.");
  }
}

main();
