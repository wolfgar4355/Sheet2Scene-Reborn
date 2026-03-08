/**
 * export-tools-json.ts
 * Exporte tous les outils MQ dans /generated/all-tools.json
 */
import { writeFileSync, mkdirSync } from "fs";
import { generateAllToolsJSON } from "./generate-all-tools-prompts";
const outputDir = "generated";
const outputFile = `${outputDir}/all-tools.json`;
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, generateAllToolsJSON(), "utf-8");
console.log("✅ all-tools.json généré avec succès !");
console.log("🗂 Chemin :", outputFile);
