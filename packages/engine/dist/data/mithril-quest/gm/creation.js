// lib/s2s/fantasy/gm/creation.ts
export const QUEST_SEEDS = [
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
export const NPC_ARCHETYPES = [
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
