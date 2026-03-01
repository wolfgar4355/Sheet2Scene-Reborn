import type { MQWorld, MQEra } from "../data/mithril-quest/types-worlds";
import { MQ_WORLDS } from "../data/mithril-quest/worlds/worlds";
export declare const MITHRIL_QUEST_WORLD_ID = "mithril-quest";
/** Retourne toutes les ères associées au monde donné */
export declare function getErasForWorld(worldId?: string): MQEra[];
/** Retourne le monde principal */
export declare function getMainWorld(): MQWorld;
/** Liste complète des mondes */
export declare function getWorlds(): MQWorld[];
/** Alias utilitaire */
export declare function getMQWorldEras(worldId: string): MQEra[];
export default MQ_WORLDS;
