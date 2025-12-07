// @ts-nocheck
// tools.ts — Outils, kits, instruments, artisanats, matériel magique & spécial
export const TOOLS = [
    //
    // ─────────────────────────────────────────────
    //  A — ARTISAN TOOLS (Outils d’artisan)
    // ─────────────────────────────────────────────
    //
    {
        key: "smith_tools",
        label: "Outils de Forgeron",
        rarity: "common",
        value: 20,
        category: "artisan",
        effects: ["Permet de forger et réparer armes/armures"],
        eras: ["ancient-age", "age-of-heroes", "high-kingdoms"],
        description: "Un ensemble de marteaux, tenailles et limes pour la forge."
    },
    {
        key: "carpenter_tools",
        label: "Outils de Charpentier",
        rarity: "common",
        value: 15,
        category: "artisan",
        effects: ["Construction de structures simples"],
        eras: ["ancient-age", "age-of-heroes"],
        description: "Outils essentiels pour façonner le bois."
    },
    {
        key: "alchemist_supplies",
        label: "Fournitures d’Alchimiste",
        rarity: "uncommon",
        value: 50,
        category: "artisan",
        effects: ["Permet de fabriquer potions, huiles et acides"],
        eras: ["age-of-heroes", "high-kingdoms"],
        description: "Cornues, fioles, brûleurs et composants alchimiques."
    },
    {
        key: "leatherworker_tools",
        label: "Outils de Tanneur",
        rarity: "common",
        value: 5,
        category: "artisan",
        effects: ["Fabrication d’armures en cuir"],
        eras: ["ancient-age"],
        description: "Outils pour travailler le cuir."
    },
    //
    // ─────────────────────────────────────────────
    //  B — CRIMINAL TOOLS (Outils criminels)
    // ─────────────────────────────────────────────
    //
    {
        key: "thieves_tools",
        label: "Outils de Voleur",
        rarity: "uncommon",
        value: 25,
        category: "criminal",
        effects: ["Permet de crocheter serrures et pièges"],
        eras: ["dark-age", "high-kingdoms"],
        description: "Crochets, lames fines et outils de précision."
    },
    {
        key: "poison_kit",
        label: "Kit à Poisons",
        rarity: "rare",
        value: 150,
        category: "criminal",
        effects: ["Création et application de poisons"],
        eras: ["dark-age"],
        description: "Substances toxiques, aiguilles, gants épais."
    },
    {
        key: "shadow_cloakkit",
        label: "Kit de Dissimulation Nocturne",
        rarity: "rare",
        value: 200,
        category: "criminal",
        effects: ["Camouflage urbain", "Faux papiers", "Accessoires d’espion"],
        eras: ["dark-age"],
        description: "Un kit complet pour opérer dans l’ombre."
    },
    //
    // ─────────────────────────────────────────────
    //  C — EXPLORATION & SURVIVAL
    // ─────────────────────────────────────────────
    //
    {
        key: "herbalism_kit",
        label: "Kit d’Herboriste",
        rarity: "uncommon",
        value: 20,
        category: "survival",
        effects: ["Potions simples", "Antidotes", "Baumes naturels"],
        eras: ["age-of-heroes"],
        description: "Sachets de plantes, mortier et pestle."
    },
    {
        key: "navigator_tools",
        label: "Outils de Navigateur",
        rarity: "uncommon",
        value: 25,
        category: "exploration",
        effects: ["Navigation maritime ou terrestre"],
        eras: ["age-of-heroes", "high-kingdoms"],
        description: "Boussole, sextant, cartes et compas."
    },
    {
        key: "cartographer_tools",
        label: "Outils de Cartographe",
        rarity: "uncommon",
        value: 20,
        category: "exploration",
        effects: ["Créer cartes précises", "Analyser géographie"],
        eras: ["high-kingdoms"],
        description: "Plumes, encres, calque, gabarits."
    },
    //
    // ─────────────────────────────────────────────
    //  D — MUSIC & PERFORMANCE (Instruments)
    // ─────────────────────────────────────────────
    //
    {
        key: "flute",
        label: "Flûte",
        rarity: "common",
        value: 2,
        category: "instrument",
        effects: ["Performances", "Soutien bardique"],
        eras: ["ancient-age"],
        description: "Une flûte simple taillée dans du bois."
    },
    {
        key: "lute",
        label: "Luth",
        rarity: "uncommon",
        value: 35,
        category: "instrument",
        effects: ["Performances", "Sorts bardiques"],
        eras: ["high-kingdoms"],
        description: "Un luth de qualité, parfait pour les bardes."
    },
    {
        key: "drum",
        label: "Tambour Tribal",
        rarity: "common",
        value: 6,
        category: "instrument",
        effects: ["Rythmes de guerre", "Intimidation légère"],
        eras: ["ancient-age"],
        description: "Un tambour rituel fait de peaux tendues."
    },
    //
    // ─────────────────────────────────────────────
    //  E — MAGIC TOOLS (outils magiques)
    // ─────────────────────────────────────────────
    //
    {
        key: "scribe_kit",
        label: "Kit de Scribe Arcanique",
        rarity: "rare",
        value: 200,
        category: "magic",
        effects: ["Copie de sorts", "Analyse runique"],
        eras: ["arcane-renaissance"],
        description: "Encres enchantées, plumes d’énergie, parchemins purifiés."
    },
    {
        key: "ritual_focus",
        label: "Focaliseur de Rituel",
        rarity: "uncommon",
        value: 50,
        category: "magic",
        effects: ["Stabilité de rituels", "Bonus d’incantation"],
        eras: ["age-of-heroes"],
        description: "Un artefact focalisant l’énergie magique."
    },
    {
        key: "druid_seedpouch",
        label: "Bourse à Graines Druidique",
        rarity: "rare",
        value: 120,
        category: "magic",
        effects: ["Sorts naturels renforcés", "Croissance accélérée"],
        eras: ["age-of-heroes"],
        description: "Un petit sac rempli de graines sacrées."
    },
    //
    // ─────────────────────────────────────────────
    //  F — TECH & GNOME TOOLS (outils avancés)
    // ─────────────────────────────────────────────
    //
    {
        key: "gnome_toolkit",
        label: "Kit d’Ingénieur Gnome",
        rarity: "rare",
        value: 300,
        category: "tech",
        effects: ["Réparer machineries", "Créer gadgets"],
        eras: ["arcane-renaissance"],
        description: "Un chaos organisé de tournevis, engrenages et fioles d’énergie."
    },
    {
        key: "spark_lens",
        label: "Lentille d’Étincelle",
        rarity: "rare",
        value: 180,
        category: "tech",
        effects: ["Analyse magique", "Vision spectrale"],
        eras: ["arcane-renaissance"],
        description: "Un monocle mécanique permettant de voir les flux d’énergie."
    },
    //
    // ─────────────────────────────────────────────
    //  G — RELICS & SPECIAL KITS
    // ─────────────────────────────────────────────
    //
    {
        key: "holy_reliquary",
        label: "Reliquaire Sacré",
        rarity: "legendary",
        value: 900,
        category: "relic",
        effects: ["Bonus channel divin", "Repousser morts-vivants"],
        eras: ["high-kingdoms", "mythic-age"],
        description: "Un reliquaire contenant des fragments sacrés."
    },
    {
        key: "void_compass",
        label: "Boussole du Vide",
        rarity: "mythic",
        value: 4000,
        category: "relic",
        effects: ["Indique failles", "Détecte magie noire", "Navigation planaire"],
        eras: ["dark-age", "mythic-age"],
        description: "Une boussole instable pointant vers les anomalies du Néant."
    }
];
