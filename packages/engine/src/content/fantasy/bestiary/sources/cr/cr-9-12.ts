import type { GmeMonster } from "@s2s/fantasy/types";

export const MONSTERS: GmeMonster[] = [

  // 🐾 CR 9–12 — BÊTES & BÊTES MAGIQUES
  {
    id: "ash-wyvern",
    name: "Wyverne de Cendre",
    world: "Fantasy",
    cr: 9,
    category: "beast",
    biomeTags: ["volcano", "ashlands", "mountain"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "celestial-wyvern",
    name: "Wyverne Céleste",
    world: "Fantasy",
    cr: 10,
    category: "beast",
    biomeTags: ["sky", "astral"],
    habitatTags: ["magic-wild"],
    ref: { source: "custom" }
  },
  {
    id: "royal-manticore",
    name: "Manticore Royale",
    world: "Fantasy",
    cr: 11,
    category: "beast",
    biomeTags: ["desert", "ruins"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "titan-hydra",
    name: "Hydre des Ruines Titan",
    world: "Fantasy",
    cr: 12,
    category: "beast",
    biomeTags: ["marsh", "ruins"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "stone-titan-boar",
    name: "Sanglier Titan des Roches",
    world: "Fantasy",
    cr: 9,
    category: "beast",
    biomeTags: ["mountain"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "basilisk-elder",
    name: "Serpent Basilicien Supérieur",
    world: "Fantasy",
    cr: 9,
    category: "beast",
    biomeTags: ["swamp"],
    habitatTags: ["arcane-wild"],
    ref: { source: "custom" }
  },
  {
    id: "legendary-eagle",
    name: "Aigle-Roc Légendaire",
    world: "Fantasy",
    cr: 9,
    category: "beast",
    biomeTags: ["mountain", "sky"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-phantom-wolf",
    name: "Loup Fantôme Ancien",
    world: "Fantasy",
    cr: 10,
    category: "beast",
    biomeTags: ["shadowlands", "forest"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "astral-horned-stag",
    name: "Cerf Astral Majestueux",
    world: "Fantasy",
    cr: 10,
    category: "beast",
    biomeTags: ["astral", "forest"],
    habitatTags: ["magic-wild"],
    ref: { source: "custom" }
  },
  {
    id: "arcane-tiger",
    name: "Tigre Arcanique",
    world: "Fantasy",
    cr: 9,
    category: "beast",
    biomeTags: ["ruins", "arcane"],
    habitatTags: ["arcane-wild"],
    ref: { source: "custom" }
  },
  {
    id: "abyssal-leviathan",
    name: "Léviathan Abyssal",
    world: "Fantasy",
    cr: 12,
    category: "beast",
    biomeTags: ["ocean"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-rock-scorpion",
    name: "Scorpion de Roc Ancien",
    world: "Fantasy",
    cr: 10,
    category: "beast",
    biomeTags: ["desert", "mountain"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },

  // ⚔️ CR 9–12 — HUMANOÏDES ÉLITE
  {
    id: "blood-war-chief",
    name: "Seigneur Orque de Guerre",
    world: "Fantasy",
    cr: 10,
    category: "humanoid",
    biomeTags: ["mountain", "plains"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "tyrant-of-blood",
    name: "Orc Tyran de Sang",
    world: "Fantasy",
    cr: 12,
    category: "humanoid",
    biomeTags: ["mountain", "warcamp"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "goblin-warmage",
    name: "Gobelin Warmage",
    world: "Fantasy",
    cr: 9,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "arcane-destroyer",
    name: "Kobold Destructeur Arcanique",
    world: "Fantasy",
    cr: 9,
    category: "humanoid",
    biomeTags: ["cave", "volcano"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "veil-sorcerer",
    name: "Sorcier du Voile",
    world: "Fantasy",
    cr: 11,
    category: "humanoid",
    biomeTags: ["shadowlands"],
    habitatTags: ["cult"],
    ref: { source: "custom" }
  },
  {
    id: "crimson-assassin",
    name: "Assassin du Crépuscule",
    world: "Fantasy",
    cr: 11,
    category: "humanoid",
    biomeTags: ["urban", "shadowlands"],
    habitatTags: ["assassin"],
    ref: { source: "custom" }
  },
  {
    id: "cinqueme-sondage-archer",
    name: "Archer du Cinquième Souffle",
    world: "Fantasy",
    cr: 10,
    category: "humanoid",
    biomeTags: ["mountain", "forest"],
    habitatTags: ["discipline"],
    ref: { source: "custom" }
  },
  {
    id: "dark-paladin-exiled",
    name: "Paladin Noir Exilé",
    world: "Fantasy",
    cr: 12,
    category: "humanoid",
    biomeTags: ["ruins", "shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "royal-elite-guard",
    name: "Garde Royal d’Élite",
    world: "Fantasy",
    cr: 9,
    category: "humanoid",
    biomeTags: ["urban"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-forest-archer",
    name: "Archer des Bois Profonds",
    world: "Fantasy",
    cr: 10,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "firebrand-priest",
    name: "Prêtre Incandescent",
    world: "Fantasy",
    cr: 11,
    category: "humanoid",
    biomeTags: ["temple", "volcano"],
    habitatTags: ["cult"],
    ref: { source: "custom" }
  },
  {
    id: "legendary-gladiator",
    name: "Gladiateur Légendaire",
    world: "Fantasy",
    cr: 12,
    category: "humanoid",
    biomeTags: ["arena", "urban"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },

  // 💀 CR 9–12 — MORTS-VIVANTS AVANCÉS
  {
    id: "immortal-black-knight",
    name: "Chevalier Noir Immortel",
    world: "Fantasy",
    cr: 10,
    category: "undead",
    biomeTags: ["ruins", "graveyard"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "void-reaver",
    name: "Spectre Dévoreur",
    world: "Fantasy",
    cr: 9,
    category: "undead",
    biomeTags: ["void", "shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "night-apparition",
    name: "Apparition Nocturne",
    world: "Fantasy",
    cr: 9,
    category: "undead",
    biomeTags: ["shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "royal-necromancer",
    name: "Nécromancien Royal",
    world: "Fantasy",
    cr: 10,
    category: "undead",
    biomeTags: ["ruins", "temple"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-pharaoh",
    name: "Momie Pharaon",
    world: "Fantasy",
    cr: 12,
    category: "undead",
    biomeTags: ["desert", "temple"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "lord-of-graves",
    name: "Seigneur des Tombes",
    world: "Fantasy",
    cr: 11,
    category: "undead",
    biomeTags: ["graveyard"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "spectral-reaper",
    name: "Faucheur Spectral",
    world: "Fantasy",
    cr: 10,
    category: "undead",
    biomeTags: ["shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "colossal-zombie",
    name: "Colosse Zombie",
    world: "Fantasy",
    cr: 12,
    category: "undead",
    biomeTags: ["ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-arcane-armor",
    name: "Armure Arcanique Titanesque",
    world: "Fantasy",
    cr: 9,
    category: "undead",
    biomeTags: ["ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "ossuary-guardian",
    name: "Gardien Ossuaire",
    world: "Fantasy",
    cr: 11,
    category: "undead",
    biomeTags: ["temple", "graveyard"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },

  // 🌿 CR 9–12 — FÉERIE & SYLVAIN
  {
    id: "elder-ent",
    name: "Ent Vénérable",
    world: "Fantasy",
    cr: 12,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  // (note: Archer Féerique Légendaire, Danseur du Brume Primordial, Gardien des Saisons, Cerf Couronne-d’Étoiles sont déjà listés plus haut — ici tu les avais dupliqués dans les captures, je ne les duplique PAS dans le fichier)
  
  // 🌪 CR 9–12 — ÉLÉMENTAIRES SUPÉRIEURS
  {
    id: "sovereign-fire-elemental",
    name: "Élémentaire de Feu Souverain",
    world: "Fantasy",
    cr: 11,
    category: "elemental",
    biomeTags: ["volcano"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "titan-earth-elemental",
    name: "Élémentaire de Terre Titanesque",
    world: "Fantasy",
    cr: 12,
    category: "elemental",
    biomeTags: ["mountain", "cave"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "tempest-air-elemental",
    name: "Élémentaire d’Air Orageux",
    world: "Fantasy",
    cr: 10,
    category: "elemental",
    biomeTags: ["storm"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "abyssal-water-elemental",
    name: "Élémentaire d’Eau Abyssal",
    world: "Fantasy",
    cr: 11,
    category: "elemental",
    biomeTags: ["ocean"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "primordial-lightning-elemental",
    name: "Élémentaire de Foudre Primordial",
    world: "Fantasy",
    cr: 12,
    category: "elemental",
    biomeTags: ["storm"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "glacier-ice-elemental",
    name: "Élémentaire de Glace Supérieur",
    world: "Fantasy",
    cr: 13,
    category: "elemental",
    biomeTags: ["tundra", "frost"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },

  // 🌀 CR 9–12 — ABERRATIONS / DÉMONS / CONSTRUCTS
  {
    id: "shadow-tentacle-lord",
    name: "Tentaculeur Sombrexan",
    world: "Fantasy",
    cr: 10,
    category: "aberration",
    biomeTags: ["void", "ruins"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "soul-devourer",
    name: "Dévoreur d’Esprit Supérieur",
    world: "Fantasy",
    cr: 11,
    category: "aberration",
    biomeTags: ["shadowlands", "void"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "triple-skull-aberration",
    name: "Chimère Veldisque",
    world: "Fantasy",
    cr: 12,
    category: "aberration",
    biomeTags: ["ruins", "shadowlands"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "iron-golem-purifier",
    name: "Golem de Fer Pur",
    world: "Fantasy",
    cr: 11,
    category: "construct",
    biomeTags: ["ruins", "dungeon"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "shape-horror",
    name: "Horreur Protéenne",
    world: "Fantasy",
    cr: 10,
    category: "aberration",
    biomeTags: ["void"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "reality-shaper",
    name: "Sculpteur de Réalité",
    world: "Fantasy",
    cr: 12,
    category: "construct",
    biomeTags: ["arcane"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "elder-eye-lord",
    name: "Œil Seigneur Ultime",
    world: "Fantasy",
    cr: 9,
    category: "aberration",
    biomeTags: ["void", "ruins"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "titan-ritual-construct",
    name: "Titan Construct Rituel",
    world: "Fantasy",
    cr: 12,
    category: "construct",
    biomeTags: ["temple", "ruins"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  }
];
