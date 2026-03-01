// @ts-nocheck
// character/loader.ts — Version Mithril-Quest
import { createEmptyMQSheet, } from "./types";
import { getMQSheetSchema } from "../mithril-quest/character/schema";
// ============================================================================
// 🧩 LOADER — FICHE VIDE
// ============================================================================
export function loadEmptyCharacterSheet(world, id, subworldKey) {
    switch (world) {
        case "mithril-quest": {
            const variant = subworldKey ?? "core";
            const sheet = createEmptyMQSheet(id);
            const schema = getMQSheetSchema(variant);
            return { world, sheet, schema };
        }
        default:
            throw new Error(`Fiche de personnage non implémentée pour le monde: ${world}`);
    }
}
// ============================================================================
// 🧩 LOADER — FICHE EXISTANTE
// ============================================================================
export function loadExistingCharacterSheet(world, data, subworldKey) {
    switch (world) {
        case "mithril-quest": {
            const variant = subworldKey ?? "core";
            const schema = getMQSheetSchema(variant);
            return { world, sheet: data, schema };
        }
        default:
            throw new Error(`Fiche de personnage non implémentée pour le monde: ${world}`);
    }
}
