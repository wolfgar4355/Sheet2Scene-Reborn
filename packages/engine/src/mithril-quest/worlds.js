// packages/engine/src/mithril-quest/worlds.ts
// On se branche DIRECT sur ton contenu Fantasy
// (3 niveaux de .. : packages/engine/src -> packages -> root -> src)
import * as FantasyWorlds from "../../../src/content/fantasy/worlds";
import * as FantasyEras from "../../../src/content/fantasy/eras";
// 🔹 ID canonique du monde Fantasy principal
export const MITHRIL_QUEST_WORLD_ID = "mithril-quest";
// On expose ce que le moteur a besoin de voir
export const MQ_WORLDS = FantasyWorlds.WORLDS ?? FantasyWorlds.default ?? [];
export const MQ_ERAS = FantasyEras.ALL_ERAS ?? FantasyEras.ERAS ?? [];
// Helpers pratiques pour le moteur / UI
export function getMithrilQuestWorld() {
    return MQ_WORLDS.find((w) => w.id === MITHRIL_QUEST_WORLD_ID) ?? MQ_WORLDS[0];
}
export function getErasForWorld(worldId = MITHRIL_QUEST_WORLD_ID) {
    return MQ_ERAS.filter((e) => e.worldId === worldId);
}
