import { MQ_WORLDS } from "./data/mithril-quest/worlds";
import type { MQWorld, MQEra } from "./data/mithril-quest/types-worlds";
export declare function getWorlds(): MQWorld[];
export declare function getErasForWorld(worldId: string): MQEra[];
export default MQ_WORLDS;
