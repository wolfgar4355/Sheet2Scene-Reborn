import { Minion } from "@s2s/fantasy/types";

export const MINIONS: Minion[] = [

  /* --------------------------------------------------------- */
  /*                  FIRE WYMLING — CR 3                     */
  /* --------------------------------------------------------- */

  {
    id: "fire-wymling",
    name: "Fire Dragon Wymling",
    c,
r: 3,
    biomes: ["mountains", "volcano", "caves"],
    h,
abitat: ["lava-nests"],
    category: "dragon",
    r,
ole: "skirmisher",
    f,
actions: ["chromatic-dragons"],
    tags: ["flying", "fire"],
    b,
ehavior: { a,
ggression: 4, c,
ourage: 3 },
    
t,
actics: ["fly-by-breath"],

    s,
tats: {
      hp: 52,
      ac: 16,
      atk: 15,
      dmg: "1d10 + fire breath 15ft",
      s,
peed: "30 ft, fly 60 ft"},

    loot: ["dragon-scale-red", "ember-heart"],
    a,
bilities: ["Fire Breath", "Keen Sense"]},

  /* --------------------------------------------------------- */
  /*                  FROST WYMLING — CR 2                    */
  /* --------------------------------------------------------- */

  {
    id: "frost-wymling",
    name: "Frost Dragon Wymling",
    c,
r: 2,
    biomes: ["tundra", "mountains", "glacier"],
    h,
abitat: ["ice-spires"],
    category: "dragon",
    r,
ole: "striker",
    f,
actions: ["chromatic-dragons"],
    tags: ["cold", "flying"],
    b,
ehavior: { a,
ggression: 3, c,
ourage: 3 },
    
t,
actics: ["freeze-then-bite"],

    s,
tats: {
      hp: 45,
      ac: 15,
      atk: 14,
      dmg: "1d8 + frost breath 30ft",
      s,
peed: "30 ft, fly 50 ft"},

    loot: ["dragon-scale-blue"],
    a,
bilities: ["Cold Breath", "Ice Glide"]},

  /* --------------------------------------------------------- */
  /*                YOUNG EARTH DRAGON — CR 7                 */
  /* --------------------------------------------------------- */

  {
    id: "young-earth-dragon",
    name: "Young Earth Dragon",
    c,
r: 7,
    biomes: ["desert", "mountain", "underground"],
    h,
abitat: ["titan-caverns", "stone-labyrinths"],
    category: "dragon",
    r,
ole: "bruiser",
    f,
actions: ["primordial-dragons"],
    tags: ["earth", "burrow"],
    b,
ehavior: { a,
ggression: 4, c,
ourage: 4 },
    
t,
actics: ["tunnel-ambush"],

    s,
tats: {
      hp: 136,
      ac: 18,
      atk: 19,
      dmg: "2d10+5 earth breath 60ft",
      s,
peed: "40 ft, burrow 70 ft"},

    loot: ["earth-gem", "dragon-tooth"],
    a,
bilities: ["Earth Breath", "Tremor Step"]},

  /* --------------------------------------------------------- */
  /*                YOUNG STORM DRAGON — CR 10                */
  /* --------------------------------------------------------- */

  {
    id: "young-storm-dragon",
    name: "Young Storm Dragon",
    c,
r: 10,
    biomes: ["coast", "mountains", "sky"],
    h,
abitat: ["storm-cliffs", "thunder-reefs"],
    category: "dragon",
    r,
ole: "controller",
    f,
actions: ["primordial-dragons"],
    tags: ["lightning", "flying"],
    b,
ehavior: { a,
ggression: 4, c,
ourage: 5 },
    
t,
actics: ["aoe-burst-then-fly-high"],

    s,
tats: {
      hp: 150,
      ac: 20,
      atk: 20,
      dmg: "2d12 + lightning breath 100ft",
      s,
peed: "45 ft, fly 80 ft"},

    loot: ["storm-core"],
    a,
bilities: ["Lightning Breath", "Storm Call", "Wing Buffet"]},

  /* --------------------------------------------------------- */
  /*                ADULT SHADOW DRAGON — CR 15               */
  /* --------------------------------------------------------- */

  {
    id: "adult-shadow-dragon",
    name: "Adult Shadow Dragon",
    c,
r: 15,
    biomes: ["shadowlands", "underdark", "ancient-ruins"],
    h,
abitat: ["abyssal-chasms", "eternal-gloom"],
    category: "dragon",
    r,
ole: "predator",
    f,
actions: ["umbral-flight"],
    tags: ["shadow", "fear"],
    b,
ehavior: { a,
ggression: 5, c,
ourage: 5 },
    
t,
actics: ["darken-arena-then-devour"],

    s,
tats: {
      hp: 265,
      ac: 21,
      atk: 23,
      dmg: "2d12 + shadow breath (120ft necrotic)",
      s,
peed: "40 ft, fly 80 ft"},

    loot: ["shadow-scale", "ancient-shadow-core"],
    a,
bilities: ["Shadow Breath", "Dark Aura", "Frightful Presence"]},

  /* --------------------------------------------------------- */
  /*          PROTO-ANCIENT CELESTIAL DRAGON — CR 20          */
  /* --------------------------------------------------------- */

  {
    id: "celestial-dragon-proto",
    name: "Proto-Ancient Celestial Dragon",
    c,
r: 20,
    biomes: ["celestial-realms", "sky", "sacred-mountains"],
    h,
abitat: ["light-altars", "astral-thrones"],
    category: "dragon",
    r,
ole: "legendary",
    f,
actions: ["astral-dragons"],
    tags: ["radiant", "flying", "legendary"],
    b,
ehavior: { a,
ggression: 3, c,
ourage: 7 },
    
t,
actics: ["holy-awe-battle"],

    s,
tats: {
      hp: 330,
      ac: 23,
      atk: 27,
      dmg: "3d12 radiant / radiant breath 160ft",
      s,
peed: "45 ft, fly 120 ft"},

    loot: ["celestial-essence", "dragon-halo-crystal"],
    a,
bilities: [
      "Radiant Breath",
      "Heavenly Transcendence",
      "Holy Restoration",
      "Blinding Roar"]}];

export default MINIONS;
