import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* BANDIT (CR 1/8) — Classic low-level humanoid                 */
/* ------------------------------------------------------------ */
{
  id: "bandit",
  name: "Bandit",
  c,
r: 0.125,
  biomes: ["forest", "hills", "roads", "plains"],
  h,
abitat: ["roadside-ambush", "bandit-camp"],
  category: "humanoid",
  r,
ole: "striker",
  f,
actions: ["red-knives"],
  tags: ["ambusher"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 2},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["hit-and-run"],
s,
tats: {
      hp: 11,
    ac: 12,
    atk: 10,
    dmg: "1d6 scimitar",
    s,
peed: "30 ft"},
  loot: ["tarnished-coin", "rusty-dagger"],
  a,
bilities: ["Pack Tactics (variant)"]},

/* ------------------------------------------------------------ */
/* CULTIST (CR 1/4)                                             */
/* ------------------------------------------------------------ */
{
  id: "cultist",
  name: "Cultist",
  c,
r: 0.25,
  biomes: ["ruins", "dungeon", "underdark"],
  h,
abitat: ["trance-temple", "void-shrine"],
  category: "humanoid",
  r,
ole: "controller",
  f,
actions: ["void-cult"],
  tags: ["dark-magic"],
  b,
ehavior: {
    a,
ggression: 1,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["curse-first"],
s,
tats: {
      hp: 15,
    ac: 12,
    atk: 11,
    dmg: "1d6 scimitar",
    s,
peed: "30 ft"},
  loot: ["ritual-knife", "void-charm"],
  a,
bilities: ["Dark Chant", "Curse Bolt"]},

/* ------------------------------------------------------------ */
/* TRIBAL WARRIOR — CR 1/2                                      */
/* ------------------------------------------------------------ */
{
  id: "tribal-warrior",
  name: "Tribal Warrior",
  c,
r: 0.5,
  biomes: ["jungle", "savanna", "mountains"],
  h,
abitat: ["tribal-camp", "war-camp"],
  category: "humanoid",
  r,
ole: "bruiser",
  f,
actions: ["tribal-alliance"],
  tags: ["feral"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["berserk-charge"],
s,
tats: {
      hp: 19,
    ac: 13,
    atk: 12,
    dmg: "1d8 spear",
    s,
peed: "30 ft"},
  loot: ["tribal-necklace"],
  a,
bilities: ["Battle Cry"]},
/* ------------------------------------------------------------ */
/* SCOUT — CR 1                                                 */
/* ------------------------------------------------------------ */
{
  id: "scout",
  name: "Scout",
  c,
r: 1,
  biomes: ["forest", "hills", "coast", "mountains"],
  h,
abitat: ["outpost", "border-fort"],
  category: "humanoid",
  r,
ole: "skirmisher",
  f,
actions: ["frontier-clans"],
  tags: ["ranged", "stealthy"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 2},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["ranged-kite"],
s,
tats: {
      hp: 16,
    ac: 13,
    atk: 14,
    dmg: "1d8 longbow",
    s,
peed: "35 ft"},
  loot: ["arrow-bundle"],
  a,
bilities: ["Keen Sight", "Hide"]},

/* ------------------------------------------------------------ */
/* ASSASSIN — Elite (CR 5)                                      */
/* ------------------------------------------------------------ */
{
  id: "assassin",
  name: "Assassin",
  c,
r: 5,
  biomes: ["city", "underdark", "shadowlands"],
  h,
abitat: ["rooftops", "shadow-alley"],
  category: "humanoid",
  r,
ole: "elite-striker",
  f,
actions: ["shadow-syndicate"],
  tags: ["poison", "stealth"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["alpha-strike"],
s,
tats: {
      hp: 78,
    ac: 15,
    atk: 18,
    dmg: "1d6+4 / 7d6 sneak attack",
    s,
peed: "40 ft"},
  loot: ["black-poison", "shadow-dagger"],
  a,
bilities: ["Sneak Attack", "Poison Strike", "Shadow Step"]},

/* ------------------------------------------------------------ */
/* WARLORD — Boss-tier humanoid (CR 8)                          */
/* ------------------------------------------------------------ */
{
  id: "warlord",
  name: "Warlord",
  c,
r: 8,
  biomes: ["plains", "mountains", "battlefields"],
  h,
abitat: ["war-camp", "command-tent"],
  category: "humanoid",
  r,
ole: "leader",
  f,
actions: ["iron-legion", "frontier-clans"],
  tags: ["tactician", "commander"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["command-strike"],
s,
tats: {
      hp: 148,
    ac: 17,
    atk: 19,
    dmg: "1d10+7 / 2d8 cleave",
    s,
peed: "30 ft"},
  loot: ["warlord-sigil", "battle-banner"],
  a,
bilities: ["Command Ally", "War Cry", "Brutal Strike"]}];

export default MINIONS;
