import { UniversalCreature } from "../../UNIVERSAL_CREATURE";

export const aberrations: UniversalCreature[] = [

  //──────────────────────────────
  // GRELL — CR 3
  //──────────────────────────────
  {
    id: "grell",
    name: "Grell",
    rarity: "elite",
    type: "aberration",
    categories: ["aberrations"],
    biomes: ["underdark", "dungeon", "caves"],
    habitats: ["ceiling-nests", "flesh-lairs"],
    factions: [],
    tagsAAA: ["levitation", "tentacles", "paralysis"],
    cr: 3,

    // Combat
    hp: 55,
    ac: 14,
    speed: ["fly:20"],

    attacks: [
      {
        name: "Tentacle",
        bonus: +5,
        damage: "1d10 piercing + paralysis",
      },
    ],

    behavior: {
      aggression: "lurker",
      confidence: "coward",
      tactics: ["descend-silently-and-grapple"],
    },

    drops: ["neural-tentacle"],
    abilities: ["Paralyzing Tentacles", "Silent Glide"],

    visuals: {
      icon: "grell",
      keywords: ["floating", "tentacles"],
    },
  },

  //──────────────────────────────
  // GRICK — CR 2
  //──────────────────────────────
  {
    id: "grick",
    name: "Grick",
    rarity: "elite",
    type: "aberration",
    categories: ["aberrations"],
    biomes: ["forest", "underdark"],
    habitats: ["stone-chasms", "narrow-passages"],
    factions: [],
    tagsAAA: ["ambush", "tentacle"],
    cr: 2,

    hp: 45,
    ac: 13,
    speed: ["climb:20", "land:30"],

    attacks: [
      {
        name: "Bite",
        bonus: +4,
        damage: "1d12 slashing",
      },
    ],

    behavior: {
      aggression: "predator",
      confidence: "courage:3",
      tactics: ["ambush-from-above"],
    },

    drops: ["chitin-shard"],
    abilities: ["Stone Camouflage"],

    visuals: {
      icon: "grick",
      keywords: ["stone", "tentacle"],
    },
  },

  //──────────────────────────────
  // MIND WORM — CR 1
  //──────────────────────────────
  {
    id: "mind-worm",
    name: "Mind Worm",
    rarity: "common",
    type: "aberration",
    categories: ["aberrations"],
    biomes: ["swamp", "underdark", "ancient-labs"],
    habitats: ["dead-pools", "eldritch-creels"],
    factions: [],
    tagsAAA: ["psionic", "infection"],
    cr: 1,

    hp: 22,
    ac: 12,
    speed: ["land:20", "swim:20"],

    attacks: [
      {
        name: "Mind Spike",
        bonus: +4,
        damage: "1d8 psychic",
      },
    ],

    behavior: {
      aggression: "instinct",
      confidence: "coward",
      tactics: ["psionic-scream-and-hide"],
    },

    drops: ["psionic-residue"],
    abilities: ["Mind Screech", "Neural Feedback"],

    visuals: {
      icon: "worm",
      keywords: ["psionic", "worm"],
    },
  },

  //──────────────────────────────
  // GIBBERING MASS — CR 5
  //──────────────────────────────
  {
    id: "gibbering-mass",
    name: "Gibbering Mass",
    rarity: "rare",
    type: "aberration",
    categories: ["aberrations"],
    biomes: ["swamp", "corrupted"],
    habitats: ["gurgling-pools", "madness-pits"],
    factions: [],
    tagsAAA: ["amorphous", "madness"],
    cr: 5,

    hp: 140,
    ac: 9,
    speed: ["land:20"],

    attacks: [
      {
        name: "Maw",
        bonus: +6,
        damage: "4d6 acid",
      },
    ],

    behavior: {
      aggression: "obsession",
      confidence: "fearless",
      tactics: ["suppress-all-sanity-with-aura"],
    },

    drops: ["fractured-organ"],
    abilities: ["Gibbering Aura", "Amorphous Engulf"],

    visuals: {
      icon: "mass",
      keywords: ["amorphous", "eyes"],
    },
  },

  //──────────────────────────────
  // INTELLECT DEVOURER — CR 2
  //──────────────────────────────
  {
    id: "intellect-devourer",
    name: "Intellect Devourer",
    rarity: "elite",
    type: "aberration",
    categories: ["aberrations"],
    biomes: ["ruins", "underdark"],
    habitats: ["eldritch-chambers"],
    factions: [],
    tagsAAA: ["psionic", "brain-walker"],
    cr: 2,

    hp: 35,
    ac: 14,
    speed: ["land:40"],

    attacks: [
      {
        name: "Brain Rend",
        bonus: +5,
        damage: "1d8 psychic",
      },
    ],

    behavior: {
      aggression: "hunter",
      confidence: "courage:5",
      tactics: ["assail-brain-then-pursue"],
    },

    drops: ["horror-residue"],
    abilities: ["Horror Instinct", "Body Thief"],

    visuals: {
      icon: "brain",
      keywords: ["brain", "psionic"],
    },
  },

  //──────────────────────────────
  // VOID EYE — CR 6
  //──────────────────────────────
  {
    id: "void-eye",
    name: "Void Eye",
    rarity: "legendary",
    type: "aberration",
    categories: ["aberrations"],
    biomes: ["wastelands", "shadowlands"],
    habitats: ["void-rifts", "anti-magic-reaches"],
    factions: [],
    tagsAAA: ["null-magic", "beam"],
    cr: 6,

    hp: 160,
    ac: 16,
    speed: ["fly:40"],

    attacks: [
      {
        name: "Void Lance",
        bonus: +8,
        damage: "3d10 force",
      },
    ],

    behavior: {
      aggression: "annihilation",
      confidence: "fearless",
      tactics: ["float-at-range-and-swap-space"],
    },

    drops: ["void-core"],
    abilities: ["Null Aura", "Void Beam", "Levitation"],

    visuals: {
      icon: "eye",
      keywords: ["void", "beam"],
    },
  },
];
