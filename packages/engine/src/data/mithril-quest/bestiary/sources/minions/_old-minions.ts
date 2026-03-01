// @ts-nocheck
import { MonsterDefinition } from "./categories";

export const FANTASY_MINIONS: MonsterDefinition[] = [
  {
    key: "shadow-minion",
    label: "Sbire Ombreux",
    type: "fiend",
    size: "medium",
    challenge: 1,
    habitat: ["domaines d’ombres"],
    statBlock: {
      hitPoints: 9,
      armorClass: 11,
      speed: 30,
      abilities: { str: 8, dex: 14, con: 10, int: 4, wis: 6, cha: 6 },
      attacks: [
        {
          key: "claws",
          label: "Griffes",
          toHit: 4,
          damage: "1d4+2 nécrotique",
          type: "necrotic",
        },
      ],
    },
    lootTable: ["fragment sombre"],
  },
];
