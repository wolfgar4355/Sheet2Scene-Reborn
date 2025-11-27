import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* LIZARDFOLK SPEARHUNTER — CR 1 */
/* ------------------------------------------------------------ */
{
  id: "lizardfolk-spearhunter",
  name: "Lizardfolk Spearhunter",
  c,
r: 1,
  biomes: ["swamp", "jungle", "ruins"],
  h,
abitat: ["lizardfolk-village", "ancient-marsh-ruins"],
  category: "reptile",
  r,
ole: "skirmisher",
  tags: ["lizardfolk", "tribal", "scales"],
  f,
actions: ["Marsh Tribes", "Cold-Blood Clans"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["stab-and-retreat", "net-snare"],
s,
tats: {
      hp: 26,
    ac: 14,
    atk: 12,
    dmg: "1d8 piercing",
    s,
peed: "30 ft, swim 30 ft"},
  loot: ["horn-spear", "wet-scales"],
  a,
bilities: ["Blood Frenzy", "Reptile Instinct"]},

/* ------------------------------------------------------------ */
/* GIANT SERPENT — CR 2 */
/* ------------------------------------------------------------ */
{
  id: "giant-serpent",
  name: "Giant Serpent",
  c,
r: 2,
  biomes: ["jungle", "desert", "ruins"],
  h,
abitat: ["serpent-pits", "sunken-temples"],
  category: "reptile",
  r,
ole: "brute",
  tags: ["serpent", "venom", "scales"],
  f,
actions: ["Coil Brotherhood"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["coil-and-strike"],
s,
tats: {
      hp: 45,
    ac: 13,
    atk: 14,
    dmg: "3d8 + poison",
    s,
peed: "40 ft, swim 30 ft"},
  loot: ["venom-gland"],
  a,
bilities: ["Constriction", "Poison Fangs"]},

/* ------------------------------------------------------------ */
/* CROCODILIAN DEVOURER — CR 1 */
/* ------------------------------------------------------------ */
{
  id: "crocodilian-devourer",
  name: "Crocodilian Devourer",
  c,
r: 1,
  biomes: ["swamp", "river", "jungle"],
  h,
abitat: ["murky-marsh", "sunken-waters"],
  category: "reptile",
  r,
ole: "ambusher",
  tags: ["crocodile", "aquatic"],
  f,
actions: ["Marsh Predators"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 5},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["surface-grab-and-drag"],
s,
tats: {
      hp: 30,
    ac: 15,
    atk: 13,
    dmg: "2d6 piercing",
    s,
peed: "40 ft, swim 40 ft"},
  loot: ["thick-hide"],
  a,
bilities: ["Death Roll", "Water Ambush"]},

/* ------------------------------------------------------------ */
/* BASILISK VARIANT — CR 6 */
/* ------------------------------------------------------------ */
{
  id: "basilisk-variant",
  name: "Basilisk Variant",
  c,
r: 6,
  biomes: ["cavern", "ruins", "underground"],
  h,
abitat: ["stone-chambers", "fungal-depths"],
  category: "reptile",
  r,
ole: "controller",
  tags: ["basilisk", "venom", "stony"],
  f,
actions: ["Petrifier Brood"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["gaze-first-then-bite"],
s,
tats: {
      hp: 95,
    ac: 16,
    atk: 18,
    dmg: "2d8 piercing",
    s,
peed: "35 ft"},
  loot: ["petrified-skin-fragment"],
  a,
bilities: ["Petrifying Gaze", "Venom Bite"]},

/* ------------------------------------------------------------ */
/* THUNDER LIZARD — CR 8 (ELITE DINOSAUR) */
/* ------------------------------------------------------------ */
{
  id: "thunder-lizard",
  name: "Thunder Lizard",
  c,
r: 8,
  biomes: ["jungle", "plains", "ancient-ruins"],
  h,
abitat: ["thunder-nests", "primeval-grounds"],
  category: "reptile",
  r,
ole: "elite-controller",
  tags: ["dinosaur", "thunder", "giant"],
  f,
actions: ["Primeval Titans"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 7},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["trample-then-roar"],
s,
tats: {
      hp: 186,
    ac: 17,
    atk: 20,
    dmg: "2d10 bludgeoning + lightning",
    s,
peed: "50 ft"},
  loot: ["thunder-scale", "ancient-scales"],
  a,
bilities: ["Thunder Roar", "Stampede", "Lightning Pulse"]}];

export default MINIONS;
