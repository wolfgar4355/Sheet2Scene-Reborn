// @ts-nocheck
import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  roll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const HILLS_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune des collines
  {
    roll: [1, 10],
    monsters: ["hill-ram", "rock-hyena"],
    habitat: "grassy-hills",
    difficulty: "easy",
    description: "De petits troupeaux se déplacent rapidement entre les pierres.",
  },

  // 11–20 : Prédateurs furtifs
  {
    roll: [11, 20],
    monsters: ["hill-panther", "burrow-wolf"],
    habitat: "rock-hollows",
    difficulty: "standard",
    description: "Des silhouettes rapides surgissent entre les rochers.",
  },

  // 21–35 : Outlaws & pillards réfugiés
  {
    roll: [21, 35],
    monsters: ["hill-bandit", "sling-raider"],
    habitat: "bandit-camp",
    difficulty: "standard",
    description: "Un camp sauvage utilise les hauteurs pour surveiller la route.",
  },

  // 36–50 : Esprits druidiques & gardiens de pierre
  {
    roll: [36, 50],
    monsters: ["hill-spirit", "stone-warden"],
    habitat: "druidic-circle",
    difficulty: "hard",
    description: "Les anciennes pierres vibrent d’une puissance oubliée.",
  },

  // 51–65 : Créatures souterraines
  {
    roll: [51, 65],
    monsters: ["tunnel-worm", "cave-horror"],
    habitat: "cave-entrance",
    difficulty: "hard",
    description: "Le sol tremble brièvement… avant de se fissurer.",
  },

  // 66–80 : Géants des collines
  {
    roll: [66, 80],
    monsters: ["hill-giant", "stone-thrasher"],
    habitat: "giant-territory",
    difficulty: "hard",
    description: "La colline elle-même semble se déplacer.",
  },

  // 81–95 : Aberrations rocheuses
  {
    roll: [81, 95],
    monsters: ["void-stone-beast", "crystal-aberration"],
    habitat: "broken-ridge",
    difficulty: "deadly",
    description: "Des cristaux se forment et cliquettent avec une conscience étrange.",
  },

  // 96–100 : BOSS RARE
  {
    roll: [96, 100],
    monsters: ["ancient-stone-colossus", "hill-titan-mythic"],
    habitat: "mythic-cairn",
    difficulty: "deadly",
    description: "Un titan des collines s’éveille sous un tumulus millénaire.",
  },
];
