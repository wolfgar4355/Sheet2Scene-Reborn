export const MINIONS = [
    /* --------------------------------------------------------- */
    /*                  FIRE WYMLING — CR 3                     */
    /* --------------------------------------------------------- */
    {
        id: "fire-wymling",
        name: "Fire Dragon Wymling",
        cr: 3,
        biomes: ["mountains", "volcano", "caves"],
        habitat: ["lava-nests"],
        category: "dragon",
        role: "skirmisher",
        factions: ["chromatic-dragons"],
        tags: ["flying", "fire"],
        behavior: { aggression: 4, courage: 3 },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["fly-by-breath"]
        stats: {
            hp: 52,
            ac: 16,
            atk: 15,
            dmg: "1d10 + fire breath 15ft",
            speed: "30 ft, fly 60 ft",
        },
        loot: ["dragon-scale-red", "ember-heart"],
        abilities: ["Fire Breath", "Keen Sense"],
    },
    /* --------------------------------------------------------- */
    /*                  FROST WYMLING — CR 2                    */
    /* --------------------------------------------------------- */
    {
        id: "frost-wymling",
        name: "Frost Dragon Wymling",
        cr: 2,
        biomes: ["tundra", "mountains", "glacier"],
        habitat: ["ice-spires"],
        category: "dragon",
        role: "striker",
        factions: ["chromatic-dragons"],
        tags: ["cold", "flying"],
        behavior: { aggression: 3, courage: 3 },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["freeze-then-bite"]
        stats: {
            hp: 45,
            ac: 15,
            atk: 14,
            dmg: "1d8 + frost breath 30ft",
            speed: "30 ft, fly 50 ft",
        },
        loot: ["dragon-scale-blue"],
        abilities: ["Cold Breath", "Ice Glide"],
    },
    /* --------------------------------------------------------- */
    /*                YOUNG EARTH DRAGON — CR 7                 */
    /* --------------------------------------------------------- */
    {
        id: "young-earth-dragon",
        name: "Young Earth Dragon",
        cr: 7,
        biomes: ["desert", "mountain", "underground"],
        habitat: ["titan-caverns", "stone-labyrinths"],
        category: "dragon",
        role: "bruiser",
        factions: ["primordial-dragons"],
        tags: ["earth", "burrow"],
        behavior: { aggression: 4, courage: 4 },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["tunnel-ambush"]
        stats: {
            hp: 136,
            ac: 18,
            atk: 19,
            dmg: "2d10+5 earth breath 60ft",
            speed: "40 ft, burrow 70 ft",
        },
        loot: ["earth-gem", "dragon-tooth"],
        abilities: ["Earth Breath", "Tremor Step"],
    },
    /* --------------------------------------------------------- */
    /*                YOUNG STORM DRAGON — CR 10                */
    /* --------------------------------------------------------- */
    {
        id: "young-storm-dragon",
        name: "Young Storm Dragon",
        cr: 10,
        biomes: ["coast", "mountains", "sky"],
        habitat: ["storm-cliffs", "thunder-reefs"],
        category: "dragon",
        role: "controller",
        factions: ["primordial-dragons"],
        tags: ["lightning", "flying"],
        behavior: { aggression: 4, courage: 5 },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["aoe-burst-then-fly-high"]
        stats: {
            hp: 150,
            ac: 20,
            atk: 20,
            dmg: "2d12 + lightning breath 100ft",
            speed: "45 ft, fly 80 ft",
        },
        loot: ["storm-core"],
        abilities: ["Lightning Breath", "Storm Call", "Wing Buffet"],
    },
    /* --------------------------------------------------------- */
    /*                ADULT SHADOW DRAGON — CR 15               */
    /* --------------------------------------------------------- */
    {
        id: "adult-shadow-dragon",
        name: "Adult Shadow Dragon",
        cr: 15,
        biomes: ["shadowlands", "underdark", "ancient-ruins"],
        habitat: ["abyssal-chasms", "eternal-gloom"],
        category: "dragon",
        role: "predator",
        factions: ["umbral-flight"],
        tags: ["shadow", "fear"],
        behavior: { aggression: 5, courage: 5 },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["darken-arena-then-devour"]
        stats: {
            hp: 265,
            ac: 21,
            atk: 23,
            dmg: "2d12 + shadow breath (120ft necrotic)",
            speed: "40 ft, fly 80 ft",
        },
        loot: ["shadow-scale", "ancient-shadow-core"],
        abilities: ["Shadow Breath", "Dark Aura", "Frightful Presence"],
    },
    /* --------------------------------------------------------- */
    /*          PROTO-ANCIENT CELESTIAL DRAGON — CR 20          */
    /* --------------------------------------------------------- */
    {
        id: "celestial-dragon-proto",
        name: "Proto-Ancient Celestial Dragon",
        cr: 20,
        biomes: ["celestial-realms", "sky", "sacred-mountains"],
        habitat: ["light-altars", "astral-thrones"],
        category: "dragon",
        role: "legendary",
        factions: ["astral-dragons"],
        tags: ["radiant", "flying", "legendary"],
        behavior: { aggression: 3, courage: 7 },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["holy-awe-battle"]
        stats: {
            hp: 330,
            ac: 23,
            atk: 27,
            dmg: "3d12 radiant / radiant breath 160ft",
            speed: "45 ft, fly 120 ft",
        },
        loot: ["celestial-essence", "dragon-halo-crystal"],
        abilities: [
            "Radiant Breath",
            "Heavenly Transcendence",
            "Holy Restoration",
            "Blinding Roar"
        ],
    },
];
export default MINIONS;
