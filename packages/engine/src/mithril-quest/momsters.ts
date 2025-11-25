// packages/engine/src/mithril-quest/monsters.ts

// Type canonique utilisé par le moteur d’Encounter
import type { GmMonster } from "../types";

// Toutes tes créatures Fantasy
import { ALL_MONSTERS } from "../../../src/content/fantasy/bestiary/ALL_MONSTERS";

// 1) Tableau de monstres pour Mithril Quest
//    On force le cast pour NE PAS toucher à tes 2000+ lignes de contenu.
export const MQ_MONSTERS: GmMonster[] =
  ALL_MONSTERS as unknown as GmMonster[];

// 2) Petits helpers pour le moteur & la UI

/** Tous les monstres jouables dans Mithril Quest */
export function getAllMonsters(): GmMonster[] {
  return MQ_MONSTERS;
}

/** Filtrer par tag (ex: "undead", "boss", etc.) */
export function getMonstersByTag(tag: string): GmMonster[] {
  return MQ_MONSTERS.filter(
    (m: any) => Array.isArray(m.tags) && m.tags.includes(tag)
  );
}

/** Filtrer par CR minimum/maximum */
export function getMonstersByCR(minCR: number, maxCR: number): GmMonster[] {
  return MQ_MONSTERS.filter((m: any) => m.cr >= minCR && m.cr <= maxCR);
}
