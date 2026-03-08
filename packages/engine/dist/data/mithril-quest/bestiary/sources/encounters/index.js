// @ts-nocheck
// ============================================================================
// Mithril-Quest – Encounter Tables Index (Auto Loader)
// ============================================================================
// Charge automatiquement toutes les tables d'encounters présentes dans ce dossier
// sans avoir à maintenir une longue liste de imports manuels.
// ============================================================================
// Import dynamique de *tous* les modules du dossier actuel
// (chaque fichier exporte un tableau d'encounters)
const modules = import.meta.glob("./*.ts", {
    eager: true,
});
const ENCOUNTER_TABLES = {};
for (const path in modules) {
    // ignore ce fichier même
    if (path.endsWith("index.ts"))
        continue;
    const mod = modules[path];
    // Nom du biome basé sur le nom du fichier
    // ex. "./DESERT_ENCOUNTERS.ts" → "desert"
    const biome = path
        .replace("./", "")
        .replace("_ENCOUNTERS.ts", "")
        .replace(".ts", "")
        .toLowerCase();
    ENCOUNTER_TABLES[biome] = Array.isArray(mod.default)
        ? mod.default
        : Object.values(mod).flat();
}
// API
export function loadEncounterTable(biome) {
    return ENCOUNTER_TABLES[biome] ?? [];
}
export default ENCOUNTER_TABLES;
