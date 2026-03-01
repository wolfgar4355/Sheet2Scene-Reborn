export const COAST_ENCOUNTERS = [
    // 1–10 : Faune côtière
    {
        roll: [1, 10],
        monsters: ["shore-crab", "seagull-swarm"],
        habitat: "tidal-zone",
        difficulty: "easy",
        description: "Des créatures opportunistes cherchent de la nourriture dans les marées.",
    },
    // 11–20 : Pirates & contrebandiers
    {
        roll: [11, 20],
        monsters: ["pirate-cutthroat", "pirate-gunner"],
        habitat: "abandoned-dock",
        difficulty: "standard",
        description: "Une petite bande de pirates surveille un vieux quai.",
    },
    // 21–35 : Prédateurs marins à marée haute
    {
        roll: [21, 35],
        monsters: ["reef-shark", "sand-stingray"],
        habitat: "shallow-waters",
        difficulty: "standard",
        description: "Une silhouette tourne dans l’eau trouble à proximité.",
    },
    // 36–50 : Créatures de récifs + golems de corail
    {
        roll: [36, 50],
        monsters: ["coral-golem", "reef-guardian"],
        habitat: "coral-reef",
        difficulty: "hard",
        description: "Des structures coralliennes bougent comme si elles respiraient.",
    },
    // 51–65 : Esprits de tempête / brume vivante
    {
        roll: [51, 65],
        monsters: ["storm-wisp", "tide-wraith"],
        habitat: "stormfront",
        difficulty: "hard",
        description: "Le vent se met à hurler… puis prend forme.",
    },
    // 66–80 : Bêtes géantes + monstruosités côtières
    {
        roll: [66, 80],
        monsters: ["giant-crab", "rock-snapper", "coast-serpent"],
        habitat: "wave-breaker-cliffs",
        difficulty: "hard",
        description: "Quelque chose de colossal se déplace sous les vagues.",
    },
    // 81–95 : Aberrations venues des profondeurs
    {
        roll: [81, 95],
        monsters: ["void-tentacle-beast", "abyssal-crawler"],
        habitat: "dark-water",
        difficulty: "deadly",
        description: "L’eau devient anormalement froide avant de se déchirer.",
    },
    // 96–100 : BOSS RARE
    {
        roll: [96, 100],
        monsters: ["ancient-sea-titan", "storm-leviathan-mythic"],
        habitat: "mythic-coast",
        difficulty: "deadly",
        description: "Une tempête s’incarne dans un titan ancestral.",
    },
];
