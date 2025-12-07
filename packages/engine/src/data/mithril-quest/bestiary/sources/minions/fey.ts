// @ts-nocheck
import { Minion } from "./types";

export const MINIONS: Minion[] = [

/* --------------------------------------------------------- */
/*                     PIXIE — CR 1/4                        */
/* --------------------------------------------------------- */

{
  id: "pixie",
  name: "Pixie",
  cr: 0.25,
  biomes: ["forest", "feywild"],
  habitat: ["moonlit-glade", "mushroom-circle"],
  category: "fey",
  role: "controller",
  factions: ["fey-court"],
  tags: ["invisible", "charming"],
  behavior: {
    aggression: 1,
    courage: 4,
  },
  tactics: ["invisible-harassment", "illusion-dash"],
  stats: {
    hp: 15,
    ac: 14,
    atk: 11,
    dmg: "1d4 magic dust",
    speed: "fly 30 ft",
  },
  loot: ["pixie-dust"],
  abilities: ["Invisibility", "Dancing Lights"],
},

/* --------------------------------------------------------- */
/*                     SATYR — CR 1                          */
/* --------------------------------------------------------- */

{
  id: "satyr",
  name: "Satyr",
  cr: 1,
  biomes: ["forest", "hills", "feywild"],
  habitat: ["fae-grove", "revelry-ring"],
  category: "fey",
  role: "brute",
  factions: ["fey-court"],
  tags: ["trickery", "charming"],
  behavior: {
    aggression: 2,
    courage: 3,
  },
  tactics: ["harass-disrupt"],
  stats: {
    hp: 31,
    ac: 14,
    atk: 13,
    dmg: "1d6+2 / 1d6+2 shortbow",
    speed: "40 ft",
  },
  loot: ["fae-flute"],
  abilities: ["Pan Flute Magic", "Charm Person"],
},

/* --------------------------------------------------------- */
/*                     DRYAD — CR 1                          */
/* --------------------------------------------------------- */

{
  id: "dryad",
  name: "Dryad",
  cr: 1,
  biomes: ["forest", "feywild"],
  habitat: ["enchanted-tree", "ancient-grove"],
  category: "fey",
  role: "controller",
  factions: ["fey-court"],
  tags: ["nature", "charming"],
  behavior: {
    aggression: 2,
    courage: 2,
  },
  tactics: ["charm-then-hide", "phase-through-trees"],
  stats: {
    hp: 22,
    ac: 14,
    atk: 11,
    dmg: "1d4 staff",
    speed: "30 ft",
  },
  loot: ["enchanted-bark"],
  abilities: ["Tree Stride", "Charm Person", "Entangle"],
},

/* --------------------------------------------------------- */
/*                  FOREST SPIRIT — CR 2                     */
/* --------------------------------------------------------- */

{
  id: "forest-spirit",
  name: "Forest Spirit",
  cr: 2,
  biomes: ["forest", "sacred-groves"],
  habitat: ["spirit-clearing", "blossom-sanctum"],
  category: "fey",
  role: "controller",
  factions: ["nature-spirits"],
  tags: ["nature", "guardian"],
  behavior: {
    aggression: 3,
    courage: 5,
  },
  tactics: ["phase-through-trees", "vine-lash"],
  stats: {
    hp: 36,
    ac: 15,
    atk: 15,
    dmg: "1d8+3 nature force",
    speed: "30 ft",
  },
  loot: ["spirit-essence"],
  abilities: ["Phase Step", "Vine Lash", "Nature’s Ward"],
},

/* --------------------------------------------------------- */
/*                     REDCAP — CR 3                         */
/* --------------------------------------------------------- */

{
  id: "redcap",
  name: "Redcap",
  cr: 3,
  biomes: ["forest", "bog", "darkwoods"],
  habitat: ["murder-hollow", "blighted-thicket"],
  category: "fey",
  role: "brute",
  factions: ["blood-faith"],
  tags: ["bloodlust"],
  behavior: {
    aggression: 9,
    courage: 5,
  },
  tactics: ["kill-the-weak-first"],
  stats: {
    hp: 45,
    ac: 14,
    atk: 16,
    dmg: "1d6+7 / 2d4+2 iron boots",
    speed: "40 ft",
  },
  loot: ["blood-soaked-cap"],
  abilities: ["Iron Boot Stomp", "Dreadful Glare"],
},
/* --------------------------------------------------------- */
/*                 GREEN HAG — CR 3                          */
/* --------------------------------------------------------- */

{
  id: "green-hag",
  name: "Green Hag",
  cr: 3,
  biomes: ["swamp", "forest", "ruins"],
  habitat: ["witch-den", "rotting-marsh-hut"],
  category: "fey",
  role: "controller",
  factions: ["coven"],
  tags: ["illusion", "coven"],
  behavior: {
    aggression: 4,
    courage: 6,
  },
  tactics: ["illusion-lure"],
  stats: {
    hp: 62,
    ac: 14,
    atk: 16,
    dmg: "1d6+3 claws",
    speed: "30 ft",
  },
  loot: ["witch-teeth"],
  abilities: ["Illusory Appearance", "Mimicry", "Horrific Touch"],
},

/* --------------------------------------------------------- */
/*                 SHADOW HAG — CR 5                         */
/* --------------------------------------------------------- */

{
  id: "shadow-hag",
  name: "Shadow Hag",
  cr: 5,
  biomes: ["swamp", "feywild", "shadowlands"],
  habitat: ["shadow-bog", "moonless-hollow"],
  category: "fey",
  role: "controller",
  factions: ["coven-shadow"],
  tags: ["shadow", "terror"],
  behavior: {
    aggression: 6,
    courage: 7,
  },
  tactics: ["lure-into-water", "shadow-ambush"],
  stats: {
    hp: 90,
    ac: 17,
    atk: 18,
    dmg: "2d8 psychic",
    speed: "30 ft, swim 20 ft",
  },
  loot: ["other-sphere-essence"],
  abilities: ["Shadow Form", "Dream Bind", "Illusionary Double"],
},

/* --------------------------------------------------------- */
/*                 ELADRIN (SPRING) — CR 4                   */
/* --------------------------------------------------------- */

{
  id: "eladrin-spring",
  name: "Eladrin (Spring)",
  cr: 4,
  biomes: ["feywild", "enchanted-gardens"],
  habitat: ["spring-court", "flower-palace"],
  category: "fey",
  role: "controller",
  factions: ["eladrin-court"],
  tags: ["seasonal", "joy"],
  behavior: {
    aggression: 2,
    courage: 6,
  },
  tactics: ["bright-flourish", "mist-step"],
  stats: {
    hp: 70,
    ac: 16,
    atk: 17,
    dmg: "2d6 radiant",
    speed: "30 ft",
  },
  loot: ["spring-essence"],
  abilities: ["Fey Step (Spring)", "Euphoria Burst"],
},

/* --------------------------------------------------------- */
/*                 ELADRIN (AUTUMN) — CR 4                   */
/* --------------------------------------------------------- */

{
  id: "eladrin-autumn",
  name: "Eladrin (Autumn)",
  cr: 4,
  biomes: ["feywild", "amber-woods"],
  habitat: ["autumn-court", "harvest-palace"],
  category: "fey",
  role: "controller",
  factions: ["eladrin-court"],
  tags: ["seasonal", "melancholy"],
  behavior: {
    aggression: 3,
    courage: 7,
  },
  tactics: ["sapping-sorrow", "charm-bloom"],
  stats: {
    hp: 72,
    ac: 16,
    atk: 17,
    dmg: "2d6 psychic",
    speed: "30 ft",
  },
  loot: ["autumn-leaf-charm"],
  abilities: ["Fey Step (Autumn)", "Sorrow Wave"],
},
/* --------------------------------------------------------- */
/*                 ELADRIN (WINTER) — CR 5                   */
/* --------------------------------------------------------- */

{
  id: "eladrin-winter",
  name: "Eladrin (Winter)",
  cr: 5,
  biomes: ["feywild", "frozen-glades"],
  habitat: ["winter-court", "ice-palace"],
  category: "fey",
  role: "controller",
  factions: ["eladrin-court"],
  tags: ["seasonal", "cold"],
  behavior: {
    aggression: 4,
    courage: 8,
  },
  tactics: ["frost-step", "frozen-embrace"],
  stats: {
    hp: 88,
    ac: 17,
    atk: 18,
    dmg: "2d8 cold",
    speed: "30 ft",
  },
  loot: ["winter-crystal"],
  abilities: ["Fey Step (Winter)", "Winter’s Grasp"],
},

/* --------------------------------------------------------- */
/*                 ELADRIN (SUMMER) — CR 5                   */
/* --------------------------------------------------------- */

{
  id: "eladrin-summer",
  name: "Eladrin (Summer)",
  cr: 5,
  biomes: ["feywild", "sun-bloom-fields"],
  habitat: ["summer-court", "solar-meadow"],
  category: "fey",
  role: "controller",
  factions: ["eladrin-court"],
  tags: ["seasonal", "fire"],
  behavior: {
    aggression: 7,
    courage: 10,
  },
  tactics: ["blazing-step", "radiant-burst"],
  stats: {
    hp: 95,
    ac: 17,
    atk: 18,
    dmg: "2d8 fire",
    speed: "30 ft",
  },
  loot: ["sun-fragment"],
  abilities: ["Fey Step (Summer)", "Radiant Flare"],
},

/* --------------------------------------------------------- */
/*                 ARCHFEY LORD — CR 12                      */
/* --------------------------------------------------------- */

{
  id: "archfey-lord",
  name: "Archfey Lord",
  cr: 12,
  biomes: ["feywild", "enchanted-realms"],
  habitat: ["crystal-palace", "dream-throne"],
  category: "fey",
  role: "controller",
  factions: ["archfey-court"],
  tags: ["ancient", "illusion", "domination"],
  behavior: {
    aggression: 6,
    courage: 12,
  },
  tactics: ["mind-bend", "dream-binding", "phase-warp"],
  stats: {
    hp: 210,
    ac: 19,
    atk: 22,
    dmg: "3d10 psychic",
    speed: "40 ft",
  },
  loot: ["fey-heart-core", "archfey-sigil"],
  abilities: [
    "Master of Illusions",
    "Dream Realm Step",
    "Charm Domination",
    "Reality Twist"
  ],
},

]; // ← FIN DU TABLEAU FEY

export default MINIONS;
