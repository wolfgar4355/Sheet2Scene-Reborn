import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* --------------------------------------------------------- */
/*                     AIR ELEMENTAL — CR 5                  */
/* --------------------------------------------------------- */
{
  id: "air-elemental",
  name: "Air Elemental",
  cr: 5,
  biomes: ["sky", "desert", "mountains"],
  habitat: ["storm-clouds", "wind-temple"],
  category: "elemental",
  role: "skirmisher",
  factions: ["tempest-court"],
  tags: ["flying", "wind"],
  behavior: {
    aggression: 4,
    courage: 3,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["hit-and-drift"]
  stats: {
    hp: 90,
    ac: 15,
    atk: 14,
    dmg: "2d8 bludgeoning",
    speed: "fly 90 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["air-essence"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Whirlwind", "Incorporeal Drift"],
},

/* --------------------------------------------------------- */
/*                    EARTH ELEMENTAL — CR 5                 */
/* --------------------------------------------------------- */
{
  id: "earth-elemental",
  name: "Earth Elemental",
  cr: 5,
  biomes: ["caves", "mountains", "underground"],
  habitat: ["deep-caverns", "geomantic-core"],
  category: "elemental",
  role: "brute",
  factions: ["stonewardens"],
  tags: ["burrower", "stone"],
  behavior: {
    aggression: 5,
    courage: 5,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["burrow-ambush"]
  stats: {
    hp: 126,
    ac: 17,
    atk: 15,
    dmg: "2d8+5 bludgeoning",
    speed: "30 ft, burrow 30 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["earth-essence"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Earth Glide", "Ground Slam"],
},

/* --------------------------------------------------------- */
/*                    FIRE ELEMENTAL — CR 5                  */
/* --------------------------------------------------------- */
{
  id: "fire-elemental",
  name: "Fire Elemental",
  cr: 5,
  biomes: ["volcano", "desert", "forge"],
  habitat: ["lava-pools", "blazing-furnace"],
  category: "elemental",
  role: "controller",
  factions: ["inferno-kin"],
  tags: ["ignite", "flame"],
  behavior: {
    aggression: 5,
    courage: 4,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["burn-through-lines"]
  stats: {
    hp: 102,
    ac: 14,
    atk: 15,
    dmg: "2d6 fire",
    speed: "50 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["fire-essence"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Flame Form", "Ignite", "Blazing Trail"],
},

/* --------------------------------------------------------- */
/*                    WATER ELEMENTAL — CR 5                 */
/* --------------------------------------------------------- */
{
  id: "water-elemental",
  name: "Water Elemental",
  cr: 5,
  biomes: ["coast", "river", "lake", "swamp"],
  habitat: ["whirlpools", "deep-lagoons"],
  category: "elemental",
  role: "controller",
  factions: ["tideborn"],
  tags: ["water", "tidal"],
  behavior: {
    aggression: 3,
    courage: 4,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["engulf-and-drown"]
  stats: {
    hp: 114,
    ac: 14,
    atk: 14,
    dmg: "2d8+4 bludgeoning",
    speed: "30 ft, swim 90 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["water-essence"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Engulf", "Liquid Form"],
},

/* --------------------------------------------------------- */
/*                    MAGMA ELEMENTAL — CR 6                 */
/* --------------------------------------------------------- */
{
  id: "magma-elemental",
  name: "Magma Elemental",
  cr: 6,
  biomes: ["volcano", "infernal-zones"],
  habitat: ["magma-chambers", "molten-fissure"],
  category: "elemental",
  role: "brute",
  factions: ["inferno-kin"],
  tags: ["firecore", "lava"],
  behavior: {
    aggression: 5,
    courage: 5,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["eruption-charge"]
  stats: {
    hp: 130,
    ac: 16,
    atk: 16,
    dmg: "2d10+5 fire",
    speed: "30 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["magma-core"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Lava Burst", "Molten Body", "Eruption Step"],
},

/* --------------------------------------------------------- */
/*                    STORM ELEMENTAL — CR 7                 */
/* --------------------------------------------------------- */
{
  id: "storm-elemental",
  name: "Storm Elemental",
  cr: 7,
  biomes: ["thunderclouds", "coast", "sky"],
  habitat: ["tempest-nexus", "storm-spire"],
  category: "elemental",
  role: "elite-controller",
  factions: ["tempest-court"],
  tags: ["lightning", "thunder"],
  behavior: {
    aggression: 4,
    courage: 6,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["aoe-burst-then-hover"]
  stats: {
    hp: 140,
    ac: 16,
    atk: 17,
    dmg: "2d10 lightning / thunder pulse 4d8",
    speed: "fly 90 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["storm-essence"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Lightning Burst", "Thunder Pulse", "Storm Shield"],
},

];

export default MINIONS;
