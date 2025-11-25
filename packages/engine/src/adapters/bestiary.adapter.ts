// packages/engine/src/adapters/bestiary.adapter.ts
import * as MONSTERS from "../content/fantasy/bestiary";
import type { GmMonster } from "../types";

export function getAllMonsters(): GmMonster[] {
  return Object.values(MONSTERS).flat() as GmMonster[];
}

export function getMonstersByCR() {
  const all = getAllMonsters();
  const buckets: Record<number, GmMonster[]> = {};

  all.forEach((m: GmMonster) => {
    const cr = m.cr ?? 0;
    if (!buckets[cr]) buckets[cr] = [];
    buckets[cr].push(m);
  });

  return buckets;
}}
