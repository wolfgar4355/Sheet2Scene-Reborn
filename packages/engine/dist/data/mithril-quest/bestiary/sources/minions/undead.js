export const MINIONS = [
    /* ------------------------------------------------------------ */
    /* SKELETON — CR 1/4                                             */
    /* ------------------------------------------------------------ */
    {
        id: "skeleton",
        name: "Skeleton",
        cr: 0.25,
        biomes: ["ruins", "dungeon", "desert"],
        habitat: ["crypt", "ancient-ruins", "catacombs"],
        category: "undead",
        role: "bruiser",
        factions: ["necrotic-legion"],
        tags: ["undead", "resistant"],
        behavior: {
            aggression: 3,
            courage: 3,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["bone-from-cover"],
        stats: {
            hp: 13,
            ac: 13,
            atk: 12,
            dmg: "1d6+2 shortsword",
            speed: "30 ft",
        },
        // auto-commented
        loot: ["bone-shards"],
        // auto-commented
        abilities: ["Damage Resistance: Piercing"],
    },
    /* ------------------------------------------------------------ */
    /* ZOMBIE — CR 1/4                                               */
    /* ------------------------------------------------------------ */
    {
        id: "zombie",
        name: "Zombie",
        cr: 0.25,
        biomes: ["graveyard", "swamp", "ruins", "crypt"],
        habitat: ["burial-crypt", "swamp-graves"],
        category: "undead",
        role: "brute",
        factions: ["rotting-coven"],
        tags: ["relentless"],
        behavior: {
            aggression: 4,
            courage: 3,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["mindless-charge"],
        stats: {
            hp: 18,
            ac: 8,
            atk: 14,
            dmg: "1d6+2",
            speed: "20 ft",
        },
        // auto-commented
        loot: ["rotting-flesh"],
        // auto-commented
        abilities: ["Undead Fortitude"],
    },
    /* ------------------------------------------------------------ */
    /* GHOUL — CR 1                                                  */
    /* ------------------------------------------------------------ */
    {
        id: "ghoul",
        name: "Ghoul",
        cr: 1,
        biomes: ["graveyard", "ruins", "underdark"],
        habitat: ["mass-graves", "ancient-ruins", "underdark-nest"],
        category: "undead",
        role: "skirmisher",
        factions: ["void-feasters"],
        tags: ["paralysis", "ambush"],
        behavior: {
            aggression: 5,
            courage: 5,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["paralyzing-first"],
        stats: {
            hp: 22,
            ac: 12,
            atk: 15,
            dmg: "2d6+2",
            speed: "30 ft",
        },
        // auto-commented
        loot: ["ghoul-fangs"],
        // auto-commented
        abilities: ["Paralyzing Claw"],
    },
    /* ------------------------------------------------------------ */
    /* WIGHT — CR 3                                                  */
    /* ------------------------------------------------------------ */
    {
        id: "wight",
        name: "Wight",
        cr: 3,
        biomes: ["shadowlands", "crypts", "underdark"],
        habitat: ["shadow-crypt", "ancient-catacombs"],
        category: "undead",
        role: "commander",
        factions: ["death-knights"],
        tags: ["life-drain"],
        behavior: {
            aggression: 4,
            courage: 5,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["drain-to-weaken"],
        stats: {
            hp: 45,
            ac: 14,
            atk: 16,
            dmg: "2d6+4 necrotic",
            speed: "30 ft",
        },
        // auto-commented
        loot: ["dark-essence"],
        // auto-commented
        abilities: ["Life Drain", "Command Undead"],
    },
    /* ------------------------------------------------------------ */
    /* MUMMY — CR 3                                                  */
    /* ------------------------------------------------------------ */
    {
        id: "mummy",
        name: "Mummy",
        cr: 3,
        biomes: ["desert", "tombs", "ruins"],
        habitat: ["desert-temple", "burial-chamber"],
        category: "undead",
        role: "brute",
        factions: ["sun-cursed-pharaohs"],
        tags: ["rot", "fear"],
        behavior: {
            aggression: 5,
            courage: 4,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["fear-then-slam"],
        stats: {
            hp: 58,
            ac: 11,
            atk: 16,
            dmg: "2d6+3 bludgeoning",
            speed: "20 ft",
        },
        // auto-commented
        loot: ["ancient-bandages"],
        // auto-commented
        abilities: ["Mummy Rot", "Dreadful Glare"],
    },
    /* ------------------------------------------------------------ */
    /* WRAITH — CR 5                                                 */
    /* ------------------------------------------------------------ */
    {
        id: "wraith",
        name: "Wraith",
        cr: 5,
        biomes: ["shadowlands", "ruins", "underdark"],
        habitat: ["shadow-chamber", "forgotten-halls"],
        category: "undead",
        role: "controller",
        factions: ["spectral-dominion"],
        tags: ["incorporeal", "fear"],
        behavior: {
            aggression: 6,
            courage: 5,
        },
        tactics: { prefersAmbush: true }, // NOTE: anciennement // auto-commented
        tactics: ["drift-through-walls"],
        stats: {
            hp: 85,
            ac: 13,
            atk: 18,
            dmg: "2d8 necrotic",
            speed: "0 ft, fly 60 ft",
        },
        // auto-commented
        loot: ["soul-fragment"],
        // auto-commented
        abilities: ["Incorporeal Movement", "Life Drain", "Horrifying Visage"],
    },
];
export default MINIONS;
