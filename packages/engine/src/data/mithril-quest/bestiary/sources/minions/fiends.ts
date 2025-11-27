import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* --------------------------------------------------------- */
/*                           IMP — CR 1                      */
/* --------------------------------------------------------- */
{
  id: "imp",
  name: "Imp",
  c,
r: 1,
  biomes: ["infernal-zones", "ruins", "underdark"],
  h,
abitat: ["sulfur-pits", "lava-vents", "hellwatch-towers"],
  category: "fiend",
  r,
ole: "skirmisher",
  f,
actions: ["iron-dominion", "pact-forge"],
  tags: ["invisible", "flying"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["poison-sting"],
s,
tats: {
      hp: 22,
    ac: 13,
    atk: 11,
    dmg: "1d4 piercing + poison",
    s,
peed: "20 ft, fly 40 ft"},
  loot: ["hellish-ichor"],
  a,
bilities: ["Invisibility", "Devil’s Sight", "Poison Sting"]},

/* --------------------------------------------------------- */
/*                       QUASIT — CR 1                      */
/* --------------------------------------------------------- */
{
  id: "quasit",
  name: "Quasit",
  c,
r: 1,
  biomes: ["nether-lands", "swamp", "ruins"],
  h,
abitat: ["demon-breaches", "abyssal-fog-pockets"],
  category: "fiend",
  r,
ole: "controller",
  f,
actions: ["abyssal-swarms"],
  tags: ["sneak", "invisibility"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 2},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["fear-spike"],
s,
tats: {
      hp: 18,
    ac: 13,
    atk: 10,
    dmg: "1d6 claws",
    s,
peed: "40 ft"},
  loot: ["nether-dust"],
  a,
bilities: ["Scare", "Invisibility", "Shapechanger"]},

/* --------------------------------------------------------- */
/*                     BARBGURA — CR 2                      */
/* --------------------------------------------------------- */
{
  id: "barbgura",
  name: "Barbgura",
  c,
r: 2,
  biomes: ["infernal-zones", "cavern", "swamp"],
  h,
abitat: ["demon-cysts", "demon-narrows"],
  category: "fiend",
  r,
ole: "bruiser",
  f,
actions: ["abyssal-swarms"],
  tags: ["demon", "rage"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["leap-and-maul"],
s,
tats: {
      hp: 56,
    ac: 14,
    atk: 15,
    dmg: "2d6+4",
    s,
peed: "40 ft, climb 40 ft"},
  loot: ["demonic-ichor"],
  a,
bilities: ["Frenzied Leap", "Reckless Assault"]},

/* --------------------------------------------------------- */
/*                   BARBED DEVIL — CR 5                    */
/* --------------------------------------------------------- */
{
  id: "barbed-devil",
  name: "Barbed Devil",
  c,
r: 5,
  biomes: ["infernal-zones", "ruins"],
  h,
abitat: ["iron-fortresses", "brim-barracks"],
  category: "fiend",
  r,
ole: "striker",
  f,
actions: ["iron-dominion"],
  tags: ["fire-resistance", "spiked"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["barb-sprint", "spike-barrage"],
s,
tats: {
      hp: 96,
    ac: 16,
    atk: 18,
    dmg: "2d6+4 (spike barrage)",
    s,
peed: "40 ft"},
  loot: ["infernal-spine"],
  a,
bilities: ["Hurl Flame", "Spined Body", "Magic Resistance"]},

/* --------------------------------------------------------- */
/*                     BONE DEVIL — CR 7                    */
/* --------------------------------------------------------- */
{
  id: "bone-devil",
  name: "Bone Devil",
  c,
r: 7,
  biomes: ["infernal-zones", "underdark"],
  h,
abitat: ["soul-furnaces", "abyssal-pits"],
  category: "fiend",
  r,
ole: "predator",
  f,
actions: ["pact-forge", "soul-ledgers"],
  tags: ["stinger", "menace"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["impale-and-bleed"],
s,
tats: {
      hp: 120,
    ac: 17,
    atk: 19,
    dmg: "2d8+6 slashing + poison",
    s,
peed: "40 ft"},
  loot: ["bone-shard-of-hell"],
  a,
bilities: ["Paralyzing Tail", "Devil’s Sight", "Magic Resistance"]},

/* --------------------------------------------------------- */
/*                   SHADOW DEMON — CR 8                    */
/* --------------------------------------------------------- */
{
  id: "shadow-demon",
  name: "Shadow Demon",
  c,
r: 8,
  biomes: ["shadowlands", "dungeon", "ruins"],
  h,
abitat: ["void-rifts", "eternal-gloom"],
  category: "fiend",
  r,
ole: "infiltrator",
  f,
actions: ["shadow-covenant"],
  tags: ["incorporeal", "fear"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["ambush-from-shadows"],
s,
tats: {
      hp: 112,
    ac: 15,
    atk: 18,
    dmg: "2d10 necrotic",
    s,
peed: "40 ft, fly 60 ft"},
  loot: ["ethereal-sulfurshard"],
  a,
bilities: ["Incorporeal Movement", "Shadow Stealth", "Horrifying Visage"]}];

export default MINIONS;
