import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* DEATH KNIGHT — CR 7 */
/* ------------------------------------------------------------ */
{
  id: "death-knight",
  name: "Death Knight",
  c,
r: 7,
  biomes: ["fenland", "shadowlands", "crypt"],
  h,
abitat: ["cursed-halls", "forsaken-battlegrounds"],
  category: "undead",
  r,
ole: "elite-bruiser",
  tags: ["dark-auras", "fire-magic", "unholy"],
  f,
actions: ["Grave Sovereignty"],
  b,
ehavior: { a,
ggression: 7, c,
ourage: 6 },
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["smite-then-burn"],
s,
tats: {
      hp: 165,
    ac: 18,
    atk: 16,
    dmg: "2d8+6 slashing + fire",
    s,
peed: "25 ft"},
  loot: ["hollowed-plate", "cursed-greatsword"],
  a,
bilities: ["Hellfire Burst", "Aura of Dread", "Dark Command"]},

/* ------------------------------------------------------------ */
/* DREAD WRAITH — CR 8 */
/* ------------------------------------------------------------ */
{
  id: "dread-wraith",
  name: "Dread Wraith",
  c,
r: 8,
  biomes: ["shadowlands", "crypts", "underground"],
  h,
abitat: ["tomb-corridors", "dark-chasms"],
  category: "undead",
  r,
ole: "lurker",
  tags: ["ethereal", "life-drain"],
  f,
actions: ["Ebon Host"],
  b,
ehavior: { a,
ggression: 6, c,
ourage: 5 },
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["phase-through-walls-then-drain"],
s,
tats: {
      hp: 130,
    ac: 17,
    atk: 18,
    dmg: "3d6 necrotic (life drain)",
    s,
peed: "40 ft (hover)"},
  loot: ["phantom-embers"],
  a,
bilities: ["Ethereal Shift", "Life Drain", "Wail of Dread"]},

/* ------------------------------------------------------------ */
/* NECRO HYDRA — CR 8 */
/* ------------------------------------------------------------ */
{
  id: "necro-hydra",
  name: "Necro Hydra",
  c,
r: 8,
  biomes: ["swamp", "shadowlands", "underground"],
  h,
abitat: ["necromancer-lairs", "corpse-marsh"],
  category: "undead",
  r,
ole: "brute",
  tags: ["multi-head", "poison", "necrotic"],
  f,
actions: ["Corpseforge Dominion"],
  b,
ehavior: { a,
ggression: 8, c,
ourage: 7 },
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["multi-head-breach-then-lash"],
s,
tats: {
      hp: 170,
    ac: 16,
    atk: 17,
    dmg: "3d8 necrotic or poison",
    s,
peed: "30 ft, swim 25 ft"},
  loot: ["hydra-skull", "black-ichor"],
  a,
bilities: ["Infectious Breath", "Reanimation Surge", "Severed Head Reform"]},

/* ------------------------------------------------------------ */
/* BONE COLOSSUS — CR 10 */
/* ------------------------------------------------------------ */
{
  id: "bone-colossus",
  name: "Bone Colossus",
  c,
r: 10,
  biomes: ["crypt", "ruins", "underground"],
  h,
abitat: ["resurrected-vaults"],
  category: "undead",
  r,
ole: "siegebreaker",
  tags: ["bone-giant", "grave-construct"],
  f,
actions: ["Corpseforge Dominion"],
  b,
ehavior: { a,
ggression: 9, c,
ourage: 8 },
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["slam-frontline-then-ground-pound"],
s,
tats: {
      hp: 240,
    ac: 19,
    atk: 20,
    dmg: "3d12+6 bludgeoning",
    s,
peed: "30 ft"},
  loot: ["bone-core", "giant-ribplate"],
  a,
bilities: ["Ground Pound", "Bone Storm", "Reinforced Skeleton"]},

/* ------------------------------------------------------------ */
/* ARCH-NECROLORD — CR 12 (MINI-BOSS) */
/* ------------------------------------------------------------ */
{
  id: "arch-necrolord",
  name: "Arch Necrolord",
  c,
r: 12,
  biomes: ["shadowlands", "crypts", "ruins"],
  h,
abitat: ["necromancer-thrones", "ritual-chambers"],
  category: "undead",
  r,
ole: "elite-controller",
  tags: ["necromancy", "summoner", "ritualist"],
  f,
actions: ["Grave Sovereignty"],
  b,
ehavior: { a,
ggression: 5, c,
ourage: 7 },
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["summon-horde-then-cast-death"],
s,
tats: {
      hp: 220,
    ac: 18,
    atk: 19,
    dmg: "3d10 necrotic",
    s,
peed: "30 ft"},
  loot: ["phylactery-fragment", "forbidden-grimoire"],
  a,
bilities: ["Mass Bind", "Death Nova", "Spirit Harvest", "Bone Shatter"]}];

export default MINIONS;
