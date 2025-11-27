export const MINIONS = [
    /* ------------------------------------------------------------ */
    /* WOLF-FANG RAGER — CR 2 (base werewolf)                       */
    /* ------------------------------------------------------------ */
    {
        id: "wolf-fang-rager",
        name: "Wolf-Fang Rager",
        cr: 2,
        biomes: ["forest", "hills", "tundra"],
        habitat: ["frozen-camps", "wolf-dens"],
        category: "lycanthrope",
        role: "brute",
        factions: ["feral-packs", "moon-blood"],
        tags: ["rage", "shifter"],
        behavior: {
            aggression: 6,
            courage: 4,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["charge-and-maul"]
        stats: {
            hp: 35,
            ac: 13,
            atk: 5,
            dmg: "2d6+3 slashing",
            speed: "40 ft",
        },
        loot: ["wolf-pelt"],
        abilities: ["Shapeshift", "Rage Bite"],
    },
    /* ------------------------------------------------------------ */
    /* WEREBOAR BERSERKER — CR 3                                    */
    /* ------------------------------------------------------------ */
    {
        id: "wereboar-berserker",
        name: "Wereboar Berserker",
        cr: 3,
        biomes: ["forest", "mountains"],
        habitat: ["boar-camps", "hidden-boar-pits"],
        category: "lycanthrope",
        role: "brute",
        factions: ["feral-packs"],
        tags: ["boar-form", "thick-hide"],
        behavior: {
            aggression: 7,
            courage: 5,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["reckless-charge"]
        stats: {
            hp: 45,
            ac: 14,
            atk: 6,
            dmg: "2d8+4 piercing",
            speed: "40 ft",
        },
        loot: ["boar-hide", "sharp-tusk"],
        abilities: ["Boar Charge", "Thick Hide"],
    },
    /* ------------------------------------------------------------ */
    /* WERE-TIGER STALKER — CR 4                                    */
    /* ------------------------------------------------------------ */
    {
        id: "weretiger-stalker",
        name: "Weretiger Stalker",
        cr: 4,
        biomes: ["jungle", "forest"],
        habitat: ["jungle-shrines", "jungle-ruins"],
        category: "lycanthrope",
        role: "skirmisher",
        factions: ["shadow-howlers"],
        tags: ["stealth", "pounce"],
        behavior: {
            aggression: 5,
            courage: 5,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["pounce-from-shadow"]
        stats: {
            hp: 58,
            ac: 16,
            atk: 7,
            dmg: "2d6 slashing",
            speed: "40 ft, climb 20 ft",
        },
        loot: ["striped-fang"],
        abilities: ["Pouncedown", "Shadow Step"],
    },
    /* ------------------------------------------------------------ */
    /* WEREBEAR GUARDIAN — CR 6                                     */
    /* ------------------------------------------------------------ */
    {
        id: "werebear-guardian",
        name: "Werebear Guardian",
        cr: 6,
        biomes: ["forest", "mountains"],
        habitat: ["ancient-groves"],
        category: "lycanthrope",
        role: "protector",
        factions: ["warden-clan"],
        tags: ["guardian", "regeneration"],
        behavior: {
            aggression: 3,
            courage: 10,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["defend-pack"]
        stats: {
            hp: 92,
            ac: 15,
            atk: 8,
            dmg: "2d10+5 bludgeoning",
            speed: "30 ft",
        },
        loot: ["bear-hide", "guardian-emblem"],
        abilities: ["Regeneration", "Bear Roar", "Guardian Shield"],
    },
    /* ------------------------------------------------------------ */
    /* ALPHA LYCAN LORD — CR 11 (Boss)                              */
    /* ------------------------------------------------------------ */
    {
        id: "alpha-lycan-lord",
        name: "Alpha Lycan Lord",
        cr: 11,
        biomes: ["forest", "tundra", "shadowlands"],
        habitat: ["alpha-lairs"],
        category: "lycanthrope",
        role: "alpha-controller",
        factions: ["alpha-dominion", "moon-blood"],
        tags: ["alpha", "command", "shifter"],
        behavior: {
            aggression: 9,
            courage: 10,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["roar-to-buff-pack-then-rip"]
        stats: {
            hp: 210,
            ac: 18,
            atk: 12,
            dmg: "3d12+6 slashing",
            speed: "50 ft",
        },
        loot: ["alpha-fang", "moon-blade"],
        abilities: [
            "Alpha Roar",
            "Aura of Command",
            "Pack Resurrection",
            "Pack Rally"
        ],
    },
];
export default MINIONS;
