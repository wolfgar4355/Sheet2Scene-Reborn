// -----------------------------------------------------------------------------
// getWorlds.ts — API interne pour récupérer Worlds + Eras Mithril-Quest
// -----------------------------------------------------------------------------

import { MQ_WORLDS } from "./data/mithril-quest/worlds";
import { MQ_ERAS } from "./data/mithril-quest/eras";

// Types officiels
import type { MQWorld, MQEra } from "./data/mithril-quest/types-worlds";

// Retourne tous les mondes MQ
export function getWorlds(): MQWorld[] {
  return MQ_WORLDS;
}

// Retourne toutes les époques pour un monde
export function getErasForWorld(worldId: string): MQEra[] {
  return MQ_ERAS.filter((e) => e.worldId === worldId);
}

export default MQ_WORLDS;
