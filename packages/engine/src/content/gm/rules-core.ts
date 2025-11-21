// lib/s2s/fantasy/gm/rules-core.ts

/**
 * RÈGLES DE BASE — Sheet2Scene Fantasy
 * (version 100% originale & légale)
 */

export interface DifficultyClass {
  label: string;
  dc: number;
  description: string;
}

export const CORE_DIFFICULTIES: DifficultyClass[] = [
  { label: "Très facile", dc: 5, description: "Une tâche que presque tout le monde peut faire." },
  { label: "Facile", dc: 10, description: "Demande un peu d’attention." },
  { label: "Moyenne", dc: 15, description: "Un aventurier standard a 50% de chance de réussir." },
  { label: "Difficile", dc: 20, description: "Nécessite expertise ou chance." },
  { label: "Très difficile", dc: 25, description: "Réservée aux experts." },
  { label: "Quasi impossible", dc: 30, description: "Seuls les héros légendaires peuvent y parvenir." },
];

export interface AbilityCheck {
  ability: string; // str, dex, wis, etc.
  difficulty: DifficultyClass;
  modifier: number;
}

export function resolveCheck(check: AbilityCheck): boolean {
  const roll = Math.floor(Math.random() * 20) + 1;
  return roll + check.modifier >= check.difficulty.dc;
}

export const ACTION_TYPES = [
  "Action",
  "Bonus Action",
  "Réaction",
  "Mouvement",
] as const;

export type ActionType = typeof ACTION_TYPES[number];
