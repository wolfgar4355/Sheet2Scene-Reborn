// shields.ts — Boucliers : légers, lourds, pavises, magiques et mythiques
export const SHIELDS = [
    {
        key: "buckler",
        label: "Rondache (Buckler)",
        ac_bonus: 1,
        type: "shield",
        rarity: "common",
        value: 5,
        weight: 2,
        properties: ["light", "strapped"],
        eras: ["age-of-heroes", "high-kingdoms"],
        description: "Un petit bouclier circulaire, facile à manier et conçu pour la mobilité."
    },
    {
        key: "light_shield",
        label: "Bouclier Léger",
        ac_bonus: 2,
        type: "shield",
        rarity: "common",
        value: 10,
        weight: 4,
        properties: ["strapped"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Un bouclier simple en bois ou métal léger, offrant une bonne défense sans gêner les mouvements."
    },
    {
        key: "steel_shield",
        label: "Bouclier d’Acier",
        ac_bonus: 2,
        type: "shield",
        rarity: "uncommon",
        value: 25,
        weight: 6,
        properties: ["strapped", "metal"],
        eras: ["high-kingdoms"],
        description: "Un solide bouclier en acier, efficace contre les projectiles et les frappes lourdes."
    },
    {
        key: "heavy_shield",
        label: "Bouclier Lourd",
        ac_bonus: 3,
        type: "shield",
        rarity: "uncommon",
        value: 50,
        weight: 12,
        properties: ["heavy", "strapped"],
        eras: ["dark-age"],
        description: "Un large bouclier robuste offrant une excellente protection mais limitant la mobilité."
    },
    {
        key: "tower_shield",
        label: "Pavise (Tower Shield)",
        ac_bonus: 4,
        type: "shield",
        rarity: "rare",
        value: 100,
        weight: 20,
        properties: ["heavy", "tower", "cover"],
        eras: ["dark-age"],
        description: "Un immense bouclier permettant de se protéger entièrement, utilisé pour les sièges et escarmouches."
    },
    {
        key: "tribal_hide_shield",
        label: "Bouclier Tribale en Peau",
        ac_bonus: 2,
        type: "shield",
        rarity: "uncommon",
        value: 15,
        weight: 5,
        properties: ["light"],
        eras: ["ancient-age"],
        description: "Fabriqué de peaux épaisses tendues, décoré de peintures de guerre et de symboles tribaux."
    },
    {
        key: "blessed_shield",
        label: "Bouclier Béni",
        ac_bonus: 3,
        type: "shield",
        rarity: "rare",
        value: 250,
        weight: 6,
        properties: ["magic", "radiant"],
        eras: ["high-kingdoms"],
        description: "Un bouclier sacré, bénit par les prêtres, scintillant sous la lumière divine."
    },
    {
        key: "obsidian_guard",
        label: "Garde-Obsidienne",
        ac_bonus: 3,
        type: "shield",
        rarity: "legendary",
        value: 900,
        weight: 8,
        properties: ["magic", "cursed", "dark-resonance"],
        eras: ["dark-age", "mythic-age"],
        description: "Un bouclier sombre taillé dans de l’obsidienne vivante, réputé absorber la lumière."
    },
    {
        key: "celestial_aegis",
        label: "Égide Céleste",
        ac_bonus: 4,
        type: "shield",
        rarity: "legendary",
        value: 1500,
        weight: 7,
        properties: ["magic", "radiant", "floating"],
        eras: ["mythic-age"],
        description: "Un bouclier brillant qui lévite légèrement autour de son porteur comme une protection divine."
    },
    {
        key: "titan_plate_wall",
        label: "Mur de Titan",
        ac_bonus: 5,
        type: "shield",
        rarity: "mythic",
        value: 4000,
        weight: 25,
        properties: ["tower", "two-handed", "magic", "cover"],
        eras: ["mythic-age"],
        description: "Un immense pan de métal sacré forgé par les titans, capable de résister aux attaques des dragons anciens."
    }
];
