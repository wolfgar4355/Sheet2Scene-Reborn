// src/adapters/rituals.adapter.ts
// Adapter propre pour les rituels (sources + ALL_RITUALS fusionné)

// Import des sources individuelles
import * as RitualSources from "../data/mithril-quest/rituals/sources";
// Import du pack fusionné
import ALL_RITUALS from "../data/mithril-quest/rituals/ALL_RITUALS";

/**
 * Retourne toutes les sources individuelles
 * (arcane, divine, nature, nécromancie, esprit, etc.)
 */
export function getRitualSources() {
  return RitualSources;
}

/**
 * Retourne la liste complète de tous les rituels fusionnés
 * contenus dans ALL_RITUALS.
 */
export function getAllRituals() {
  return ALL_RITUALS;
}

/**
 * Retourne un rituel spécifique à partir d'un nom
 * (insensible à la casse).
 * Renvoie null si aucun rituel ne correspond.
 */
export function getRitualByName(name: string) {
const all = Object.fromEntries(
  ALL_RITUALS.map((r) => [r.id, r])
);
  const key = name.toLowerCase();

  // Normalisation des clés pour éviter tout mismatch de casse
  for (const ritualName of Object.keys(all)) {
    if (ritualName.toLowerCase() === key) {
      return all[ritualName];
    }
  }

  return null;
}
