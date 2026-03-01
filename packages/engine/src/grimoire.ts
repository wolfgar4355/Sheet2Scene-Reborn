// src/grimoire.ts
// Loader officiel pour ton Grimoire (notes, lore, règles, etc.)

import data from "./content/grimoire/grimoire.json";

/**
 * Entrée d’un grimoire
 */
export type GrimoireEntry = {
  id: string;
  title: string;
  icon: string;
  tags: string[];
  excerpt?: string;
  body?: string;
  links?: string[];
  createdAt?: number;
  updatedAt?: number;
};

/**
 * Base de données du grimoire
 */
const GRIMOIRE: GrimoireEntry[] = data as GrimoireEntry[];

/**
 * Retourne toutes les entrées
 */
export function readAll(): GrimoireEntry[] {
  return GRIMOIRE;
}

/**
 * Recherche une entrée par ID
 */
export function readOne(id: string): GrimoireEntry | undefined {
  return GRIMOIRE.find(entry => entry.id === id);
}

export default {
  readAll,
  readOne,
};
