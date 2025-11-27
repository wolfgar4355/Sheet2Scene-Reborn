import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* MOUNTAIN TITAN — CR 12                                       */
/* ------------------------------------------------------------ */
{
  id: "mountain-titan",
  name: "Mountain Titan",
  c,
r: 12,
  biomes: ["mountains", "hills", "ancient-ruins"],
  h,
abitat: ["colossal-caves", "earth-thrones"],
  category: "titan",
  r,
ole: "siegebreaker",
  f,
actions: ["primordial-earth"],
  tags: ["colossal", "earth"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["crush-from-line"],
s,
tats: {
      hp: 260,
    ac: 20,
    atk: 23,
    dmg: "4d12 bludgeoning",
    s,
peed: "40 ft"},
  loot: ["titanbone", "mountain-heart"],
  a,
bilities: ["Stone Form", "Boulder Throw", "Ground Splitter"]},

/* ------------------------------------------------------------ */
/* TEMPEST TITAN — CR 14                                        */
/* ------------------------------------------------------------ */
{
  id: "tempest-titan",
  name: "Tempest Titan",
  c,
r: 14,
  biomes: ["coast", "sky", "stormlands"],
  h,
abitat: ["tempest-spires", "cloud-fortresses"],
  category: "titan",
  r,
ole: "elite-controller",
  f,
actions: ["primordial-storm"],
  tags: ["lightning", "flying"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["aoe-burst-then-hover"],
s,
tats: {
      hp: 295,
    ac: 21,
    atk: 25,
    dmg: "4d10 lightning",
    s,
peed: "35 ft, fly 70 ft"},
  loot: ["tempest-crystal"],
  a,
bilities: ["Chain Lightning Burst", "Thunderstep", "Storm Tempest Aura"]},

/* ------------------------------------------------------------ */
/* CRIMSON COLOSSUS — CR 15                                     */
/* ------------------------------------------------------------ */
{
  id: "crimson-colossus",
  name: "Crimson Colossus",
  c,
r: 15,
  biomes: ["volcano", "infernal-zones"],
  h,
abitat: ["lava-seas", "fire-furnaces"],
  category: "titan",
  r,
ole: "firebrute",
  f,
actions: ["primordial-flame"],
  tags: ["fire", "lava"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["lava-wave-then-burn-frontline"],
s,
tats: {
      hp: 310,
    ac: 22,
    atk: 26,
    dmg: "4d10+10 fire",
    s,
peed: "40 ft"},
  loot: ["molten-core", "obsidian-plating"],
  a,
bilities: ["Lava Burst", "Blazing Move", "Heat Aura"]},

/* ------------------------------------------------------------ */
/* CELESTIAL COLOSSUS — CR 18                                   */
/* ------------------------------------------------------------ */
{
  id: "celestial-colossus",
  name: "Celestial Colossus",
  c,
r: 18,
  biomes: ["celestial-realms", "sacred-peaks"],
  h,
abitat: ["star-altars", "radiant-thrones"],
  category: "titan",
  r,
ole: "legendary-controller",
  f,
actions: ["astral-dominion"],
  tags: ["radiant", "ancient"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 7},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["blinding-radiant-judgment"],
s,
tats: {
      hp: 340,
    ac: 23,
    atk: 27,
    dmg: "4d12 radiant",
    s,
peed: "40 ft, fly 80 ft"},
  loot: ["radiant-core", "celestial-shard"],
  a,
bilities: ["Blinding Judgment", "Ascendant Smite", "Sanctified Aura"]}];

export default MINIONS;
