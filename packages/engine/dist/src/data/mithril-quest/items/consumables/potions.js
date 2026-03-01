// @ts-nocheck
// ============================================================================
// MQ ITEMS — POTIONS (Ultra MQ Engine Format)
// ============================================================================
// Structure avancée (Option C) :
// - stats (heal, mana, buff, resist…)
// - alchemy (tier, reagent, difficulty, duration)
// - metadata (rarity, value, weight, tags)
// - flavor + description
// ============================================================================
// ============================================================================
// 📦 LISTE OFFICIELLE DES POTIONS MQ
// ============================================================================
export const MQ_POTIONS = [
    // ----------------------------------------------------
    // A — POTIONS DE SOINS
    // ----------------------------------------------------
    {
        key: "healing_minor",
        label: "Potion de Soin Mineure",
        flavor: "Un liquide rouge rosé légèrement pétillant.",
        description: "Restaure légèrement les blessures.",
        type: "consumable",
        category: "potion",
        stats: { heal: "1d4+1" },
        alchemy: {
            tier: 1,
            school: "vitalité",
            duration: "instantané",
            difficulty: "easy",
            reagents: ["baies rouges", "poudre claire"]
        },
        metadata: {
            rarity: "common",
            value: 25,
            weight: 0.5,
            tags: ["healing"]
        }
    },
    {
        key: "healing_standard",
        label: "Potion de Soin",
        flavor: "Un liquide rouge profond qui chauffe légèrement la fiole.",
        description: "Restaure une quantité modérée de vitalité.",
        type: "consumable",
        category: "potion",
        stats: { heal: "2d4+2" },
        alchemy: {
            tier: 2,
            school: "vitalité",
            duration: "instantané",
            difficulty: "medium",
            reagents: ["herbes curatives", "essence de vie"]
        },
        metadata: {
            rarity: "common",
            value: 50,
            weight: 0.5,
            tags: ["healing"]
        }
    },
    {
        key: "healing_greater",
        label: "Potion de Soin Supérieure",
        flavor: "La fiole contient un liquide rouge scintillant qui pulse légèrement.",
        description: "Restaure une grande quantité de vitalité.",
        type: "consumable",
        category: "potion",
        stats: { heal: "4d4+4" },
        alchemy: {
            tier: 3,
            school: "vitalité",
            duration: "instantané",
            difficulty: "medium",
            reagents: ["essence de vie concentrée", "pétale d’or"]
        },
        metadata: {
            rarity: "uncommon",
            value: 150,
            weight: 0.5,
            tags: ["healing"]
        }
    },
    // ----------------------------------------------------
    // B — POTIONS DE BOOST TEMPORAIRE
    // ----------------------------------------------------
    {
        key: "potion_strength",
        label: "Potion de Force",
        flavor: "Un mélange épais rouge sombre avec des éclats dorés.",
        description: "Augmente temporairement la force physique.",
        type: "consumable",
        category: "potion",
        stats: { buff: ["strength+2"] },
        alchemy: {
            tier: 2,
            school: "boost",
            duration: "10 minutes",
            difficulty: "medium",
            reagents: ["sang de bœuf alchimique", "racine ferreuse"]
        },
        metadata: {
            rarity: "uncommon",
            value: 200,
            weight: 0.5,
            tags: ["buff", "strength"]
        }
    },
    {
        key: "potion_speed",
        label: "Potion de Rapidité",
        flavor: "Un liquide argenté vibrant qui semble bouger seul.",
        description: "Accroît la vitesse et les réflexes.",
        type: "consumable",
        category: "potion",
        stats: { buff: ["speed+10"] },
        alchemy: {
            tier: 3,
            school: "boost",
            duration: "1 minute",
            difficulty: "hard",
            reagents: ["poudre d’éclair", "eau vive"]
        },
        metadata: {
            rarity: "rare",
            value: 700,
            weight: 0.5,
            tags: ["buff", "speed"]
        }
    },
    // ----------------------------------------------------
    // C — RÉSISTANCES ÉLÉMENTAIRES
    // ----------------------------------------------------
    {
        key: "resist_fire",
        label: "Potion de Résistance au Feu",
        flavor: "Épaisse et rougeoyante comme de la lave refroidie.",
        description: "Protège temporairement contre les brûlures.",
        type: "consumable",
        category: "potion",
        stats: { resist: ["fire"] },
        alchemy: {
            tier: 2,
            school: "élémentaire",
            duration: "10 minutes",
            difficulty: "medium",
            reagents: ["cendre vive", "écaille de salamandre"]
        },
        metadata: {
            rarity: "uncommon",
            value: 90,
            weight: 0.5,
            tags: ["resist", "fire"]
        }
    },
    {
        key: "resist_frost",
        label: "Potion de Résistance au Froid",
        flavor: "Claire avec des fragments de givre flottants.",
        description: "Protège contre les températures glaciales.",
        type: "consumable",
        category: "potion",
        stats: { resist: ["cold"] },
        alchemy: {
            tier: 2,
            school: "élémentaire",
            duration: "10 minutes",
            difficulty: "medium",
            reagents: ["givre pur", "poussière lunaire"]
        },
        metadata: {
            rarity: "uncommon",
            value: 90,
            weight: 0.5,
            tags: ["resist", "cold"]
        }
    },
    // ----------------------------------------------------
    // D — POTIONS SPÉCIALES
    // ----------------------------------------------------
    {
        key: "potion_invisibility",
        label: "Potion d’Invisibilité",
        flavor: "Un liquide totalement transparent.",
        description: "Rend le buveur invisible jusqu'à attaque ou dissipation.",
        type: "consumable",
        category: "potion",
        stats: { special: "invisibility" },
        alchemy: {
            tier: 4,
            school: "spéciale",
            duration: "1 minute",
            difficulty: "hard",
            reagents: ["essence d’ombre", "larmes de spectre"]
        },
        metadata: {
            rarity: "rare",
            value: 800,
            weight: 0.5,
            tags: ["stealth", "magic"]
        }
    },
    {
        key: "giant_strength",
        label: "Potion de Force de Géant",
        flavor: "Un liquide épais doré, presque métallique.",
        description: "Octroie la puissance d’un géant ancestral.",
        type: "consumable",
        category: "potion",
        stats: { buff: ["strength+5"] },
        alchemy: {
            tier: 5,
            school: "mythique",
            duration: "1 minute",
            difficulty: "master",
            reagents: ["moelle de géant", "poussière astrale"]
        },
        metadata: {
            rarity: "legendary",
            value: 2500,
            weight: 0.5,
            tags: ["buff", "legendary"]
        }
    },
    // ----------------------------------------------------
    // E — POTIONS MYTHIQUES
    // ----------------------------------------------------
    {
        key: "potion_astral",
        label: "Potion Astrale",
        flavor: "Un liquide lumineux aux reflets cosmiques.",
        description: "Connecte brièvement le buveur au Plan Astral.",
        type: "consumable",
        category: "potion",
        stats: {
            special: "astral-projection",
            resist: ["psychic"]
        },
        alchemy: {
            tier: 5,
            school: "astral",
            duration: "30 secondes",
            difficulty: "master",
            reagents: ["fragment astral", "essence stellaire"]
        },
        metadata: {
            rarity: "mythic",
            value: 5000,
            weight: 0.5,
            tags: ["mythic", "astral"]
        }
    },
];
