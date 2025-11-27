import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* GRIFFON — CR 2                                               */
/* ------------------------------------------------------------ */
{
  id: "griffon",
  name: "Griffon",
  c,
r: 2,
  biomes: ["mountains", "hills", "savanna"],
  h,
abitat: ["sky-cliffs", "eagle-criers"],
  category: "magical-beast",
  r,
ole: "striker",
  f,
actions: ["wildwood-tribes"],
  tags: ["flying", "predator"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["fly-by-attack"],
s,
tats: {
      hp: 52,
    ac: 13,
    atk: 15,
    dmg: "1d8 + 2d6",
    s,
peed: "40 ft, fly 80 ft"},
  loot: ["griffon-feather", "beak-fragment"],
  a,
bilities: ["Talon Swipe", "Dive Attack"]},

/* ------------------------------------------------------------ */
/* UNICORN — CR 5                                               */
/* ------------------------------------------------------------ */
{
  id: "unicorn",
  name: "Unicorn",
  c,
r: 5,
  biomes: ["forest", "feywild"],
  h,
abitat: ["sacred-groves", "ancient-glade"],
  category: "magical-beast",
  r,
ole: "mystic",
  f,
actions: ["ashen-seers"],
  tags: ["holy", "protector"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["charge"],
s,
tats: {
      hp: 68,
    ac: 15,
    atk: 14,
    dmg: "1d8 radiant / horn",
    s,
peed: "50 ft"},
  loot: ["unicorn-horn", "forest-horn-shard"],
  a,
bilities: ["Healing Touch", "Teleport", "Magic Assistance"]},

/* ------------------------------------------------------------ */
/* MANTICORE — CR 3                                             */
/* ------------------------------------------------------------ */
{
  id: "manticore",
  name: "Manticore",
  c,
r: 3,
  biomes: ["desert", "badlands", "ruins"],
  h,
abitat: ["scorpion-crags", "ancient-steppes"],
  category: "magical-beast",
  r,
ole: "striker",
  f,
actions: ["red-knives"],
  tags: ["spikes", "flying"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["spike-volley"],
s,
tats: {
      hp: 56,
    ac: 14,
    atk: 14,
    dmg: "1d8 / spike-volley (1d8+3)",
    s,
peed: "40 ft, fly 50 ft"},
  loot: ["manticore-spike", "manticore-hide"],
  a,
bilities: ["Spike Volley", "Lion's Fury"]},

/* ------------------------------------------------------------ */
/* BASILISK — CR 6                                              */
/* ------------------------------------------------------------ */
{
  id: "basilisk",
  name: "Basilisk",
  c,
r: 6,
  biomes: ["cavern", "underdark", "swamp"],
  h,
abitat: ["deep-stone", "fungal-deeps"],
  category: "magical-beast",
  r,
ole: "controller",
  f,
actions: ["void-cult"],
  tags: ["petrify"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["petrifying-gaze"],
s,
tats: {
      hp: 85,
    ac: 15,
    atk: 15,
    dmg: "1d10 + 4",
    s,
peed: "30 ft"},
  loot: ["basilisk-eye", "stone-scale"],
  a,
bilities: ["Petrifying Gaze"]},

/* ------------------------------------------------------------ */
/* CHIMERA — CR 6                                               */
/* ------------------------------------------------------------ */
{
  id: "chimera",
  name: "Chimera",
  c,
r: 6,
  biomes: ["mountains", "ruins"],
  h,
abitat: ["dragon-ridges", "volcanic-ledges"],
  category: "magical-beast",
  r,
ole: "predator",
  f,
actions: ["wildwood-tribes"],
  tags: ["multi-head", "fire"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["bite-claw-maul"],
s,
tats: {
      hp: 114,
    ac: 14,
    atk: 16,
    dmg: "1d10+4 / 2d6 / fire breath 20ft",
    s,
peed: "40 ft, fly 60 ft"},
  loot: ["lion-horn", "dragon-scale", "goat-horn"],
  a,
bilities: ["Fire Breath", "Multiattack"]}];

export default MINIONS;
