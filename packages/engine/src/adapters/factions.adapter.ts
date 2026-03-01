// src/adapters/factions.adapter.ts

// ⚠️ Important : on remonte d’un seul dossier (../), pas ../../
// car `adapters` et `data` sont au même niveau sous `src/`.
import { FACTIONS } from "../data/mithril-quest/factions";

// Identifiant d’une faction = clé de l’objet FACTIONS
export type FactionId = keyof typeof FACTIONS;

// Forme normalisée d’une faction pour le moteur / l’UI
export interface Faction {
  id: FactionId;
  label: (typeof FACTIONS)[FactionId];
}

/**
 * Retourne toutes les factions sous forme de tableau.
 */
export function getAllFactions(): Faction[] {
  return Object.entries(FACTIONS).map(([id, label]) => ({
    id: id as FactionId,
    label: label as (typeof FACTIONS)[FactionId],
  }));
}

/**
 * Retourne une faction précise. Si l’id est inconnu, renvoie null.
 */
export function getFaction(id: FactionId): Faction | null {
  const label = FACTIONS[id];

  if (!label) {
    return null;
  }

  return { id, label };
}
