// src/adapters/factions.adapter.ts

import FACTIONS from "../../content/fantasy/factions";

export type Faction = keyof typeof FACTIONS;

export function getAllFactions() {
  return Object.entries(FACTIONS).map(([id, label]) => ({
    id,
    label,
  }));
}

export function getFaction(id: Faction) {
  return {
    id,
    label: FACTIONS[id],
  };
}
