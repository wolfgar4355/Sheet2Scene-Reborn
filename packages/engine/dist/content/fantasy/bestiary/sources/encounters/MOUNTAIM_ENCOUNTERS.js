export const MOUNTAIN_ENCOUNTERS = [
    // 1–12 : Faune agressive
    {
        roll: [1, 12],
        monsters: ["mountain-goat", "rock-wolf"],
        habitat: "cliffside",
        difficulty: "easy",
        description: "Des bêtes de montagne protègent leur territoire.",
    },
    // 13–25 : Bandits et pillards
    {
        roll: [13, 25],
        monsters: ["mountain-bandit", "bandit-archer"],
        habitat: "mountain-pass",
        difficulty: "standard",
        description: "Des brigands embusqués profitent des hauteurs.",
    },
    // 26–40 : Golems ou gardiens anciens
    {
        roll: [26, 40],
        monsters: ["stone-golem", "obsidian-guardian"],
        habitat: "ancient-ruins",
        difficulty: "standard",
        description: "Des statues s’animent lorsque vous approchez.",
    },
    // 41–55 : Harpies et créatures volantes
    {
        roll: [41, 55],
        monsters: ["harpy", "sky-harpy", "roc-young"],
        habitat: "high-cliff",
        difficulty: "hard",
        description: "Des silhouettes volantes tournent au-dessus de vous.",
    },
    // 56–70 : Titans mineurs / élémentaires
    {
        roll: [56, 70],
        monsters: ["minor-storm-elemental", "earth-shambler"],
        habitat: "storm-peak",
        difficulty: "hard",
        description: "Les vents sifflent d’une façon presque vivante.",
    },
    // 71–85 : Créatures corrompues
    {
        roll: [71, 85],
        monsters: ["abyssal-goat", "void-harpy"],
        habitat: "dark-peak",
        difficulty: "deadly",
        description: "Une corruption invisible altère la pierre elle-même.",
    },
    // 86–95 : GÉANTS
    {
        roll: [86, 95],
        monsters: ["hill-giant", "frost-giant-scout", "storm-giant-apprentice"],
        habitat: "giant-territory",
        difficulty: "deadly",
        description: "Les pas lourds résonnent sur la montagne.",
    },
    // 96–100 : BOSS RARE
    {
        roll: [96, 100],
        monsters: ["mountain-colossus", "ancient-storm-titan"],
        habitat: "mythic-throne",
        difficulty: "deadly",
        description: "Une puissance mythique règne depuis les hauteurs éternelles.",
    },
];
