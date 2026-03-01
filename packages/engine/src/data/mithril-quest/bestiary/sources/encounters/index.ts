// @ts-nocheck
// ============================================================================
// Mithril-Quest – Encounter Tables Index (Auto Loader)
// ============================================================================
// Charge automatiquement toutes les tables d'encounters présentes dans ce dossier
// sans avoir à maintenir une longue liste de imports manuels.
// ============================================================================

import type { EncounterTableEntry } from "../../../types";

// Import dynamique de *tous* les modules du dossier actuel
// (chaque fichier exporte un tableau d'encounters)
const modules = import.meta.glob("./*.ts", {
    eager: true,
});

const ENCOUNTER_TABLES: Record<string, EncounterTableEntry[]> = {};

for (const path in modules) {
    // ignore ce fichier même
    if (path.endsWith("index.ts")) continue;

    const mod: any = modules[path];

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
export function loadEncounterTable(biome: string): EncounterTableEntry[] {
    return ENCOUNTER_TABLES[biome] ?? [];
}

export default ENCOUNTER_TABLES;
