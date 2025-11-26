import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* DEATH KNIGHT — CR 7 */
/* ------------------------------------------------------------ */
{
  id: "death-knight",
  name: "Death Knight",
  cr: 7,
  biomes: ["fenland", "shadowlands", "crypt"],
  habitat: ["cursed-halls", "forsaken-battlegrounds"],
  category: "undead",
  role: "elite-bruiser",
  tags: ["dark-auras", "fire-magic", "unholy"],
  factions: ["Grave Sovereignty"],
  behavior: { aggression: 7, courage: 6 },
  tactics: ["smite-then-burn"],
  stats: {
    hp: 165,
    ac: 18,
    atk: 16,
    dmg: "2d8+6 slashing + fire",
    speed: "25 ft",
  },
  loot: ["hollowed-plate", "cursed-greatsword"],
  abilities: ["Hellfire Burst", "Aura of Dread", "Dark Command"],
},

/* ------------------------------------------------------------ */
/* DREAD WRAITH — CR 8 */
/* ------------------------------------------------------------ */
{
  id: "dread-wraith",
  name: "Dread Wraith",
  cr: 8,
  biomes: ["shadowlands", "crypts", "underground"],
  habitat: ["tomb-corridors", "dark-chasms"],
  category: "undead",
  role: "lurker",
  tags: ["ethereal", "life-drain"],
  factions: ["Ebon Host"],
  behavior: { aggression: 6, courage: 5 },
  tactics: ["phase-through-walls-then-drain"],
  stats: {
    hp: 130,
    ac: 17,
    atk: 18,
    dmg: "3d6 necrotic (life drain)",
    speed: "40 ft (hover)",
  },
  loot: ["phantom-embers"],
  abilities: ["Ethereal Shift", "Life Drain", "Wail of Dread"],
},

/* ------------------------------------------------------------ */
/* NECRO HYDRA — CR 8 */
/* ------------------------------------------------------------ */
{
  id: "necro-hydra",
  name: "Necro Hydra",
  cr: 8,
  biomes: ["swamp", "shadowlands", "underground"],
  habitat: ["necromancer-lairs", "corpse-marsh"],
  category: "undead",
  role: "brute",
  tags: ["multi-head", "poison", "necrotic"],
  factions: ["Corpseforge Dominion"],
  behavior: { aggression: 8, courage: 7 },
  tactics: ["multi-head-breach-then-lash"],
  stats: {
    hp: 170,
    ac: 16,
    atk: 17,
    dmg: "3d8 necrotic or poison",
    speed: "30 ft, swim 25 ft",
  },
  loot: ["hydra-skull", "black-ichor"],
  abilities: ["Infectious Breath", "Reanimation Surge", "Severed Head Reform"],
},

/* ------------------------------------------------------------ */
/* BONE COLOSSUS — CR 10 */
/* ------------------------------------------------------------ */
{
  id: "bone-colossus",
  name: "Bone Colossus",
  cr: 10,
  biomes: ["crypt", "ruins", "underground"],
  habitat: ["resurrected-vaults"],
  category: "undead",
  role: "siegebreaker",
  tags: ["bone-giant", "grave-construct"],
  factions: ["Corpseforge Dominion"],
  behavior: { aggression: 9, courage: 8 },
  tactics: ["slam-frontline-then-ground-pound"],
  stats: {
    hp: 240,
    ac: 19,
    atk: 20,
    dmg: "3d12+6 bludgeoning",
    speed: "30 ft",
  },
  loot: ["bone-core", "giant-ribplate"],
  abilities: ["Ground Pound", "Bone Storm", "Reinforced Skeleton"],
},

/* ------------------------------------------------------------ */
/* ARCH-NECROLORD — CR 12 (MINI-BOSS) */
/* ------------------------------------------------------------ */
{
  id: "arch-necrolord",
  name: "Arch Necrolord",
  cr: 12,
  biomes: ["shadowlands", "crypts", "ruins"],
  habitat: ["necromancer-thrones", "ritual-chambers"],
  category: "undead",
  role: "elite-controller",
  tags: ["necromancy", "summoner", "ritualist"],
  factions: ["Grave Sovereignty"],
  behavior: { aggression: 5, courage: 7 },
  tactics: ["summon-horde-then-cast-death"],
  stats: {
    hp: 220,
    ac: 18,
    atk: 19,
    dmg: "3d10 necrotic",
    speed: "30 ft",
  },
  loot: ["phylactery-fragment", "forbidden-grimoire"],
  abilities: ["Mass Bind", "Death Nova", "Spirit Harvest", "Bone Shatter"],
},

];

export default MINIONS;
