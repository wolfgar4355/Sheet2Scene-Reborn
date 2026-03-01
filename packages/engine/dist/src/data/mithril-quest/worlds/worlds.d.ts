import type { MQWorld } from "../types-worlds";
export declare const MQ_WORLDS: MQWorld[];
export declare function getWorld(id: string): MQWorld | null;
export declare function getWorlds(): MQWorld[];
export declare function getMainWorld(): MQWorld;
export default MQ_WORLDS;
export type { MQWorld };
