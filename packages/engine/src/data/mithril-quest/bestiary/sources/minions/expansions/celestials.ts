import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* LANTERN CHERUB — CR 1 (SUPPORT)                              */
/* ------------------------------------------------------------ */
{
  id: "lantern-cherub",
  name: "Lantern Cherub",
  c,
r: 1,
  biomes: ["temple", "holy-grounds", "mountain"],
  h,
abitat: ["celestial-garden", "sanctuaries"],
  category: "celestial",
  r,
ole: "support",
  f,
actions: ["radiant-host"],
  tags: ["light", "healing", "hover"],
  b,
ehavior: {
    a,
ggression: 1,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["beam-light-and-aid-ally"],
s,
tats: {
      hp: 18,
    ac: 14,
    atk: 10,
    dmg: "1d4 radiant",
    s,
peed: "10 ft (hover)"},
  loot: ["radiant-spark"],
  a,
bilities: ["Holy Glow", "Minor Heal", "Soothing Hymn"]},

/* ------------------------------------------------------------ */
/* ANVIL SENTINEL — CR 3                                        */
/* ------------------------------------------------------------ */
{
  id: "anvil-sentinel",
  name: "Anvil Sentinel",
  c,
r: 3,
  biomes: ["temple", "mountains", "ruins"],
  h,
abitat: ["celestial-forge", "radiant-stronghold"],
  category: "celestial",
  r,
ole: "guardian",
  f,
actions: ["forgeborn-order"],
  tags: ["armor", "radiant"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 8},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["stand-still-and-pierce-on-12"],
s,
tats: {
      hp: 55,
    ac: 18,
    atk: 14,
    dmg: "1d8+3 radiant",
    s,
peed: "25 ft"},
  loot: ["radiant-ingot"],
  a,
bilities: ["Radiant Smite", "Divine Ward"]},

/* ------------------------------------------------------------ */
/* VALKYRIAN RIDER — CR 5                                       */
/* ------------------------------------------------------------ */
{
  id: "valkyrian-rider",
  name: "Valkyrian Rider",
  c,
r: 5,
  biomes: ["mountains", "holy-grounds", "battlefields"],
  h,
abitat: ["storm-peak", "temple-chariot"],
  category: "celestial",
  r,
ole: "striker",
  f,
actions: ["skyward-legion"],
  tags: ["flying", "lance", "radiant"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 9},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["dive-charge-from-above"],
s,
tats: {
      hp: 78,
    ac: 17,
    atk: 18,
    dmg: "2d8+3 radiant (lance)",
    s,
peed: "40 ft, fly 80 ft"},
  loot: ["valkyrian-feather"],
  a,
bilities: ["Sky Charge", "Radiant Lance", "Wing Buffet"]},

/* ------------------------------------------------------------ */
/* LIGHTFORGED GOLEM — CR 7                                     */
/* ------------------------------------------------------------ */
{
  id: "lightforged-golem",
  name: "Lightforged Golem",
  c,
r: 7,
  biomes: ["temple", "ruins", "holy-grounds"],
  h,
abitat: ["titan-chamber"],
  category: "celestial",
  r,
ole: "defender",
  f,
actions: ["forgeborn-order", "construct"],
  tags: ["radiant", "tank"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 10},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["frontline-then-radiant-burst"],
s,
tats: {
      hp: 110,
    ac: 19,
    atk: 16,
    dmg: "2d10+4 radiant",
    s,
peed: "30 ft"},
  loot: ["light-core"],
  a,
bilities: ["Radiant Pulse", "Aegis Shield", "Unbreakable Frame"]},

/* ------------------------------------------------------------ */
/* SERAPHIC CHAMPION — CR 10 (ELITE/BOSS)                       */
/* ------------------------------------------------------------ */
{
  id: "seraphic-champion",
  name: "Seraphic Champion",
  c,
r: 10,
  biomes: ["holy-grounds", "temples", "sun-peak"],
  h,
abitat: ["radiant-spire", "flame-wings"],
  category: "celestial",
  r,
ole: "elite-warrior",
  f,
actions: ["radiant-host", "flame-legion"],
  tags: ["flying", "radiant", "holy-strike"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 10},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["smite-evil-with-powered-strike"],
s,
tats: {
      hp: 145,
    ac: 20,
    atk: 22,
    dmg: "2d10+6 radiant",
    s,
peed: "40 ft, fly 80 ft"},
  loot: ["seraphic-feather", "flame-sigil"],
  a,
bilities: [
    "Holy Smite",
    "Divine Wings",
    "Blinding Flare",
    "Aura of Courage"]}];

export default MINIONS;
