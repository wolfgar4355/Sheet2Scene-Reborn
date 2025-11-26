import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  roll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const SWAMP_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune du marais
  {
    roll: [1, 10],
    monsters: ["giant-frog", "swamp-snake"],
    habitat: "wet-bogs",
    difficulty: "easy",
    description: "Des créatures communes mais nombreuses et imprévisibles.",
  },

  // 11–20 : Nuées + parasites marécageux
  {
    roll: [11, 20],
    monsters: ["mosquito-swarm", "rotflies"],
    habitat: "insect-nest",
    difficulty: "standard",
    description: "Des nuées affamées attirées par la chaleur et le mouvement.",
  },

  // 21–35 : Mort-vivants du marais
  {
    roll: [21, 35],
    monsters: ["drowned-zombie", "bog-skeleton"],
    habitat: "sunken-graves",
    difficulty: "standard",
    description: "Des corps préservés dans la vase émergent lentement.",
  },

  // 36–50 : Bêtes mutantes / fongiques
  {
    roll: [36, 50],
    monsters: ["fungal-horror", "spore-beast"],
    habitat: "mycelium-zone",
    difficulty: "hard",
    description: "Des spores flottent… et quelque chose bouge sous la surface.",
  },

  // 51–65 : Sorcières et esprits du marais
  {
    roll: [51, 65],
    monsters: ["swamp-witch", "willow-wraith"],
    habitat: "haunted-mire",
    difficulty: "hard",
    description: "Une magie ancienne flotte dans les airs, presque étouffante.",
  },

  // 66–80 : Colosses amphibies + créatures géantes
  {
    roll: [66, 80],
    monsters: ["marsh-ogre", "giant-crocodile"],
    habitat: "deep-mangrove",
    difficulty: "hard",
    description: "Les arbres tremblent sous le poids d'un monstre amphibie.",
  },

  // 81–95 : Aberrations des eaux noires
  {
    roll: [81, 95],
    monsters: ["void-leech", "deep-swamp-aberration"],
    habitat: "black-water",
    difficulty: "deadly",
    description: "L’eau noire se déchire… quelque chose sort en silence.",
  },

  // 96–100 : BOSS RARE
  {
    roll: [96, 100],
    monsters: ["ancient-hydra", "rot-mire-mythic-witch"],
    habitat: "mythic-swamp-heart",
    difficulty: "deadly",
    description: "Un cœur de marais vivant qui bat sous vos pieds.",
  },
];
