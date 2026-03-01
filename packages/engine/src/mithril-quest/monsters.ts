// packages/engine/src/mithril-quest/monsters.ts

// --- Types du moteur MQ ---------------------------------------------------
import type { Monster } from "../types";

// --- Dataset officiel MQ ---------------------------------------------------
import { ALL_MONSTERS } from "../data/mithril-quest/bestiary/ALL_MONSTERS";

// 1) Casting explicite pour utiliser ton énorme bestiaire "as-is"
//    (évite de modifier les 2000+ fichiers de créatures)
export const MQ_MONSTERS: Monster[] =
  ALL_MONSTERS as unknown as Monster[];

// 2) Helpers utilisables partout dans le moteur / UI / encounters

/** Tous les monstres MQ */
export function getAllMonsters(): Monster[] {
  return MQ_MONSTERS;
}

/** Filtrer par tag (ex: undead, boss, demon, ethereal…) */
export function getMonstersByTag(tag: string): Monster[] {
  return MQ_MONSTERS.filter(
    (m: any) => Array.isArray(m.tags) && m.tags.includes(tag)
  );
}

/** Filtrer par CR (challenge rating) */
export function getMonstersByCR(minCR: number, maxCR: number): Monster[] {
  return MQ_MONSTERS.filter(
    (m: any) =>
      typeof m.cr === "number" &&
      m.cr >= minCR &&
      m.cr <= maxCR
  );
}
