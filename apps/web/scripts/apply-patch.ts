/**
 * Patch-Applier Engine AAA v2
 * Applique un patch généré par ODIN / agents IA.
 * Compatible GitHub Actions + monorepo.
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

interface Patch {
  file: string;
  diff: string;
}

/** Utilitaires */
function log(msg: string) {
  console.log(`[PATCH-ENGINE] ${msg}`);
}

function applyUnifiedDiff(filePath: string, diff: string) {
  const tmp = "/tmp/patch.diff";
  fs.writeFileSync(tmp, diff, "utf8");

  try {
    execSync(`patch -p1 < ${tmp}`, { stdio: "inherit" });
  } catch (err) {
    log(`Erreur lors de l'application du patch pour ${filePath}`);
    throw err;
  }
}

/** Point d’entrée */
export function applyPatch(patch: Patch) {
  const filePath = path.resolve(process.cwd(), patch.file);

  if (!fs.existsExists(filePath)) {
    throw new Error(`Fichier introuvable: ${filePath}`);
  }

  applyUnifiedDiff(filePath, patch.diff);

  log(`Patch appliqué: ${patch.file}`);
}

/** CLI GitHub */
if (require.main === module) {
  const raw = process.argv[2];

  if (!raw) {
    console.error("Aucun patch JSON fourni.");
    process.exit(1);
  }

  const patchData = JSON.parse(raw) as Patch;
  applyPatch(patchData);

  execSync(`git add "${patchData.file}"`);
  execSync(`git commit -m "AAA v2 • Auto-fix: ${patchData.file}"`);

  log("Commit généré ✔");
}
