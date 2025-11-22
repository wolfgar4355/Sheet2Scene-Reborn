import { EncounterTableEntry } from "./types";

export const OVERGROWN_TEMPLE_ENCOUNTERS: EncounterTableEntry[] = [
  {
    roll: [1, 2],
    monsters: ["vine-stalker"],
    description: "Lianes vivantes traquant silencieusement tout intrus dans les ruines.",
  },
  {
    roll: [3, 4],
    monsters: ["stonebloom-guardian"],
    description: "Statue florale animée, protectrice des anciens sanctuaires.",
  },
  {
    roll: [5, 6],
    monsters: ["fern-wraith"],
    description: "Esprit végétal apparaissant dans un nuage de spores luminescentes.",
  },
  {
    roll: [7, 8],
    monsters: ["ancient-root-horror"],
    description: "Racines géantes fusionnées avec un esprit ancien, contrôlant le terrain.",
  },
  {
    roll: [9, 9],
    monsters: ["jade-idol-avatar"],
    description: "Avatar d'une idole en jade, éveillée par la corruption ou un intrus.",
  },
  {
    roll: [10, 10],
    monsters: ["temple-heart-guardian"],
    description: "Mini-boss : Gardien primordial fait de pierre, de lianes et de magie ancienne.",
  },
];

export default OVERGROWN_TEMPLE_ENCOUNTERS;
