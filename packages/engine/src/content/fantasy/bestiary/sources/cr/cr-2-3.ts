import type { GmeMonster } from "../../../modules/gme/types";

export const MONSTERS: GmeMonster[] = [
  // 🐺 BÊTES & BÊTES GÉANTES
  {
    id: "alpha-wolf",
    name: "Loup Alpha",
    world: "Fantasy",
    cr: 2,
    category: "beast",
    biomeTags: ["forest", "hills"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "colossal-boar",
    name: "Sanglier Colossal",
    world: "Fantasy",
    cr: 2,
    category: "beast",
    biomeTags: ["forest", "hills"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "brown-bear-giant",
    name: "Ours Brun Géant",
    world: "Fantasy",
    cr: 3,
    category: "beast",
    biomeTags: ["forest"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "giant-constrictor-serpent",
    name: "Serpent Constricteur Géant",
    world: "Fantasy",
    cr: 2,
    category: "beast",
    biomeTags: ["swamp", "forest", "river"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "raccoon-agile",
    name: "Ragile Raclousteau",
    world: "Fantasy",
    cr: 2,
    category: "beast",
    biomeTags: ["forest"],
    habitatTags: ["urban-wild"],
    ref: { source: "custom" }
  },
  {
    id: "giant-hyena",
    name: "Hyène Carnassière Géante",
    world: "Fantasy",
    cr: 2,
    category: "beast",
    biomeTags: ["savanna", "plains"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "vampire-bat-giant",
    name: "Chauve-souris Sangsuaire Géante",
    world: "Fantasy",
    cr: 2,
    category: "beast",
    biomeTags: ["caves"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "colored-lizard",
    name: "Lézard Colorisé",
    world: "Fantasy",
    cr: 3,
    category: "beast",
    biomeTags: ["desert", "rocks"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "illusion-crow",
    name: "Corbeau Illusionné",
    world: "Fantasy",
    cr: 2,
    category: "beast",
    biomeTags: ["forest", "arcane"],
    habitatTags: ["magic-wild"],
    ref: { source: "custom" }
  },
  {
    id: "shadow-lynx",
    name: "Lynx Fantôme",
    world: "Fantasy",
    cr: 3,
    category: "beast",
    biomeTags: ["forest", "shadowlands"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },

  // 🧝‍♂️ HUMANOÏDES (CR 2–3)
  {
    id: "goblin-warrior",
    name: "Guerrier Gobelin",
    world: "Fantasy",
    cr: 2,
    category: "humanoid",
    biomeTags: ["forest", "hills"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "goblin-chemist",
    name: "Gobelin Chimiste",
    world: "Fantasy",
    cr: 3,
    category: "humanoid",
    biomeTags: ["forest", "caves"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "kobold-engineer",
    name: "Kobold Ingénieur",
    world: "Fantasy",
    cr: 2,
    category: "humanoid",
    biomeTags: ["caves"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "orc-berserker",
    name: "Orc Berserker Mineur",
    world: "Fantasy",
    cr: 3,
    category: "humanoid",
    biomeTags: ["mountain", "caves"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "orc-javelineer",
    name: "Orc Javelinier",
    world: "Fantasy",
    cr: 2,
    category: "humanoid",
    biomeTags: ["mountain"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "bandit-captain",
    name: "Bandit Capitaine",
    world: "Fantasy",
    cr: 3,
    category: "humanoid",
    biomeTags: ["roads", "forest"],
    habitatTags: ["urban-wild"],
    ref: { source: "custom" }
  },
  {
    id: "tribal-hunter",
    name: "Rodeur Tribal",
    world: "Fantasy",
    cr: 2,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "occultist-acolyte",
    name: "Cultiste Occultiste",
    world: "Fantasy",
    cr: 3,
    category: "humanoid",
    biomeTags: ["ruins", "temple"],
    habitatTags: ["cult"],
    ref: { source: "custom" }
  },
  {
    id: "mercenary-soldier",
    name: "Soldat Mercenaire",
    world: "Fantasy",
    cr: 2,
    category: "humanoid",
    biomeTags: ["urban"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },
  {
    id: "tavern-champion",
    name: "Champion de Taverne",
    world: "Fantasy",
    cr: 2,
    category: "humanoid",
    biomeTags: ["urban"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },

  // 💀 MORTS-VIVANTS
  {
    id: "thick-skeleton",
    name: "Squelette Épais",
    world: "Fantasy",
    cr: 2,
    category: "undead",
    biomeTags: ["graveyard", "ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "flayed-zombie",
    name: "Zombie Écorché",
    world: "Fantasy",
    cr: 2,
    category: "undead",
    biomeTags: ["graveyard"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "minor-specter",
    name: "Spectre Mineur",
    world: "Fantasy",
    cr: 3,
    category: "undead",
    biomeTags: ["ruins", "shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "possessed-armor",
    name: "Armure Animée Pestée",
    world: "Fantasy",
    cr: 2,
    category: "undead",
    biomeTags: ["ruins", "temple"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "necrophage",
    name: "Nécrophage",
    world: "Fantasy",
    cr: 3,
    category: "undead",
    biomeTags: ["graveyard", "caves"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },

  // ✨ FÉE & SYLVAIN
  {
    id: "fire-fae",
    name: "Fée Flammeuse",
    world: "Fantasy",
    cr: 3,
    category: "fey",
    biomeTags: ["forest", "glimmer"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "protector-gnat",
    name: "Petit Gnat Protecteur",
    world: "Fantasy",
    cr: 3,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "ice-sprite",
    name: "Sprite de Givre",
    world: "Fantasy",
    cr: 2,
    category: "fey",
    biomeTags: ["tundra", "forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "stream-courtain",
    name: "Courtairin",
    world: "Fantasy",
    cr: 3,
    category: "fey",
    biomeTags: ["river", "forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },

  // 🔥 ÉLÉMENTAIRES
  {
    id: "fire-whirl-minor",
    name: "Élémentaire Mineur de Feu",
    world: "Fantasy",
    cr: 2,
    category: "elemental",
    biomeTags: ["volcano", "forge"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "earth-minor",
    name: "Élémentaire Mineur de Terre",
    world: "Fantasy",
    cr: 3,
    category: "elemental",
    biomeTags: ["mountain", "caves"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "air-whirl",
    name: "Élémentaire Mineur d’Air",
    world: "Fantasy",
    cr: 2,
    category: "elemental",
    biomeTags: ["mountain", "storm"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "water-elemental-minor",
    name: "Élémentaire Mineur d’Eau",
    world: "Fantasy",
    cr: 3,
    category: "elemental",
    biomeTags: ["river", "lake"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },

  // 🧱 ABERRATIONS & CONSTRUCTS
  {
    id: "floating-eye",
    name: "Œil Flottant Mineur",
    world: "Fantasy",
    cr: 2,
    category: "aberration",
    biomeTags: ["ruins", "underground"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "void-limace",
    name: "Limace du Vide",
    world: "Fantasy",
    cr: 3,
    category: "aberration",
    biomeTags: ["void", "ruins"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "tentacle-flayer",
    name: "Flagelleur Tentaire Mineur",
    world: "Fantasy",
    cr: 3,
    category: "aberration",
    biomeTags: ["underground", "void"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "small-sun-golem",
    name: "Golem de Soleil (Petit)",
    world: "Fantasy",
    cr: 3,
    category: "construct",
    biomeTags: ["temple"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  }
];
