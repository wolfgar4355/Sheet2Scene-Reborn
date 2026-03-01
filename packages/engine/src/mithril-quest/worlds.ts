// packages/engine/src/mithril-quest/worlds.ts

// --- Imports ---------------------------------------------------------------

// Types (toujours depuis types-worlds.ts)
import type { MQWorld, MQEra } from "../data/mithril-quest/types-worlds";

// Données des mondes
import { MQ_WORLDS } from "../data/mithril-quest/worlds/worlds";

// Données des ères
import { MQ_ERAS } from "../data/mithril-quest/eras";

// --- Constantes ------------------------------------------------------------

export const MITHRIL_QUEST_WORLD_ID = "mithril-quest";

// --- Fonctions -------------------------------------------------------------

/** Retourne toutes les ères associées au monde donné */
export function getErasForWorld(worldId: string = MITHRIL_QUEST_WORLD_ID): MQEra[] {
  return MQ_ERAS.filter((e: MQEra) => e.worldId === worldId);
}

/** Retourne le monde principal */
export function getMainWorld(): MQWorld {
  return MQ_WORLDS.find(w => w.isMain) ?? MQ_WORLDS[0];
}

/** Liste complète des mondes */
export function getWorlds(): MQWorld[] {
  return MQ_WORLDS;
}

/** Alias utilitaire */
export function getMQWorldEras(worldId: string): MQEra[] {
  return MQ_ERAS.filter((e: MQEra) => e.worldId === worldId);
}

// --- Export par défaut -----------------------------------------------------

export default MQ_WORLDS;
