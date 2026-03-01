// @ts-nocheck
import fs from "fs";
import path from "path";

const ROOT = path.join(__dirname);

function fixFile(filePath: string, replacers: [string | RegExp, string][]) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  replacers.forEach(([from, to]) => {
    if (content.match(from)) {
      content = content.replace(from, to);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("✔ patched:", filePath.replace(ROOT, ""));
  }
}

function walk(dir: string) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith("")) {
      fixFile(p, [
        // Types manquants dans anciens imports
        [/\{ MythicBoss[^\}]*\} from "\.\.\/\.\.\/types"/g, `import type { BossDefinition } from "../../../types"`],
        [/\{ MythicPhase[^\}]*\} from "\.\.\/\.\.\/types"/g, `import type { BossPhase } from "../../../types"`],

        // WorldKey
        [/from "\.\.\/worlds"/g, `from "../types-worlds"`],

        // FantasyEra
        [/import \{ FantasyEra \} from "\.\.\/eras"/g, `import type { FantasyEra } from "../eras/index"`],

        // Spell components V/S unifiés
        [/components: \{ verbal: true \}/g, `components: { verbal: true, somatic: false }`],
        [/components: \{ somatic: true \}/g, `components: { somatic: true, verbal: false }`],

        // Damage string -> structured type
        [/damage: "([^"]+)"/g, `damage: { dice: "$1" }`],

        // Tactics array → typed object
        [/tactics: \[(.*?)\]/g, `tactics: { presets: [$1] }`],

        // Doublons d’exports minions
        [/export \* from "\.\/dragons";/g, ""],
        [/export \* from "\.\/magical-beasts";/g, ""],
        [/export \* from "\.\/undead";/g, ""],
        [/export \* from "\.\/celestials";/g, ""],
      ]);
    }
  });
}

console.log("=== PATCH MITHRIL QUEST ===");
walk(ROOT);
console.log("=== DONE ===");
