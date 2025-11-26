// src/adapters/eras.adapter.ts

// Importe directement ton contenu Fantasy
import * as ERAS from "../content/fantasy/eras";

// Type générique : chaque ERA possède au moins une clé `id` et `name`.
export type Era = {
  id: string;
  name: string;
  description?: string;
  timeline?: string[];
  tags?: string[];
  [key: string]: any; // ← accepte TOUT ce que tu ajoutes plus tard
};

/**
 * Récupère toutes les ères (ALL_ERAS.ts + sources/*.ts)
 */
export function getAllEras(): Era[] {
  // Object.values suffit car ton index.ts exporte les ères déjà fusionnées
  // Version clean, robuste, compatible futur
  return Object.values(ERAS).flat();
}

/**
 * Récupère une ère par son ID
 */
export function getEraById(id: string): Era | undefined {
  return getAllEras().find((era) => era.id === id);
}
