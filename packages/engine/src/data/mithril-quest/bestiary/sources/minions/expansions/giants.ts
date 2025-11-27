import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* OGRE BRUTE — CR 2                                            */
/* ------------------------------------------------------------ */
{
  id: "ogre-brute",
  name: "Ogre Brute",
  c,
r: 2,
  biomes: ["hills", "forest", "swamp"],
  h,
abitat: ["cave-groves", "bandit-strongholds"],
  category: "giant",
  r,
ole: "brute",
  f,
actions: ["wildgrowth"],
  tags: ["tribal", "reckless"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["rush-frontline"],
s,
tats: {
      hp: 55,
    ac: 11,
    atk: 16,
    dmg: "2d8+4 bludgeoning",
    s,
peed: "40 ft"},
  loot: ["club-chunk", "ogre-hide"],
  a,
bilities: ["Reckless Swing"]},

/* ------------------------------------------------------------ */
/* OGRE WAR DRUMMER — CR 3                                      */
/* ------------------------------------------------------------ */
{
  id: "ogre-war-drummer",
  name: "Ogre War Drummer",
  c,
r: 3,
  biomes: ["hills", "forest"],
  h,
abitat: ["war-camps"],
  category: "giant",
  r,
ole: "support",
  f,
actions: ["tribal-horde"],
  tags: ["drum", "war-boost"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["buff-ogres"],
s,
tats: {
      hp: 65,
    ac: 12,
    atk: 14,
    dmg: "1d10 thunder",
    s,
peed: "40 ft"},
  loot: ["war-drum"],
  a,
bilities: ["War Rhythm", "Rage Pulse"]},

/* ------------------------------------------------------------ */
/* STONE GIANT — CR 8                                           */
/* ------------------------------------------------------------ */
{
  id: "stone-giant",
  name: "Stone Giant",
  c,
r: 8,
  biomes: ["mountains", "caves", "cliffs"],
  h,
abitat: ["cavern-fortresses"],
  category: "giant",
  r,
ole: "striker",
  f,
actions: ["primordial-root"],
  tags: ["boulder", "thrower"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 7},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["boulder-from-range"],
s,
tats: {
      hp: 130,
    ac: 15,
    atk: 19,
    dmg: "3d10 bludgeoning (rock throw)",
    s,
peed: "40 ft"},
  loot: ["flint-tooth", "stone-shard"],
  a,
bilities: ["Boulder Throw", "Stone Stance"]},

/* ------------------------------------------------------------ */
/* FROST GIANT — CR 8                                           */
/* ------------------------------------------------------------ */
{
  id: "frost-giant",
  name: "Frost Giant",
  c,
r: 8,
  biomes: ["tundra", "glacier", "snow-mountains"],
  h,
abitat: ["ice-fort", "frozen-caverns"],
  category: "giant",
  r,
ole: "brute",
  f,
actions: ["iceborn-clan"],
  tags: ["frozen", "cold"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["charge-then-crush"],
s,
tats: {
      hp: 150,
    ac: 15,
    atk: 20,
    dmg: "3d12 cold",
    s,
peed: "40 ft"},
  loot: ["frost-giant-blood", "ice-axe"],
  a,
bilities: ["Cold Aura", "Frost Strike"]},

/* ------------------------------------------------------------ */
/* CLOUD GIANT — CR 10                                          */
/* ------------------------------------------------------------ */
{
  id: "cloud-giant",
  name: "Cloud Giant",
  c,
r: 10,
  biomes: ["mountains", "sky", "floating-isles"],
  h,
abitat: ["sky-palaces"],
  category: "giant",
  r,
ole: "controller",
  f,
actions: ["stormcourt"],
  tags: ["levitate", "thunder"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 8},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["disable-then-hurl"],
s,
tats: {
      hp: 185,
    ac: 16,
    atk: 20,
    dmg: "2d10 thunder",
    s,
peed: "40 ft, fly 10 ft"},
  loot: ["sky-crystal"],
  a,
bilities: ["Thunderclap", "Wind Burst", "Levitate Boulder"]},

/* ------------------------------------------------------------ */
/* STORM GIANT KING — CR 12                                     */
/* ------------------------------------------------------------ */
{
  id: "storm-giant-king",
  name: "Storm Giant King",
  c,
r: 12,
  biomes: ["coast", "stormlands", "high-mountains"],
  h,
abitat: ["storm-keep", "thunder-throne"],
  category: "giant",
  r,
ole: "elite-controller",
  f,
actions: ["stormcourt", "giant-royal-seal"],
  tags: ["lightning", "storm"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 10},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["storm-then-mega-strike"],
s,
tats: {
      hp: 265,
    ac: 18,
    atk: 23,
    dmg: "3d10 lightning",
    s,
peed: "50 ft"},
  loot: ["Storm Heart", "giant-royal-seal"],
  a,
bilities: ["Stormshatter", "Lightning Aura", "Call Tempest"]}];

export default MINIONS;
