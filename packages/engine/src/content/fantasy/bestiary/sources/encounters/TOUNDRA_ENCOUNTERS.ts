import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  roll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const TUNDRA_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune arctique
  {
    roll: [1, 10],
    monsters: ["arctic-wolf", "snow-hare"],
    habitat: "frozen-plains",
    difficulty: "easy",
    description: "Des traces fraîches indiquent la présence de bêtes rapides.",
  },

  // 11–20 : Prédateurs du froid
  {
    roll: [11, 20],
    monsters: ["snow-leopard", "ice-bear"],
    habitat: "frosted-cliffs",
    difficulty: "standard",
    description: "Une bête polaire affamée surveille ses proies.",
  },

  // 21–35 : Morts gelés
  {
    roll: [21, 35],
    monsters: ["frozen-corpse", "ice-skeleton"],
    habitat: "snow-ruins",
    difficulty: "standard",
    description: "Des silhouettes figées dans la glace prennent soudain vie.",
  },

  // 36–50 : Élémentaires glacés / vents vivants
  {
    roll: [36, 50],
    monsters: ["frost-elemental", "blizzard-wisp"],
    habitat: "blizzard-zone",
    difficulty: "hard",
    description: "Un vent surnaturel hurle avec une intention meurtrière.",
  },

  // 51–65 : Peuples du nord / tribus froides
  {
    roll: [51, 65],
    monsters: ["ice-goliath", "tundra-hunter"],
    habitat: "wind-plateau",
    difficulty: "hard",
    description: "Une tribu guerrière protège ses territoires gelés.",
  },

  // 66–80 : Géants de givre
  {
    roll: [66, 80],
    monsters: ["frost-giant", "winter-ogre"],
    habitat: "giant-icefields",
    difficulty: "hard",
    description: "Le sol tremble sous les pas d’un géant glacé.",
  },

  // 81–95 : Aberrations arctiques
  {
    roll: [81, 95],
    monsters: ["ice-aberration", "void-frost-spawn"],
    habitat: "glacial-chasm",
    difficulty: "deadly",
    description: "Une fissure glacée laisse filtrer quelque chose… d’impossible.",
  },

  // 96–100 : BOSS RARE
  {
    roll: [96, 100],
    monsters: ["ancient-yeti-king", "frost-wyrm-mythic"],
    habitat: "mythic-glacier",
    difficulty: "deadly",
    description: "Un souffle arctique gèle l’air lui-même autour de vous.",
  },
];
