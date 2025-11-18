import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  roll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const LAVA_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune ignée basique
  {
    roll: [1, 10],
    monsters: ["fire-imp", "ember-sprite"],
    habitat: "lava-rivers",
    difficulty: "easy",
    description: "Petits êtres espiègles formés d’étincelles et de braises.",
  },

  // 11–20 : Conduits volcaniques
  {
    roll: [11, 20],
    monsters: ["magma-crab", "obsidian-beetle"],
    habitat: "obsidian-tunnels",
    difficulty: "standard",
    description: "Creatures à carapace noire cherchant la chaleur extrême.",
  },

  // 21–35 : Élémentaires de feu & magma
  {
    roll: [21, 35],
    monsters: ["fire-elemental", "magma-elemental"],
    habitat: "molten-chambers",
    difficulty: "standard",
    description: "Des silhouettes incandescentes émergent de la lave vivante.",
  },

  // 36–50 : Salamandres & serpents thermiques
  {
    roll: [36, 50],
    monsters: ["salamander-spear", "lava-serpent"],
    habitat: "crimson-caverns",
    difficulty: "standard",
    description: "Les tunnels vibrent d’un chaudron vivant sous vos pas.",
  },

  // 51–65 : Démons du Brasier
  {
    roll: [51, 65],
    monsters: ["flame-demon", "charred-fiend"],
    habitat: "hellfire-fissures",
    difficulty: "hard",
    description:
      "Les murs fondent sous leur présence, distordant la réalité thermique.",
  },

  // 66–80 : Titans de Cendres
  {
    roll: [66, 80],
    monsters: ["ashen-colossus", "pyroclast-golem"],
    habitat: "eruption-pits",
    difficulty: "hard",
    description:
      "Géants de roche vivante portant des cicatrices incandescentes.",
  },

  // 81–90 : Prédateurs thermiques d’élite
  {
    roll: [81, 90],
    monsters: ["igneous-hunter", "flare-stalker"],
    habitat: "thermal-breaches",
    difficulty: "hard",
    description:
      "Chasseurs félins ignés, invisibles dans la chaleur ondulante.",
  },

  // 91–98 : Essaims de lave vivante
  {
    roll: [91, 98],
    monsters: ["molten-swarm", "ember-wraith"],
    habitat: "magma-pools",
    difficulty: "deadly",
    description: "L’éruption prend vie et cherche à vous consumer.",
  },

  // 99–100 : Boss Mythique — Titan du Cœur Magmatique
  {
    roll: [99, 100],
    monsters: ["mythic-magma-titan", "heart-of-the-volcano"],
    habitat: "mythic-core",
    difficulty: "deadly",
    description:
      "Une entité colossale née du noyau en fusion, dotée d’un pouvoir ancien.",
  },
];

export default LAVA_ENCOUNTERS;
