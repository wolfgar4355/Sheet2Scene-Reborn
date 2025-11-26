// lib/s2s/fantasy/items/loot-tables.ts
import { FANTASY_WEAPONS } from "./weapons";
import { FANTASY_ARMORS } from "./armors";
import { FANTASY_GEAR } from "./gear";
import { FANTASY_CONSUMABLES } from "./consumables";
import { FANTASY_ARTIFACTS } from "./artifacts";
// loot de base pour coffres communs
export const COMMON_CHEST_LOOT = {
    key: "common-chest",
    label: "Coffre Commun",
    entries: [
        { weight: 5, item: FANTASY_GEAR[0] }, // corde
        { weight: 5, item: FANTASY_GEAR[1] }, // torche
        { weight: 3, item: FANTASY_CONSUMABLES[0] }, // potion mineure
        { weight: 1, item: FANTASY_WEAPONS[0] }, // épée de fer
    ],
};
// loot pour monstres faibles
export const LOW_TIER_MONSTER_LOOT = {
    key: "low-tier-monster",
    label: "Monstres de bas niveau",
    entries: [
        { weight: 5, item: FANTASY_GEAR[2] }, // pack du voyageur
        { weight: 3, item: FANTASY_CONSUMABLES[0] }, // potion mineure
        { weight: 1, item: FANTASY_WEAPONS[1] }, // bâton
    ],
};
// loot pour boss / BBEG
export const BOSS_LOOT = {
    key: "boss-loot",
    label: "Trésor de Boss",
    entries: [
        { weight: 5, item: FANTASY_WEAPONS[4] }, // épée ardente
        { weight: 3, item: FANTASY_ARMORS[4] }, // voile de brume
        { weight: 2, item: FANTASY_ARTIFACTS[0] }, // cœur de braise
        { weight: 1, item: FANTASY_ARTIFACTS[1] }, // couronne des murmures
    ],
};
export const ALL_FANTASY_LOOT_TABLES = [
    COMMON_CHEST_LOOT,
    LOW_TIER_MONSTER_LOOT,
    BOSS_LOOT,
];
