import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* MOUNTAIN TITAN — CR 12                                       */
/* ------------------------------------------------------------ */
{
  id: "mountain-titan",
  name: "Mountain Titan",
  cr: 12,
  biomes: ["mountains", "hills", "ancient-ruins"],
  habitat: ["colossal-caves", "earth-thrones"],
  category: "titan",
  role: "siegebreaker",
  factions: ["primordial-earth"],
  tags: ["colossal", "earth"],
  behavior: {
    aggression: 5,
    courage: 6,
  },
  tactics: ["crush-from-line"],
  stats: {
    hp: 260,
    ac: 20,
    atk: 23,
    dmg: "4d12 bludgeoning",
    speed: "40 ft",
  },
  loot: ["titanbone", "mountain-heart"],
  abilities: ["Stone Form", "Boulder Throw", "Ground Splitter"],
},

/* ------------------------------------------------------------ */
/* TEMPEST TITAN — CR 14                                        */
/* ------------------------------------------------------------ */
{
  id: "tempest-titan",
  name: "Tempest Titan",
  cr: 14,
  biomes: ["coast", "sky", "stormlands"],
  habitat: ["tempest-spires", "cloud-fortresses"],
  category: "titan",
  role: "elite-controller",
  factions: ["primordial-storm"],
  tags: ["lightning", "flying"],
  behavior: {
    aggression: 5,
    courage: 6,
  },
  tactics: ["aoe-burst-then-hover"],
  stats: {
    hp: 295,
    ac: 21,
    atk: 25,
    dmg: "4d10 lightning",
    speed: "35 ft, fly 70 ft",
  },
  loot: ["tempest-crystal"],
  abilities: ["Chain Lightning Burst", "Thunderstep", "Storm Tempest Aura"],
},

/* ------------------------------------------------------------ */
/* CRIMSON COLOSSUS — CR 15                                     */
/* ------------------------------------------------------------ */
{
  id: "crimson-colossus",
  name: "Crimson Colossus",
  cr: 15,
  biomes: ["volcano", "infernal-zones"],
  habitat: ["lava-seas", "fire-furnaces"],
  category: "titan",
  role: "firebrute",
  factions: ["primordial-flame"],
  tags: ["fire", "lava"],
  behavior: {
    aggression: 5,
    courage: 5,
  },
  tactics: ["lava-wave-then-burn-frontline"],
  stats: {
    hp: 310,
    ac: 22,
    atk: 26,
    dmg: "4d10+10 fire",
    speed: "40 ft",
  },
  loot: ["molten-core", "obsidian-plating"],
  abilities: ["Lava Burst", "Blazing Move", "Heat Aura"],
},

/* ------------------------------------------------------------ */
/* CELESTIAL COLOSSUS — CR 18                                   */
/* ------------------------------------------------------------ */
{
  id: "celestial-colossus",
  name: "Celestial Colossus",
  cr: 18,
  biomes: ["celestial-realms", "sacred-peaks"],
  habitat: ["star-altars", "radiant-thrones"],
  category: "titan",
  role: "legendary-controller",
  factions: ["astral-dominion"],
  tags: ["radiant", "ancient"],
  behavior: {
    aggression: 4,
    courage: 7,
  },
  tactics: ["blinding-radiant-judgment"],
  stats: {
    hp: 340,
    ac: 23,
    atk: 27,
    dmg: "4d12 radiant",
    speed: "40 ft, fly 80 ft",
  },
  loot: ["radiant-core", "celestial-shard"],
  abilities: ["Blinding Judgment", "Ascendant Smite", "Sanctified Aura"],
},

];

export default MINIONS;
