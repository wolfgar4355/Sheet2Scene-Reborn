#!/usr/bin/env node

/**
 * Fixe automatiquement les imports cassés dans /src/content/fantasy
 * Sans JAMAIS écraser les fichiers ou mélanger les contenus.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "src", "content", "fantasy");

// Mapping des anciens imports → nouveaux imports
const REPLACEMENTS = [
  { from: "@s2s/fantasy/types", to: "@engine/content/fantasy/types" },
  { from: "@s2s/fantasy/worlds", to: "@engine/content/fantasy/worlds" },
  { from: "@s2s/fantasy/monsters", to: "@engine/content/fantasy/bestiary/monsters" },
  { from: "@s2s/fantasy/encounters", to: "@engine/content/fantasy/bestiary/encounters" },
  { from: "@s2s/fantasy/rituals", to: "@engine/content/fantasy/rituals" },

  // Fix les imports cassés relatifs "fantômes"
  { from: '"../types"', to: '"@engine/content/fantasy/types"' },
  { from: '"../../types"', to: '"@engine/content/fantasy/types"' },
  { from: '"../../../types"', to: '"@engine/content/fantasy/types"' },
  { from: '"../../encounters"', to: '"@engine/content/fantasy/bestiary/encounters"' },
];

// Fonction pour lister récursivement les fichiers
function listFiles(dir) {
  let results = [];

  fs.readdirSync(dir).forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      results = results.concat(listFiles(full));
    } else if (file.endsWith(".ts")) {
      results.push(full);
    }
  });

  return results;
}

// Applique les fixes
function fixFile(file) {
  let content = fs.readFileSync(file, "utf8");
  let original = content;

  REPLACEMENTS.forEach(({ from, to }) => {
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    content = content.replace(regex, to);
  });

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    console.log("✔ FIXED:", file.replace(ROOT + "/", ""));
  }
}

console.log("🚀 Fix Fantasy Imports — Started");
console.log("Scanning:", ROOT);

const files = listFiles(ROOT);
console.log("Found", files.length, "TS files\n");

files.forEach(fixFile);

console.log("\n🎉 Done! Tous les imports Fantasy sont corrigés.");
