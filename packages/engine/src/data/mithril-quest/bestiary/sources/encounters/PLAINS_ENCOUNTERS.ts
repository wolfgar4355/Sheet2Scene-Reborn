// @ts-nocheck
import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  roll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const PLAINS_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune commune
  {
    roll: [1, 10],
    monsters: ["wild-horses", "antelopes"],
    habitat: "open-field",
    difficulty: "easy",
    description: "Un troupeau nerveux traverse les plaines.",
  },

  // 11–20 : Prédateurs rapides
  {
    roll: [11, 20],
    monsters: ["plains-wolf", "steppe-lion"],
    habitat: "grass-hollows",
    difficulty: "standard",
    description: "Des chasseurs agiles utilisent les herbes hautes comme couverture.",
  },

  // 21–35 : Bandits + maraudeurs des routes
  {
    roll: [21, 35],
    monsters: ["road-bandit", "horse-raiders"],
    habitat: "trade-route",
    difficulty: "standard",
    description: "Des voleurs montés à cheval, rapides et organisés.",
  },

  // 36–50 : Horreurs des tempêtes
  {
    roll: [36, 50],
    monsters: ["dust-wraith", "thunder-beast"],
    habitat: "stormfront",
    difficulty: "hard",
    description: "Une tempête approche… mais elle semble vivante.",
  },

  // 51–65 : Géants errants
  {
    roll: [51, 65],
    monsters: ["hill-giant", "steppe-colossus"],
    habitat: "wide-hills",
    difficulty: "hard",
    description: "Les collines chantent sous les pas d’un géant.",
  },

  // 66–80 : Cavaliers mythiques
  {
    roll: [66, 80],
    monsters: ["ghost-rider", "wind-knight"],
    habitat: "ancient-road",
    difficulty: "hard",
    description: "Les sabots résonnent mais aucun cheval ne touche le sol.",
  },

  // 81–95 : Esprits du vent + anomalies
  {
    roll: [81, 95],
    monsters: ["wind-elemental", "sky-anomaly"],
    habitat: "wind-rift",
    difficulty: "deadly",
    description: "L’air se déchire dans un sifflement aigu.",
  },

  // 96–100 : BOSS RARE
  {
    roll: [96, 100],
    monsters: ["thunder-colossus", "eternal-rider-mythic"],
    habitat: "mythic-steppe",
    difficulty: "deadly",
    description: "Une tempête a une volonté… et elle charge vers vous.",
  },
];
