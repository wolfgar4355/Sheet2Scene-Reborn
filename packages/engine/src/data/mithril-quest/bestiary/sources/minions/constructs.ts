import { UniversalCreature } from "../UNIVERSAL_CREATURE";

// ========================================================
//  CONSTRUCTS — Version AAA (Mithril Engine Ready)
// ========================================================

export const constructs: UniversalCreature[] = [

/* =======================================================
   A — ARCANE AUTOMATON — CR 1
   ======================================================= */
{
  id: "arcane-automaton",
  name: "Arcane Automaton",
  r,
arity: "uncommon",

  t,
ype: ["construct"],
  c,
ategories: ["sentinel", "arcane"],
  biomes: ["dungeon", "ruins", "arcane-labs"],
  h,
abitats: ["arcane-workshop", "golem-forges"],
  f,
actions: ["clockwork", "arcanum"],

  t,
agsAAA: ["arcane-core", "mana-reactor", "non-organic"],
  c,
r: 1,

  hp: 18,
  ac: 14,
  s,
peed: "30 ft.",

  a,
ttacks: [
    { name: "Arcane Bolt", t,
oHit: 4, dmg: "1d8 force" }
  ],

  b,
ehavior: {
    a,
ggression: 1,
    c,
ourage: 3,
    
t,
actics: ["ranged-focus", "keep-distance"]
  },

  d,
rops: ["arcane-circuit", "mana-crystal"],
  a,
bilities: ["Overheat Burst", "Mana Surge"],

  v,
isuals: ["floating-runes", "golem-joints", "arcane-glow"]
},

/* =======================================================
   A — STONE SENTINEL — CR 2
   ======================================================= */
{
  id: "stone-sentinel",
  name: "Stone Sentinel",
  r,
arity: "uncommon",

  t,
ype: ["construct"],
  c,
ategories: ["guardian"],
  biomes: ["ruins", "mountains"],
  h,
abitats: ["old-temples", "giant-statue-halls"],
  f,
actions: ["stonebound"],

  t,
agsAAA: ["heavy", "non-organic", "monolithic"],
  c,
r: 2,

  hp: 32,
  ac: 16,
  s,
peed: "25 ft.",

  a,
ttacks: [
    { name: "Stone Slam", t,
oHit: 5, dmg: "2d6 bludgeoning" }
  ],

  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 5,
    
t,
actics: ["block-path", "protect-zone"]
  },

  d,
rops: ["living-stone-core", "granite-shard"],
  a,
bilities: ["Immovable Frame", "Energy Absorption"],

  v,
isuals: ["cracked-stone", "glowing-sigils"]
},

/* =======================================================
   C — CLOCKWORK SOLDIER — CR 3
   ======================================================= */
{
  id: "clockwork-soldier",
  name: "Clockwork Soldier",
  r,
arity: "rare",

  t,
ype: ["construct"],
  c,
ategories: ["soldier"],
  biomes: ["workshops", "ruins", "city"],
  h,
abitats: ["clockwork-factory", "steam-barracks"],
  f,
actions: ["clockwork"],

  t,
agsAAA: ["mechanical", "precision-attack", "gears"],
  c,
r: 3,

  hp: 45,
  ac: 17,
  s,
peed: "30 ft.",

  a,
ttacks: [
    { name: "Gearblade Slash", t,
oHit: 6, dmg: "1d10 slashing" }
  ],

  b,
ehavior: {
    a,
ggression: 3,
    c,
ourage: 4,
    
t,
actics: ["auto-parry", "advance-and-strike"]
  },

  d,
rops: ["steel-spring", "clockwork-core"],
  a,
bilities: ["Auto-Counter", "Winding Surge"],

  v,
isuals: ["whirring-gears", "steam-vents", "metal-plates"]
},

/* =======================================================
   O — OBSIDIAN GOLEM — CR 5
   ======================================================= */
{
  id: "obsidian-golem",
  name: "Obsidian Golem",
  r,
arity: "elite",

  t,
ype: ["construct"],
  c,
ategories: ["brute"],
  biomes: ["lava-fields", "ruins", "infernal-zones"],
  h,
abitats: ["obsidian-forges", "demon-workshops"],
  f,
actions: ["infernal"],

  t,
agsAAA: ["superheated-body", "dark-core", "non-organic"],
  c,
r: 5,

  hp: 102,
  ac: 18,
  s,
peed: "30 ft.",

  a,
ttacks: [
    { name: "Obsidian Fist", t,
oHit: 7, dmg: "2d10 fire + 2d6 bludgeoning" }
  ],

  b,
ehavior: {
    a,
ggression: 4,
    c,
ourage: 5,
    
t,
actics: ["magma-trail", "smash-frontline"]
  },

  d,
rops: ["obsidian-fragment", "molten-heart"],
  a,
bilities: ["Molten Body", "Lava Burst"],

  v,
isuals: ["cracked-magma-skin", "lava-veins"]
},

/* =======================================================
   A — ASTRAL WATCHER — CR 7
   ======================================================= */
{
  id: "astral-watcher",
  name: "Astral Watcher",
  r,
arity: "legendary",

  t,
ype: ["construct"],
  c,
ategories: ["mystic", "sentinel"],
  biomes: ["astral", "void"],
  h,
abitats: ["astral-sanctuary", "null-zone"],
  f,
actions: ["arcanum"],

  t,
agsAAA: ["levitation", "void-shield", "anti-magic"],
  c,
r: 7,

  hp: 130,
  ac: 19,
  s,
peed: "Hover 30 ft.",

  a,
ttacks: [
    { name: "Void Beam", t,
oHit: 8, dmg: "3d10 force" }
  ],

  b,
ehavior: {
    a,
ggression: 2,
    c,
ourage: 5,
    
t,
actics: ["zone-denial", "magic-suppression"]
  },

  d,
rops: ["astral-shard", "null-core"],
  a,
bilities: ["Null Field", "Levitation", "Disrupt Magic"],

  v,
isuals: ["floating-sphere", "glowing-runes", "gravity-distortion"]
}];

export default constructs;
