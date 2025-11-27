import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* WILTING SNARE — CR 1/4                                       */
/* ------------------------------------------------------------ */
{
  id: "wilting-snare",
  name: "Wilting Snare",
  c,
r: 0.25,
  biomes: ["forest", "swamp"],
  h,
abitat: ["druid-groves"],
  category: "plant",
  r,
ole: "skirmisher",
  f,
actions: ["thorn-kin"],
  tags: ["vines", "ambush"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["grip-from-undergrowth"],
s,
tats: {
      hp: 12,
    ac: 12,
    atk: 3,
    dmg: "1d4 slashing",
    s,
peed: "5 ft"},
  loot: ["druidic-sap"],
  a,
bilities: ["Splintering Bind", "Creeping Cover"]},

/* ------------------------------------------------------------ */
/* THORNED CREEPER — CR 1                                        */
/* ------------------------------------------------------------ */
{
  id: "thorned-creeper",
  name: "Thorned Creeper",
  c,
r: 1,
  biomes: ["forest", "swamp", "ruins"],
  h,
abitat: ["overgrowth", "ruins"],
  category: "plant",
  r,
ole: "brute",
  f,
actions: ["thorn-kin", "spore-collective"],
  tags: ["thorns", "poison"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["lash-closest-target"],
s,
tats: {
      hp: 28,
    ac: 13,
    atk: 4,
    dmg: "1d6 + 2 piercing",
    s,
peed: "10 ft"},
  loot: ["thorn-core", "alchemical-sap"],
  a,
bilities: ["Barbed Vines", "Toxic Sap"]},

/* ------------------------------------------------------------ */
/* VINE SNARER — CR 3                                           */
/* ------------------------------------------------------------ */
{
  id: "vine-snarer",
  name: "Vine Snarer",
  c,
r: 3,
  biomes: ["forest", "swamp", "jungle"],
  h,
abitat: ["dense-growth"],
  category: "plant",
  r,
ole: "controller",
  f,
actions: ["verdant-coven", "ancient-grove"],
  tags: ["entangle", "terrain-control"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["grab-stragglers-first"],
s,
tats: {
      hp: 60,
    ac: 14,
    atk: 6,
    dmg: "2d6 + 3 bludgeoning",
    s,
peed: "20 ft"},
  loot: ["enchanted-vine", "druid-knot"],
  a,
bilities: ["Grasping Vines", "Reel In Prey"]},

/* ------------------------------------------------------------ */
/* BLOOMING DEVOURER — CR 5                                    */
/* ------------------------------------------------------------ */
{
  id: "blooming-devourer",
  name: "Blooming Devourer",
  c,
r: 5,
  biomes: ["swamp", "jungle", "ruins"],
  h,
abitat: ["overgrown-temples"],
  category: "plant",
  r,
ole: "lurker",
  f,
actions: ["spore-collective"],
  tags: ["acid", "ambush"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["swallow-isolated-targets"],
s,
tats: {
      hp: 85,
    ac: 15,
    atk: 8,
    dmg: "2d10 + 3 bludgeoning",
    s,
peed: "10 ft"},
  loot: ["corrosive-pollen", "rare-seed-pod"],
  a,
bilities: ["Engulfing Maw", "Acidic Nectar"]},

/* ------------------------------------------------------------ */
/* GROVE HEART — CR 8 (ELITE PLANT)                             */
/* ------------------------------------------------------------ */
{
  id: "grove-heart",
  name: "Grove Heart",
  c,
r: 8,
  biomes: ["forest"],
  h,
abitat: ["ancient-woods"],
  category: "plant",
  r,
ole: "support",
  f,
actions: ["ancient-grove", "druidbound"],
  tags: ["support", "aura"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 9},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["buff-allies-and-root-intruders"],
s,
tats: {
      hp: 135,
    ac: 16,
    atk: 10,
    dmg: "2d10 + 4 radiant+smash",
    s,
peed: "0 ft (rooted)"},
  loot: ["grove-shard", "lifebloom-petal"],
  a,
bilities: ["Healing Canopy", "Entangling Roots", "Verdant Aura"]}];

export default MINIONS;
