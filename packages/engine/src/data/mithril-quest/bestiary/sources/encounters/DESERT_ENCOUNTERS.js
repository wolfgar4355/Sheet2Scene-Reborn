export const DESERT_ENCOUNTERS = [
    // 1–10 : Faune du désert
    {
        roll: [1, 10],
        monsters: ["sand-lizard", "dune-scorpion"],
        habitat: "dune-field",
        difficulty: "easy",
        description: "Des créatures habituées à se cacher sous le sable.",
    },
    // 11–20 : Caravanes, pillards
    {
        roll: [11, 20],
        monsters: ["desert-bandit", "sand-raider"],
        habitat: "oasis-road",
        difficulty: "standard",
        description: "Une bande rôde entre les routes commerciales.",
    },
    // 21–35 : Élémentaires de sable / tempêtes
    {
        roll: [21, 35],
        monsters: ["sand-elemental", "dust-swirl"],
        habitat: "wind-dunes",
        difficulty: "standard",
        description: "Le vent se charge de magie et prend forme.",
    },
    // 36–50 : Serpents géants
    {
        roll: [36, 50],
        monsters: ["giant-sand-python", "ash-worm"],
        habitat: "sinking-dunes",
        difficulty: "hard",
        description: "Le sol bouge… puis une gueule surgit du sable.",
    },
    // 51–65 : Gardiens des ruines
    {
        roll: [51, 65],
        monsters: ["ancient-construct", "scarab-guardian"],
        habitat: "sunken-ruins",
        difficulty: "hard",
        description: "Les ruines vibrent d’une magie antique.",
    },
    // 66–80 : Entités corrompues / mirages vivants
    {
        roll: [66, 80],
        monsters: ["void-mirage", "cinder-phantom"],
        habitat: "mirage-zone",
        difficulty: "deadly",
        description: "La chaleur déforme la réalité… parfois jusqu’à lui donner vie.",
    },
    // 81–95 : Titans ou colosses des sables
    {
        roll: [81, 95],
        monsters: ["sand-titan", "obsidian-colossus"],
        habitat: "forbidden-dunes",
        difficulty: "deadly",
        description: "Un géant recouvert de sable s'éveille.",
    },
    // 96–100 : BOSS RARE
    {
        roll: [96, 100],
        monsters: ["ancient-sphinx", "solar-pharaoh"],
        habitat: "mythic-pyramid",
        difficulty: "deadly",
        description: "Une divinité oubliée vous observe, immobile.",
    },
];
