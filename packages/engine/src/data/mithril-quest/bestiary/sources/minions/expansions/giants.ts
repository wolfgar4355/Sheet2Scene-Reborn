import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* OGRE BRUTE — CR 2                                            */
/* ------------------------------------------------------------ */
{
  id: "ogre-brute",
  name: "Ogre Brute",
  cr: 2,
  biomes: ["hills", "forest", "swamp"],
  habitat: ["cave-groves", "bandit-strongholds"],
  category: "giant",
  role: "brute",
  factions: ["wildgrowth"],
  tags: ["tribal", "reckless"],
  behavior: {
    aggression: 7,
    courage: 3,
  },
  tactics: ["rush-frontline"],
  stats: {
    hp: 55,
    ac: 11,
    atk: 16,
    dmg: "2d8+4 bludgeoning",
    speed: "40 ft",
  },
  loot: ["club-chunk", "ogre-hide"],
  abilities: ["Reckless Swing"],
},

/* ------------------------------------------------------------ */
/* OGRE WAR DRUMMER — CR 3                                      */
/* ------------------------------------------------------------ */
{
  id: "ogre-war-drummer",
  name: "Ogre War Drummer",
  cr: 3,
  biomes: ["hills", "forest"],
  habitat: ["war-camps"],
  category: "giant",
  role: "support",
  factions: ["tribal-horde"],
  tags: ["drum", "war-boost"],
  behavior: {
    aggression: 3,
    courage: 5,
  },
  tactics: ["buff-ogres"],
  stats: {
    hp: 65,
    ac: 12,
    atk: 14,
    dmg: "1d10 thunder",
    speed: "40 ft",
  },
  loot: ["war-drum"],
  abilities: ["War Rhythm", "Rage Pulse"],
},

/* ------------------------------------------------------------ */
/* STONE GIANT — CR 8                                           */
/* ------------------------------------------------------------ */
{
  id: "stone-giant",
  name: "Stone Giant",
  cr: 8,
  biomes: ["mountains", "caves", "cliffs"],
  habitat: ["cavern-fortresses"],
  category: "giant",
  role: "striker",
  factions: ["primordial-root"],
  tags: ["boulder", "thrower"],
  behavior: {
    aggression: 6,
    courage: 7,
  },
  tactics: ["boulder-from-range"],
  stats: {
    hp: 130,
    ac: 15,
    atk: 19,
    dmg: "3d10 bludgeoning (rock throw)",
    speed: "40 ft",
  },
  loot: ["flint-tooth", "stone-shard"],
  abilities: ["Boulder Throw", "Stone Stance"],
},

/* ------------------------------------------------------------ */
/* FROST GIANT — CR 8                                           */
/* ------------------------------------------------------------ */
{
  id: "frost-giant",
  name: "Frost Giant",
  cr: 8,
  biomes: ["tundra", "glacier", "snow-mountains"],
  habitat: ["ice-fort", "frozen-caverns"],
  category: "giant",
  role: "brute",
  factions: ["iceborn-clan"],
  tags: ["frozen", "cold"],
  behavior: {
    aggression: 7,
    courage: 6,
  },
  tactics: ["charge-then-crush"],
  stats: {
    hp: 150,
    ac: 15,
    atk: 20,
    dmg: "3d12 cold",
    speed: "40 ft",
  },
  loot: ["frost-giant-blood", "ice-axe"],
  abilities: ["Cold Aura", "Frost Strike"],
},

/* ------------------------------------------------------------ */
/* CLOUD GIANT — CR 10                                          */
/* ------------------------------------------------------------ */
{
  id: "cloud-giant",
  name: "Cloud Giant",
  cr: 10,
  biomes: ["mountains", "sky", "floating-isles"],
  habitat: ["sky-palaces"],
  category: "giant",
  role: "controller",
  factions: ["stormcourt"],
  tags: ["levitate", "thunder"],
  behavior: {
    aggression: 5,
    courage: 8,
  },
  tactics: ["disable-then-hurl"],
  stats: {
    hp: 185,
    ac: 16,
    atk: 20,
    dmg: "2d10 thunder",
    speed: "40 ft, fly 10 ft",
  },
  loot: ["sky-crystal"],
  abilities: ["Thunderclap", "Wind Burst", "Levitate Boulder"],
},

/* ------------------------------------------------------------ */
/* STORM GIANT KING — CR 12                                     */
/* ------------------------------------------------------------ */
{
  id: "storm-giant-king",
  name: "Storm Giant King",
  cr: 12,
  biomes: ["coast", "stormlands", "high-mountains"],
  habitat: ["storm-keep", "thunder-throne"],
  category: "giant",
  role: "elite-controller",
  factions: ["stormcourt", "giant-royal-seal"],
  tags: ["lightning", "storm"],
  behavior: {
    aggression: 7,
    courage: 10,
  },
  tactics: ["storm-then-mega-strike"],
  stats: {
    hp: 265,
    ac: 18,
    atk: 23,
    dmg: "3d10 lightning",
    speed: "50 ft",
  },
  loot: ["Storm Heart", "giant-royal-seal"],
  abilities: ["Stormshatter", "Lightning Aura", "Call Tempest"],
},

];

export default MINIONS;
