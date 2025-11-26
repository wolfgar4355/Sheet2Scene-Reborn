// src/adapters/factions.adapter.ts
import FACTIONS from "../../content/fantasy/factions";
export function getAllFactions() {
    return Object.entries(FACTIONS).map(([id, label]) => ({
        id,
        label,
    }));
}
export function getFaction(id) {
    return {
        id,
        label: FACTIONS[id],
    };
}
