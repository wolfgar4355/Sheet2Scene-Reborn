// packages/engine/src/adapters/bestiary.adapter.ts
import * as MONSTERS from "../../content/mithril-quest/bestiary";

export function getAllMonsters() {
  return Object.values(MONSTERS).flat();
}

export function getMonstersByCR() {
  const all = getAllMonsters();
  const buckets: Record<number, any[]> = {};

  all.forEach((m) => {
    const cr = m.cr ?? 0;
    if (!buckets[cr]) buckets[cr] = [];
    buckets[cr].push(m);
  });

  return buckets;
}
