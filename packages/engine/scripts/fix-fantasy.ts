#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Racine des datas Mithril Quest
const root = path.resolve(__dirname, "../src/data/mithril-quest");

// Dossiers qu'on veut nettoyer en priorité
const TARGET_DIRS = [
  "bestiary/sources/mystic",
  "bestiary/sources/boss",
];

// Ligne qui est juste une chaîne de caractères => à commenter
function isBareStringLine(line: string): boolean {
  const trimmed = line.trim();

  // Doit commencer par " et finir par " ou ",
  if (!trimmed.startsWith('"')) return false;
  if (!(trimmed.endsWith('"') || trimmed.endsWith('",'))) return false;

  // Si on voit un ":" c’est probablement une propriété valide
  if (trimmed.includes(":")) return false;

  // On évite d'autres cas spéciaux éventuels
  if (trimmed === '"use strict";') return false;

  return true;
}

function processFile(filePath: string) {
  const original = fs.readFileSync(filePath, "utf8");
  const lines = original.split(/\r?\n/);

  let changed = false;

  const newLines = lines.map((line) => {
    if (isBareStringLine(line)) {
      const indent = line.match(/^\s*/)?.[0] ?? "";
      const trimmed = line.trim();
      changed = true;

      // On commente la ligne complète pour ne plus casser TypeScript
      return `${indent}// NOTE (fix-fantasy v2 auto-commented): ${trimmed}`;
    }

    return line;
  });

  if (changed) {
    fs.writeFileSync(filePath, newLines.join("\n"), "utf8");
    console.log("✔ Fixed:", filePath);
  }
}

function walkDir(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.isFile() && entry.name.endsWith(".ts")) {
      // on évite les index.ts
      if (entry.name === "index.ts") continue;
      processFile(full);
    }
  }
}

console.log("▶ Running fix-fantasy v2 on:", root);

for (const rel of TARGET_DIRS) {
  const dir = path.join(root, rel);
  if (fs.existsSync(dir)) {
    walkDir(dir);
  } else {
    console.warn("  (skip, not found)", dir);
  }
}

console.log("✅ DONE (fix-fantasy v2)");
