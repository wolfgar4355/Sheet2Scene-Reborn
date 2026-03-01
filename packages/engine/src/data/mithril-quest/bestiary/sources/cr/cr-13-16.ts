// @ts-nocheck
import type { GmeMonster } from "../../../../../gm/types";

export const MONSTERS: GmeMonster[] = [

  // 🐉 CR 13–16 — DRAGONS & BÊTES MYTHIQUES
  {
    id: "adult-fire-dragon",
    name: "Dragon de Feu Adulte",
    world: "Fantasy",
    cr: 15,
    category: "dragon",
    biomeTags: ["volcano", "mountain"],
    habitatTags: ["dragon-lair"],
    ref: { source: "custom" }
  },
  {
    id: "adult-ice-dragon",
    name: "Dragon de Givre Adulte",
    world: "Fantasy",
    cr: 15,
    category: "dragon",
    biomeTags: ["tundra", "ice-caves"],
    habitatTags: ["dragon-lair"],
    ref: { source: "custom" }
  },
  {
    id: "storm-dragon",
    name: "Dragon des Tempêtes Adulte",
    world: "Fantasy",
    cr: 16,
    category: "dragon",
    biomeTags: ["storm", "mountain"],
    habitatTags: ["dragon-lair"],
    ref: { source: "custom" }
  },
  {
    id: "shadow-dragon-elder",
    name: "Dragon des Ombres",
    world: "Fantasy",
    cr: 14,
    category: "dragon",
    biomeTags: ["shadowlands"],
    habitatTags: ["underdark"],
    ref: { source: "custom" }
  },
  {
    id: "primordial-unicorn",
    name: "Licorne Primordiale",
    world: "Fantasy",
    cr: 13,
    category: "mythic-beast",
    biomeTags: ["forest", "feywild"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-hydra",
    name: "Hydre Ancestrale",
    world: "Fantasy",
    cr: 16,
    category: "beast",
    biomeTags: ["marsh"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "royal-chimera",
    name: "Chimère Royale",
    world: "Fantasy",
    cr: 14,
    category: "beast",
    biomeTags: ["mountain", "ruins"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "imperial-basilisk",
    name: "Basilic Impérial",
    world: "Fantasy",
    cr: 13,
    category: "beast",
    biomeTags: ["cavern"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "celestial-griffin",
    name: "Griffon Céleste Supérieur",
    world: "Fantasy",
    cr: 14,
    category: "beast",
    biomeTags: ["mountain", "sky"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "astral-tiger",
    name: "Tigre Astral Parangon",
    world: "Fantasy",
    cr: 14,
    category: "beast",
    biomeTags: ["astral"],
    habitatTags: ["magic-wild"],
    ref: { source: "custom" }
  },
  {
    id: "solar-eagle",
    name: "Aigle-Roc Divin",
    world: "Fantasy",
    cr: 16,
    category: "beast",
    biomeTags: ["sky", "sun"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "primordial-wind-lion",
    name: "Lion Lunaire Primordial",
    world: "Fantasy",
    cr: 13,
    category: "mythic-beast",
    biomeTags: ["mountain", "feywild"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },

  // ⚔️ CR 13–16 — HUMANOÏDES LÉGENDRAIRES
  {
    id: "colossal-war-champion",
    name: "Champion de Guerre Colossal",
    world: "Fantasy",
    cr: 14,
    category: "humanoid",
    biomeTags: ["wasteland"],
    habitatTags: ["tribal"],
    ref: { source: "custom" }
  },
  {
    id: "royal-rogue-king",
    name: "Cheval-Roi Voleur",
    world: "Fantasy",
    cr: 14,
    category: "humanoid",
    biomeTags: ["urban"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "superior-kobold-mage",
    name: "Kobold Mage Ancien",
    world: "Fantasy",
    cr: 13,
    category: "humanoid",
    biomeTags: ["volcano", "cave"],
    habitatTags: ["underground"],
    ref: { source: "custom" }
  },
  {
    id: "void-sorcerer",
    name: "Sorcier du Vide",
    world: "Fantasy",
    cr: 16,
    category: "humanoid",
    biomeTags: ["void"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "abyss-assassin",
    name: "Assassin du Néant",
    world: "Fantasy",
    cr: 14,
    category: "humanoid",
    biomeTags: ["shadowlands", "void"],
    habitatTags: ["assassin"],
    ref: { source: "custom" }
  },
  {
    id: "mythic-gladiator",
    name: "Gladiateur Mythique",
    world: "Fantasy",
    cr: 15,
    category: "humanoid",
    biomeTags: ["arena"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },
  {
    id: "fallen-paladin-exalted",
    name: "Paladin Déchu Exalté",
    world: "Fantasy",
    cr: 14,
    category: "humanoid",
    biomeTags: ["ruins"],
    habitatTags: ["cult"],
    ref: { source: "custom" }
  },
  {
    id: "eternal-sun-priest",
    name: "Prêtre du Soleil Éternel",
    world: "Fantasy",
    cr: 13,
    category: "humanoid",
    biomeTags: ["desert", "temple"],
    habitatTags: ["cult"],
    ref: { source: "custom" }
  },
  {
    id: "argent-royal-guard",
    name: "Garde Royal Argenté",
    world: "Fantasy",
    cr: 13,
    category: "humanoid",
    biomeTags: ["urban"],
    habitatTags: ["settlement"],
    ref: { source: "custom" }
  },
  {
    id: "ninth-breath-archmonk",
    name: "Maître-Moine du Neuvième Souffle",
    world: "Fantasy",
    cr: 15,
    category: "humanoid",
    biomeTags: ["mountain"],
    habitatTags: ["monastery"],
    ref: { source: "custom" }
  },
  {
    id: "divine-forest-hunter",
    name: "Chasseur Sylvestre Divin",
    world: "Fantasy",
    cr: 14,
    category: "humanoid",
    biomeTags: ["forest"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "archmage-of-light",
    name: "Archimage de Lumière",
    world: "Fantasy",
    cr: 14,
    category: "humanoid",
    biomeTags: ["temple"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },

  // 💀 CR 13–16 — MORTS-VIVANTS SUPRÊMES
  {
    id: "immortal-black-specter",
    name: "Chevalier Noir Immortel",
    world: "Fantasy",
    cr: 15,
    category: "undead",
    biomeTags: ["graveyard", "ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "archdevourer-specter",
    name: "Spectre Archidévoreur",
    world: "Fantasy",
    cr: 15,
    category: "undead",
    biomeTags: ["void"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "royal-apparition",
    name: "Apparition Royale",
    world: "Fantasy",
    cr: 13,
    category: "undead",
    biomeTags: ["shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "lich-elder",
    name: "Liche Vénérable",
    world: "Fantasy",
    cr: 16,
    category: "undead",
    biomeTags: ["ruins", "arcane"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "sun-rot-king",
    name: "Monde Roi-Soleil",
    world: "Fantasy",
    cr: 15,
    category: "undead",
    biomeTags: ["desert"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "ossuary-lord",
    name: "Seigneur des Carcasses",
    world: "Fantasy",
    cr: 14,
    category: "undead",
    biomeTags: ["graveyard"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "colossus-zombie-titan",
    name: "Colosse Zombie Titan",
    world: "Fantasy",
    cr: 16,
    category: "undead",
    biomeTags: ["ruins"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "reaper-of-hate",
    name: "Faucheur d’Ombre",
    world: "Fantasy",
    cr: 13,
    category: "undead",
    biomeTags: ["shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },
  {
    id: "primordial-shadow-assassin",
    name: "Ombre Primordiale",
    world: "Fantasy",
    cr: 15,
    category: "undead",
    biomeTags: ["void", "shadowlands"],
    habitatTags: ["undead"],
    ref: { source: "custom" }
  },

  // 🌿 CR 13–16 — FÉES & SYLVAINS MYTHIQUES
  {
    id: "dryad-queen-root",
    name: "Reine des Dryades",
    world: "Fantasy",
    cr: 14,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "arch-ent",
    name: "Arch-Ent",
    world: "Fantasy",
    cr: 15,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["wilderness"],
    ref: { source: "custom" }
  },
  {
    id: "celestial-fey-archer",
    name: "Archer Féerique Céleste",
    world: "Fantasy",
    cr: 13,
    category: "fey",
    biomeTags: ["forest", "feywild"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "eternal-fog-dancer",
    name: "Danseur du Brume Éternel",
    world: "Fantasy",
    cr: 14,
    category: "fey",
    biomeTags: ["swamp", "feywild"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "primordial-season-warden",
    name: "Gardien des Saisons Primordial",
    world: "Fantasy",
    cr: 16,
    category: "fey",
    biomeTags: ["forest", "tundra", "desert"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "royal-color-fey",
    name: "Fey Colorique Royal",
    world: "Fantasy",
    cr: 16,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-spirit-sylvan",
    name: "Esprit Sylvestre Magnanime",
    world: "Fantasy",
    cr: 13,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },
  {
    id: "sovereign-hart",
    name: "Cerf Souverain",
    world: "Fantasy",
    cr: 15,
    category: "fey",
    biomeTags: ["forest"],
    habitatTags: ["feywild"],
    ref: { source: "custom" }
  },

  // 🌪 CR 13–16 — ÉLÉMENTAIRES AVANCÉS
  {
    id: "apocalyptic-fire-elemental",
    name: "Élémentaire de Feu Apocalyptique",
    world: "Fantasy",
    cr: 15,
    category: "elemental",
    biomeTags: ["volcano"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "ancient-mountain-earth",
    name: "Élémentaire de Terre Montagnard Ancien",
    world: "Fantasy",
    cr: 16,
    category: "elemental",
    biomeTags: ["mountain"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "typhoon-air-elemental",
    name: "Élémentaire d’Air Typhoniques",
    world: "Fantasy",
    cr: 14,
    category: "elemental",
    biomeTags: ["storm"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "deep-ocean-elemental",
    name: "Élémentaire d’Eau Océan Profond",
    world: "Fantasy",
    cr: 16,
    category: "elemental",
    biomeTags: ["ocean"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },
  {
    id: "primordial-lightning",
    name: "Élémentaire de Foudre Souverain",
    world: "Fantasy",
    cr: 16,
    category: "elemental",
    biomeTags: ["storm"],
    habitatTags: ["elemental"],
    ref: { source: "custom" }
  },

  // 🌀 CR 13–16 — ABERRATIONS / CONSTRUCTS / DÉMONIAQUES
  {
    id: "arch-tentacle-terror",
    name: "Tentaculeur Archternal",
    world: "Fantasy",
    cr: 13,
    category: "aberration",
    biomeTags: ["void"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "supreme-spirit-devourer",
    name: "Dévoreur d’Esprit Suprême",
    world: "Fantasy",
    cr: 16,
    category: "aberration",
    biomeTags: ["void", "shadowlands"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "royal-chimera-void",
    name: "Chimère Veldisque Royale",
    world: "Fantasy",
    cr: 15,
    category: "aberration",
    biomeTags: ["void"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "absolute-reality-shaper",
    name: "Sculpteur de Réalité Absolu",
    world: "Fantasy",
    cr: 16,
    category: "construct",
    biomeTags: ["arcane"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  },
  {
    id: "titan-construct-divine",
    name: "Titan Construct Céleste",
    world: "Fantasy",
    cr: 15,
    category: "construct",
    biomeTags: ["temple"],
    habitatTags: ["arcane"],
    ref: { source: "custom" }
  }
];
