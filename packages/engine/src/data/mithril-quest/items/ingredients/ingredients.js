// @ts-nocheck
// ============================================================================
// MQ ENGINE — INGREDIENTS
// Plantes, essences élémentaires, fragments de monstres, catalysts
// Utilisés en crafting : potions, parchemins, artefacts, buffs, rituels MQ
// ============================================================================
export const MQ_INGREDIENTS = [
    // ========================================================================
    // A — PLANTES
    // ========================================================================
    {
        key: "silverleaf",
        label: "Feuille d’Argent",
        rarity: "common",
        value: 3,
        effects: ["Base potions soins"],
        eras: ["ancient-age"],
        description: "Une herbe brillante utilisée pour de nombreux remèdes.",
    },
    {
        key: "bloodroot",
        label: "Racine-de-Sang",
        rarity: "uncommon",
        value: 12,
        effects: ["Poisons", "Potions agressives"],
        eras: ["age-of-heroes"],
        description: "Une racine rougeâtre aux propriétés instables et dangereuses.",
    },
    // ========================================================================
    // B — ESSENCES ÉLÉMENTAIRES
    // ========================================================================
    {
        key: "essence_fire",
        label: "Essence de Feu",
        rarity: "rare",
        value: 60,
        effects: ["Buff Feu", "Sorts ignés"],
        eras: ["high-kingdoms"],
        description: "Une fiole contenant une braise qui ne s’éteint jamais.",
    },
    {
        key: "essence_frost",
        label: "Essence de Givre",
        rarity: "rare",
        value: 60,
        effects: ["Résistance Froid", "Sorts glacials"],
        eras: ["high-kingdoms"],
        description: "Une essence bleutée qui gèle lentement tout ce qu’elle touche.",
    },
    // ========================================================================
    // C — FRAGMENTS DE MONSTRES
    // ========================================================================
    {
        key: "wyvern_stinger",
        label: "Dard de Wyverne",
        rarity: "rare",
        value: 120,
        effects: ["Poison puissant"],
        eras: ["high-kingdoms"],
        description: "Un dard venimeux extrêmement prisé des alchimistes.",
    },
    {
        key: "troll_flesh",
        label: "Chair de Troll Régénérante",
        rarity: "rare",
        value: 91,
        effects: ["Régénération", "Potions avancées"],
        eras: ["age-of-heroes"],
        description: "Une chair vivante qui tente constamment de se reconstituer.",
    },
    // ========================================================================
    // D — CATALYSTS
    // ========================================================================
    {
        key: "arcane_shard",
        label: "Éclat Arcanique",
        rarity: "very-rare",
        value: 200,
        effects: ["Composant sorts niveau 3+", "Enchantement"],
        eras: ["arcane-renaissance"],
        description: "Un fragment de cristal vibrant d’énergie magique.",
    },
    {
        key: "void_fragment",
        label: "Fragment du Vide",
        rarity: "mythic",
        value: 900,
        effects: ["Catalyseur rituels ténébreux", "Mythic-tier crafting"],
        eras: ["dark-age", "mythic-age"],
        description: "Un éclat de néant cristallisé instable et redoutable.",
    },
];
