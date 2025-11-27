export const MINIONS = [
    /* ------------------------------------------------------------ */
    /* SLIME CRAWLER — CR 1/4                                       */
    /* ------------------------------------------------------------ */
    {
        id: "slime-crawler",
        name: "Slime Crawler",
        cr: 0.25,
        biomes: ["dungeon", "sewer", "ruins"],
        habitat: ["sludge-pits"],
        category: "ooze",
        role: "lurker",
        tags: ["corrosion", "amorphous"],
        behavior: {
            aggression: 1,
            courage: 2,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["crawl-and-latch"],
        stats: {
            hp: 18,
            ac: 7,
            atk: 12,
            dmg: "1d6 acid",
            speed: "20 ft",
        },
        // auto-commented
        loot: ["sticky-residue"],
        // auto-commented
        abilities: ["Amorphous Body"],
    },
    /* ------------------------------------------------------------ */
    /* GELATINOUS SPLITTER — CR 2                                   */
    /* ------------------------------------------------------------ */
    {
        id: "gelatinous-splitter",
        name: "Gelatinous Splitter",
        cr: 2,
        biomes: ["dungeon", "crypt", "ruins"],
        habitat: ["ooze-pits"],
        category: "ooze",
        role: "brute",
        tags: ["splitting", "amorphous"],
        behavior: {
            aggression: 3,
            courage: 3,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["engulf-and-divide"],
        stats: {
            hp: 52,
            ac: 8,
            atk: 14,
            dmg: "2d8 acid",
            speed: "20 ft",
        },
        // auto-commented
        loot: ["gel-mass"],
        // auto-commented
        abilities: ["Divide on Hit", "Engulf"],
    },
    /* ------------------------------------------------------------ */
    /* ACID POOL WRAITH — CR 3                                      */
    /* ------------------------------------------------------------ */
    {
        id: "acid-pool-wraith",
        name: "Acid Pool Wraith",
        cr: 3,
        biomes: ["dungeon", "sewer", "corrupted-zone"],
        habitat: ["acid-baths"],
        category: "ooze",
        role: "striker",
        tags: ["volatile", "mist-form"],
        behavior: {
            aggression: 3,
            courage: 4,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["strike-and-dissolve"],
        stats: {
            hp: 55,
            ac: 12,
            atk: 16,
            dmg: "2d6 acid",
            speed: "25 ft, swim 30 ft",
        },
        // auto-commented
        loot: ["volatile-acid"],
        // auto-commented
        abilities: ["Toxic Mist", "Dissolve Flesh"],
    },
    /* ------------------------------------------------------------ */
    /* BLACK PUDDING SPAWN — CR 5                                   */
    /* ------------------------------------------------------------ */
    {
        id: "black-pudding-spawn",
        name: "Black Pudding Spawn",
        cr: 5,
        biomes: ["dungeon", "underdark", "ruins"],
        habitat: ["deep-ooze-pools"],
        category: "ooze",
        role: "frontliner",
        tags: ["corrosion", "split"],
        behavior: {
            aggression: 5,
            courage: 5,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["grip-and-corrosion"],
        stats: {
            hp: 78,
            ac: 10,
            atk: 16,
            dmg: "2d10 acid",
            speed: "20 ft, climb 10 ft",
        },
        // auto-commented
        loot: ["corroded-armor", "ooze-gland"],
        // auto-commented
        abilities: ["Equipment Corrosion", "Split"],
    },
    /* ------------------------------------------------------------ */
    /* VOID OOZE — CR 8 (ELITE)                                     */
    /* ------------------------------------------------------------ */
    {
        id: "void-ooze",
        name: "Void Ooze",
        cr: 8,
        biomes: ["deep-underdark", "shadowlands", "corruption-zones"],
        habitat: ["void-rifts"],
        category: "ooze",
        role: "elite-controller",
        tags: ["void", "disintegration"],
        behavior: {
            aggression: 6,
            courage: 6,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["pull-then-devour"],
        stats: {
            hp: 145,
            ac: 15,
            atk: 18,
            dmg: "2d10 necrotic + disintegrating touch",
            speed: "30 ft",
        },
        // auto-commented
        loot: ["voidic-residue", "collapsed-reality-shard"],
        // auto-commented
        abilities: ["Gravity Pull", "Void Dissolution", "Matter Collapse"],
    },
];
export default MINIONS;
