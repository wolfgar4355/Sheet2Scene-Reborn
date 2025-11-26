// src/adapters/races.adapter.ts
import * as RACES from "../content/fantasy/races";
/**
 * Retourne toutes les races sous forme de tableau simple
 */
export function getAllRaces() {
    return Object.values(RACES).flat();
}
/**
 * Regroupe les races par type (humanoid, fey, beast, etc.)
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
