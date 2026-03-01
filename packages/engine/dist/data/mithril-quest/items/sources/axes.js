// @ts-nocheck
// axes.ts — Haches MQ Engine : simples, martiales, tribales, runiques & mythiques
export const MQ_AXES = [
    // ───────────────────────────────
    //  A — AXES SIMPLES
    // ───────────────────────────────
    {
        key: "handaxe",
        label: "Hachette",
        damage: { dice: "1d6", type: "slashing" },
        weapon_type: "simple",
        weapon_style: "axe",
        rarity: "common",
        value: 5,
        weight: 2,
        properties: ["light", "thrown"],
        thrown_range: "20/60",
        eras: ["ancient-age", "age-of-heroes", "dark-age", "high-kingdoms"],
        description: "Une petite hache maniable, utilisée autant comme outil que comme arme."
    },
    {
        key: "tribal_bone_axe",
        label: "Hache Tribale en Os",
        damage: { dice: "1d8", type: "slashing" },
        weapon_type: "simple",
        weapon_style: "axe",
        rarity: "uncommon",
        value: 8,
        weight: 5,
        properties: [],
        eras: ["ancient-age"],
        description: "Une hache primitive façonnée à partir d’os massifs et décorée de symboles rituels."
    },
    // ───────────────────────────────
    //  B — AXES MARTIALES
    // ───────────────────────────────
    {
        key: "battleaxe",
        label: "Hache de Bataille",
        damage: { dice: "1d8", type: "slashing" },
        weapon_type: "martial",
        weapon_style: "axe",
        rarity: "common",
        value: 10,
        weight: 4,
        properties: ["versatile"],
        versatile_damage: "1d10",
        eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
        description: "L’arme favorite des guerriers nains, robuste et capable de couper métal et os."
    },
    {
        key: "great_axe",
        label: "Grande Hache",
        damage: { dice: "1d12", type: "slashing" },
        weapon_type: "martial",
        weapon_style: "axe",
        rarity: "common",
        value: 30,
        weight: 7,
        properties: ["two-handed", "heavy"],
        eras: ["dark-age", "high-kingdoms"],
        description: "Une immense hache à deux mains capable d'abattre un ennemi d'un seul coup puissant."
    },
    {
        key: "double_axe",
        label: "Hache Double",
        damage: { dice: "1d10", type: "slashing" },
        weapon_type: "martial",
        weapon_style: "axe",
        rarity: "uncommon",
        value: 45,
        weight: 6,
        properties: ["two-handed", "heavy"],
        eras: ["age-of-heroes", "high-kingdoms"],
        description: "Deux lames opposées pour des attaques circulaires dévastatrices."
    },
    {
        key: "barbarian_cleaver",
        label: "Coupe-Guerre Barbare",
        damage: { dice: "1d10", type: "slashing" },
        weapon_type: "martial",
        weapon_style: "axe",
        rarity: "uncommon",
        value: 35,
        weight: 6,
        properties: ["heavy"],
        eras: ["dark-age"],
        description: "Une hache brutale, grossièrement forgée, qui sacrifie précision pour une violence extrême."
    },
    {
        key: "dwarven_waraxe",
        label: "Hache Guerrière Naine",
        damage: { dice: "1d10", type: "slashing" },
        weapon_type: "martial",
        weapon_style: "axe",
        rarity: "rare",
        value: 60,
        weight: 6,
        properties: ["versatile"],
        versatile_damage: "1d12",
        eras: ["high-kingdoms", "arcane-renaissance"],
        description: "Chef-d'œuvre de forge naine, parfaitement équilibrée et décorée de motifs anciens."
    },
    // ───────────────────────────────
    //  C — AXES MAGIQUES
    // ───────────────────────────────
    {
        key: "frostbite_axe",
        label: "Hache Morsure-de-Givre",
        damage: { dice: "1d10", type: "slashing" },
        weapon_type: "martial",
        weapon_style: "axe",
        rarity: "rare",
        value: 120,
        weight: 6,
        properties: ["magic", "cold"],
        eras: ["high-kingdoms", "mythic-age"],
        description: "Forgée dans les glaces éternelles, elle laisse un sillage givré après chaque coup."
    },
    {
        key: "inferno_cleaver",
        label: "Fendoir Infernal",
        damage: { dice: "1d12", type: "slashing" },
        weapon_type: "martial",
        weapon_style: "axe",
        rarity: "legendary",
        value: 750,
        weight: 7,
        properties: ["magic", "flaming"],
        eras: ["dark-age", "mythic-age"],
        description: "Une arme consumée par des flammes démoniaques, brûlant tout sur son passage."
    },
    // ───────────────────────────────
    //  D — AXES MYTHIQUES
    // ───────────────────────────────
    {
        key: "titanbreaker",
        label: "Brise-Titan",
        damage: { dice: "2d8", type: "slashing" },
        weapon_type: "martial",
        weapon_style: "axe",
        rarity: "mythic",
        value: 2000,
        weight: 12,
        properties: ["magic", "heavy", "two-handed"],
        eras: ["mythic-age"],
        description: "Une hache colossale capable de trancher les membres d'un titan ou de fendre un dragon antique."
    }
];
