import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* --------------------------------------------------------- */
/*                     AIR ELEMENTAL — CR 5                  */
/* --------------------------------------------------------- */
{
  id: "air-elemental",
  name: "Air Elemental",
  c,
r: 5,
  biomes: ["sky", "desert", "mountains"],
  h,
abitat: ["storm-clouds", "wind-temple"],
  category: "elemental",
  r,
ole: "skirmisher",
  f,
actions: ["tempest-court"],
  tags: ["flying", "wind"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["hit-and-drift"],
s,
tats: {
      hp: 90,
    ac: 15,
    atk: 14,
    dmg: "2d8 bludgeoning",
    s,
peed: "fly 90 ft"},
  loot: ["air-essence"],
  a,
bilities: ["Whirlwind", "Incorporeal Drift"]},

/* --------------------------------------------------------- */
/*                    EARTH ELEMENTAL — CR 5                 */
/* --------------------------------------------------------- */
{
  id: "earth-elemental",
  name: "Earth Elemental",
  c,
r: 5,
  biomes: ["caves", "mountains", "underground"],
  h,
abitat: ["deep-caverns", "geomantic-core"],
  category: "elemental",
  r,
ole: "brute",
  f,
actions: ["stonewardens"],
  tags: ["burrower", "stone"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["burrow-ambush"],
s,
tats: {
      hp: 126,
    ac: 17,
    atk: 15,
    dmg: "2d8+5 bludgeoning",
    s,
peed: "30 ft, burrow 30 ft"},
  loot: ["earth-essence"],
  a,
bilities: ["Earth Glide", "Ground Slam"]},

/* --------------------------------------------------------- */
/*                    FIRE ELEMENTAL — CR 5                  */
/* --------------------------------------------------------- */
{
  id: "fire-elemental",
  name: "Fire Elemental",
  c,
r: 5,
  biomes: ["volcano", "desert", "forge"],
  h,
abitat: ["lava-pools", "blazing-furnace"],
  category: "elemental",
  r,
ole: "controller",
  f,
actions: ["inferno-kin"],
  tags: ["ignite", "flame"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["burn-through-lines"],
s,
tats: {
      hp: 102,
    ac: 14,
    atk: 15,
    dmg: "2d6 fire",
    s,
peed: "50 ft"},
  loot: ["fire-essence"],
  a,
bilities: ["Flame Form", "Ignite", "Blazing Trail"]},

/* --------------------------------------------------------- */
/*                    WATER ELEMENTAL — CR 5                 */
/* --------------------------------------------------------- */
{
  id: "water-elemental",
  name: "Water Elemental",
  c,
r: 5,
  biomes: ["coast", "river", "lake", "swamp"],
  h,
abitat: ["whirlpools", "deep-lagoons"],
  category: "elemental",
  r,
ole: "controller",
  f,
actions: ["tideborn"],
  tags: ["water", "tidal"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["engulf-and-drown"],
s,
tats: {
      hp: 114,
    ac: 14,
    atk: 14,
    dmg: "2d8+4 bludgeoning",
    s,
peed: "30 ft, swim 90 ft"},
  loot: ["water-essence"],
  a,
bilities: ["Engulf", "Liquid Form"]},

/* --------------------------------------------------------- */
/*                    MAGMA ELEMENTAL — CR 6                 */
/* --------------------------------------------------------- */
{
  id: "magma-elemental",
  name: "Magma Elemental",
  c,
r: 6,
  biomes: ["volcano", "infernal-zones"],
  h,
abitat: ["magma-chambers", "molten-fissure"],
  category: "elemental",
  r,
ole: "brute",
  f,
actions: ["inferno-kin"],
  tags: ["firecore", "lava"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["eruption-charge"],
s,
tats: {
      hp: 130,
    ac: 16,
    atk: 16,
    dmg: "2d10+5 fire",
    s,
peed: "30 ft"},
  loot: ["magma-core"],
  a,
bilities: ["Lava Burst", "Molten Body", "Eruption Step"]},

/* --------------------------------------------------------- */
/*                    STORM ELEMENTAL — CR 7                 */
/* --------------------------------------------------------- */
{
  id: "storm-elemental",
  name: "Storm Elemental",
  c,
r: 7,
  biomes: ["thunderclouds", "coast", "sky"],
  h,
abitat: ["tempest-nexus", "storm-spire"],
  category: "elemental",
  r,
ole: "elite-controller",
  f,
actions: ["tempest-court"],
  tags: ["lightning", "thunder"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["aoe-burst-then-hover"],
s,
tats: {
      hp: 140,
    ac: 16,
    atk: 17,
    dmg: "2d10 lightning / thunder pulse 4d8",
    s,
peed: "fly 90 ft"},
  loot: ["storm-essence"],
  a,
bilities: ["Lightning Burst", "Thunder Pulse", "Storm Shield"]}];

export default MINIONS;
