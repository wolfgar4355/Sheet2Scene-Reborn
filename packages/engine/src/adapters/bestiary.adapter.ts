// src/adapters/bestiary.adapter.ts
import type { Monster } from "../types";

export function getAllMonsters(): Monster[] {
  // @ts-ignore – require.context est fourni par Vite / Webpack lors du build
  const context = require.context(
    "../content/fantasy/bestiary",
    true,
    /\.ts$/
  );

  const monsters: Monster[] = [];

  context.keys().forEach((key: string) => {
    // ignore les fichiers de types et index
    if (key.endsWith("types.ts")) return;
    if (key.endsWith("index.ts")) return;
    if (key.endsWith("ALL_MONSTERS.ts")) return;

    const mod = context(key);

    // Chaque fichier exporte 1 ou plusieurs monstres
    const exported = mod.default ?? mod;

    if (Array.isArray(exported)) {
      monsters.push(...exported);
    } else if (typeof exported === "object") {
      monsters.push(exported);
    }
  });

  return monsters;
}

export function getMonstersByCR() {
  const all = getAllMonsters();
  const buckets: Record<number, Monster[]> = {};

  all.forEach((m) => {
    const cr = Number(m.cr) || 0;
    if (!buckets[cr]) buckets[cr] = [];
    buckets[cr].push(m);
  });

  return buckets;
}
