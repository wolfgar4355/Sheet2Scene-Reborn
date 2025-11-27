import { UniversalCreature } from "../../UNIVERSAL_CREATURE";

export const aberrations: UniversalCreature[] = [

  //──────────────────────────────
  // GRELL — CR 3
  //──────────────────────────────
  {
    id: "grell",
    name: "Grell",
    r,
arity: "elite",
    t,
ype: "aberration",
    c,
ategories: ["aberrations"],
    biomes: ["underdark", "dungeon", "caves"],
    h,
abitats: ["ceiling-nests", "flesh-lairs"],
    f,
actions: [],
    t,
agsAAA: ["levitation", "tentacles", "paralysis"],
    c,
r: 3,

    // Combat
    hp: 55,
    ac: 14,
    s,
peed: ["f,
ly:20"],

    a,
ttacks: [
      {
        name: "Tentacle",
        bonus: +5,
        d,
amage: { d,
ice: "1d10 piercing +", t,
ype: "paralysis" }}],

    b,
ehavior: {
      a,
ggression: "defensive",
      c,
onfidence: "coward",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["descend-silently-and-grapple"]
    },

    d,
rops: ["neural-tentacle"],
    a,
bilities: ["Paralyzing Tentacles", "Silent Glide"],

    v,
isuals: {
      i,
con: "grell",
      k,
eywords: ["floating", "tentacles"]}},

  //──────────────────────────────
  // GRICK — CR 2
  //──────────────────────────────
  {
    id: "grick",
    name: "Grick",
    r,
arity: "elite",
    t,
ype: "aberration",
    c,
ategories: ["aberrations"],
    biomes: ["forest", "underdark"],
    h,
abitats: ["stone-chasms", "narrow-passages"],
    f,
actions: [],
    t,
agsAAA: ["ambush", "tentacle"],
    c,
r: 2,

    hp: 45,
    ac: 13,
    s,
peed: ["c,
limb:20", "l,
and:30"],

    a,
ttacks: [
      {
        name: "Bite",
        bonus: +4,
        d,
amage: { d,
ice: "1d12", t,
ype: "slashing" }}],

    b,
ehavior: {
      a,
ggression: "aggressive",
      c,
onfidence: "c,
ourage:3",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["ambush-from-above"]
    },

    d,
rops: ["chitin-shard"],
    a,
bilities: ["Stone Camouflage"],

    v,
isuals: {
      i,
con: "grick",
      k,
eywords: ["stone", "tentacle"]}},

  //──────────────────────────────
  // MIND WORM — CR 1
  //──────────────────────────────
  {
    id: "mind-worm",
    name: "Mind Worm",
    r,
arity: "common",
    t,
ype: "aberration",
    c,
ategories: ["aberrations"],
    biomes: ["swamp", "underdark", "ancient-labs"],
    h,
abitats: ["dead-pools", "eldritch-creels"],
    f,
actions: [],
    t,
agsAAA: ["psionic", "infection"],
    c,
r: 1,

    hp: 22,
    ac: 12,
    s,
peed: ["l,
and:20", "s,
wim:20"],

    a,
ttacks: [
      {
        name: "Mind Spike",
        bonus: +4,
        d,
amage: { d,
ice: "1d8", t,
ype: "psychic" }}],

    b,
ehavior: {
      a,
ggression: "instinct",
      c,
onfidence: "coward",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["psionic-scream-and-hide"]
    },

    d,
rops: ["psionic-residue"],
    a,
bilities: ["Mind Screech", "Neural Feedback"],

    v,
isuals: {
      i,
con: "worm",
      k,
eywords: ["psionic", "worm"]}},

  //──────────────────────────────
  // GIBBERING MASS — CR 5
  //──────────────────────────────
  {
    id: "gibbering-mass",
    name: "Gibbering Mass",
    r,
arity: "rare",
    t,
ype: "aberration",
    c,
ategories: ["aberrations"],
    biomes: ["swamp", "corrupted"],
    h,
abitats: ["gurgling-pools", "madness-pits"],
    f,
actions: [],
    t,
agsAAA: ["amorphous", "madness"],
    c,
r: 5,

    hp: 140,
    ac: 9,
    s,
peed: ["l,
and:20"],

    a,
ttacks: [
      {
        name: "Maw",
        bonus: +6,
        d,
amage: { d,
ice: "4d6", t,
ype: "acid" }}],

    b,
ehavior: {
      a,
ggression: "obsession",
      c,
onfidence: "fearless",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["suppress-all-sanity-with-aura"]
    },

    d,
rops: ["fractured-organ"],
    a,
bilities: ["Gibbering Aura", "Amorphous Engulf"],

    v,
isuals: {
      i,
con: "mass",
      k,
eywords: ["amorphous", "eyes"]}},

  //──────────────────────────────
  // INTELLECT DEVOURER — CR 2
  //──────────────────────────────
  {
    id: "intellect-devourer",
    name: "Intellect Devourer",
    r,
arity: "elite",
    t,
ype: "aberration",
    c,
ategories: ["aberrations"],
    biomes: ["ruins", "underdark"],
    h,
abitats: ["eldritch-chambers"],
    f,
actions: [],
    t,
agsAAA: ["psionic", "brain-walker"],
    c,
r: 2,

    hp: 35,
    ac: 14,
    s,
peed: ["l,
and:40"],

    a,
ttacks: [
      {
        name: "Brain Rend",
        bonus: +5,
        d,
amage: { d,
ice: "1d8", t,
ype: "psychic" }}],

    b,
ehavior: {
      a,
ggression: "aggressive",
      c,
onfidence: "c,
ourage:5",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["assail-brain-then-pursue"]
    },

    d,
rops: ["horror-residue"],
    a,
bilities: ["Horror Instinct", "Body Thief"],

    v,
isuals: {
      i,
con: "brain",
      k,
eywords: ["brain", "psionic"]}},

  //──────────────────────────────
  // VOID EYE — CR 6
  //──────────────────────────────
  {
    id: "void-eye",
    name: "Void Eye",
    r,
arity: "legendary",
    t,
ype: "aberration",
    c,
ategories: ["aberrations"],
    biomes: ["wastelands", "shadowlands"],
    h,
abitats: ["void-rifts", "anti-magic-reaches"],
    f,
actions: [],
    t,
agsAAA: ["null-magic", "beam"],
    c,
r: 6,

    hp: 160,
    ac: 16,
    s,
peed: ["f,
ly:40"],

    a,
ttacks: [
      {
        name: "Void Lance",
        bonus: +8,
        d,
amage: { d,
ice: "3d10", t,
ype: "force" }}],

    b,
ehavior: {
      a,
ggression: "berserk",
      c,
onfidence: "fearless",
      t,
actics: { prefersAmbush: true }, // NOTE: anciennement 
t,
actics: ["float-at-range-and-swap-space"]
    },

    d,
rops: ["void-core"],
    a,
bilities: ["Null Aura", "Void Beam", "Levitation"],

    v,
isuals: {
      i,
con: "eye",
      k,
eywords: ["void", "beam"]}}];
