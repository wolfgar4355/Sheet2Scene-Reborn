// @ts-nocheck
import { Minion } from "./types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* CHITIN SOLDIER — CR 1                                        */
/* ------------------------------------------------------------ */
{
  id: "chitin-soldier",
  name: "Chitin Soldier",
  cr: 1,
  biomes: ["jungle", "swamp", "underdark"],
  habitat: ["hive-tunnels", "nesting-logs"],
  category: "insectoid",
  role: "fighter",
  factions: ["hive-swarm"],
  tags: ["chitin", "pheromones"],
  behavior: {
    aggression: 4,
    courage: 3,
  },
  tactics: ["flank-and-slam"],
  stats: {
    hp: 18,
    ac: 14,
    atk: 4,
    dmg: "1d6+2 slashing",
    speed: "40 ft, climb 30 ft",
  },
  loot: ["chitin-shard"],
  abilities: ["Pheromone Mark"],
},

/* ------------------------------------------------------------ */
/* DUNE STALKER BEETLE — CR 3                                   */
/* ------------------------------------------------------------ */
{
  id: "dune-stalker-beetle",
  name: "Dune Stalker Beetle",
  cr: 3,
  biomes: ["desert", "dunes", "canyons"],
  habitat: ["sand-nests", "abandoned-oases"],
  category: "insectoid",
  role: "lurker",
  factions: ["scarab-cult"],
  tags: ["burrow", "charge"],
  behavior: {
    aggression: 5,
    courage: 4,
  },
  tactics: ["burst-from-ground"],
  stats: {
    hp: 36,
    ac: 16,
    atk: 6,
    dmg: "2d8+3 piercing",
    speed: "35 ft, burrow 30 ft",
  },
  loot: ["chitin-carapace"],
  abilities: ["Burrow Ambush", "Chitin Charge"],
},

/* ------------------------------------------------------------ */
/* NECRO MANTIS — CR 5                                          */
/* ------------------------------------------------------------ */
{
  id: "necro-mantis",
  name: "Necro Mantis",
  cr: 5,
  biomes: ["shadowlands", "swamp", "underdark"],
  habitat: ["grave-forests", "ossuary-hives"],
  category: "insectoid",
  role: "controller",
  factions: ["necrotic-hive"],
  tags: ["undead", "venom"],
  behavior: {
    aggression: 6,
    courage: 3,
  },
  tactics: ["stun-then-venom-slash"],
  stats: {
    hp: 68,
    ac: 16,
    atk: 8,
    dmg: "1d10 necrotic",
    speed: "40 ft",
  },
  loot: ["mantis-fang"],
  abilities: ["Paralyzing Gaze", "Necrotic Lash"],
},

/* ------------------------------------------------------------ */
/* SCARAB SWARM HOST — CR 7                                     */
/* ------------------------------------------------------------ */
{
  id: "scarab-swarm-host",
  name: "Scarab Swarm Host",
  cr: 7,
  biomes: ["desert", "ruins", "crypts"],
  habitat: ["scarab-pits", "tomb-hives"],
  category: "insectoid",
  role: "summoner",
  factions: ["scarab-cult", "brood-mind"],
  tags: ["swarm", "summoner"],
  behavior: {
    aggression: 7,
    courage: 4,
  },
  tactics: ["summon-minions-and-overwhelm"],
  stats: {
    hp: 110,
    ac: 17,
    atk: 9,
    dmg: "2d10 slashing",
    speed: "30 ft, burrow 10 ft",
  },
  loot: ["scarab-gland"],
  abilities: ["Summon Scarabs", "Carapace Burst", "Fear Chitter"],
},

/* ------------------------------------------------------------ */
/* CHITIN COLOSSUS — CR 11 (BOSS)                               */
/* ------------------------------------------------------------ */
{
  id: "chitin-colossus",
  name: "Chitin Colossus",
  cr: 11,
  biomes: ["jungle", "underdark", "corrupted-zone"],
  habitat: ["hive-citadels", "charr-pits"],
  category: "insectoid",
  role: "boss",
  factions: ["carapace-dominion"],
  tags: ["massive", "charge", "stomp"],
  behavior: {
    aggression: 9,
    courage: 10,
  },
  tactics: ["stomp-frontline-then-gore"],
  stats: {
    hp: 240,
    ac: 20,
    atk: 14,
    dmg: "4d12 slashing",
    speed: "40 ft",
  },
  loot: ["colossus-plate", "ancient-chitin-core"],
  abilities: [
    "Massive Stomp",
    "Gore Rampage",
    "Hive Roar",
    "Pheromone Domination"
  ],
},

];

export default MINIONS;
