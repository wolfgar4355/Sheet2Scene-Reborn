import fs from "fs";
import path from "path";

/**
 * fix-fantasy-v4
 * Répare la structure des monstres :
 * - supprime les lignes "tactics:" en double
 * - ajoute virgules manquantes
 * - répare stats:, loot:, abilities:, phases:
 * - corrige les concaténations brisées
 * - stabilise les chaînes multilignes
 */

const ROOT = path.join(
  process.cwd(),
  "src/data/mithril-quest/bestiary/sources"
);

const EXT = ".ts";

function walk(dir: string, out: string[] = []) {
  for (const file of fs.readdirSync(dir)) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith(EXT)) out.push(p);
  }
  return out;
}

function fixContent(content: string): string {
  let out = content;

  // 1) Corriger tactiques doublées : "tactics:" apparaît deux fois
  out = out.replace(/tactics:\s*{[^}]*},\s*\n\s*tactics:/g, "tactics:");

  // 2) Ajouter virgule manquante avant stats:
  out = out.replace(/}\s*\n\s*stats:/g, "},\nstats:");

  // 3) Ajouter virgule manquante après tactics: ["..."]
  out = out.replace(/tactics:\s*\[[^\]]+\]\s*\n\s*stats:/g, (m) =>
    m.replace("]\n", "],\n")
  );

  // 4) Ajouter virgule après loot: [
  out = out.replace(/loot:\s*\[[^\]]*\]\s*\n\s*abilities:/g, (m) =>
    m.replace("]\n", "],\n")
  );

  // 5) Réparer strings multi-ligne `"..." +`
  out = out.replace(/"\s*\+\s*"\s*/g, "");

  // 6) Réparer phases: manquantes de virgule
  out = out.replace(/],\s*\n\s*phases:/g, "],\nphases:");

  // 7) Réparer phaseTriggers bloc manquant
  out = out.replace(/phaseTriggers:\s*\[/g, "phaseTriggers: [");

  // 8) Ajouter virgule si dernière clé n’en a pas
  out = out.replace(/"(\s*)\n\s*([}\]])/g, "\",\n$2");

  // 9) Virer les lignes auto-comment qui cassent la syntaxe
  out = out.replace(/\/\/ NOTE \(fix-fantasy v2 auto-commented\)[^\n]*/g, "");

  // 10) Corriger stats: { hp / ac / atk / dmg
  out = out.replace(/stats:\s*{\s*\n\s*hp:/g, "stats: {\n      hp:");

  return out;
}

function run() {
  const files = walk(ROOT);

  console.log(`🔧 fix-fantasy-v4 scanning ${files.length} files…`);

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    const fixed = fixContent(content);

    if (fixed !== content) {
      fs.writeFileSync(file, fixed, "utf8");
      console.log("✔ Patched:", file);
    }
  }

  console.log("🏁 fix-fantasy-v4 completed.");
}

run();
