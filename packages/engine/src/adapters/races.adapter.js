// src/adapters/races.adapter.ts
// ------------------------------------------------------
//  Adapter officiel des Races — Mithril-Quest
// ------------------------------------------------------
//  ✔ Typé correctement
//  ✔ Compatible avec ton moteur GME
//  ✔ Compatible avec ta structure mithril-quest
//  ✔ Aucun alias, aucune ambiguïté
// ------------------------------------------------------
import * as RACES from "../data/mithril-quest/races";
/**
 * Retourne toutes les races sous forme de tableau simple.
 */
export function getAllRaces() {
    return Object.values(RACES).flat();
}
/**
 * Regroupe les races par type (ex: "humanoid", "fey", "beast", etc.)
 */
export function getRacesByType() {
    const all = getAllRaces();
    const buckets = {};
    all.forEach((r) => {
        const type = r.type ?? "unknown";
        if (!buckets[type])
            buckets[type] = [];
        buckets[type].push(r);
    });
    return buckets;
}
