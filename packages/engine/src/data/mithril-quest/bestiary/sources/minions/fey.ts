import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* --------------------------------------------------------- */
/*                     PIXIE — CR 1/4                        */
/* --------------------------------------------------------- */

{
  id: "pixie",
  name: "Pixie",
  c,
r: 0.25,
  biomes: ["forest", "feywild"],
  h,
abitat: ["moonlit-glade", "mushroom-circle"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["fey-court"],
  tags: ["invisible", "charming"],
  b,
ehavior: {
    a,
ggression: 1,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["invisible-harassment", "illusion-dash"],
s,
tats: {
      hp: 15,
    ac: 14,
    atk: 11,
    dmg: "1d4 magic dust",
    s,
peed: "fly 30 ft"},
  loot: ["pixie-dust"],
  a,
bilities: ["Invisibility", "Dancing Lights"]},

/* --------------------------------------------------------- */
/*                     SATYR — CR 1                          */
/* --------------------------------------------------------- */

{
  id: "satyr",
  name: "Satyr",
  c,
r: 1,
  biomes: ["forest", "hills", "feywild"],
  h,
abitat: ["fae-grove", "revelry-ring"],
  category: "fey",
  r,
ole: "brute",
  f,
actions: ["fey-court"],
  tags: ["trickery", "charming"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["harass-disrupt"],
s,
tats: {
      hp: 31,
    ac: 14,
    atk: 13,
    dmg: "1d6+2 / 1d6+2 shortbow",
    s,
peed: "40 ft"},
  loot: ["fae-flute"],
  a,
bilities: ["Pan Flute Magic", "Charm Person"]},

/* --------------------------------------------------------- */
/*                     DRYAD — CR 1                          */
/* --------------------------------------------------------- */

{
  id: "dryad",
  name: "Dryad",
  c,
r: 1,
  biomes: ["forest", "feywild"],
  h,
abitat: ["enchanted-tree", "ancient-grove"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["fey-court"],
  tags: ["nature", "charming"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 2},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["charm-then-hide", "phase-through-trees"],
s,
tats: {
      hp: 22,
    ac: 14,
    atk: 11,
    dmg: "1d4 staff",
    s,
peed: "30 ft"},
  loot: ["enchanted-bark"],
  a,
bilities: ["Tree Stride", "Charm Person", "Entangle"]},

/* --------------------------------------------------------- */
/*                  FOREST SPIRIT — CR 2                     */
/* --------------------------------------------------------- */

{
  id: "forest-spirit",
  name: "Forest Spirit",
  c,
r: 2,
  biomes: ["forest", "sacred-groves"],
  h,
abitat: ["spirit-clearing", "blossom-sanctum"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["nature-spirits"],
  tags: ["nature", "guardian"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["phase-through-trees", "vine-lash"],
s,
tats: {
      hp: 36,
    ac: 15,
    atk: 15,
    dmg: "1d8+3 nature force",
    s,
peed: "30 ft"},
  loot: ["spirit-essence"],
  a,
bilities: ["Phase Step", "Vine Lash", "Nature’s Ward"]},

/* --------------------------------------------------------- */
/*                     REDCAP — CR 3                         */
/* --------------------------------------------------------- */

{
  id: "redcap",
  name: "Redcap",
  c,
r: 3,
  biomes: ["forest", "bog", "darkwoods"],
  h,
abitat: ["murder-hollow", "blighted-thicket"],
  category: "fey",
  r,
ole: "brute",
  f,
actions: ["blood-faith"],
  tags: ["bloodlust"],
  b,
ehavior: {
    a,
ggression: 9,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["kill-the-weak-first"],
s,
tats: {
      hp: 45,
    ac: 14,
    atk: 16,
    dmg: "1d6+7 / 2d4+2 iron boots",
    s,
peed: "40 ft"},
  loot: ["blood-soaked-cap"],
  a,
bilities: ["Iron Boot Stomp", "Dreadful Glare"]},
/* --------------------------------------------------------- */
/*                 GREEN HAG — CR 3                          */
/* --------------------------------------------------------- */

{
  id: "green-hag",
  name: "Green Hag",
  c,
r: 3,
  biomes: ["swamp", "forest", "ruins"],
  h,
abitat: ["witch-den", "rotting-marsh-hut"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["coven"],
  tags: ["illusion", "coven"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["illusion-lure"],
s,
tats: {
      hp: 62,
    ac: 14,
    atk: 16,
    dmg: "1d6+3 claws",
    s,
peed: "30 ft"},
  loot: ["witch-teeth"],
  a,
bilities: ["Illusory Appearance", "Mimicry", "Horrific Touch"]},

/* --------------------------------------------------------- */
/*                 SHADOW HAG — CR 5                         */
/* --------------------------------------------------------- */

{
  id: "shadow-hag",
  name: "Shadow Hag",
  c,
r: 5,
  biomes: ["swamp", "feywild", "shadowlands"],
  h,
abitat: ["shadow-bog", "moonless-hollow"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["coven-shadow"],
  tags: ["shadow", "terror"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 7},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["lure-into-water", "shadow-ambush"],
s,
tats: {
      hp: 90,
    ac: 17,
    atk: 18,
    dmg: "2d8 psychic",
    s,
peed: "30 ft, swim 20 ft"},
  loot: ["other-sphere-essence"],
  a,
bilities: ["Shadow Form", "Dream Bind", "Illusionary Double"]},

/* --------------------------------------------------------- */
/*                 ELADRIN (SPRING) — CR 4                   */
/* --------------------------------------------------------- */

{
  id: "eladrin-spring",
  name: "Eladrin (Spring)",
  c,
r: 4,
  biomes: ["feywild", "enchanted-gardens"],
  h,
abitat: ["spring-court", "flower-palace"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["eladrin-court"],
  tags: ["seasonal", "joy"],
  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["bright-flourish", "mist-step"],
s,
tats: {
      hp: 70,
    ac: 16,
    atk: 17,
    dmg: "2d6 radiant",
    s,
peed: "30 ft"},
  loot: ["spring-essence"],
  a,
bilities: ["Fey Step (Spring)", "Euphoria Burst"]},

/* --------------------------------------------------------- */
/*                 ELADRIN (AUTUMN) — CR 4                   */
/* --------------------------------------------------------- */

{
  id: "eladrin-autumn",
  name: "Eladrin (Autumn)",
  c,
r: 4,
  biomes: ["feywild", "amber-woods"],
  h,
abitat: ["autumn-court", "harvest-palace"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["eladrin-court"],
  tags: ["seasonal", "melancholy"],
  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 7},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["sapping-sorrow", "charm-bloom"],
s,
tats: {
      hp: 72,
    ac: 16,
    atk: 17,
    dmg: "2d6 psychic",
    s,
peed: "30 ft"},
  loot: ["autumn-leaf-charm"],
  a,
bilities: ["Fey Step (Autumn)", "Sorrow Wave"]},
/* --------------------------------------------------------- */
/*                 ELADRIN (WINTER) — CR 5                   */
/* --------------------------------------------------------- */

{
  id: "eladrin-winter",
  name: "Eladrin (Winter)",
  c,
r: 5,
  biomes: ["feywild", "frozen-glades"],
  h,
abitat: ["winter-court", "ice-palace"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["eladrin-court"],
  tags: ["seasonal", "cold"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 8},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["frost-step", "frozen-embrace"],
s,
tats: {
      hp: 88,
    ac: 17,
    atk: 18,
    dmg: "2d8 cold",
    s,
peed: "30 ft"},
  loot: ["winter-crystal"],
  a,
bilities: ["Fey Step (Winter)", "Winter’s Grasp"]},

/* --------------------------------------------------------- */
/*                 ELADRIN (SUMMER) — CR 5                   */
/* --------------------------------------------------------- */

{
  id: "eladrin-summer",
  name: "Eladrin (Summer)",
  c,
r: 5,
  biomes: ["feywild", "sun-bloom-fields"],
  h,
abitat: ["summer-court", "solar-meadow"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["eladrin-court"],
  tags: ["seasonal", "fire"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 10},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["blazing-step", "radiant-burst"],
s,
tats: {
      hp: 95,
    ac: 17,
    atk: 18,
    dmg: "2d8 fire",
    s,
peed: "30 ft"},
  loot: ["sun-fragment"],
  a,
bilities: ["Fey Step (Summer)", "Radiant Flare"]},

/* --------------------------------------------------------- */
/*                 ARCHFEY LORD — CR 12                      */
/* --------------------------------------------------------- */

{
  id: "archfey-lord",
  name: "Archfey Lord",
  c,
r: 12,
  biomes: ["feywild", "enchanted-realms"],
  h,
abitat: ["crystal-palace", "dream-throne"],
  category: "fey",
  r,
ole: "controller",
  f,
actions: ["archfey-court"],
  tags: ["ancient", "illusion", "domination"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 12},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["mind-bend", "dream-binding", "phase-warp"],
s,
tats: {
      hp: 210,
    ac: 19,
    atk: 22,
    dmg: "3d10 psychic",
    s,
peed: "40 ft"},
  loot: ["fey-heart-core", "archfey-sigil"],
  a,
bilities: [
    "Master of Illusions",
    "Dream Realm Step",
    "Charm Domination",
    "Reality Twist"]}]; // ← FIN DU TABLEAU FEY

export default MINIONS;
