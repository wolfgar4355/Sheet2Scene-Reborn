// src/adapters/races.adapter.ts

import * as RACES from "../content/fantasy/races";

export type Race = (typeof RACES)[keyof typeof RACES][number];

/**
 * Retourne toutes les races sous forme de tableau simple
 */
export function getAllRaces(): Race[] {
  return Object.values(RACES).flat();
}

/**
 * Regroupe les races par type (humanoid, fey, beast, etc.)
 */
export function getRacesByType() {
  const all = getAllRaces();
  const buckets: Record<string, Race[]> = {};

  all.forEach((r: any) => {
    const type = r.type ?? "unknown";
    if (!buckets[type]) buckets[type] = [];
    buckets[type].push(r);
  });

  return buckets;
}
