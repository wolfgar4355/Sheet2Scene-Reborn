// @ts-nocheck
// thighplates.ts — Protection des cuisses : plaques, renforts tactiques, armures segmentées MQ
export const MQ_THIGHPLATES = [
    //
    // ───────────────────────────────────────────
    //  COMMUNS (10)
    // ───────────────────────────────────────────
    //
    {
        key: "leather_thighguards",
        label: "Garde-Cuisses en Cuir",
        rarity: "common",
        armor: 2,
        weight: 2,
        value: 12,
        material: "cuir",
        properties: ["light"],
        eras: ["age-of-heroes", "dark-age"],
        description: "De simples renforts en cuir épais, offrant une protection correcte sans sacrifier la mobilité."
    },
    {
        key: "padded_thighwraps",
        label: "Bandelettes Matelassées",
        rarity: "common",
        armor: 1,
        weight: 1,
        value: 6,
        material: "tissu matelassé",
        properties: ["padded", "light"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Une couche rembourrée conçue pour absorber partiellement les coups."
    },
    {
        key: "scout_splitguards",
        label: "Garde-Cuisses Fendues de Scout",
        rarity: "common",
        armor: 2,
        weight: 1,
        value: 8,
        material: "tissu renforcé",
        properties: ["light", "flexible"],
        eras: ["age-of-heroes"],
        description: "Des pièces légères séparées en plusieurs panneaux pour maximiser l'agilité."
    },
    {
        key: "militia_ironplates",
        label: "Plaques de Milice",
        rarity: "common",
        armor: 3,
        weight: 4,
        value: 18,
        material: "fer",
        properties: ["metal"],
        eras: ["dark-age"],
        description: "Des plaques basiques utilisées par les soldats de milice, lourdes mais fiables."
    },
    {
        key: "fur_thighwraps",
        label: "Protège-Cuisses en Fourrure",
        rarity: "common",
        armor: 1,
        weight: 2,
        value: 9,
        material: "fourrure",
        properties: ["warm"],
        eras: ["ancient-age", "dark-age"],
        description: "Portés dans les régions froides, ils offrent chaleur et un minimum de protection."
    },
    {
        key: "nomad_sandplates",
        label: "Plaques de Sable Nomades",
        rarity: "common",
        armor: 2,
        weight: 1,
        value: 14,
        material: "cuir léger",
        properties: ["heat-resistant"],
        eras: ["age-of-heroes"],
        description: "Des protections souples adaptées aux climats désertiques."
    },
    {
        key: "archer_split_skirt",
        label: "Jupe Fendue de Tireur",
        rarity: "common",
        armor: 2,
        weight: 1,
        value: 11,
        material: "tissu renforcé",
        properties: ["quiet"],
        eras: ["high-kingdoms"],
        description: "Une jupe fendue renforcée permettant des mouvements fluides pour les archers."
    },
    {
        key: "tribal_thighplates",
        label: "Plaques Tribales",
        rarity: "common",
        armor: 3,
        weight: 3,
        value: 15,
        material: "bois durci",
        properties: ["light"],
        eras: ["ancient-age"],
        description: "Des plaques en bois cérémoniel durci, offrant une résistance surprenante."
    },
    {
        key: "rider_thighpads",
        label: "Protège-Cuisses de Cavalier",
        rarity: "common",
        armor: 2,
        weight: 2,
        value: 13,
        material: "cuir épais",
        properties: ["reinforced"],
        eras: ["high-kingdoms"],
        description: "Renforcés pour résister au frottement constant de la selle."
    },
    {
        key: "battle_lamellar",
        label: "Lamelles de Bataille",
        rarity: "common",
        armor: 3,
        weight: 4,
        value: 20,
        material: "lamelles d'acier",
        properties: ["metal"],
        eras: ["dark-age", "high-kingdoms"],
        description: "Des lamelles métalliques lacées ensemble pour une protection robuste."
    },
    //
    // ───────────────────────────────────────────
    //  RARES (5)
    // ───────────────────────────────────────────
    //
    {
        key: "stormwalk_legplates",
        label: "Plaques Marche-Tempête",
        rarity: "rare",
        armor: 5,
        weight: 4,
        value: 260,
        material: "acier-tempête",
        properties: ["thunder-resist", "reinforced"],
        eras: ["arcane-renaissance"],
        description: "Des plaques infusées d’énergie orageuse, réduisant les chocs électriques subis."
    },
    {
        key: "shadowveil_thighguards",
        label: "Garde-Cuisses Voile-d’Ombre",
        rarity: "rare",
        armor: 4,
        weight: 1,
        value: 240,
        material: "tissu nocturne",
        properties: ["silent-step", "light"],
        eras: ["dark-age", "mythic-age"],
        description: "Forgées dans un tissu absorbant la lumière, parfaites pour les assassins et éclaireurs."
    },
    {
        key: "druid_woodguard",
        label: "Garde-Cuisses Sylvestres",
        rarity: "rare",
        armor: 4,
        weight: 2,
        value: 210,
        material: "bois vivant",
        properties: ["nature-tuned", "regeneration-lite"],
        eras: ["age-of-heroes", "mythic-age"],
        description: "Écorce vivante mouvante, réagissant instinctivement aux attaques."
    },
    {
        key: "runeforged_legplates",
        label: "Plaques Runeforgées",
        rarity: "rare",
        armor: 5,
        weight: 5,
        value: 300,
        material: "acier runique",
        properties: ["magic-resist", "reinforced"],
        eras: ["high-kingdoms", "arcane-renaissance"],
        description: "Des plaques martelées avec des glyphes anciens, offrant une protection magique."
    },
    {
        key: "astral_moonplates",
        label: "Plaques Lunaire-Astrales",
        rarity: "rare",
        armor: 6,
        weight: 2,
        value: 380,
        material: "métal astral",
        properties: ["radiant-resist", "light"],
        eras: ["mythic-age"],
        description: "Forgées à partir de minerai astral infusé de lumière lunaire, incroyablement légères."
    }
];
