import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* SWARM OF STINGFLIES — CR 1/2 */
/* ------------------------------------------------------------ */
{
  id: "stingfly-swarm",
  name: "Swarm of Stingflies",
  c,
r: 0.5,
  biomes: ["forest", "swamp", "jungle"],
  h,
abitat: ["canopies", "rotting-logs"],
  category: "swarm",
  r,
ole: "skirmisher",
  tags: ["flying", "poison", "insects"],
  f,
actions: ["Swarmbrood"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 2},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["surround-and-sting"],
s,
tats: {
      hp: 22,
    ac: 12,
    atk: 12,
    dmg: "2d4 piercing + poison",
    s,
peed: "10 ft, fly 40 ft"},
  loot: ["poison-sacs"],
  a,
bilities: ["Poison Cloud", "Scatter Movement"]},

/* ------------------------------------------------------------ */
/* SCARAB SWARM — CR 1 */
/* ------------------------------------------------------------ */
{
  id: "scarab-swarm",
  name: "Scarab Swarm",
  c,
r: 1,
  biomes: ["desert", "ruins", "crypt"],
  h,
abitat: ["catacombs", "sand-burrows"],
  category: "swarm",
  r,
ole: "bruiser",
  tags: ["burrow", "devour"],
  f,
actions: ["Sandcoil Legion"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["swarm-the-softest-target"],
s,
tats: {
      hp: 36,
    ac: 14,
    atk: 15,
    dmg: "2d6 piercing",
    s,
peed: "20 ft, burrow 10 ft"},
  loot: ["scarab-carapace"],
  a,
bilities: ["Corpse Devour", "Sand Burrow"]},

/* ------------------------------------------------------------ */
/* SPIDER SWARM — CR 2 */
/* ------------------------------------------------------------ */
{
  id: "spider-swarm",
  name: "Spider Swarm",
  c,
r: 2,
  biomes: ["forest", "swamp", "underdark"],
  h,
abitat: ["web-pits", "dark-tunnels"],
  category: "swarm",
  r,
ole: "controller",
  tags: ["poison", "webs"],
  f,
actions: ["Broodweavers"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["web-then-overwhelm"],
s,
tats: {
      hp: 45,
    ac: 15,
    atk: 14,
    dmg: "2d6 piercing + poison",
    s,
peed: "20 ft, climb 30 ft"},
  loot: ["venom-gland"],
  a,
bilities: ["Web Spray", "Climb"]},

/* ------------------------------------------------------------ */
/* FIREFLY SWARM (LUMINOUS) — CR 3 */
/* ------------------------------------------------------------ */
{
  id: "firefly-swarm",
  name: "Luminous Firefly Swarm",
  c,
r: 3,
  biomes: ["forest", "meadow", "feywild"],
  h,
abitat: ["groves", "glades"],
  category: "swarm",
  r,
ole: "support",
  tags: ["light", "vision", "fey"],
  f,
actions: ["Gleamhost"],
  b,
ehavior: {
    a,
ggression: 1,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["blinding-dazzle"],
s,
tats: {
      hp: 50,
    ac: 16,
    atk: 12,
    dmg: "1d4 radiant",
    s,
peed: "10 ft, fly 50 ft"},
  loot: ["glitter-dust"],
  a,
bilities: ["Dazzling Light", "Swarm Heal"]},

/* ------------------------------------------------------------ */
/* RAVENOUS LOCUST SWARM — CR 5 */
/* ------------------------------------------------------------ */
{
  id: "locust-swarm",
  name: "Ravenous Locust Swarm",
  c,
r: 5,
  biomes: ["plains", "desert", "savannah"],
  h,
abitat: ["dry-grasslands", "hive-fields"],
  category: "swarm",
  r,
ole: "bruiser",
  tags: ["devour", "flying", "fear"],
  f,
actions: ["Swarmbrood"],
  b,
ehavior: {
    a,
ggression: 9,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["consume-everything"],
s,
tats: {
      hp: 90,
    ac: 16,
    atk: 18,
    dmg: "4d6 slashing",
    s,
peed: "30 ft, fly 40 ft"},
  loot: ["chitin-dust"],
  a,
bilities: ["Devouring Frenzy", "Sound of Doom"]},

/* ------------------------------------------------------------ */
/* SHADOW WASP SWARM — CR 7 (ELITE) */
/* ------------------------------------------------------------ */
{
  id: "shadow-wasp-swarm",
  name: "Shadow Wasp Swarm",
  c,
r: 7,
  biomes: ["shadowlands", "underdark", "corrupted-zones"],
  h,
abitat: ["hives-of-gloom", "shadow-nests"],
  category: "swarm",
  r,
ole: "striker",
  tags: ["necrotic", "poison", "shadow"],
  f,
actions: ["Ebon Hive"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 6},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["strike-from-darkness"],
s,
tats: {
      hp: 110,
    ac: 17,
    atk: 20,
    dmg: "3d6 necrotic + poison",
    s,
peed: "40 ft, fly 60 ft"},
  loot: ["shadow-resin", "void-honey"],
  a,
bilities: ["Phase Sting", "Shadow Swarm", "Terror Buzz"]}];

export default MINIONS;
