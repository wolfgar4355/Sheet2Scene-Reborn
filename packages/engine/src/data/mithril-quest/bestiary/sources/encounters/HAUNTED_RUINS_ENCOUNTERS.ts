// @ts-nocheck
import { EncounterTableEntry } from "./types";

export const HAUNTED_RUINS_ENCOUNTERS: EncounterTableEntry[] = [
  {
    roll: [1, 2],
    monsters: ["restless-spirit"],
    description: "Esprits agités murmurant des fragments de leur ancienne vie.",
  },
  {
    roll: [3, 4],
    monsters: ["hauntbound-soldier"],
    description: "Soldats spectralisés liés aux ruines par une ancienne malédiction.",
  },
  {
    roll: [5, 6],
    monsters: ["cursed-echo"],
    description: "Manifestations sonores prenant forme et attaquant les vivants.",
  },
  {
    roll: [7, 8],
    monsters: ["wailing-apparition"],
    description: "Spectres lugubres dont les hurlements traversent la pierre.",
  },
  {
    roll: [9, 9],
    monsters: ["ectoplasmic-conjurer"],
    description: "Un conjurateur d’ectoplasme capable d’animer les débris et statues.",
  },
  {
    roll: [10, 10],
    monsters: ["dread-wraith-ancient"],
    description: "Mini-boss : Ancienne entité maudite, absorbant chaleur et lumière autour d’elle.",
  },
];

export default HAUNTED_RUINS_ENCOUNTERS;
