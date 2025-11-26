import { Minion } from "@engine/content/fantasy/types";

export const MINIONS: Minion[] = [

/* ------------------------------------------------------------ */
/* LIZARDFOLK SPEARHUNTER — CR 1 */
/* ------------------------------------------------------------ */
{
  id: "lizardfolk-spearhunter",
  name: "Lizardfolk Spearhunter",
  cr: 1,
  biomes: ["swamp", "jungle", "ruins"],
  habitat: ["lizardfolk-village", "ancient-marsh-ruins"],
  category: "reptile",
  role: "skirmisher",
  tags: ["lizardfolk", "tribal", "scales"],
  factions: ["Marsh Tribes", "Cold-Blood Clans"],
  behavior: {
    aggression: 4,
    courage: 3,
  },
  tactics: ["stab-and-retreat", "net-snare"],
  stats: {
    hp: 26,
    ac: 14,
    atk: 12,
    dmg: "1d8 piercing",
    speed: "30 ft, swim 30 ft",
  },
  loot: ["horn-spear", "wet-scales"],
  abilities: ["Blood Frenzy", "Reptile Instinct"],
},

/* ------------------------------------------------------------ */
/* GIANT SERPENT — CR 2 */
/* ------------------------------------------------------------ */
{
  id: "giant-serpent",
  name: "Giant Serpent",
  cr: 2,
  biomes: ["jungle", "desert", "ruins"],
  habitat: ["serpent-pits", "sunken-temples"],
  category: "reptile",
  role: "brute",
  tags: ["serpent", "venom", "scales"],
  factions: ["Coil Brotherhood"],
  behavior: {
    aggression: 5,
    courage: 4,
  },
  tactics: ["coil-and-strike"],
  stats: {
    hp: 45,
    ac: 13,
    atk: 14,
    dmg: "3d8 + poison",
    speed: "40 ft, swim 30 ft",
  },
  loot: ["venom-gland"],
  abilities: ["Constriction", "Poison Fangs"],
},

/* ------------------------------------------------------------ */
/* CROCODILIAN DEVOURER — CR 1 */
/* ------------------------------------------------------------ */
{
  id: "crocodilian-devourer",
  name: "Crocodilian Devourer",
  cr: 1,
  biomes: ["swamp", "river", "jungle"],
  habitat: ["murky-marsh", "sunken-waters"],
  category: "reptile",
  role: "ambusher",
  tags: ["crocodile", "aquatic"],
  factions: ["Marsh Predators"],
  behavior: {
    aggression: 5,
    courage: 5,
  },
  tactics: ["surface-grab-and-drag"],
  stats: {
    hp: 30,
    ac: 15,
    atk: 13,
    dmg: "2d6 piercing",
    speed: "40 ft, swim 40 ft",
  },
  loot: ["thick-hide"],
  abilities: ["Death Roll", "Water Ambush"],
},

/* ------------------------------------------------------------ */
/* BASILISK VARIANT — CR 6 */
/* ------------------------------------------------------------ */
{
  id: "basilisk-variant",
  name: "Basilisk Variant",
  cr: 6,
  biomes: ["cavern", "ruins", "underground"],
  habitat: ["stone-chambers", "fungal-depths"],
  category: "reptile",
  role: "controller",
  tags: ["basilisk", "venom", "stony"],
  factions: ["Petrifier Brood"],
  behavior: {
    aggression: 4,
    courage: 6,
  },
  tactics: ["gaze-first-then-bite"],
  stats: {
    hp: 95,
    ac: 16,
    atk: 18,
    dmg: "2d8 piercing",
    speed: "35 ft",
  },
  loot: ["petrified-skin-fragment"],
  abilities: ["Petrifying Gaze", "Venom Bite"],
},

/* ------------------------------------------------------------ */
/* THUNDER LIZARD — CR 8 (ELITE DINOSAUR) */
/* ------------------------------------------------------------ */
{
  id: "thunder-lizard",
  name: "Thunder Lizard",
  cr: 8,
  biomes: ["jungle", "plains", "ancient-ruins"],
  habitat: ["thunder-nests", "primeval-grounds"],
  category: "reptile",
  role: "elite-controller",
  tags: ["dinosaur", "thunder", "giant"],
  factions: ["Primeval Titans"],
  behavior: {
    aggression: 6,
    courage: 7,
  },
  tactics: ["trample-then-roar"],
  stats: {
    hp: 186,
    ac: 17,
    atk: 20,
    dmg: "2d10 bludgeoning + lightning",
    speed: "50 ft",
  },
  loot: ["thunder-scale", "ancient-scales"],
  abilities: ["Thunder Roar", "Stampede", "Lightning Pulse"],
},

];

export default MINIONS;
