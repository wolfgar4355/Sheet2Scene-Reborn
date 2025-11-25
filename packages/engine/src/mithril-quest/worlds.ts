// packages/engine/src/mithril-quest/worlds.ts

// On se branche DIRECT sur ton contenu Fantasy
// (3 niveaux de .. : packages/engine/src -> packages -> root -> src)
import * as FantasyWorlds from "../../../src/content/fantasy/worlds";
import * as FantasyEras from "../../../src/content/fantasy/eras";
import type { WorldId } from "../types/worlds";    // adapte si ton type s'appelle autrement
import type { EraId } from "../types/worlds";      // idem

// 🔹 ID canonique du monde Fantasy principal
export const MITHRIL_QUEST_WORLD_ID = "mithril-quest" as const;

// On expose ce que le moteur a besoin de voir
export const MQ_WORLDS = FantasyWorlds.WORLDS ?? FantasyWorlds.default ?? [];
export const MQ_ERAS   = FantasyEras.ALL_ERAS ?? FantasyEras.ERAS ?? [];

// Helpers pratiques pour le moteur / UI
export function getMithrilQuestWorld() {
  return MQ_WORLDS.find((w: any) => w.id === MITHRIL_QUEST_WORLD_ID) ?? MQ_WORLDS[0];
}

export function getErasForWorld(worldId: WorldId | EraId = MITHRIL_QUEST_WORLD_ID as any) {
  return MQ_ERAS.filter((e: any) => e.worldId === worldId);
}
