// 🌲 TABLE ENCOUNTERS — FOREST (Mithril Engine Optimisée)
export const FOREST_ENCOUNTERS = [
    // 1–10 : Faune commune
    {
        roll: [1, 10],
        monsters: ["wolf"],
        habitat: "forest-deep",
        difficulty: "easy",
        description: "Une meute de loups traque le groupe à distance.",
    },
    // 11–25 : Gobelins de forêt
    {
        roll: [11, 25],
        monsters: ["goblin", "goblin-scout"],
        habitat: "clearing",
        difficulty: "standard",
        description: "Des gobelins embusqués surgissent depuis les buissons.",
    },
    // 26–40 : Brigands (humanoids)
    {
        roll: [26, 40],
        monsters: ["forest-bandit", "forest-bandit-archer"],
        habitat: "trail",
        difficulty: "standard",
        description: "Un groupe de brigands réclame un ‘péage’.",
    },
    // 41–55 : Bêtes dangereuses
    {
        roll: [41, 55],
        monsters: ["dire-boar", "owlbear"],
        habitat: "forest-deep",
        difficulty: "hard",
        description: "La forêt devient silencieuse… quelque chose de massif approche.",
    },
    // 56–70 : Sylvains corrompus
    {
        roll: [56, 70],
        monsters: ["corrupted-dryad", "shadow-satyr"],
        habitat: "corrupted-grove",
        difficulty: "hard",
        description: "La magie corrompue tord les arbres autour de vous.",
    },
    // 71–85 : Minions sombres
    {
        roll: [71, 85],
        monsters: ["shadow-minion", "shade-stalker"],
        habitat: "ruins",
        difficulty: "deadly",
        description: "Les ombres prennent forme et se déplacent contre nature.",
    },
    // 86–95 : Élites
    {
        roll: [86, 95],
        monsters: ["forest-wraith", "alpha-dire-wolf"],
        habitat: "ancient-forest",
        difficulty: "deadly",
        description: "Une présence surnaturelle domine la forêt.",
    },
    // 96–100 : Boss rare
    {
        roll: [96, 100],
        monsters: ["dark-lord"],
        habitat: "forgotten-altar",
        difficulty: "deadly",
        description: "Un ancien seigneur des ombres émerge de l’autel oublié.",
    },
];
