// src/adapters/factions.adapter.ts
// ⚠️ Important : on remonte d’un seul dossier (../), pas ../../
// car `adapters` et `data` sont au même niveau sous `src/`.
import FACTIONS from "../data/mithril-quest/factions";
/**
 * Retourne toutes les factions sous forme de tableau.
 */
export function getAllFactions() {
    return Object.entries(FACTIONS).map(([id, label]) => ({
        id: id,
        label: label,
    }));
}
/**
 * Retourne une faction précise. Si l’id est inconnu, renvoie null.
 */
export function getFaction(id) {
    const label = FACTIONS[id];
    if (!label) {
        return null;
    }
    return { id, label };
}
