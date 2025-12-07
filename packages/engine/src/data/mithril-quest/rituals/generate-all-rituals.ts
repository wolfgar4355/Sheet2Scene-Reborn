#!/usr/bin/env node
// @ts-nocheck

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Correction ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =========================
//  Chargement dynamique des sources
// =========================

const sourcesDir = path.resolve(__dirname, "./sources");

// Liste exacte des fichiers
const SOURCE_FILES = [
  "ritual_divine.ts",
  "ritual_nature.ts",
  "ritual_arcane.ts",
  "ritual_necromancy.ts",
  "ritual_spirit.ts"
];

// =========================
//  Validation simple
// =========================
function validateRitual(r) {
  const required = ["id", "label", "school", "level", "castTime", "ingredients", "description"];
  for (const key of required) {
    if (!r[key]) {
      console.warn(`⚠️ Rituel invalide (champ manquant: ${key}) →`, r);
      return false;
    }
  }
  return true;
}

// =========================
//  Importation dynamique robuste
// =========================
async function loadRituals() {
  const all = [];

  for (const file of SOURCE_FILES) {
    const full = path.join(sourcesDir, file);

    if (!fs.existsSync(full)) {
      console.error(`❌ Fichier introuvable : ${full}`);
      continue;
    }

    console.log(`📖 Lecture : ${file}`);

    const mod = await import(full + "?ts"); // 🔥 Force le loader à lire le fichier TS

    const exportedArrays = Object.values(mod).filter(v => Array.isArray(v));

    if (exportedArrays.length === 0) {
      console.error(`❌ Aucun tableau de rituels exporté dans ${file}`);
      continue;
    }

    const rituals = exportedArrays[0];

    for (const r of rituals) {
      if (validateRitual(r)) {
        all.push(r);
      }
    }
  }

  return all;
}

// =========================
//  Grouping + tri
// =========================
function groupBySchool(rituals) {
  const groups = {};

  for (const r of rituals) {
    if (!groups[r.school]) groups[r.school] = [];
    groups[r.school].push(r);
  }

  // tri interne
  for (const school of Object.keys(groups)) {
    groups[school].sort((a, b) => a.label.localeCompare(b.label));
  }

  return groups;
}

// =========================
//  Génération du fichier final
// =========================
function generateOutput(rituals) {
  const outFile = path.resolve(__dirname, "./ALL_RITUALS.ts");

  const fileContent = `// AUTO-GENERATED — NE PAS MODIFIER À LA MAIN

import type { Ritual } from "./schema";

export const ALL_RITUALS: Ritual[] = ${JSON.stringify(rituals, null, 2)};

export default ALL_RITUALS;
`;

  fs.writeFileSync(outFile, fileContent, "utf-8");

  console.log(`\n📦 Fichier généré : ${outFile}`);
  console.log(`✨ Total rituels : ${rituals.length}`);
}

// =========================
//  MAIN
// =========================
(async () => {
  console.log("🔮 Fusion des rituels — Mithril Quest...");

  const all = await loadRituals();

  const grouped = groupBySchool(all);

  // Aplatir les groupes dans l'ordre alphabétique
  const final = Object.keys(grouped)
    .sort()
    .flatMap(school => grouped[school]);

  generateOutput(final);
})();
