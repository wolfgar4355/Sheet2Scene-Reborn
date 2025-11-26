// generate-all-spells.ts
// Fusion automatique de tous les sorts Fantasy
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SRC_DIR = path.join(__dirname, "sources");
const OUT_FILE = path.join(__dirname, "ALL_SPELLS.ts");
function loadSpells() {
    const spells = [];
    const files = fs.readdirSync(SRC_DIR).filter(f => f.endsWith(".ts"));
    for (const file of files) {
        const full = path.join(SRC_DIR, file);
        const content = fs.readFileSync(full, "utf8");
        const match = content.match(/export const .*? = (\[.*\]);/s);
        if (!match) {
            console.warn(`⚠ Aucun tableau exporté trouvé dans : ${file}`);
            continue;
        }
        try {
            const parsed = eval(match[1]);
            spells.push(...parsed);
        }
        catch (err) {
            console.error(`❌ Erreur parsing ${file}`, err);
        }
    }
    return spells;
}
function writeAll(spells) {
    const content = `// ⚠ FICHIER GÉNÉRÉ AUTOMATIQUEMENT — NE PAS MODIFIER\n\n` +
        `export const ALL_SPELLS = ${JSON.stringify(spells, null, 2)} as const;\n` +
        `export type Spell = typeof ALL_SPELLS[number];\n`;
    fs.writeFileSync(OUT_FILE, content);
}
function main() {
    console.log("✨ Fusion des sorts Fantasy…");
    const spells = loadSpells();
    console.log(`🔍 ${spells.length} sorts détectés dans sources/`);
    writeAll(spells);
    console.log(`📦 ALL_SPELLS.ts généré avec succès !`);
}
main();
