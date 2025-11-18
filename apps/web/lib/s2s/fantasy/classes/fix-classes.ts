/**
 * FIX-AUTO : corrige tous les fichiers de classes Fantasy
 * - Ajoute un tableau exporté si absent
 * - Entoure l'objet dans un tableau
 * - Ajoute "as const"
 * - Compatible ESM (pas de __dirname)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Récup ES module dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "sources");

function fixFile(filePath: string) {
  let content = fs.readFileSync(filePath, "utf8").trim();

  // Déjà correct ?
  if (content.includes("export const") && content.includes("] as const")) {
    console.log(`✔ Déjà ok : ${path.basename(filePath)}`);
    return;
  }

  // Extraction de l'objet unique
  const match = content.match(/\{[\s\S]*\}/);
  if (!match) {
    console.log(`⚠ Impossible de détecter l'objet dans : ${path.basename(filePath)}`);
    return;
  }

  const obj = match[0];

  // Nouveau contenu formaté
  const fixed = `export const FANTASY_CLASS = [
${obj}
] as const;
`;

  fs.writeFileSync(filePath, fixed, "utf8");
  console.log(`🛠 Correction : ${path.basename(filePath)}`);
}

function main() {
  const files = fs.readdirSync(SRC_DIR).filter(f => f.endsWith(".ts"));

  console.log(`🔍 ${files.length} fichiers détectés…\n`);

  for (const file of files) {
    fixFile(path.join(SRC_DIR, file));
  }

  console.log("\n✅ AutoFix terminé !");
}

main();
