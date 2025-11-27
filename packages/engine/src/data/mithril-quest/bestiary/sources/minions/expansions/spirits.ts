import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* CANDLE SPIRIT — CR 1 */
/* ------------------------------------------------------------ */
{
  id: "candle-spirit",
  name: "Candle Spirit",
  c,
r: 1,
  biomes: ["dungeon", "crypt", "ruins"],
  h,
abitat: ["forgotten-altars", "burial-chambers"],
  category: "spirit",
  r,
ole: "lurker",
  tags: ["ghostly", "flicker", "undead-lite"],
  f,
actions: ["Spirit Wardens"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["flicker-near-targets"],
s,
tats: {
      hp: 18,
    ac: 10,
    atk: 10,
    dmg: "1d6 radiant",
    s,
peed: "10 ft, hover 30 ft"},
  loot: ["flicker-wax"],
  a,
bilities: ["Flickering Glow", "Flicker Step"]},

/* ------------------------------------------------------------ */
/* WRAITHLING — CR 3 */
/* ------------------------------------------------------------ */
{
  id: "wraithling",
  name: "Wraithling",
  c,
r: 3,
  biomes: ["shadowlands", "crypts"],
  h,
abitat: ["grave-corridors", "sorrow-chasms"],
  category: "spirit",
  r,
ole: "skirmisher",
  tags: ["shadow", "fear"],
  f,
actions: ["Nether Wraiths"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["hit-and-fade"],
s,
tats: {
      hp: 36,
    ac: 14,
    atk: 14,
    dmg: "2d6 necrotic",
    s,
peed: "40 ft, hover 40 ft"},
  loot: ["cold-shards"],
  a,
bilities: ["Shadow Touch", "Ethereal Drift"]},

/* ------------------------------------------------------------ */
/* GRAVE WHISPERER — CR 4 */
/* ------------------------------------------------------------ */
{
  id: "grave-whisperer",
  name: "Grave Whisperer",
  c,
r: 4,
  biomes: ["graveyard", "crypt", "ruins"],
  h,
abitat: ["ossuary-halls", "mourning-niches"],
  category: "spirit",
  r,
ole: "controller",
  tags: ["poltergeist", "possession"],
  f,
actions: ["Spirit Wardens"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["psychic-scream-then-possess"],
s,
tats: {
      hp: 52,
    ac: 13,
    atk: 16,
    dmg: "2d8 psychic",
    s,
peed: "20 ft, hover 40 ft"},
  loot: ["whispering-bone"],
  a,
bilities: ["Mortifying Wail", "Mind Grip", "Possess Corpse"]},

/* ------------------------------------------------------------ */
/* ANCESTRAL GUARDIAN — CR 6 */
/* ------------------------------------------------------------ */
{
  id: "ancestral-guardian",
  name: "Ancestral Guardian",
  c,
r: 6,
  biomes: ["sacred-woods", "mountain-shrines"],
  h,
abitat: ["ancestral-groves", "ancestor-stones"],
  category: "spirit",
  r,
ole: "bruiser",
  tags: ["guardian", "ancient"],
  f,
actions: ["Ancestor Courts"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 7},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["protect-sacred-zone"],
s,
tats: {
      hp: 110,
    ac: 17,
    atk: 18,
    dmg: "2d10 radiant",
    s,
peed: "35 ft"},
  loot: ["ancestral-sigil"],
  a,
bilities: ["Radiant Slam", "Guardian Shield", "Sanctified Light"]},

/* ------------------------------------------------------------ */
/* SOUL TEMPEST — CR 10 (ELITE SPIRIT BOSS) */
/* ------------------------------------------------------------ */
{
  id: "soul-tempest",
  name: "Soul Tempest",
  c,
r: 10,
  biomes: ["soulstorm-wastes", "temporal-zones"],
  h,
abitat: ["echo-nexus", "spirit-wells"],
  category: "spirit",
  r,
ole: "controller",
  tags: ["spectral", "storm", "soul", "aoe"],
  f,
actions: ["Echo Choirs"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 8},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["scatter-party-then-aoe-pulse"],
s,
tats: {
      hp: 180,
    ac: 18,
    atk: 20,
    dmg: "3d10 psychic + soul drain",
    s,
peed: "hover 60 ft"},
  loot: ["resonant-crystal", "tempest-essence"],
  a,
bilities: [
    "Soul Screech",
    "Spirit Pulse",
    "Astral Sunder",
    "Temporal Disruption"]}];

export default MINIONS;
