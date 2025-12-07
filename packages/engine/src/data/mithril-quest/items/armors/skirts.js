// @ts-nocheck
// skirts.ts — Jupes de combat, war-kilts, tabards renforcés, protections segmentées MQ
export const MQ_SKIRTS = [
    //
    // ───────────────────────────────────────────
    //  COMMUNS (10)
    // ───────────────────────────────────────────
    //
    {
        key: "cloth_battle_skirt",
        label: "Jupe de Combat en Tissu",
        rarity: "common",
        armor: 1,
        weight: 1,
        value: 5,
        material: "tissu renforcé",
        properties: ["light"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Un simple tissu renforcé porté par les milices et éclaireurs. Mobilité maximale, protection minimale."
    },
    {
        key: "leather_warkilt",
        label: "Kilt de Guerre en Cuir",
        rarity: "common",
        armor: 2,
        weight: 2,
        value: 10,
        material: "cuir épais",
        properties: ["light"],
        eras: ["age-of-heroes", "dark-age"],
        description: "Kilt en cuir souple porté par les combattants tribaux et les pillards."
    },
    {
        key: "hunter_split_skirt",
        label: "Jupe Fendue de Chasseur",
        rarity: "common",
        armor: 2,
        weight: 1,
        value: 12,
        material: "tissu épais",
        properties: ["quiet", "flexible"],
        eras: ["age-of-heroes"],
        description: "Une jupe fendue permettant des mouvements silencieux pour la chasse ou la traque."
    },
    {
        key: "scout_lamellar_skirt",
        label: "Jupe Lamellaire d’Éclaireur",
        rarity: "common",
        armor: 3,
        weight: 3,
        value: 18,
        material: "lamelles de cuir",
        properties: ["light"],
        eras: ["dark-age", "high-kingdoms"],
        description: "Des lamelles cousues sur un tissu épais, apportant une protection légère."
    },
    {
        key: "militia_plate_skirt",
        label: "Jupe de Plaques de Milice",
        rarity: "common",
        armor: 3,
        weight: 4,
        value: 15,
        material: "fer",
        properties: ["metal"],
        eras: ["dark-age"],
        description: "Plaques rudimentaires fixées sur une base en cuir. Lourd mais robuste."
    },
    {
        key: "desert_winds_skirt",
        label: "Jupe des Vents du Désert",
        rarity: "common",
        armor: 2,
        weight: 1,
        value: 14,
        material: "tissu léger",
        properties: ["heat-resistant"],
        eras: ["age-of-heroes"],
        description: "Aérée et conçue pour les climats arides. Offre fraîcheur et aisance de mouvement."
    },
    {
        key: "fur_warskirt",
        label: "Jupe de Guerre en Fourrure",
        rarity: "common",
        armor: 2,
        weight: 2,
        value: 9,
        material: "fourrure épaisse",
        properties: ["warm"],
        eras: ["ancient-age"],
        description: "Une jupe portée dans les régions nordiques pour une meilleure isolation."
    },
    {
        key: "woodland_kilt",
        label: "Kilt Sylvestre",
        rarity: "common",
        armor: 2,
        weight: 2,
        value: 11,
        material: "tissu + bois léger",
        properties: ["light"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Renforts en bois poli cousus sur un tissu, prisés des peuples forestiers."
    },
    {
        key: "soldier_segmented_skirt",
        label: "Jupe Segmentée du Soldat",
        rarity: "common",
        armor: 3,
        weight: 3,
        value: 17,
        material: "cuir + plaques",
        properties: ["reinforced"],
        eras: ["high-kingdoms"],
        description: "Des segments rigides attachés ensemble pour protéger la hanche sans trop nuire à la mobilité."
    },
    {
        key: "battle_tassets",
        label: "Tassettes de Bataille",
        rarity: "common",
        armor: 3,
        weight: 3,
        value: 16,
        material: "acier",
        properties: ["metal"],
        eras: ["dark-age", "high-kingdoms"],
        description: "Deux plaques métalliques suspendues, couvrant l’avant des cuisses."
    },
    //
    // ───────────────────────────────────────────
    //  RARES (5)
    // ───────────────────────────────────────────
    //
    {
        key: "shadowstep_skirt",
        label: "Jupe Pas-d’Ombre",
        rarity: "rare",
        armor: 4,
        weight: 1,
        value: 260,
        material: "tissu nocturne",
        properties: ["silent-step", "shadow-tuned"],
        eras: ["dark-age", "mythic-age"],
        description: "Absorbe la lumière et étouffe les pas. Parfaite pour assassins et éclaireurs nocturnes."
    },
    {
        key: "stormforged_kilt",
        label: "Kilt Forge-Tempête",
        rarity: "rare",
        armor: 5,
        weight: 3,
        value: 310,
        material: "acier-tempête",
        properties: ["thunder-resist"],
        eras: ["arcane-renaissance"],
        description: "Infusé d’énergie orageuse, il protège contre les chocs électriques et les attaques soniques."
    },
    {
        key: "druidwood_warskirt",
        label: "Jupe Sylvestre Vivante",
        rarity: "rare",
        armor: 4,
        weight: 2,
        value: 280,
        material: "bois vivant",
        properties: ["nature-tuned", "regeneration-lite"],
        eras: ["age-of-heroes", "mythic-age"],
        description: "Le bois réagit subtilement aux attaques, se déplaçant pour protéger son porteur."
    },
    {
        key: "runebound_skirt",
        label: "Jupe Lien-Runes",
        rarity: "rare",
        armor: 5,
        weight: 3,
        value: 350,
        material: "acier runique",
        properties: ["magic-resist"],
        eras: ["high-kingdoms", "arcane-renaissance"],
        description: "Chaque plaque est gravée de glyphes anciens qui dissipent partiellement l’énergie magique."
    },
    {
        key: "astral_wavekilt",
        label: "Kilt Astral",
        rarity: "rare",
        armor: 6,
        weight: 1,
        value: 420,
        material: "métal astral",
        properties: ["radiant-resist", "light"],
        eras: ["mythic-age"],
        description: "Fabriqué à partir d’un alliage astral fluide, il se déforme légèrement pour absorber les coups."
    }
];
