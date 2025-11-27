import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* GRIFFON — CR 2                                               */
/* ------------------------------------------------------------ */
{
  id: "griffon",
  name: "Griffon",
  cr: 2,
  biomes: ["mountains", "hills", "savanna"],
  habitat: ["sky-cliffs", "eagle-criers"],
  category: "magical-beast",
  role: "striker",
  factions: ["wildwood-tribes"],
  tags: ["flying", "predator"],
  behavior: {
    aggression: 4,
    courage: 3,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["fly-by-attack"]
  stats: {
    hp: 52,
    ac: 13,
    atk: 15,
    dmg: "1d8 + 2d6",
    speed: "40 ft, fly 80 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["griffon-feather", "beak-fragment"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Talon Swipe", "Dive Attack"],
},

/* ------------------------------------------------------------ */
/* UNICORN — CR 5                                               */
/* ------------------------------------------------------------ */
{
  id: "unicorn",
  name: "Unicorn",
  cr: 5,
  biomes: ["forest", "feywild"],
  habitat: ["sacred-groves", "ancient-glade"],
  category: "magical-beast",
  role: "mystic",
  factions: ["ashen-seers"],
  tags: ["holy", "protector"],
  behavior: {
    aggression: 2,
    courage: 6,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["charge"]
  stats: {
    hp: 68,
    ac: 15,
    atk: 14,
    dmg: "1d8 radiant / horn",
    speed: "50 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["unicorn-horn", "forest-horn-shard"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Healing Touch", "Teleport", "Magic Assistance"],
},

/* ------------------------------------------------------------ */
/* MANTICORE — CR 3                                             */
/* ------------------------------------------------------------ */
{
  id: "manticore",
  name: "Manticore",
  cr: 3,
  biomes: ["desert", "badlands", "ruins"],
  habitat: ["scorpion-crags", "ancient-steppes"],
  category: "magical-beast",
  role: "striker",
  factions: ["red-knives"],
  tags: ["spikes", "flying"],
  behavior: {
    aggression: 5,
    courage: 3,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["spike-volley"]
  stats: {
    hp: 56,
    ac: 14,
    atk: 14,
    dmg: "1d8 / spike-volley (1d8+3)",
    speed: "40 ft, fly 50 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["manticore-spike", "manticore-hide"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Spike Volley", "Lion's Fury"],
},

/* ------------------------------------------------------------ */
/* BASILISK — CR 6                                              */
/* ------------------------------------------------------------ */
{
  id: "basilisk",
  name: "Basilisk",
  cr: 6,
  biomes: ["cavern", "underdark", "swamp"],
  habitat: ["deep-stone", "fungal-deeps"],
  category: "magical-beast",
  role: "controller",
  factions: ["void-cult"],
  tags: ["petrify"],
  behavior: {
    aggression: 5,
    courage: 4,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["petrifying-gaze"]
  stats: {
    hp: 85,
    ac: 15,
    atk: 15,
    dmg: "1d10 + 4",
    speed: "30 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["basilisk-eye", "stone-scale"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Petrifying Gaze"],
},

/* ------------------------------------------------------------ */
/* CHIMERA — CR 6                                               */
/* ------------------------------------------------------------ */
{
  id: "chimera",
  name: "Chimera",
  cr: 6,
  biomes: ["mountains", "ruins"],
  habitat: ["dragon-ridges", "volcanic-ledges"],
  category: "magical-beast",
  role: "predator",
  factions: ["wildwood-tribes"],
  tags: ["multi-head", "fire"],
  behavior: {
    aggression: 6,
    courage: 5,
  },
  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["bite-claw-maul"]
  stats: {
    hp: 114,
    ac: 14,
    atk: 16,
    dmg: "1d10+4 / 2d6 / fire breath 20ft",
    speed: "40 ft, fly 60 ft",
  },
  // NOTE (fix-fantasy v2 auto-commented)
loot: ["lion-horn", "dragon-scale", "goat-horn"],
  // NOTE (fix-fantasy v2 auto-commented)
abilities: ["Fire Breath", "Multiattack"],
},

];

export default MINIONS;
