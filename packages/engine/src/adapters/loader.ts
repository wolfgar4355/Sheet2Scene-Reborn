// -----------------------------------------------------------------------------
// Global Adapter Loader — Mithril Engine v1
// -----------------------------------------------------------------------------

export type AdapterKey =
  | "bestiary"
  | "spells"
  | "items"
  | "classes"
  | "races"
  | "eras"
  | "roles"
  | "factions"
  | "habitats"
  | "rituals"
  | "gm"
  | "character";

// -----------------------------------------------------------------------------
// Imports ESM centralisés
// -----------------------------------------------------------------------------

import { getAllBestiary } from "./bestiary.adapter";
import { getAllSpells } from "./spells.adapter";
import { getAllItems } from "./items.adapter";
import { getAllClasses } from "./classes.adapter";
import { getAllRaces } from "./races.adapter";
import { getAllEras } from "./eras.adapter";
import { getAllRoles } from "./roles.adapter";
import { getAllFactions } from "./factions.adapter";
import { getAllHabitats } from "./habitats.adapter";
import { getAllRituals } from "./rituals.adapter";
import { getAllGMData } from "./gm.adapter";
import { getCharacterDefinitions } from "./character.adapter";

// -----------------------------------------------------------------------------
// Adapters centralisés
// -----------------------------------------------------------------------------

const ADAPTERS: Record<AdapterKey, () => any> = {
  bestiary: () => getAllBestiary(),
  spells: () => getAllSpells(),
  items: () => getAllItems(),
  classes: () => getAllClasses(),
  races: () => getAllRaces(),
  eras: () => getAllEras(),
  roles: () => getAllRoles(),
  factions: () => getAllFactions(),
  habitats: () => getAllHabitats(),
  rituals: () => getAllRituals(),
  gm: () => getAllGMData(),
  character: () => getCharacterDefinitions(),
};

// -----------------------------------------------------------------------------
// API publique
// -----------------------------------------------------------------------------

/**
 * Charge un dataset spécifique
 * ex : engine.load("bestiary")
 */
export function loadAdapter(key: AdapterKey) {
  const fn = ADAPTERS[key];
  if (!fn) throw new Error(`❌ Adapter "${key}" introuvable.`);
  return fn();
}

/**
 * Charge *toutes* les données du moteur
 * ex: engine.loadAll()
 */
export function loadAllAdapters() {
  const keys = Object.keys(ADAPTERS) as AdapterKey[];
  return Object.fromEntries(keys.map((k) => [k, ADAPTERS[k]()]));
}
