/**
 * export-weapons-json.ts — Génère le JSON final de toutes les armes MQ
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { generateAllWeaponsJSON } from "./generate-all-weapons-prompts";
const outputDir = join(process.cwd(), "generated");
const outputFile = join(outputDir, "all-weapons.json");
try {
    mkdirSync(outputDir, { recursive: true });
    const json = generateAllWeaponsJSON();
    writeFileSync(outputFile, json);
    console.log("✅ all-weapons.json généré avec succès !");
    console.log("➡️ Chemin :", outputFile);
}
catch (err) {
    console.error("❌ Erreur lors de l'export JSON :", err);
}
