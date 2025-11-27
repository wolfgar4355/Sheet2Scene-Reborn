import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

  /* ------------------------------------------------------------ */
  /* SLIME CRAWLER — CR 1/4                                       */
  /* ------------------------------------------------------------ */
  {
    id: "slime-crawler",
    name: "Slime Crawler",
    c,
r: 0.25,
    biomes: ["dungeon", "sewer", "ruins"],
    h,
abitat: ["sludge-pits"],
    category: "ooze",
    r,
ole: "lurker",
    tags: ["corrosion", "amorphous"],
    b,
ehavior: {
      a,
ggression: 1,
      c,
ourage: 2},
    t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["crawl-and-latch"],
s,
tats: {
      hp: 18,
      ac: 7,
      atk: 12,
      dmg: "1d6 acid",
      s,
peed: "20 ft"},
    loot: ["sticky-residue"],
    a,
bilities: ["Amorphous Body"]},

  /* ------------------------------------------------------------ */
  /* GELATINOUS SPLITTER — CR 2                                   */
  /* ------------------------------------------------------------ */
  {
    id: "gelatinous-splitter",
    name: "Gelatinous Splitter",
    c,
r: 2,
    biomes: ["dungeon", "crypt", "ruins"],
    h,
abitat: ["ooze-pits"],
    category: "ooze",
    r,
ole: "brute",
    tags: ["splitting", "amorphous"],
    b,
ehavior: {
      a,
ggression: 3,
      c,
ourage: 3},
    t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["engulf-and-divide"],
s,
tats: {
      hp: 52,
      ac: 8,
      atk: 14,
      dmg: "2d8 acid",
      s,
peed: "20 ft"},
    loot: ["gel-mass"],
    a,
bilities: ["Divide on Hit", "Engulf"]},

  /* ------------------------------------------------------------ */
  /* ACID POOL WRAITH — CR 3                                      */
  /* ------------------------------------------------------------ */
  {
    id: "acid-pool-wraith",
    name: "Acid Pool Wraith",
    c,
r: 3,
    biomes: ["dungeon", "sewer", "corrupted-zone"],
    h,
abitat: ["acid-baths"],
    category: "ooze",
    r,
ole: "striker",
    tags: ["volatile", "mist-form"],
    b,
ehavior: {
      a,
ggression: 3,
      c,
ourage: 4},
    t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["strike-and-dissolve"],
s,
tats: {
      hp: 55,
      ac: 12,
      atk: 16,
      dmg: "2d6 acid",
      s,
peed: "25 ft, swim 30 ft"},
    loot: ["volatile-acid"],
    a,
bilities: ["Toxic Mist", "Dissolve Flesh"]},

  /* ------------------------------------------------------------ */
  /* BLACK PUDDING SPAWN — CR 5                                   */
  /* ------------------------------------------------------------ */
  {
    id: "black-pudding-spawn",
    name: "Black Pudding Spawn",
    c,
r: 5,
    biomes: ["dungeon", "underdark", "ruins"],
    h,
abitat: ["deep-ooze-pools"],
    category: "ooze",
    r,
ole: "frontliner",
    tags: ["corrosion", "split"],
    b,
ehavior: {
      a,
ggression: 5,
      c,
ourage: 5},
    t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["grip-and-corrosion"],
s,
tats: {
      hp: 78,
      ac: 10,
      atk: 16,
      dmg: "2d10 acid",
      s,
peed: "20 ft, climb 10 ft"},
    loot: ["corroded-armor", "ooze-gland"],
    a,
bilities: ["Equipment Corrosion", "Split"]},

  /* ------------------------------------------------------------ */
  /* VOID OOZE — CR 8 (ELITE)                                     */
  /* ------------------------------------------------------------ */
  {
    id: "void-ooze",
    name: "Void Ooze",
    c,
r: 8,
    biomes: ["deep-underdark", "shadowlands", "corruption-zones"],
    h,
abitat: ["void-rifts"],
    category: "ooze",
    r,
ole: "elite-controller",
    tags: ["void", "disintegration"],
    b,
ehavior: {
      a,
ggression: 6,
      c,
ourage: 6},
    t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["pull-then-devour"],
s,
tats: {
      hp: 145,
      ac: 15,
      atk: 18,
      dmg: "2d10 necrotic + disintegrating touch",
      s,
peed: "30 ft"},
    loot: ["voidic-residue", "collapsed-reality-shard"],
    a,
bilities: ["Gravity Pull", "Void Dissolution", "Matter Collapse"]}];

export default MINIONS;
