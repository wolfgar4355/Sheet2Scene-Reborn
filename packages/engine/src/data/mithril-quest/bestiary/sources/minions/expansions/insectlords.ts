import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* CHITIN SOLDIER — CR 1                                        */
/* ------------------------------------------------------------ */
{
  id: "chitin-soldier",
  name: "Chitin Soldier",
  c,
r: 1,
  biomes: ["jungle", "swamp", "underdark"],
  h,
abitat: ["hive-tunnels", "nesting-logs"],
  category: "insectoid",
  r,
ole: "fighter",
  f,
actions: ["hive-swarm"],
  tags: ["chitin", "pheromones"],
  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["flank-and-slam"],
s,
tats: {
      hp: 18,
    ac: 14,
    atk: 4,
    dmg: "1d6+2 slashing",
    s,
peed: "40 ft, climb 30 ft"},
  loot: ["chitin-shard"],
  a,
bilities: ["Pheromone Mark"]},

/* ------------------------------------------------------------ */
/* DUNE STALKER BEETLE — CR 3                                   */
/* ------------------------------------------------------------ */
{
  id: "dune-stalker-beetle",
  name: "Dune Stalker Beetle",
  c,
r: 3,
  biomes: ["desert", "dunes", "canyons"],
  h,
abitat: ["sand-nests", "abandoned-oases"],
  category: "insectoid",
  r,
ole: "lurker",
  f,
actions: ["scarab-cult"],
  tags: ["burrow", "charge"],
  b,
ehavior: {
    a,
ggression: 5,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["burst-from-ground"],
s,
tats: {
      hp: 36,
    ac: 16,
    atk: 6,
    dmg: "2d8+3 piercing",
    s,
peed: "35 ft, burrow 30 ft"},
  loot: ["chitin-carapace"],
  a,
bilities: ["Burrow Ambush", "Chitin Charge"]},

/* ------------------------------------------------------------ */
/* NECRO MANTIS — CR 5                                          */
/* ------------------------------------------------------------ */
{
  id: "necro-mantis",
  name: "Necro Mantis",
  c,
r: 5,
  biomes: ["shadowlands", "swamp", "underdark"],
  h,
abitat: ["grave-forests", "ossuary-hives"],
  category: "insectoid",
  r,
ole: "controller",
  f,
actions: ["necrotic-hive"],
  tags: ["undead", "venom"],
  b,
ehavior: {
    a,
ggression: 6,
    c,
ourage: 3},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["stun-then-venom-slash"],
s,
tats: {
      hp: 68,
    ac: 16,
    atk: 8,
    dmg: "1d10 necrotic",
    s,
peed: "40 ft"},
  loot: ["mantis-fang"],
  a,
bilities: ["Paralyzing Gaze", "Necrotic Lash"]},

/* ------------------------------------------------------------ */
/* SCARAB SWARM HOST — CR 7                                     */
/* ------------------------------------------------------------ */
{
  id: "scarab-swarm-host",
  name: "Scarab Swarm Host",
  c,
r: 7,
  biomes: ["desert", "ruins", "crypts"],
  h,
abitat: ["scarab-pits", "tomb-hives"],
  category: "insectoid",
  r,
ole: "summoner",
  f,
actions: ["scarab-cult", "brood-mind"],
  tags: ["swarm", "summoner"],
  b,
ehavior: {
    a,
ggression: 7,
    c,
ourage: 4},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["summon-minions-and-overwhelm"],
s,
tats: {
      hp: 110,
    ac: 17,
    atk: 9,
    dmg: "2d10 slashing",
    s,
peed: "30 ft, burrow 10 ft"},
  loot: ["scarab-gland"],
  a,
bilities: ["Summon Scarabs", "Carapace Burst", "Fear Chitter"]},

/* ------------------------------------------------------------ */
/* CHITIN COLOSSUS — CR 11 (BOSS)                               */
/* ------------------------------------------------------------ */
{
  id: "chitin-colossus",
  name: "Chitin Colossus",
  c,
r: 11,
  biomes: ["jungle", "underdark", "corrupted-zone"],
  h,
abitat: ["hive-citadels", "charr-pits"],
  category: "insectoid",
  r,
ole: "boss",
  f,
actions: ["carapace-dominion"],
  tags: ["massive", "charge", "stomp"],
  b,
ehavior: {
    a,
ggression: 9,
    c,
ourage: 10},
  t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["stomp-frontline-then-gore"],
s,
tats: {
      hp: 240,
    ac: 20,
    atk: 14,
    dmg: "4d12 slashing",
    s,
peed: "40 ft"},
  loot: ["colossus-plate", "ancient-chitin-core"],
  a,
bilities: [
    "Massive Stomp",
    "Gore Rampage",
    "Hive Roar",
    "Pheromone Domination"]}];

export default MINIONS;
