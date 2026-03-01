import type { MQPotion } from "./potions";
import type { MQScroll } from "./scrolls";
export type MQConsumable = MQPotion | MQScroll;
export declare const MQ_CONSUMABLES: MQConsumable[];
export declare const MQ_CONSUMABLES_BY_TYPE: {
    potions: MQPotion[];
    scrolls: MQScroll[];
};
export declare const findConsumable: (key: string) => MQConsumable | undefined;
export declare const filterConsumablesByTag: (tag: string) => MQConsumable[];
export default MQ_CONSUMABLES;
