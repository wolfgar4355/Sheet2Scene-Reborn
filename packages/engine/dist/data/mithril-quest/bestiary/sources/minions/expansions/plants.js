export const MINIONS = [
    /* ------------------------------------------------------------ */
    /* WILTING SNARE — CR 1/4                                       */
    /* ------------------------------------------------------------ */
    {
        id: "wilting-snare",
        name: "Wilting Snare",
        cr: 0.25,
        biomes: ["forest", "swamp"],
        habitat: ["druid-groves"],
        category: "plant",
        role: "skirmisher",
        factions: ["thorn-kin"],
        tags: ["vines", "ambush"],
        behavior: {
            aggression: 4,
            courage: 3,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["grip-from-undergrowth"],
        stats: {
            hp: 12,
            ac: 12,
            atk: 3,
            dmg: "1d4 slashing",
            speed: "5 ft",
        },
        // auto-commented
        loot: ["druidic-sap"],
        // auto-commented
        abilities: ["Splintering Bind", "Creeping Cover"],
    },
    /* ------------------------------------------------------------ */
    /* THORNED CREEPER — CR 1                                        */
    /* ------------------------------------------------------------ */
    {
        id: "thorned-creeper",
        name: "Thorned Creeper",
        cr: 1,
        biomes: ["forest", "swamp", "ruins"],
        habitat: ["overgrowth", "ruins"],
        category: "plant",
        role: "brute",
        factions: ["thorn-kin", "spore-collective"],
        tags: ["thorns", "poison"],
        behavior: {
            aggression: 6,
            courage: 4,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["lash-closest-target"],
        stats: {
            hp: 28,
            ac: 13,
            atk: 4,
            dmg: "1d6 + 2 piercing",
            speed: "10 ft",
        },
        // auto-commented
        loot: ["thorn-core", "alchemical-sap"],
        // auto-commented
        abilities: ["Barbed Vines", "Toxic Sap"],
    },
    /* ------------------------------------------------------------ */
    /* VINE SNARER — CR 3                                           */
    /* ------------------------------------------------------------ */
    {
        id: "vine-snarer",
        name: "Vine Snarer",
        cr: 3,
        biomes: ["forest", "swamp", "jungle"],
        habitat: ["dense-growth"],
        category: "plant",
        role: "controller",
        factions: ["verdant-coven", "ancient-grove"],
        tags: ["entangle", "terrain-control"],
        behavior: {
            aggression: 4,
            courage: 5,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["grab-stragglers-first"],
        stats: {
            hp: 60,
            ac: 14,
            atk: 6,
            dmg: "2d6 + 3 bludgeoning",
            speed: "20 ft",
        },
        // auto-commented
        loot: ["enchanted-vine", "druid-knot"],
        // auto-commented
        abilities: ["Grasping Vines", "Reel In Prey"],
    },
    /* ------------------------------------------------------------ */
    /* BLOOMING DEVOURER — CR 5                                    */
    /* ------------------------------------------------------------ */
    {
        id: "blooming-devourer",
        name: "Blooming Devourer",
        cr: 5,
        biomes: ["swamp", "jungle", "ruins"],
        habitat: ["overgrown-temples"],
        category: "plant",
        role: "lurker",
        factions: ["spore-collective"],
        tags: ["acid", "ambush"],
        behavior: {
            aggression: 7,
            courage: 4,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["swallow-isolated-targets"],
        stats: {
            hp: 85,
            ac: 15,
            atk: 8,
            dmg: "2d10 + 3 bludgeoning",
            speed: "10 ft",
        },
        // auto-commented
        loot: ["corrosive-pollen", "rare-seed-pod"],
        // auto-commented
        abilities: ["Engulfing Maw", "Acidic Nectar"],
    },
    /* ------------------------------------------------------------ */
    /* GROVE HEART — CR 8 (ELITE PLANT)                             */
    /* ------------------------------------------------------------ */
    {
        id: "grove-heart",
        name: "Grove Heart",
        cr: 8,
        biomes: ["forest"],
        habitat: ["ancient-woods"],
        category: "plant",
        role: "support",
        factions: ["ancient-grove", "druidbound"],
        tags: ["support", "aura"],
        behavior: {
            aggression: 2,
            courage: 9,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["buff-allies-and-root-intruders"],
        stats: {
            hp: 135,
            ac: 16,
            atk: 10,
            dmg: "2d10 + 4 radiant+smash",
            speed: "0 ft (rooted)",
        },
        // auto-commented
        loot: ["grove-shard", "lifebloom-petal"],
        // auto-commented
        abilities: ["Healing Canopy", "Entangling Roots", "Verdant Aura"],
    },
];
export default MINIONS;
