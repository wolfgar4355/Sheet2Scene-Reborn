import { UniversalCreature } from "../../UNIVERSAL_CREATURE";

export const beasts: UniversalCreature[] = [

  //──────────────────────────────
  // WOLF — CR 0.25
  //──────────────────────────────
  {
    id: "wolf",
    name: "Wolf",
    r,
arity: "common",
    t,
ype: "beast",
    c,
ategories: ["beasts"],
    biomes: ["forest", "hills", "tundra"],
    h,
abitats: ["forest", "deep-forest", "tundra"],
    f,
actions: [],
    t,
agsAAA: ["pack", "tracker"],
    c,
r: 0.25,

    hp: 11,
    ac: 13,
    s,
peed: ["l,
and:40"],

    a,
ttacks: [
      {
        name: "Bite",
        bonus: +4,
        d,
amage: { d,
ice: "2d4+2", t,
ype: "piercing" }}],

    b,
ehavior: {
      a,
ggression: "aggressive",
      c,
onfidence: "c,
ourage:4",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["pack-attack"]
    },

    d,
rops: ["wolf-pelt", "wolf-teeth"],
    a,
bilities: ["Keen Hearing", "Pack Tactics"],

    v,
isuals: {
      i,
con: "wolf",
      k,
eywords: ["fur", "quadruped"]}},

  //──────────────────────────────
  // GIANT RAT — CR 0.125
  //──────────────────────────────
  {
    id: "giant-rat",
    name: "Giant Rat",
    r,
arity: "common",
    t,
ype: "beast",
    c,
ategories: ["beasts"],
    biomes: ["urban", "ruins", "sewers"],
    h,
abitats: ["tunnels", "ruins"],
    f,
actions: [],
    t,
agsAAA: ["swarm", "vermin"],
    c,
r: 0.125,

    hp: 7,
    ac: 12,
    s,
peed: ["l,
and:30"],

    a,
ttacks: [
      {
        name: "Bite",
        bonus: +4,
        d,
amage: { d,
ice: "1d4+2", t,
ype: "piercing" }}],

    b,
ehavior: {
      a,
ggression: "scavenger",
      c,
onfidence: "coward",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["harass"]
    },

    d,
rops: ["rat-tail"],
    a,
bilities: [],

    v,
isuals: {
      i,
con: "rat",
      k,
eywords: ["rodent"]}},

  //──────────────────────────────
  // BLACK BEAR — CR 1
  //──────────────────────────────
  {
    id: "black-bear",
    name: "Black Bear",
    r,
arity: "common",
    t,
ype: "beast",
    c,
ategories: ["beasts"],
    biomes: ["forest", "mountains"],
    h,
abitats: ["forest", "hill-forest", "mountain-base"],
    f,
actions: [],
    t,
agsAAA: ["brute"],
    c,
r: 1,

    hp: 34,
    ac: 11,
    s,
peed: ["l,
and:40", "c,
limb:30"],

    a,
ttacks: [
      {
        name: "Multiattack",
        bonus: +5,
        d,
amage: { d,
ice: "1d6+3 claw + 1d8+3", t,
ype: "bite" }}],

    b,
ehavior: {
      a,
ggression: "territorial",
      c,
onfidence: "c,
ourage:6",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["rush-and-maul"]
    },

    d,
rops: ["bear-pelt", "bear-meat"],
    a,
bilities: [],

    v,
isuals: {
      i,
con: "bear",
      k,
eywords: ["fur", "brute"]}},

  //──────────────────────────────
  // GIANT SPIDER — CR 1
  //──────────────────────────────
  {
    id: "giant-spider",
    name: "Giant Spider",
    r,
arity: "uncommon",
    t,
ype: "beast",
    c,
ategories: ["beasts"],
    biomes: ["forest", "swamp", "caves"],
    h,
abitats: ["web-lairs", "deep-forest", "swamp", "caves"],
    f,
actions: [],
    t,
agsAAA: ["poison", "web"],
    c,
r: 1,

    hp: 26,
    ac: 14,
    s,
peed: ["l,
and:40", "c,
limb:40"],

    a,
ttacks: [
      {
        name: "Bite",
        bonus: +4,
        d,
amage: { d,
ice: "1d8+2 piercing + 2d8", t,
ype: "poison" }},
      {
        name: "Web",
        bonus: +5,
        d,
amage: { d,
ice: "Restrains", t,
ype: "target" }}],

    b,
ehavior: {
      a,
ggression: "ambusher",
      c,
onfidence: "c,
ourage:3",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["ambush"]
    },

    d,
rops: ["spider-venom", "silk-thread"],
    a,
bilities: ["Web Shot", "Poison Bite"],

    v,
isuals: {
      i,
con: "spider",
      k,
eywords: ["legs", "web"]}},

  //──────────────────────────────
  // DIRE WOLF — CR 1
  //──────────────────────────────
  {
    id: "dire-wolf",
    name: "Dire Wolf",
    r,
arity: "elite",
    t,
ype: "beast",
    c,
ategories: ["beasts"],
    biomes: ["forest", "hills", "tundra"],
    h,
abitats: ["forest", "deep-forest", "tundra"],
    f,
actions: [],
    t,
agsAAA: ["pack", "alpha"],
    c,
r: 1,

    hp: 37,
    ac: 14,
    s,
peed: ["l,
and:50"],

    a,
ttacks: [
      {
        name: "Bite",
        bonus: +5,
        d,
amage: { d,
ice: "2d6+3", t,
ype: "piercing" }}],

    b,
ehavior: {
      a,
ggression: "aggressive",
      c,
onfidence: "c,
ourage:8",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["alpha-pounce"]
    },

    d,
rops: ["thick-fur", "wolf-bone"],
    a,
bilities: ["Pack Tactics"],

    v,
isuals: {
      i,
con: "dire-wolf",
      k,
eywords: ["large", "wolf"]}}];
