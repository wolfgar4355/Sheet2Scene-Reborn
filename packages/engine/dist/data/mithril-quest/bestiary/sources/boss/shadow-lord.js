export const MONSTERS = [
    {
        id: "shadow-lord",
        name: "Seigneur des Ombres",
        world: "Fantasy",
        cr: 10,
        category: "fiend",
        biomeTags: ["shadowlands", "ruins", "cursed-grounds"],
        habitatTags: ["underdark", "dungeons", "ancient-ruins", "forbidden-altars"],
        role: "elite-controller",
        tags: ["shadow", "necrotic", "dark-magic", "commander"],
        factions: ["Grave Sovereignty", "Ebon Host"],
        behavior: {
            aggression: 7,
            courage: 9,
            awareness: 8
        },
        tactics: [
            "opens-with-dark-nova",
            "teleport-behind-target",
            "summon-shadow-minions",
            "finish-with-void-lance"
        ],
        stats: {
            hp: 210,
            ac: 18,
            atk: 19,
            dmg: "2d10+6 necrotic",
            speed: "40 ft, teleport 30 ft"
        },
        loot: [
            "obsidian-heart",
            "shadow-lord-crown",
            "essence-of-night"
        ],
        abilities: [
            "Shadowstep",
            "Cone of Darkness",
            "Nightbound Command",
            "Void Lance",
            "Summon Umbral Shades"
        ],
        ref: {
            source: "custom",
            key: "shadow-lord"
        }
    }
];
