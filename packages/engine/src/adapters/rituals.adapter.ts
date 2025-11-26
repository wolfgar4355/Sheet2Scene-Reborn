import * as RitualSources from "@/content/fantasy/rituals/sources";
import ALL_RITUALS from "@/content/fantasy/rituals/ALL_RITUALS";

/**
 * Retourne toutes les sources individuelles (arcane, divine, nature, necromancy, spirit)
 */
export function getRitualSources() {
  return RitualSources;
}

/**
 * Retourne la liste complète des rituels fusionnés dans ALL_RITUALS.ts
 */
export function getAllRituals() {
  return ALL_RITUALS;
}

/**
 * Retourne un rituel spécifique
 */
export function getRitualByName(name: string) {
  const all = ALL_RITUALS;

  return all[name.toLowerCase()] || null;
}
