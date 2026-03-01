// @ts-nocheck
import type { GmeMonster } from "../../../../../gm/types";

export const MONSTERS: GmeMonster[] = [
  // 🐾 CR 4–5 — BÊTES & BÊTES MAGIQUES
  {
    id: "rune-bear",
    name: "Ours Runegroxe",
    world: "Fantasy",
    cr: 4,
    category: "beast",
    biomeTags: ["forest", "mountain", "ruins"],
    habitatTags: ["wilderness", "arcane-wild"],
    ref: { source: "custom" }
  },
  {
    id: "giant-fire-wolf",
    name: "Loup de Cendre Géant",
    world: "Fantasy",
    cr: 4,
    category: "beast",
    biomeTags: ["volcano", "firelands"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "roc-hill",
    name: "Hippotér Roccilleur",
    world: "Fantasy",
    cr: 4,
    category: "beast",
    biomeTags: ["mountain", "cliff"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "rockbreaker-boar",
    name: "Sanglier Brise-Roche",
    world: "Fantasy",
    cr: 5,
    category: "beast",
    biomeTags: ["mountain", "hills"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "basilisk-serpent",
    name: "Serpent Basilicien Mineur",
    world: "Fantasy",
    cr: 5,
    category: "beast",
    biomeTags: ["desert", "ruins"],
    habitatTags: ["arcane-wild"],
    ref: { source: "custom" }
  },
  {
    id: "thunder-lion",
    name: "Lion Tempécœur",
    world: "Fantasy",
    cr: 4,
    category: "beast",
    biomeTags: ["savanna", "storm"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "vampire-bat-giant-elite",
    name: "Chauve-souris Vampirique Géante",
    world: "Fantasy",
    cr: 4,
    category: "beast",
    biomeTags: ["caves", "shadowlands"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "valley-griffon",
    name: "Griffon des Vallées",
    world: "Fantasy",
    cr: 5,
    category: "beast",
    biomeTags: ["mountain", "air"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "marsh-leviathan",
    name: "Léviathan des Marais (Jeune)",
    world: "Fantasy",
    cr: 5,
    category: "beast",
    biomeTags: ["swamp"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "astral-calf",
    name: "Veau Astral",
    world: "Fantasy",
    cr: 5,
    category: "beast",
    biomeTags: ["astral", "void"],
    habitatTags: ["magic-wild"],
    ref: { source: "custom" }
  },

  // 🧝‍♂️ CR 4–5 — HUMANOÏDES ÉLITES
  {
    id: "orc-champion",
    name: "Champion Orc",
    world: "Fantasy",
    cr: 5,
    category: "humanoid",
    biomeTags: ["mountain", "caves"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "dragon-hunter",
    name: "Orc Chasseur de Dragons",
    world: "Fantasy",
    cr: 5,
    category: "humanoid",
    biomeTags: ["mountain"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "war-leader-elf",
    name: "Chef Éolien de Guerre",
    world: "Fantasy",
    cr: 4,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["elven"],
    ref: { source: "custom" }
  },
  {
    id: "goblin-thorn-mage",
    name: "Gobelin Roncier",
    world: "Fantasy",
    cr: 4,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "kobold-fire-mage",
    name: "Kobold Mage du Feu",
    world: "Fantasy",
    cr: 4,
    category: "humanoid",
    biomeTags: ["caves", "volcano"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "bandit-master-duelist",
    name: "Bandit Maître-Épéiste",
    world: "Fantasy",
    cr: 5,
    category: "humanoid",
    biomeTags: ["roads", "forest"],
    habitatTags: ["urban-wild"],
    ref: { source: "custom" }
  },
  {
    id: "elite-mercenary",
    name: "Mercenaire d’Élite",
    world: "Fantasy",
    cr: 4,
    category: "humanoid",
    biomeTags: ["urban"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },
  {
    id: "occult-priest",
    name: "Prêtre Occulte",
    world: "Fantasy",
    cr: 5,
    category: "humanoid",
    biomeTags: ["ruins", "temple"],
    habitatTags: ["cult"],
    ref: { source: "custom" }
  },
  {
    id: "forest-stalker",
    name: "Traqueur Sylvestre",
    world: "Fantasy",
    cr: 4,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "shadow-archer",
    name: "Archer Sans-Lumière",
    world: "Fantasy",
    cr: 5,
    category: "humanoid",
    biomeTags: ["shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },

  // 💀 CR 4–5 — MORTS-VIVANTS PUISSANTS
  {
    id: "knight-skeleton",
    name: "Squelette Chevalier",
    world: "Fantasy",
    cr: 4,
    category: "undead",
    biomeTags: ["graveyard", "ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "giant-rotting-zombie",
    name: "Zombie Pourriture Géant",
    world: "Fantasy",
    cr: 4,
    category: "undead",
    biomeTags: ["graveyard"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "haunting-spirit",
    name: "Esprit Hurleur",
    world: "Fantasy",
    cr: 4,
    category: "undead",
    biomeTags: ["shadowlands", "ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "shadow-reaver",
    name: "Ombre Faucheuse",
    world: "Fantasy",
    cr: 5,
    category: "undead",
    biomeTags: ["ruins", "shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "arch-skeleton",
    name: "Archi-Squelette",
    world: "Fantasy",
    cr: 4,
    category: "undead",
    biomeTags: ["ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "stagnant-horror",
    name: "Horreur Stagnante",
    world: "Fantasy",
    cr: 5,
    category: "undead",
    biomeTags: ["swamp", "ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "bone-minotaur",
    name: "Minotaure d’Os",
    world: "Fantasy",
    cr: 5,
    category: "undead",
    biomeTags: ["ruins", "labyrinth"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },

  // ✨ CR 4–5 — FÉERIE & SYLVAINS
  {
    id: "ancient-dryad",
    name: "Dryade Ancienne",
    world: "Fantasy",
    cr: 5,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "yellow-ent",
    name: "Ent Jaune",
    world: "Fantasy",
    cr: 4,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "elite-faerie-archer",
    name: "Archer Féerique d’Élite",
    world: "Fantasy",
    cr: 4,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "mist-dancer",
    name: "Danseur de Brume",
    world: "Fantasy",
    cr: 5,
    category: "fey",
    biomeTags: ["marsh", "forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "wind-horn-stag",
    name: "Cerf Corne-Flamce",
    world: "Fantasy",
    cr: 5,
    category: "fey",
    biomeTags: ["forest", "wind"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "oak-guardian",
    name: "Garde-Chêne",
    world: "Fantasy",
    cr: 5,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },

  // 🌪 CR 4–5 — ÉLÉMENTAIRES
  {
    id: "superior-fire-elemental",
    name: "Élémentaire de Feu (Mineur Supérieur)",
    world: "Fantasy",
    cr: 5,
    category: "elemental",
    biomeTags: ["volcano"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "split-earth-elemental",
    name: "Élémentaire de Terre Fendu",
    world: "Fantasy",
    cr: 4,
    category: "elemental",
    biomeTags: ["mountain", "caves"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "air-raptor-elemental",
    name: "Élémentaire d’Air Rapide",
    world: "Fantasy",
    cr: 4,
    category: "elemental",
    biomeTags: ["storm", "mountain"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "whirling-fire-elemental",
    name: "Élémentaire de Feu Tourbillonnaire",
    world: "Fantasy",
    cr: 5,
    category: "elemental",
    biomeTags: ["volcano"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "minor-lightning-elemental",
    name: "Élémentaire de Foudre Mineur",
    world: "Fantasy",
    cr: 5,
    category: "elemental",
    biomeTags: ["storm"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },

  // 🌀 CR 4–5 — ABERRATIONS / DÉMONS / CONSTRUCTS
  {
    id: "void-tomb-sorcerer",
    name: "Tombecreux Voracité",
    world: "Fantasy",
    cr: 5,
    category: "aberration",
    biomeTags: ["void", "underground"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "minor-pain-devourer",
    name: "Dévoreur de Peines Mineur",
    world: "Fantasy",
    cr: 5,
    category: "demon",
    biomeTags: ["abyss"],
    habitatTags: ["hell"],
    ref: { source: "custom" }
  },
  {
    id: "tentacle-creeper",
    name: "Horreur Cillée Rampante",
    world: "Fantasy",
    cr: 5,
    category: "aberration",
    biomeTags: ["ruins", "underground"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "rubble-golem",
    name: "Golem de Pierre Rudimentaire",
    world: "Fantasy",
    cr: 5,
    category: "construct",
    biomeTags: ["temple", "ruins"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "abyssal-seeker",
    name: "Chercheur Abyssal",
    world: "Fantasy",
    cr: 5,
    category: "demon",
    biomeTags: ["abyss"],
    habitatTags: ["hell"],
    ref: { source: "custom" }
  }
];
