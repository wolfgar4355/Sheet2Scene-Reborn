// @ts-nocheck
import type { GmeMonster } from "../../../../../gm/types";

export const MONSTERS: GmeMonster[] = [

  // 🐾 CR 6–8 — BÊTES & BÊTES MAGIQUES
  {
    id: "alpha-winter-wolf",
    name: "Loup Alpha de Givre",
    world: "Fantasy",
    cr: 6,
    category: "beast",
    biomeTags: ["tundra", "frost", "mountain"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "favored-bear",
    name: "Ours Favoriée",
    world: "Fantasy",
    cr: 7,
    category: "beast",
    biomeTags: ["forest"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "supreme-basilisk",
    name: "Basilic Supérieur",
    world: "Fantasy",
    cr: 7,
    category: "beast",
    biomeTags: ["desert", "ruins"],
    habitatTags: ["arcane-wild"],
    ref: { source: "custom" }
  },
  {
    id: "royal-griffon",
    name: "Griffon Royal",
    world: "Fantasy",
    cr: 8,
    category: "beast",
    biomeTags: ["mountain", "air"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "phantom-tiger",
    name: "Tigre Fantôme des Ruines",
    world: "Fantasy",
    cr: 7,
    category: "beast",
    biomeTags: ["ruins", "shadowlands"],
    habitatTags: ["arcane-wild"],
    ref: { source: "custom" }
  },
  {
    id: "adult-marsh-leviathan",
    name: "Léviathan des Marais (Adulte)",
    world: "Fantasy",
    cr: 8,
    category: "beast",
    biomeTags: ["swamp"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "aurora-calf-elder",
    name: "Veau Aurore (Élancé)",
    world: "Fantasy",
    cr: 6,
    category: "beast",
    biomeTags: ["astral", "void"],
    habitatTags: ["magic-wild"],
    ref: { source: "custom" }
  },
  {
    id: "fox-illusion-master",
    name: "Renard des 100 Illusions",
    world: "Fantasy",
    cr: 8,
    category: "beast",
    biomeTags: ["forest", "feywild"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-eagle",
    name: "Aigle-Ancien",
    world: "Fantasy",
    cr: 7,
    category: "beast",
    biomeTags: ["mountain", "sky"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "titan-serpent",
    name: "Serpent Titanescaux",
    world: "Fantasy",
    cr: 8,
    category: "beast",
    biomeTags: ["tropical-forest", "swamp"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },

  // 🧝‍♂️ CR 6–8 — HUMANOÏDES ÉLITES
  {
    id: "champion-ancient-blade",
    name: "Champion des Lames-Sanglantes",
    world: "Fantasy",
    cr: 6,
    category: "humanoid",
    biomeTags: ["mountain", "ruins"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "warlord-seeker",
    name: "Seigneur de Guerre Gobelin",
    world: "Fantasy",
    cr: 7,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "kobold-archmage",
    name: "Kobold Arcanite Supérieur",
    world: "Fantasy",
    cr: 6,
    category: "humanoid",
    biomeTags: ["caves", "volcano"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "veil-walker",
    name: "Ombre du Voile",
    world: "Fantasy",
    cr: 7,
    category: "humanoid",
    biomeTags: ["shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "master-duelist",
    name: "Maître-Duelliste",
    world: "Fantasy",
    cr: 7,
    category: "humanoid",
    biomeTags: ["urban"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-flame-priest",
    name: "Prêtre de la Flamme Ancienne",
    world: "Fantasy",
    cr: 7,
    category: "humanoid",
    biomeTags: ["temple", "ruins"],
    habitatTags: ["cult"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-forest-stalker",
    name: "Traqueur Sylvestre Ancien",
    world: "Fantasy",
    cr: 6,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "bandit-lord",
    name: "Bandit Seigneur",
    world: "Fantasy",
    cr: 7,
    category: "humanoid",
    biomeTags: ["roads", "forest"],
    habitatTags: ["urban-wild"],
    ref: { source: "custom" }
  },
  {
    id: "mountain-occultist",
    name: "Occultiste du Mont",
    world: "Fantasy",
    cr: 8,
    category: "humanoid",
    biomeTags: ["mountain", "ruins"],
    habitatTags: ["cult"],
    ref: { source: "custom" }
  },
  {
    id: "errant-gladiator",
    name: "Gladiateur Errant",
    world: "Fantasy",
    cr: 6,
    category: "humanoid",
    biomeTags: ["roads"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },

  // 💀 CR 6–8 — MORTS-VIVANTS AVANCÉS
  {
    id: "dark-skeleton-knight",
    name: "Chevalier Squelette Noir",
    world: "Fantasy",
    cr: 6,
    category: "undead",
    biomeTags: ["graveyard", "ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "abomination-zombie",
    name: "Zombie Abomination",
    world: "Fantasy",
    cr: 7,
    category: "undead",
    biomeTags: ["ruins", "swamp"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "crier-specter",
    name: "Spectre Criard",
    world: "Fantasy",
    cr: 6,
    category: "undead",
    biomeTags: ["shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "elder-apparition",
    name: "Apparition Vénérienne",
    world: "Fantasy",
    cr: 8,
    category: "undead",
    biomeTags: ["void", "ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "death-necromancer",
    name: "Nécromancien Déchu",
    world: "Fantasy",
    cr: 7,
    category: "undead",
    biomeTags: ["ruins", "temple"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "bone-warrior",
    name: "Ombre Guerrière",
    world: "Fantasy",
    cr: 7,
    category: "undead",
    biomeTags: ["shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "os-seeker",
    name: "Sécheur d’Os",
    world: "Fantasy",
    cr: 8,
    category: "undead",
    biomeTags: ["ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },

  // ✨ CR 6–8 — FÉERIE & SYLVAIN
  {
    id: "sorceress-dryad",
    name: "Dryade Sorcière",
    world: "Fantasy",
    cr: 6,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-ent",
    name: "Ent Ancien",
    world: "Fantasy",
    cr: 8,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "royal-faerie-archer",
    name: "Archer Féerique Royal",
    world: "Fantasy",
    cr: 7,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "superior-mist-dancer",
    name: "Danseur de Brume Supérieur",
    world: "Fantasy",
    cr: 8,
    category: "fey",
    biomeTags: ["forest", "marsh"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-oak-guardian",
    name: "Gardien Chêne-Ancien",
    world: "Fantasy",
    cr: 8,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "wind-spirit",
    name: "Courant-Esprit",
    world: "Fantasy",
    cr: 6,
    category: "fey",
    biomeTags: ["wind", "forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },

  // 🌪 CR 6–8 — ÉLÉMENTAIRES
  {
    id: "fire-elemental-elder",
    name: "Élémentaire de Feu (CR 7)",
    world: "Fantasy",
    cr: 7,
    category: "elemental",
    biomeTags: ["volcano"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "colossal-earth",
    name: "Élémentaire de Terre Colossal",
    world: "Fantasy",
    cr: 8,
    category: "elemental",
    biomeTags: ["mountain", "caves"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "storm-air-elemental",
    name: "Élémentaire d’Air Tourmenteur",
    world: "Fantasy",
    cr: 7,
    category: "elemental",
    biomeTags: ["storm"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "oceanic-water-elemental",
    name: "Élémentaire d’Eau Océanique",
    world: "Fantasy",
    cr: 7,
    category: "elemental",
    biomeTags: ["ocean"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "superior-lightning",
    name: "Élémentaire de Foudre Supérieur",
    world: "Fantasy",
    cr: 8,
    category: "elemental",
    biomeTags: ["storm"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "minor-ice-elemental",
    name: "Élémentaire de Glace Mineur",
    world: "Fantasy",
    cr: 6,
    category: "elemental",
    biomeTags: ["frost", "tundra"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "acid-scorcher-elemental",
    name: "Élémentaire de Soufre",
    world: "Fantasy",
    cr: 6,
    category: "elemental",
    biomeTags: ["volcano", "ashlands"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },

  // 🌀 CR 6–8 — ABERRATIONS & CONSTRUCTS
  {
    id: "gore-tentacle-beast",
    name: "Tentacreur Gorgé",
    world: "Fantasy",
    cr: 7,
    category: "aberration",
    biomeTags: ["ruins", "underground"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "minor-void-devourer",
    name: "Dévoreur d’Esprit Mineur",
    world: "Fantasy",
    cr: 7,
    category: "aberration",
    biomeTags: ["void"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "screaming-eye",
    name: "Œil Hurlant",
    world: "Fantasy",
    cr: 8,
    category: "aberration",
    biomeTags: ["void", "ruins"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "deepcore-golem",
    name: "Golem de Fer Inexorable",
    world: "Fantasy",
    cr: 8,
    category: "construct",
    biomeTags: ["ruins", "dungeon"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "rift-horror",
    name: "Horreur des Fissures",
    world: "Fantasy",
    cr: 7,
    category: "aberration",
    biomeTags: ["void"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "mountain-shaper",
    name: "Sculpteur du Néant",
    world: "Fantasy",
    cr: 6,
    category: "construct",
    biomeTags: ["mountain"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "minor-sylvan-titan",
    name: "Titan Sylvestre Mineur",
    world: "Fantasy",
    cr: 8,
    category: "construct",
    biomeTags: ["forest"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  }
];
