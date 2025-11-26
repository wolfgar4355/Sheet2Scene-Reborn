import { UniversalCreature } from "../UNIVERSAL_CREATURE";

// ========================================================
//  CONSTRUCTS — Version AAA (Mithril Engine Ready)
// ========================================================

export const constructs: UniversalCreature[] = [

/* =======================================================
   A — ARCANE AUTOMATON — CR 1
   ======================================================= */
{
  id: "arcane-automaton",
  name: "Arcane Automaton",
  rarity: "uncommon",

  type: ["construct"],
  categories: ["sentinel", "arcane"],
  biomes: ["dungeon", "ruins", "arcane-labs"],
  habitats: ["arcane-workshop", "golem-forges"],
  factions: ["clockwork", "arcanum"],

  tagsAAA: ["arcane-core", "mana-reactor", "non-organic"],
  cr: 1,

  hp: 18,
  ac: 14,
  speed: "30 ft.",

  attacks: [
    { name: "Arcane Bolt", toHit: 4, dmg: "1d8 force" }
  ],

  behavior: {
    aggression: 1,
    courage: 3,
    tactics: ["ranged-focus", "keep-distance"]
  },

  drops: ["arcane-circuit", "mana-crystal"],
  abilities: ["Overheat Burst", "Mana Surge"],

  visuals: ["floating-runes", "golem-joints", "arcane-glow"]
},

/* =======================================================
   A — STONE SENTINEL — CR 2
   ======================================================= */
{
  id: "stone-sentinel",
  name: "Stone Sentinel",
  rarity: "uncommon",

  type: ["construct"],
  categories: ["guardian"],
  biomes: ["ruins", "mountains"],
  habitats: ["old-temples", "giant-statue-halls"],
  factions: ["stonebound"],

  tagsAAA: ["heavy", "non-organic", "monolithic"],
  cr: 2,

  hp: 32,
  ac: 16,
  speed: "25 ft.",

  attacks: [
    { name: "Stone Slam", toHit: 5, dmg: "2d6 bludgeoning" }
  ],

  behavior: {
    aggression: 2,
    courage: 5,
    tactics: ["block-path", "protect-zone"]
  },

  drops: ["living-stone-core", "granite-shard"],
  abilities: ["Immovable Frame", "Energy Absorption"],

  visuals: ["cracked-stone", "glowing-sigils"]
},

/* =======================================================
   C — CLOCKWORK SOLDIER — CR 3
   ======================================================= */
{
  id: "clockwork-soldier",
  name: "Clockwork Soldier",
  rarity: "rare",

  type: ["construct"],
  categories: ["soldier"],
  biomes: ["workshops", "ruins", "city"],
  habitats: ["clockwork-factory", "steam-barracks"],
  factions: ["clockwork"],

  tagsAAA: ["mechanical", "precision-attack", "gears"],
  cr: 3,

  hp: 45,
  ac: 17,
  speed: "30 ft.",

  attacks: [
    { name: "Gearblade Slash", toHit: 6, dmg: "1d10 slashing" }
  ],

  behavior: {
    aggression: 3,
    courage: 4,
    tactics: ["auto-parry", "advance-and-strike"]
  },

  drops: ["steel-spring", "clockwork-core"],
  abilities: ["Auto-Counter", "Winding Surge"],

  visuals: ["whirring-gears", "steam-vents", "metal-plates"]
},

/* =======================================================
   O — OBSIDIAN GOLEM — CR 5
   ======================================================= */
{
  id: "obsidian-golem",
  name: "Obsidian Golem",
  rarity: "elite",

  type: ["construct"],
  categories: ["brute"],
  biomes: ["lava-fields", "ruins", "infernal-zones"],
  habitats: ["obsidian-forges", "demon-workshops"],
  factions: ["infernal"],

  tagsAAA: ["superheated-body", "dark-core", "non-organic"],
  cr: 5,

  hp: 102,
  ac: 18,
  speed: "30 ft.",

  attacks: [
    { name: "Obsidian Fist", toHit: 7, dmg: "2d10 fire + 2d6 bludgeoning" }
  ],

  behavior: {
    aggression: 4,
    courage: 5,
    tactics: ["magma-trail", "smash-frontline"]
  },

  drops: ["obsidian-fragment", "molten-heart"],
  abilities: ["Molten Body", "Lava Burst"],

  visuals: ["cracked-magma-skin", "lava-veins"]
},

/* =======================================================
   A — ASTRAL WATCHER — CR 7
   ======================================================= */
{
  id: "astral-watcher",
  name: "Astral Watcher",
  rarity: "legendary",

  type: ["construct"],
  categories: ["mystic", "sentinel"],
  biomes: ["astral", "void"],
  habitats: ["astral-sanctuary", "null-zone"],
  factions: ["arcanum"],

  tagsAAA: ["levitation", "void-shield", "anti-magic"],
  cr: 7,

  hp: 130,
  ac: 19,
  speed: "Hover 30 ft.",

  attacks: [
    { name: "Void Beam", toHit: 8, dmg: "3d10 force" }
  ],

  behavior: {
    aggression: 2,
    courage: 5,
    tactics: ["zone-denial", "magic-suppression"]
  },

  drops: ["astral-shard", "null-core"],
  abilities: ["Null Field", "Levitation", "Disrupt Magic"],

  visuals: ["floating-sphere", "glowing-runes", "gravity-distortion"]
},

];

export default constructs;
