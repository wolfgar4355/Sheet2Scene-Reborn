// -------------------------------------------------------
// 🔮 Global Adapter Loader — Mithril Engine v1
// -------------------------------------------------------
// Tous tes adapters centralisés ici
const ADAPTERS = {
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
export function loadAdapter(key) {
    if (!ADAPTERS[key]) {
        throw new Error(`Adapter "${key}" non trouvé.`);
    }
    return ADAPTERS[key]();
}
// Charger tout : engine.loadAll()
export function loadAllAdapters() {
    return Object.fromEntries(Object.keys(ADAPTERS).map((k) => [k, ADAPTERS[k]()]));
}
