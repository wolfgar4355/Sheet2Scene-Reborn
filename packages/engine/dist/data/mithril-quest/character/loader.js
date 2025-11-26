import { createEmptyFantasySheet, } from "@s2s/fantasy/types";
import { getFantasySheetSchema } from "../fantasy/character/schema";
// ----- LOADER -----
export function loadEmptyCharacterSheet(world, id, subworldKey) {
    switch (world) {
        case "fantasy": {
            const variant = subworldKey ?? "core";
            const sheet = createEmptyFantasySheet(id);
            const schema = getFantasySheetSchema(variant);
            return { world, sheet, schema };
        }
        default:
            throw new Error(`Fiche de personnage non implémentée pour le monde: ${world}`);
    }
}
export function loadExistingCharacterSheet(world, data, subworldKey) {
    switch (world) {
        case "fantasy": {
            const variant = subworldKey ?? "core";
            const schema = getFantasySheetSchema(variant);
            return { world, sheet: data, schema };
        }
        default:
            throw new Error(`Fiche de personnage non implémentée pour le monde: ${world}`);
    }
}
