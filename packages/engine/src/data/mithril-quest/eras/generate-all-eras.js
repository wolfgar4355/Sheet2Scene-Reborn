// @ts-nocheck
// generate-all-eras.ts — Mithril-Quest
// ============================================================================
// ⚙️ Script PRO — Fusion automatique de toutes les ERAS MQ
// Génère ALL_ERAS.ts dans ce même dossier
// ============================================================================
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// ESM dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SOURCES_DIR = path.join(__dirname, "sources");
const OUT_FILE = path.join(__dirname, "ALL_ERAS.ts");
// -----------------------------------------------------------
// Extraction propre d’un tableau exporté
// -----------------------------------------------------------
function loadEra(fileName) {
    const filePath = path.join(SOURCES_DIR, fileName);
    const content = fs.readFileSync(filePath, "utf8");
    // Trouve : export const XYZ = [ ... ] as const
    const match = content.match(/export const .*?=\s*\[(.*?)\]\s*as const/s);
    if (!match) {
        console.warn(`⚠️ Aucun tableau exporté valide trouvé dans : ${fileName}`);
        return [];
    }
    try {
        // encapsulation dans un tableau pour éviter les erreurs
        return eval("[" + match[1] + "]");
    }
    catch (err) {
        console.error(`❌ Erreur de parsing dans "${fileName}":`, err);
        return [];
    }
}
// -----------------------------------------------------------
// Main
// -----------------------------------------------------------
function main() {
    console.log("✨ Fusion des ERAS Mithril-Quest…");
    if (!fs.existsSync(SOURCES_DIR)) {
        console.error("❌ Dossier introuvable :", SOURCES_DIR);
        return;
    }
    // Lecture uniquement des fichiers .ts
    const files = fs
        .readdirSync(SOURCES_DIR)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts");
    const all = [];
    for (const file of files) {
        const eras = loadEra(file);
        if (eras.length > 0) {
            console.log(` ➕ ${eras.length} ERA(s) chargée(s) : ${file}`);
        }
        all.push(...eras);
    }
    console.log(`📦 Total : ${all.length} ERAS MQ`);
    // -----------------------------------------------------------
    // Génération du fichier final
    // -----------------------------------------------------------
    const output = `// ALL_ERAS.ts — Mithril-Quest
// ============================================================================
// ⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT — NE PAS MODIFIER
// ============================================================================

export const ALL_MQ_ERAS = ${JSON.stringify(all, null, 2)} as const;

export type MQEra = typeof ALL_MQ_ERAS[number];
`;
    fs.writeFileSync(OUT_FILE, output, "utf8");
    console.log("🪄 ALL_ERAS.ts généré avec succès !");
}
main();
