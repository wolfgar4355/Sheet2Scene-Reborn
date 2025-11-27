import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* SKELETON — CR 1/4                                             */
/* ------------------------------------------------------------ */
{
  id: "skeleton",
  name: "Skeleton",
  c,
r: 0.25,
  biomes: ["ruins", "dungeon", "desert"],
  h,
abitat: ["crypt", "ancient-ruins", "catacombs"],
  category: "undead",
  r,
ole: "bruiser",
  f,
actions: ["necrotic-legion"],
  tags: ["undead", "resistant"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["bone-from-cover"],
s,
tats: {
      hp: 13,
    ac: 13,
    atk: 12,
    dmg: "1d6+2 shortsword",
    s,
peed: "30 ft"},
  loot: ["bone-shards"],
  a,
bilities: ["Damage Resistance: Piercing"]},

/* ------------------------------------------------------------ */
/* ZOMBIE — CR 1/4                                               */
/* ------------------------------------------------------------ */
{
  id: "zombie",
  name: "Zombie",
  c,
r: 0.25,
  biomes: ["graveyard", "swamp", "ruins", "crypt"],
  h,
abitat: ["burial-crypt", "swamp-graves"],
  category: "undead",
  r,
ole: "brute",
  f,
actions: ["rotting-coven"],
  tags: ["relentless"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["mindless-charge"],
s,
tats: {
      hp: 18,
    ac: 8,
    atk: 14,
    dmg: "1d6+2",
    s,
peed: "20 ft"},
  loot: ["rotting-flesh"],
  a,
bilities: ["Undead Fortitude"]},

/* ------------------------------------------------------------ */
/* GHOUL — CR 1                                                  */
/* ------------------------------------------------------------ */
{
  id: "ghoul",
  name: "Ghoul",
  c,
r: 1,
  biomes: ["graveyard", "ruins", "underdark"],
  h,
abitat: ["mass-graves", "ancient-ruins", "underdark-nest"],
  category: "undead",
  r,
ole: "skirmisher",
  f,
actions: ["void-feasters"],
  tags: ["paralysis", "ambush"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["paralyzing-first"],
s,
tats: {
      hp: 22,
    ac: 12,
    atk: 15,
    dmg: "2d6+2",
    s,
peed: "30 ft"},
  loot: ["ghoul-fangs"],
  a,
bilities: ["Paralyzing Claw"]},

/* ------------------------------------------------------------ */
/* WIGHT — CR 3                                                  */
/* ------------------------------------------------------------ */
{
  id: "wight",
  name: "Wight",
  c,
r: 3,
  biomes: ["shadowlands", "crypts", "underdark"],
  h,
abitat: ["shadow-crypt", "ancient-catacombs"],
  category: "undead",
  r,
ole: "commander",
  f,
actions: ["death-knights"],
  tags: ["life-drain"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["drain-to-weaken"],
s,
tats: {
      hp: 45,
    ac: 14,
    atk: 16,
    dmg: "2d6+4 necrotic",
    s,
peed: "30 ft"},
  loot: ["dark-essence"],
  a,
bilities: ["Life Drain", "Command Undead"]},

/* ------------------------------------------------------------ */
/* MUMMY — CR 3                                                  */
/* ------------------------------------------------------------ */
{
  id: "mummy",
  name: "Mummy",
  c,
r: 3,
  biomes: ["desert", "tombs", "ruins"],
  h,
abitat: ["desert-temple", "burial-chamber"],
  category: "undead",
  r,
ole: "brute",
  f,
actions: ["sun-cursed-pharaohs"],
  tags: ["rot", "fear"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["fear-then-slam"],
s,
tats: {
      hp: 58,
    ac: 11,
    atk: 16,
    dmg: "2d6+3 bludgeoning",
    s,
peed: "20 ft"},
  loot: ["ancient-bandages"],
  a,
bilities: ["Mummy Rot", "Dreadful Glare"]},

/* ------------------------------------------------------------ */
/* WRAITH — CR 5                                                 */
/* ------------------------------------------------------------ */
{
  id: "wraith",
  name: "Wraith",
  c,
r: 5,
  biomes: ["shadowlands", "ruins", "underdark"],
  h,
abitat: ["shadow-chamber", "forgotten-halls"],
  category: "undead",
  r,
ole: "controller",
  f,
actions: ["spectral-dominion"],
  tags: ["incorporeal", "fear"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["drift-through-walls"],
s,
tats: {
      hp: 85,
    ac: 13,
    atk: 18,
    dmg: "2d8 necrotic",
    s,
peed: "0 ft, fly 60 ft"},
  loot: ["soul-fragment"],
  a,
bilities: ["Incorporeal Movement", "Life Drain", "Horrifying Visage"]}];

export default MINIONS;
