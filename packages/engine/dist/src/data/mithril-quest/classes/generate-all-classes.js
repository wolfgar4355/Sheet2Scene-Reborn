// @ts-nocheck
/**
 * ──────────────────────────────────────────────────────────────
 *  Script MQ — Génération automatique de ALL_CLASSES.ts
 *  Compatible avec les fichiers MQ_CLASS_X dans /sources
 * ──────────────────────────────────────────────────────────────
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
/* -------------------------------------------------- */
/*  Résolution chemins ESM                            */
/* -------------------------------------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SRC_DIR = path.join(__dirname, "sources");
const OUT_FILE = path.join(__dirname, "ALL_CLASSES.ts");
/* -------------------------------------------------- */
/*  Fonction — Charger dynamiquement toutes les classes */
/* -------------------------------------------------- */
async function loadClasses() {
    console.log("🔍 Chargement des classes MQ…");
    const files = fs.readdirSync(SRC_DIR)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "ALL_CLASSES.ts");
    if (files.length === 0) {
        console.error("⚠️ Aucun fichier trouvé dans /sources !");
        return [];
    }
    const results = [];
    for (const file of files) {
        const fullPath = path.join(SRC_DIR, file);
        try {
            // Import dynamique ESM du module
            const mod = await import(fullPath);
            // Trouver toutes les constantes qui commencent par MQ_CLASS_
            const entries = Object.entries(mod).filter(([name]) => name.startsWith("MQ_CLASS_"));
            if (entries.length === 0) {
                console.warn(`⚠️ Aucun MQ_CLASS_* trouvé dans: ${file}`);
                continue;
            }
            for (const [name, value] of entries) {
                if (!Array.isArray(value)) {
                    console.warn(`⚠️ ${name} dans ${file} n’est pas un tableau MQ valide`);
                    continue;
                }
                results.push(...value);
            }
        }
        catch (err) {
            console.error(`❌ Erreur d’import dans ${file}:`, err);
        }
    }
    return results;
}
/* -------------------------------------------------- */
/*  Validation                                         */
/* -------------------------------------------------- */
function validateClasses(classes) {
    const errors = [];
    for (const c of classes) {
        if (!c.key)
            errors.push(`❌ Classe sans key (${c.label})`);
        if (!c.label)
            errors.push(`❌ Classe sans label (key: ${c.key})`);
        if (!c.description)
            errors.push(`❌ Classe sans description (${c.key})`);
        if (!c.hitdice)
            errors.push(`❌ Classe sans hitdice (${c.key})`);
        if (!c.primaryAbility)
            errors.push(`❌ Classe sans primaryAbility (${c.key})`);
        if (!Array.isArray(c.archetypes)) {
            errors.push(`❌ Archetypes invalides (${c.key})`);
        }
    }
    return errors;
}
/* -------------------------------------------------- */
/*  Génération de ALL_CLASSES.ts                       */
/* -------------------------------------------------- */
function writeOutput(classes) {
    const out = `// AUTO-GÉNÉRÉ — NE PAS MODIFIER À LA MAIN
// Généré par generate-all-classes.ts

export const ALL_CLASSES = ${JSON.stringify(classes, null, 2)} as const;

export type MQClass = (typeof ALL_CLASSES)[number];
`;
    fs.writeFileSync(OUT_FILE, out, "utf8");
    console.log("🎉 ALL_CLASSES.ts généré !");
}
/* -------------------------------------------------- */
/*  MAIN                                               */
/* -------------------------------------------------- */
async function main() {
    const classes = await loadClasses();
    console.log(`📦 ${classes.length} classes détectées.`);
    const errors = validateClasses(classes);
    if (errors.length > 0) {
        console.error("❌ Erreurs de validation :");
        for (const e of errors)
            console.error(e);
        return;
    }
    console.log("🟩 Validation OK");
    writeOutput(classes);
}
main();
