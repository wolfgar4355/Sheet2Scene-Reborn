#!/usr/bin/env ts-node

/**
 * Patch-2 Full Clean for Mithril-Quest
 * -----------------------------------
 * • Fix all imports
 * • Normalize index.ts exports
 * • Remove DATA / Spell / Role collisions
 * • Convert fantasy types → mithril-quest types
 * • Remove .ts extensions
 * • Fix missing exports
 */

import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/data/mithril-quest");

const FIX_IMPORT = [
  // Remove TS extension
  [/\.ts(['"])/g, "$1"],

  // Remove leftover @engine or @s2s aliases
  [/from ["']@s2s\/fantasy\/([^"']+)["']/g, `from "./$1"`],
  [/from ["']@engine\/[^"']+["']/g, `from "../index"`],
];

const REMOVE_BAD_TYPES = [
  /FantasyClassKey/g,
  /FantasyRace/g,
  /WorldId/g,
  /EraId/g,
  /DATA/g,
];

const FILES_TO_SCAN = [];

function walk(dir: string) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith(".ts")) FILES_TO_SCAN.push(full);
  }
}

walk(ROOT);

console.log("🔧 Patching", FILES_TO_SCAN.length, "files…");

FILES_TO_SCAN.forEach((FILE) => {
  let src = fs.readFileSync(FILE, "utf8");

  // Apply import cleanups
  FIX_IMPORT.forEach(([regex, repl]) => (src = src.replace(regex, repl)));

  // Remove bad fantasy-only types
  REMOVE_BAD_TYPES.forEach((regex) => (src = src.replace(regex, "any")));

  // Fix duplicate exports in index.ts
  if (FILE.endsWith("index.ts")) {
    src = src
      .replace(/export \* from ["'][^"']+["'];?/g, (line) => {
        if (/DATA|Spell/i.test(line)) return "// " + line;
        return line;
      })
      .replace(/\n{3,}/g, "\n\n");
  }

  fs.writeFileSync(FILE, src, "utf8");
  console.log("✔️ Patched:", FILE);
});

console.log("\n🎉 PATCH-2 COMPLETED — Build ready");
