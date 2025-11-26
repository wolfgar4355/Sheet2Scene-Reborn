// ingredients.ts — Plantes, champignons, essences, compos, fragments de monstres & catalysts
export const INGREDIENTS = [
    //
    // ─────────────────────────────────────
    //  A — PLANTES
    // ─────────────────────────────────────
    //
    {
        key: "silverleaf",
        label: "Feuille-d’Argent",
        rarity: "common",
        value: 3,
        effects: ["Base potions soins"],
        region: "forêts",
        eras: ["ancient-age"],
        description: "Une herbe brillante souvent utilisée pour les remèdes."
    },
    {
        key: "bloodroot",
        label: "Racine-de-Sang",
        rarity: "uncommon",
        value: 12,
        effects: ["Poisons", "Potions agressives"],
        region: "marais",
        eras: ["age-of-heroes"],
        description: "Une racine rougeâtre aux propriétés dangereuses."
    },
    //
    // ─────────────────────────────────────
    //  B — ESSENCES ÉLÉMENTAIRES
    // ─────────────────────────────────────
    //
    {
        key: "essence_fire",
        label: "Essence de Feu",
        rarity: "rare",
        value: 60,
        effects: ["Buff feu", "Sorts flamboyants"],
        eras: ["high-kingdoms"],
        description: "Une fiole contenant une braise éternelle."
    },
    {
        key: "essence_frost",
        label: "Essence de Givre",
        rarity: "rare",
        value: 60,
        effects: ["Résistance froid", "Sorts glacials"],
        eras: ["high-kingdoms"],
        description: "Une essence gelée refusant de fondre."
    },
    //
    // ─────────────────────────────────────
    //  C — PARTS DE MONSTRES
    // ─────────────────────────────────────
    //
    {
        key: "wyvern_stinger",
        label: "Dard de Wyverne",
        rarity: "rare",
        value: 120,
        effects: ["Poison puissant"],
        eras: ["high-kingdoms"],
        description: "Un dard venimeux extrêmement précieux."
    },
    {
        key: "troll_flesh",
        label: "Chair de Troll Régénérante",
        rarity: "rare",
        value: 90,
        effects: ["Régénération", "Potions avancées"],
        eras: ["age-of-heroes"],
        description: "Un morceau de chair qui se répare toute seule."
    },
    //
    // ─────────────────────────────────────
    //  D — CATALYSTS
    // ─────────────────────────────────────
    //
    {
        key: "arcane_shard",
        label: "Éclat Arcanique",
        rarity: "rare",
        value: 250,
        effects: ["Composant sorts niveau 3+"],
        eras: ["arcane-renaissance"],
        description: "Un cristal vibrant d’énergie magique."
    },
    {
        key: "void_fragment",
        label: "Fragment du Vide",
        rarity: "mythic",
        value: 900,
        effects: ["Catalyseur rituels ténèbres"],
        eras: ["dark-age", "mythic-age"],
        description: "Un morceau de néant cristallisé extrêmement instable."
    }
];
