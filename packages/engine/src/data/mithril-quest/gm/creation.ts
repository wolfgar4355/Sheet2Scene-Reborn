// @ts-nocheck
// lib/s2s/fantasy/gm/creation.ts

export interface QuestSeed {
  key: string;
  description: string;
  complications?: string[];
  rewards?: string[];
}

export const QUEST_SEEDS: QuestSeed[] = [
  {
    key: "missing-villagers",
    description: "Des villageois ont disparu près d'une ancienne ruine.",
    complications: [
      "Présence d'un culte ancien",
      "Failles magiques instables",
    ],
    rewards: ["objet magique mineur", "reconnaissance du village"],
  },
  {
    key: "beast-attack",
    description: "Une bête féroce terrorise les routes.",
    complications: ["la bête est corrompue", "une bande de voleurs profite du chaos"],
    rewards: ["armes", "or", "informations secrètes"],
  },
];

export interface NPCArchetype {
  key: string;
  label: string;
  role: string; // marchand, mentor, bandit, etc.
  attitude: string[];
}

export const NPC_ARCHETYPES: NPCArchetype[] = [
  {
    key: "merchant",
    label: "Marchand",
    role: "commerce & objets",
    attitude: ["amical", "neutre", "méfiant"],
  },
  {
    key: "mystic-sage",
    label: "Sage Mystique",
    role: "connaissance & magie",
    attitude: ["énigmatique", "paternel"],
  },
];
