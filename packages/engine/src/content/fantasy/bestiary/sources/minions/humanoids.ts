import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* BANDIT (CR 1/8) — Classic low-level humanoid                 */
/* ------------------------------------------------------------ */
{
  id: "bandit",
  name: "Bandit",
  cr: 0.125,
  biomes: ["forest", "hills", "roads", "plains"],
  habitat: ["roadside-ambush", "bandit-camp"],
  category: "humanoid",
  role: "striker",
  factions: ["red-knives"],
  tags: ["ambusher"],
  behavior: {
    aggression: 2,
    courage: 2,
  },
  tactics: ["hit-and-run"],
  stats: {
    hp: 11,
    ac: 12,
    atk: 10,
    dmg: "1d6 scimitar",
    speed: "30 ft",
  },
  loot: ["tarnished-coin", "rusty-dagger"],
  abilities: ["Pack Tactics (variant)"],
},

/* ------------------------------------------------------------ */
/* CULTIST (CR 1/4)                                             */
/* ------------------------------------------------------------ */
{
  id: "cultist",
  name: "Cultist",
  cr: 0.25,
  biomes: ["ruins", "dungeon", "underdark"],
  habitat: ["trance-temple", "void-shrine"],
  category: "humanoid",
  role: "controller",
  factions: ["void-cult"],
  tags: ["dark-magic"],
  behavior: {
    aggression: 1,
    courage: 3,
  },
  tactics: ["curse-first"],
  stats: {
    hp: 15,
    ac: 12,
    atk: 11,
    dmg: "1d6 scimitar",
    speed: "30 ft",
  },
  loot: ["ritual-knife", "void-charm"],
  abilities: ["Dark Chant", "Curse Bolt"],
},

/* ------------------------------------------------------------ */
/* TRIBAL WARRIOR — CR 1/2                                      */
/* ------------------------------------------------------------ */
{
  id: "tribal-warrior",
  name: "Tribal Warrior",
  cr: 0.5,
  biomes: ["jungle", "savanna", "mountains"],
  habitat: ["tribal-camp", "war-camp"],
  category: "humanoid",
  role: "bruiser",
  factions: ["tribal-alliance"],
  tags: ["feral"],
  behavior: {
    aggression: 4,
    courage: 4,
  },
  tactics: ["berserk-charge"],
  stats: {
    hp: 19,
    ac: 13,
    atk: 12,
    dmg: "1d8 spear",
    speed: "30 ft",
  },
  loot: ["tribal-necklace"],
  abilities: ["Battle Cry"],
},
/* ------------------------------------------------------------ */
/* SCOUT — CR 1                                                 */
/* ------------------------------------------------------------ */
{
  id: "scout",
  name: "Scout",
  cr: 1,
  biomes: ["forest", "hills", "coast", "mountains"],
  habitat: ["outpost", "border-fort"],
  category: "humanoid",
  role: "skirmisher",
  factions: ["frontier-clans"],
  tags: ["ranged", "stealthy"],
  behavior: {
    aggression: 2,
    courage: 2,
  },
  tactics: ["ranged-kite"],
  stats: {
    hp: 16,
    ac: 13,
    atk: 14,
    dmg: "1d8 longbow",
    speed: "35 ft",
  },
  loot: ["arrow-bundle"],
  abilities: ["Keen Sight", "Hide"],
},

/* ------------------------------------------------------------ */
/* ASSASSIN — Elite (CR 5)                                      */
/* ------------------------------------------------------------ */
{
  id: "assassin",
  name: "Assassin",
  cr: 5,
  biomes: ["city", "underdark", "shadowlands"],
  habitat: ["rooftops", "shadow-alley"],
  category: "humanoid",
  role: "elite-striker",
  factions: ["shadow-syndicate"],
  tags: ["poison", "stealth"],
  behavior: {
    aggression: 3,
    courage: 4,
  },
  tactics: ["alpha-strike"],
  stats: {
    hp: 78,
    ac: 15,
    atk: 18,
    dmg: "1d6+4 / 7d6 sneak attack",
    speed: "40 ft",
  },
  loot: ["black-poison", "shadow-dagger"],
  abilities: ["Sneak Attack", "Poison Strike", "Shadow Step"],
},

/* ------------------------------------------------------------ */
/* WARLORD — Boss-tier humanoid (CR 8)                          */
/* ------------------------------------------------------------ */
{
  id: "warlord",
  name: "Warlord",
  cr: 8,
  biomes: ["plains", "mountains", "battlefields"],
  habitat: ["war-camp", "command-tent"],
  category: "humanoid",
  role: "leader",
  factions: ["iron-legion", "frontier-clans"],
  tags: ["tactician", "commander"],
  behavior: {
    aggression: 5,
    courage: 5,
  },
  tactics: ["command-strike"],
  stats: {
    hp: 148,
    ac: 17,
    atk: 19,
    dmg: "1d10+7 / 2d8 cleave",
    speed: "30 ft",
  },
  loot: ["warlord-sigil", "battle-banner"],
  abilities: ["Command Ally", "War Cry", "Brutal Strike"],
},

];

export default MINIONS;
