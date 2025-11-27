export const MINIONS = [
    /* ------------------------------------------------------------ */
    /* SWARM OF STINGFLIES — CR 1/2 */
    /* ------------------------------------------------------------ */
    {
        id: "stingfly-swarm",
        name: "Swarm of Stingflies",
        cr: 0.5,
        biomes: ["forest", "swamp", "jungle"],
        habitat: ["canopies", "rotting-logs"],
        category: "swarm",
        role: "skirmisher",
        tags: ["flying", "poison", "insects"],
        factions: ["Swarmbrood"],
        behavior: {
            aggression: 5,
            courage: 2,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["surround-and-sting"]
        stats: {
            hp: 22,
            ac: 12,
            atk: 12,
            dmg: "2d4 piercing + poison",
            speed: "10 ft, fly 40 ft",
        },
        loot: ["poison-sacs"],
        abilities: ["Poison Cloud", "Scatter Movement"],
    },
    /* ------------------------------------------------------------ */
    /* SCARAB SWARM — CR 1 */
    /* ------------------------------------------------------------ */
    {
        id: "scarab-swarm",
        name: "Scarab Swarm",
        cr: 1,
        biomes: ["desert", "ruins", "crypt"],
        habitat: ["catacombs", "sand-burrows"],
        category: "swarm",
        role: "bruiser",
        tags: ["burrow", "devour"],
        factions: ["Sandcoil Legion"],
        behavior: {
            aggression: 6,
            courage: 4,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["swarm-the-softest-target"]
        stats: {
            hp: 36,
            ac: 14,
            atk: 15,
            dmg: "2d6 piercing",
            speed: "20 ft, burrow 10 ft",
        },
        loot: ["scarab-carapace"],
        abilities: ["Corpse Devour", "Sand Burrow"],
    },
    /* ------------------------------------------------------------ */
    /* SPIDER SWARM — CR 2 */
    /* ------------------------------------------------------------ */
    {
        id: "spider-swarm",
        name: "Spider Swarm",
        cr: 2,
        biomes: ["forest", "swamp", "underdark"],
        habitat: ["web-pits", "dark-tunnels"],
        category: "swarm",
        role: "controller",
        tags: ["poison", "webs"],
        factions: ["Broodweavers"],
        behavior: {
            aggression: 4,
            courage: 3,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["web-then-overwhelm"]
        stats: {
            hp: 45,
            ac: 15,
            atk: 14,
            dmg: "2d6 piercing + poison",
            speed: "20 ft, climb 30 ft",
        },
        loot: ["venom-gland"],
        abilities: ["Web Spray", "Climb"],
    },
    /* ------------------------------------------------------------ */
    /* FIREFLY SWARM (LUMINOUS) — CR 3 */
    /* ------------------------------------------------------------ */
    {
        id: "firefly-swarm",
        name: "Luminous Firefly Swarm",
        cr: 3,
        biomes: ["forest", "meadow", "feywild"],
        habitat: ["groves", "glades"],
        category: "swarm",
        role: "support",
        tags: ["light", "vision", "fey"],
        factions: ["Gleamhost"],
        behavior: {
            aggression: 1,
            courage: 6,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["blinding-dazzle"]
        stats: {
            hp: 50,
            ac: 16,
            atk: 12,
            dmg: "1d4 radiant",
            speed: "10 ft, fly 50 ft",
        },
        loot: ["glitter-dust"],
        abilities: ["Dazzling Light", "Swarm Heal"],
    },
    /* ------------------------------------------------------------ */
    /* RAVENOUS LOCUST SWARM — CR 5 */
    /* ------------------------------------------------------------ */
    {
        id: "locust-swarm",
        name: "Ravenous Locust Swarm",
        cr: 5,
        biomes: ["plains", "desert", "savannah"],
        habitat: ["dry-grasslands", "hive-fields"],
        category: "swarm",
        role: "bruiser",
        tags: ["devour", "flying", "fear"],
        factions: ["Swarmbrood"],
        behavior: {
            aggression: 9,
            courage: 6,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["consume-everything"]
        stats: {
            hp: 90,
            ac: 16,
            atk: 18,
            dmg: "4d6 slashing",
            speed: "30 ft, fly 40 ft",
        },
        loot: ["chitin-dust"],
        abilities: ["Devouring Frenzy", "Sound of Doom"],
    },
    /* ------------------------------------------------------------ */
    /* SHADOW WASP SWARM — CR 7 (ELITE) */
    /* ------------------------------------------------------------ */
    {
        id: "shadow-wasp-swarm",
        name: "Shadow Wasp Swarm",
        cr: 7,
        biomes: ["shadowlands", "underdark", "corrupted-zones"],
        habitat: ["hives-of-gloom", "shadow-nests"],
        category: "swarm",
        role: "striker",
        tags: ["necrotic", "poison", "shadow"],
        factions: ["Ebon Hive"],
        behavior: {
            aggression: 7,
            courage: 6,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement tactics: ["strike-from-darkness"]
        stats: {
            hp: 110,
            ac: 17,
            atk: 20,
            dmg: "3d6 necrotic + poison",
            speed: "40 ft, fly 60 ft",
        },
        loot: ["shadow-resin", "void-honey"],
        abilities: ["Phase Sting", "Shadow Swarm", "Terror Buzz"],
    },
];
export default MINIONS;
