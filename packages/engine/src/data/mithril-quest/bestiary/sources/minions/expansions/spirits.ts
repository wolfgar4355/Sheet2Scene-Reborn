import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* CANDLE SPIRIT — CR 1 */
/* ------------------------------------------------------------ */
{
  id: "candle-spirit",
  name: "Candle Spirit",
  cr: 1,
  biomes: ["dungeon", "crypt", "ruins"],
  habitat: ["forgotten-altars", "burial-chambers"],
  category: "spirit",
  role: "lurker",
  tags: ["ghostly", "flicker", "undead-lite"],
  factions: ["Spirit Wardens"],
  behavior: {
    aggression: 2,
    courage: 4,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["flicker-near-targets"]
  stats: {
    hp: 18,
    ac: 10,
    atk: 10,
    dmg: "1d6 radiant",
    speed: "10 ft, hover 30 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["flicker-wax"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Flickering Glow", "Flicker Step"],
},

/* ------------------------------------------------------------ */
/* WRAITHLING — CR 3 */
/* ------------------------------------------------------------ */
{
  id: "wraithling",
  name: "Wraithling",
  cr: 3,
  biomes: ["shadowlands", "crypts"],
  habitat: ["grave-corridors", "sorrow-chasms"],
  category: "spirit",
  role: "skirmisher",
  tags: ["shadow", "fear"],
  factions: ["Nether Wraiths"],
  behavior: {
    aggression: 4,
    courage: 3,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["hit-and-fade"]
  stats: {
    hp: 36,
    ac: 14,
    atk: 14,
    dmg: "2d6 necrotic",
    speed: "40 ft, hover 40 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["cold-shards"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Shadow Touch", "Ethereal Drift"],
},

/* ------------------------------------------------------------ */
/* GRAVE WHISPERER — CR 4 */
/* ------------------------------------------------------------ */
{
  id: "grave-whisperer",
  name: "Grave Whisperer",
  cr: 4,
  biomes: ["graveyard", "crypt", "ruins"],
  habitat: ["ossuary-halls", "mourning-niches"],
  category: "spirit",
  role: "controller",
  tags: ["poltergeist", "possession"],
  factions: ["Spirit Wardens"],
  behavior: {
    aggression: 3,
    courage: 5,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["psychic-scream-then-possess"]
  stats: {
    hp: 52,
    ac: 13,
    atk: 16,
    dmg: "2d8 psychic",
    speed: "20 ft, hover 40 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["whispering-bone"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Mortifying Wail", "Mind Grip", "Possess Corpse"],
},

/* ------------------------------------------------------------ */
/* ANCESTRAL GUARDIAN — CR 6 */
/* ------------------------------------------------------------ */
{
  id: "ancestral-guardian",
  name: "Ancestral Guardian",
  cr: 6,
  biomes: ["sacred-woods", "mountain-shrines"],
  habitat: ["ancestral-groves", "ancestor-stones"],
  category: "spirit",
  role: "bruiser",
  tags: ["guardian", "ancient"],
  factions: ["Ancestor Courts"],
  behavior: {
    aggression: 4,
    courage: 7,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["protect-sacred-zone"]
  stats: {
    hp: 110,
    ac: 17,
    atk: 18,
    dmg: "2d10 radiant",
    speed: "35 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["ancestral-sigil"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Radiant Slam", "Guardian Shield", "Sanctified Light"],
},

/* ------------------------------------------------------------ */
/* SOUL TEMPEST — CR 10 (ELITE SPIRIT BOSS) */
/* ------------------------------------------------------------ */
{
  id: "soul-tempest",
  name: "Soul Tempest",
  cr: 10,
  biomes: ["soulstorm-wastes", "temporal-zones"],
  habitat: ["echo-nexus", "spirit-wells"],
  category: "spirit",
  role: "controller",
  tags: ["spectral", "storm", "soul", "aoe"],
  factions: ["Echo Choirs"],
  behavior: {
    aggression: 6,
    courage: 8,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["scatter-party-then-aoe-pulse"]
  stats: {
    hp: 180,
    ac: 18,
    atk: 20,
    dmg: "3d10 psychic + soul drain",
    speed: "hover 60 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["resonant-crystal", "tempest-essence"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: [
    "Soul Screech",
    "Spirit Pulse",
    "Astral Sunder",
    "Temporal Disruption",
  ],
},

];

export default MINIONS;
