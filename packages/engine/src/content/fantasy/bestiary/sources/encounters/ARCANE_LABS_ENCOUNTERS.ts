import { EncounterTableEntry } from "./types";

export const ARCANE_LABS_ENCOUNTERS: EncounterTableEntry[] = [
  {
    roll: [1, 2],
    monsters: ["mana-wisp"],
    description: "Petits esprits d’énergie brute, résidus d’expériences incomplètes.",
  },
  {
    roll: [3, 4],
    monsters: ["arcane-apparatus"],
    description: "Automate expérimental animé par une conscience magique primitive.",
  },
  {
    roll: [5, 6],
    monsters: ["unstable-homunculus"],
    description: "Créature artificielle dont la forme fluctue, prête à exploser d’énergie.",
  },
  {
    roll: [7, 8],
    monsters: ["glyph-sentinel"],
    description: "Gardiens runiques projetant des rayons de pure magie defensive.",
  },
  {
    roll: [9, 9],
    monsters: ["alchemical-aberration"],
    description: "Mutation imprévisible née d’un mélange interdit de substances mystiques.",
  },
  {
    roll: [10, 10],
    monsters: ["archmagus-echo"],
    description: "Mini-boss : écho spectral d’un ancien archimage, répliquant des sorts majeurs.",
  },
];

export default ARCANE_LABS_ENCOUNTERS;
