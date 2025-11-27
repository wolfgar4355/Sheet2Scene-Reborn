import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* --------------------------------------------------------- */
/*                           IMP — CR 1                      */
/* --------------------------------------------------------- */
{
  id: "imp",
  name: "Imp",
  cr: 1,
  biomes: ["infernal-zones", "ruins", "underdark"],
  habitat: ["sulfur-pits", "lava-vents", "hellwatch-towers"],
  category: "fiend",
  role: "skirmisher",
  factions: ["iron-dominion", "pact-forge"],
  tags: ["invisible", "flying"],
  behavior: {
    aggression: 2,
    courage: 3,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["poison-sting"]
  stats: {
    hp: 22,
    ac: 13,
    atk: 11,
    dmg: "1d4 piercing + poison",
    speed: "20 ft, fly 40 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["hellish-ichor"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Invisibility", "Devil’s Sight", "Poison Sting"],
},

/* --------------------------------------------------------- */
/*                       QUASIT — CR 1                      */
/* --------------------------------------------------------- */
{
  id: "quasit",
  name: "Quasit",
  cr: 1,
  biomes: ["nether-lands", "swamp", "ruins"],
  habitat: ["demon-breaches", "abyssal-fog-pockets"],
  category: "fiend",
  role: "controller",
  factions: ["abyssal-swarms"],
  tags: ["sneak", "invisibility"],
  behavior: {
    aggression: 3,
    courage: 2,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["fear-spike"]
  stats: {
    hp: 18,
    ac: 13,
    atk: 10,
    dmg: "1d6 claws",
    speed: "40 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["nether-dust"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Scare", "Invisibility", "Shapechanger"],
},

/* --------------------------------------------------------- */
/*                     BARBGURA — CR 2                      */
/* --------------------------------------------------------- */
{
  id: "barbgura",
  name: "Barbgura",
  cr: 2,
  biomes: ["infernal-zones", "cavern", "swamp"],
  habitat: ["demon-cysts", "demon-narrows"],
  category: "fiend",
  role: "bruiser",
  factions: ["abyssal-swarms"],
  tags: ["demon", "rage"],
  behavior: {
    aggression: 5,
    courage: 3,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["leap-and-maul"]
  stats: {
    hp: 56,
    ac: 14,
    atk: 15,
    dmg: "2d6+4",
    speed: "40 ft, climb 40 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["demonic-ichor"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Frenzied Leap", "Reckless Assault"],
},

/* --------------------------------------------------------- */
/*                   BARBED DEVIL — CR 5                    */
/* --------------------------------------------------------- */
{
  id: "barbed-devil",
  name: "Barbed Devil",
  cr: 5,
  biomes: ["infernal-zones", "ruins"],
  habitat: ["iron-fortresses", "brim-barracks"],
  category: "fiend",
  role: "striker",
  factions: ["iron-dominion"],
  tags: ["fire-resistance", "spiked"],
  behavior: {
    aggression: 4,
    courage: 4,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["barb-sprint", "spike-barrage"]
  stats: {
    hp: 96,
    ac: 16,
    atk: 18,
    dmg: "2d6+4 (spike barrage)",
    speed: "40 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["infernal-spine"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Hurl Flame", "Spined Body", "Magic Resistance"],
},

/* --------------------------------------------------------- */
/*                     BONE DEVIL — CR 7                    */
/* --------------------------------------------------------- */
{
  id: "bone-devil",
  name: "Bone Devil",
  cr: 7,
  biomes: ["infernal-zones", "underdark"],
  habitat: ["soul-furnaces", "abyssal-pits"],
  category: "fiend",
  role: "predator",
  factions: ["pact-forge", "soul-ledgers"],
  tags: ["stinger", "menace"],
  behavior: {
    aggression: 5,
    courage: 5,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["impale-and-bleed"]
  stats: {
    hp: 120,
    ac: 17,
    atk: 19,
    dmg: "2d8+6 slashing + poison",
    speed: "40 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["bone-shard-of-hell"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Paralyzing Tail", "Devil’s Sight", "Magic Resistance"],
},

/* --------------------------------------------------------- */
/*                   SHADOW DEMON — CR 8                    */
/* --------------------------------------------------------- */
{
  id: "shadow-demon",
  name: "Shadow Demon",
  cr: 8,
  biomes: ["shadowlands", "dungeon", "ruins"],
  habitat: ["void-rifts", "eternal-gloom"],
  category: "fiend",
  role: "infiltrator",
  factions: ["shadow-covenant"],
  tags: ["incorporeal", "fear"],
  behavior: {
    aggression: 4,
    courage: 5,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["ambush-from-shadows"]
  stats: {
    hp: 112,
    ac: 15,
    atk: 18,
    dmg: "2d10 necrotic",
    speed: "40 ft, fly 60 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["ethereal-sulfurshard"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Incorporeal Movement", "Shadow Stealth", "Horrifying Visage"],
},

];

export default MINIONS;
