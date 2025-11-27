import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* WOLF-FANG RAGER — CR 2 (base werewolf)                       */
/* ------------------------------------------------------------ */
{
  id: "wolf-fang-rager",
  name: "Wolf-Fang Rager",
  c,
r: 2,
  biomes: ["forest", "hills", "tundra"],
  h,
abitat: ["frozen-camps", "wolf-dens"],
  category: "lycanthrope",
  r,
ole: "brute",
  f,
actions: ["feral-packs", "moon-blood"],
  tags: ["rage", "shifter"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["charge-and-maul"],
s,
tats: {
      hp: 35,
    ac: 13,
    atk: 5,
    dmg: "2d6+3 slashing",
    s,
peed: "40 ft"},
  loot: ["wolf-pelt"],
  a,
bilities: ["Shapeshift", "Rage Bite"]},

/* ------------------------------------------------------------ */
/* WEREBOAR BERSERKER — CR 3                                    */
/* ------------------------------------------------------------ */
{
  id: "wereboar-berserker",
  name: "Wereboar Berserker",
  c,
r: 3,
  biomes: ["forest", "mountains"],
  h,
abitat: ["boar-camps", "hidden-boar-pits"],
  category: "lycanthrope",
  r,
ole: "brute",
  f,
actions: ["feral-packs"],
  tags: ["boar-form", "thick-hide"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["reckless-charge"],
s,
tats: {
      hp: 45,
    ac: 14,
    atk: 6,
    dmg: "2d8+4 piercing",
    s,
peed: "40 ft"},
  loot: ["boar-hide", "sharp-tusk"],
  a,
bilities: ["Boar Charge", "Thick Hide"]},

/* ------------------------------------------------------------ */
/* WERE-TIGER STALKER — CR 4                                    */
/* ------------------------------------------------------------ */
{
  id: "weretiger-stalker",
  name: "Weretiger Stalker",
  c,
r: 4,
  biomes: ["jungle", "forest"],
  h,
abitat: ["jungle-shrines", "jungle-ruins"],
  category: "lycanthrope",
  r,
ole: "skirmisher",
  f,
actions: ["shadow-howlers"],
  tags: ["stealth", "pounce"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["pounce-from-shadow"],
s,
tats: {
      hp: 58,
    ac: 16,
    atk: 7,
    dmg: "2d6 slashing",
    s,
peed: "40 ft, climb 20 ft"},
  loot: ["striped-fang"],
  a,
bilities: ["Pouncedown", "Shadow Step"]},

/* ------------------------------------------------------------ */
/* WEREBEAR GUARDIAN — CR 6                                     */
/* ------------------------------------------------------------ */
{
  id: "werebear-guardian",
  name: "Werebear Guardian",
  c,
r: 6,
  biomes: ["forest", "mountains"],
  h,
abitat: ["ancient-groves"],
  category: "lycanthrope",
  r,
ole: "protector",
  f,
actions: ["warden-clan"],
  tags: ["guardian", "regeneration"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 10},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["defend-pack"],
s,
tats: {
      hp: 92,
    ac: 15,
    atk: 8,
    dmg: "2d10+5 bludgeoning",
    s,
peed: "30 ft"},
  loot: ["bear-hide", "guardian-emblem"],
  a,
bilities: ["Regeneration", "Bear Roar", "Guardian Shield"]},

/* ------------------------------------------------------------ */
/* ALPHA LYCAN LORD — CR 11 (Boss)                              */
/* ------------------------------------------------------------ */
{
  id: "alpha-lycan-lord",
  name: "Alpha Lycan Lord",
  c,
r: 11,
  biomes: ["forest", "tundra", "shadowlands"],
  h,
abitat: ["alpha-lairs"],
  category: "lycanthrope",
  r,
ole: "alpha-controller",
  f,
actions: ["alpha-dominion", "moon-blood"],
  tags: ["alpha", "command", "shifter"],
  b,
ehavior: {
    a,
ggression: 9,
    c,
ourage: 10},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["roar-to-buff-pack-then-rip"],
s,
tats: {
      hp: 210,
    ac: 18,
    atk: 12,
    dmg: "3d12+6 slashing",
    s,
peed: "50 ft"},
  loot: ["alpha-fang", "moon-blade"],
  a,
bilities: [
    "Alpha Roar",
    "Aura of Command",
    "Pack Resurrection",
    "Pack Rally"]}];

export default MINIONS;
