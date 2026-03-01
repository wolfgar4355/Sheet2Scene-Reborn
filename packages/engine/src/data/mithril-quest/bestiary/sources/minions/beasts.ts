// @ts-nocheck
import { UniversalCreature } from "../../UNIVERSAL_CREATURE";

export const beasts: UniversalCreature[] = [

  //──────────────────────────────
  // WOLF — CR 0.25
  //──────────────────────────────
  {
    id: "wolf",
    name: "Wolf",
    rarity: "common",
    type: "beast",
    categories: ["beasts"],
    biomes: ["forest", "hills", "tundra"],
    habitats: ["forest", "deep-forest", "tundra"],
    factions: [],
    tagsAAA: ["pack", "tracker"],
    cr: 0.25,

    hp: 11,
    ac: 13,
    speed: ["land:40"],

    attacks: [
      {
        name: "Bite",
        bonus: +4,
        damage: "2d4+2 piercing",
      },
    ],

    behavior: {
      aggression: "hunter",
      confidence: "courage:4",
      tactics: ["pack-attack"],
    },

    drops: ["wolf-pelt", "wolf-teeth"],
    abilities: ["Keen Hearing", "Pack Tactics"],

    visuals: {
      icon: "wolf",
      keywords: ["fur", "quadruped"],
    },
  },

  //──────────────────────────────
  // GIANT RAT — CR 0.125
  //──────────────────────────────
  {
    id: "giant-rat",
    name: "Giant Rat",
    rarity: "common",
    type: "beast",
    categories: ["beasts"],
    biomes: ["urban", "ruins", "sewers"],
    habitats: ["tunnels", "ruins"],
    factions: [],
    tagsAAA: ["swarm", "vermin"],
    cr: 0.125,

    hp: 7,
    ac: 12,
    speed: ["land:30"],

    attacks: [
      {
        name: "Bite",
        bonus: +4,
        damage: "1d4+2 piercing",
      },
    ],

    behavior: {
      aggression: "scavenger",
      confidence: "coward",
      tactics: ["harass"],
    },

    drops: ["rat-tail"],
    abilities: [],

    visuals: {
      icon: "rat",
      keywords: ["rodent"],
    },
  },

  //──────────────────────────────
  // BLACK BEAR — CR 1
  //──────────────────────────────
  {
    id: "black-bear",
    name: "Black Bear",
    rarity: "common",
    type: "beast",
    categories: ["beasts"],
    biomes: ["forest", "mountains"],
    habitats: ["forest", "hill-forest", "mountain-base"],
    factions: [],
    tagsAAA: ["brute"],
    cr: 1,

    hp: 34,
    ac: 11,
    speed: ["land:40", "climb:30"],

    attacks: [
      {
        name: "Multiattack",
        bonus: +5,
        damage: "1d6+3 claw + 1d8+3 bite",
      },
    ],

    behavior: {
      aggression: "territorial",
      confidence: "courage:6",
      tactics: ["rush-and-maul"],
    },

    drops: ["bear-pelt", "bear-meat"],
    abilities: [],

    visuals: {
      icon: "bear",
      keywords: ["fur", "brute"],
    },
  },

  //──────────────────────────────
  // GIANT SPIDER — CR 1
  //──────────────────────────────
  {
    id: "giant-spider",
    name: "Giant Spider",
    rarity: "uncommon",
    type: "beast",
    categories: ["beasts"],
    biomes: ["forest", "swamp", "caves"],
    habitats: ["web-lairs", "deep-forest", "swamp", "caves"],
    factions: [],
    tagsAAA: ["poison", "web"],
    cr: 1,

    hp: 26,
    ac: 14,
    speed: ["land:40", "climb:40"],

    attacks: [
      {
        name: "Bite",
        bonus: +4,
        damage: "1d8+2 piercing + 2d8 poison",
      },
      {
        name: "Web",
        bonus: +5,
        damage: "Restrains target",
      },
    ],

    behavior: {
      aggression: "ambusher",
      confidence: "courage:3",
      tactics: ["ambush"],
    },

    drops: ["spider-venom", "silk-thread"],
    abilities: ["Web Shot", "Poison Bite"],

    visuals: {
      icon: "spider",
      keywords: ["legs", "web"],
    },
  },

  //──────────────────────────────
  // DIRE WOLF — CR 1
  //──────────────────────────────
  {
    id: "dire-wolf",
    name: "Dire Wolf",
    rarity: "elite",
    type: "beast",
    categories: ["beasts"],
    biomes: ["forest", "hills", "tundra"],
    habitats: ["forest", "deep-forest", "tundra"],
    factions: [],
    tagsAAA: ["pack", "alpha"],
    cr: 1,

    hp: 37,
    ac: 14,
    speed: ["land:50"],

    attacks: [
      {
        name: "Bite",
        bonus: +5,
        damage: "2d6+3 piercing",
      },
    ],

    behavior: {
      aggression: "hunter",
      confidence: "courage:8",
      tactics: ["alpha-pounce"],
    },

    drops: ["thick-fur", "wolf-bone"],
    abilities: ["Pack Tactics"],

    visuals: {
      icon: "dire-wolf",
      keywords: ["large", "wolf"],
    },
  },
];
