// -------------------------------------------------------
// 🔮 Global Adapter Loader — Mithril Engine v1
// -------------------------------------------------------

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

// Tous tes adapters centralisés ici
const ADAPTERS: Record<AdapterKey, () => any> = {
  bestiary: () => require("./bestiary.adapter").getAllBestiary(),
  spells: () => require("./spells.adapter").getAllSpells(),
  items: () => require("./items.adapter").getAllItems(),
  classes: () => require("./classes.adapter").getAllClasses(),
  races: () => require("./races.adapter").getAllRaces(),
  eras: () => require("./eras.adapter").getAllEras(),
  roles: () => require("./roles.adapter").getAllRoles(),
  factions: () => require("./factions.adapter").getAllFactions(),
  habitats: () => require("./habitats.adapter").getAllHabitats(),
  rituals: () => require("./rituals.adapter").getAllRituals(),
  gm: () => require("./gm.adapter").getGMData(),
  character: () => require("./character.adapter").getCharacterDefinitions(),
};

// -------------------------------------------------------
// API publique
// -------------------------------------------------------

// Charger un dataset : engine.load("bestiary")
export function loadAdapter(key: AdapterKey) {
  if (!ADAPTERS[key]) {
    throw new Error(`Adapter "${key}" non trouvé.`);
  }
  return ADAPTERS[key]();
}

// Charger tout : engine.loadAll()
export function loadAllAdapters() {
  return Object.fromEntries(
    (Object.keys(ADAPTERS) as AdapterKey[]).map((k) => [k, ADAPTERS[k]()])
  );
}
