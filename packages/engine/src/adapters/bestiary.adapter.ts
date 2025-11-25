import * as MONSTERS from "../content/fantasy/bestiary";

type Monster = (typeof MONSTERS)[keyof typeof MONSTERS][number];

export function getAllMonsters(): Monster[] {
  return Object.values(MONSTERS).flat();
}

export function getMonstersByCR() {
  const all = getAllMonsters();
  const buckets: Record<number, Monster[]> = {};

  all.forEach((m: any) => {
    const cr = (m.cr ?? 0) as number;
    if (!buckets[cr]) buckets[cr] = [];
    buckets[cr].push(m);
  });

  return buckets;
}
