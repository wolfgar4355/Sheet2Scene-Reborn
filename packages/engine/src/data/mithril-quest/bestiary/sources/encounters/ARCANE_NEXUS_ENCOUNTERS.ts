// @ts-nocheck
import { EncounterTableEntry } from "./types";

export const ARCANE_NEXUS_ENCOUNTERS: EncounterTableEntry[] = [
  {
    roll: [1, 2],
    monsters: ["mana-sprite"],
    description: "Petits esprits de mana attirés par l'excès d'énergie brute."
  },
  {
    roll: [3, 4],
    monsters: ["arcane-wisp"],
    description: "Boules d'essence arcanique flottantes, instables et scintillantes."
  },
  {
    roll: [5, 6],
    monsters: ["nexus-guardian"],
    description: "Golem cristallin chargé de défendre les points d'énergie."
  },
  {
    roll: [7, 8],
    monsters: ["spell-leecher"],
    description: "Créatures voraces absorbant l'énergie magique environnante."
  },
  {
    roll: [9, 9],
    monsters: ["arcane-horrors"],
    description: "Aberrations nées d'expériences magiques ratées."
  },
  {
    roll: [10, 10],
    monsters: ["nexus-avatar"],
    description: "Avatar vivant du Nexus : mini-boss imprévisible et surchargé de puissance."
  }
];

export default ARCANE_NEXUS_ENCOUNTERS;
