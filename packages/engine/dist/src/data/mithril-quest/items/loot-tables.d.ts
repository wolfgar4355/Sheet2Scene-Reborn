import type { AnyItem } from "./types";
export interface LootTableEntry {
    weight: number;
    item: AnyItem;
}
export interface LootTable {
    key: string;
    label: string;
    entries: LootTableEntry[];
}
export declare const COMMON_CHEST_LOOT: LootTable;
export declare const LOW_TIER_MONSTER_LOOT: LootTable;
export declare const BOSS_LOOT: LootTable;
export declare const ALL_FANTASY_LOOT_TABLES: LootTable[];
