// fix-fantasy-vMithril.js
// Réparation complète des fichiers corrompus par fix-fantasy-v2

import fs from "fs";
import path from "path";

const ROOT = "src/data/mithril-quest";

const REPLACEMENTS = [
  { bad: /\bi,\s*\n?d:/g, good: "id:" },
  { bad: /\bn,\s*\n?ame:/g, good: "name:" },
  { bad: /\be,\s*\n?pithet:/g, good: "epithet:" },
  { bad: /\bc,\s*\n?ategory:/g, good: "category:" },
  { bad: /\bt,\s*\n?ags:/g, good: "tags:" },
  { bad: /\bb,\s*\n?iomes:/g, good: "biomes:" },
  { bad: /\bh,\s*\n?p:/g, good: "hp:" },
  { bad: /\ba,\s*\n?c:/g, good: "ac:" },
  { bad: /\ba,\s*\n?tk:/g, good: "atk:" },
  { bad: /\bd,\s*\n?mg:/g, good: "dmg:" },
  { bad: /\bd,\s*\n?escription:/g, good: "description:" },
  { bad: /\bp,\s*\n?hases:/g, good: "phases:" },
  { bad: /\bl,\s*\n?oot:/g, good: "loot:" },
  { bad: /\bp,\s*\n?haseTriggers:/g, good: "phaseTriggers:" }
];

// Supprimer les lignes auto-commented
function removeAutoCommented(content) {
  return content.replace(/\/\/\s*auto-commented[^\n]*\n?/g, "");
}

function fixFile(file) {
  let content = fs.readFileSync(file, "utf8");

  // 1. Réparer les propriétés brisées
  for (const { bad, good } of REPLACEMENTS) {
    content = content.replace(bad, good);
  }

  // 2. Supprimer les lignes auto-commentées
  content = removeAutoCommented(content);

  // 3. Supprimer les virgules orphelines `key:,` → `key:`
  content = content.replace(/:,/g, ":");

  // 4. Corriger les tableaux fermés incorrectement
  content = content.replace(/\],\s*]/g, "]]");

  fs.writeFileSync(file, content, "utf8");
  console.log("✔ FIXED:", file);
}

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);

    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith(".ts")) fixFile(full);
  }
}

console.log("🔧 Running fix-fantasy-vMithril...");
walk(ROOT);
console.log("✨ Completed!");	
