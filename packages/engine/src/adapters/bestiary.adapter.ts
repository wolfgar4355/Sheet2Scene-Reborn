// packages/engine/src/adapters/bestiary.adapter.ts
import * as MQ_BESTIARY from "../content/fantasy/bestiary/index";

export function getAllMonsters() {
  return Object.values(MQ_BESTIARY).flat();
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
