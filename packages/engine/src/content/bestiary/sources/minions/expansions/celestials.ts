import { Minion } from "../types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* LANTERN CHERUB — CR 1 (SUPPORT)                              */
/* ------------------------------------------------------------ */
{
  id: "lantern-cherub",
  name: "Lantern Cherub",
  cr: 1,
  biomes: ["temple", "holy-grounds", "mountain"],
  habitat: ["celestial-garden", "sanctuaries"],
  category: "celestial",
  role: "support",
  factions: ["radiant-host"],
  tags: ["light", "healing", "hover"],
  behavior: {
    aggression: 1,
    courage: 6,
  },
  tactics: ["beam-light-and-aid-ally"],
  stats: {
    hp: 18,
    ac: 14,
    atk: 10,
    dmg: "1d4 radiant",
    speed: "10 ft (hover)",
  },
  loot: ["radiant-spark"],
  abilities: ["Holy Glow", "Minor Heal", "Soothing Hymn"],
},

/* ------------------------------------------------------------ */
/* ANVIL SENTINEL — CR 3                                        */
/* ------------------------------------------------------------ */
{
  id: "anvil-sentinel",
  name: "Anvil Sentinel",
  cr: 3,
  biomes: ["temple", "mountains", "ruins"],
  habitat: ["celestial-forge", "radiant-stronghold"],
  category: "celestial",
  role: "guardian",
  factions: ["forgeborn-order"],
  tags: ["armor", "radiant"],
  behavior: {
    aggression: 3,
    courage: 8,
  },
  tactics: ["stand-still-and-pierce-on-12"],
  stats: {
    hp: 55,
    ac: 18,
    atk: 14,
    dmg: "1d8+3 radiant",
    speed: "25 ft",
  },
  loot: ["radiant-ingot"],
  abilities: ["Radiant Smite", "Divine Ward"],
},

/* ------------------------------------------------------------ */
/* VALKYRIAN RIDER — CR 5                                       */
/* ------------------------------------------------------------ */
{
  id: "valkyrian-rider",
  name: "Valkyrian Rider",
  cr: 5,
  biomes: ["mountains", "holy-grounds", "battlefields"],
  habitat: ["storm-peak", "temple-chariot"],
  category: "celestial",
  role: "striker",
  factions: ["skyward-legion"],
  tags: ["flying", "lance", "radiant"],
  behavior: {
    aggression: 5,
    courage: 9,
  },
  tactics: ["dive-charge-from-above"],
  stats: {
    hp: 78,
    ac: 17,
    atk: 18,
    dmg: "2d8+3 radiant (lance)",
    speed: "40 ft, fly 80 ft",
  },
  loot: ["valkyrian-feather"],
  abilities: ["Sky Charge", "Radiant Lance", "Wing Buffet"],
},

/* ------------------------------------------------------------ */
/* LIGHTFORGED GOLEM — CR 7                                     */
/* ------------------------------------------------------------ */
{
  id: "lightforged-golem",
  name: "Lightforged Golem",
  cr: 7,
  biomes: ["temple", "ruins", "holy-grounds"],
  habitat: ["titan-chamber"],
  category: "celestial",
  role: "defender",
  factions: ["forgeborn-order", "construct"],
  tags: ["radiant", "tank"],
  behavior: {
    aggression: 3,
    courage: 10,
  },
  tactics: ["frontline-then-radiant-burst"],
  stats: {
    hp: 110,
    ac: 19,
    atk: 16,
    dmg: "2d10+4 radiant",
    speed: "30 ft",
  },
  loot: ["light-core"],
  abilities: ["Radiant Pulse", "Aegis Shield", "Unbreakable Frame"],
},

/* ------------------------------------------------------------ */
/* SERAPHIC CHAMPION — CR 10 (ELITE/BOSS)                       */
/* ------------------------------------------------------------ */
{
  id: "seraphic-champion",
  name: "Seraphic Champion",
  cr: 10,
  biomes: ["holy-grounds", "temples", "sun-peak"],
  habitat: ["radiant-spire", "flame-wings"],
  category: "celestial",
  role: "elite-warrior",
  factions: ["radiant-host", "flame-legion"],
  tags: ["flying", "radiant", "holy-strike"],
  behavior: {
    aggression: 7,
    courage: 10,
  },
  tactics: ["smite-evil-with-powered-strike"],
  stats: {
    hp: 145,
    ac: 20,
    atk: 22,
    dmg: "2d10+6 radiant",
    speed: "40 ft, fly 80 ft",
  },
  loot: ["seraphic-feather", "flame-sigil"],
  abilities: [
    "Holy Smite",
    "Divine Wings",
    "Blinding Flare",
    "Aura of Courage",
  ],
},

];

export default MINIONS;
