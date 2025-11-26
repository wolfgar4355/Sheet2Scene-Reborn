export const CAVES_ENCOUNTERS = [
    // 1–10 : Faune cavernicole basique
    {
        roll: [1, 10],
        monsters: ["cave-bat-swarm", "blind-rat"],
        habitat: "narrow-tunnels",
        difficulty: "easy",
        description: "Petites créatures rapides qui vivent dans les tunnels.",
    },
    // 11–20 : Prédateurs aveugles
    {
        roll: [11, 20],
        monsters: ["lurking-stalker", "tunnel-ambusher"],
        habitat: "shadow-chambers",
        difficulty: "standard",
        description: "Des prédateurs qui détectent par vibrations.",
    },
    // 21–35 : Champignons vivants
    {
        roll: [21, 35],
        monsters: ["spore-mycot", "toxic-capling"],
        habitat: "fungal-forest",
        difficulty: "standard",
        description: "Le sol semble respirer… et grincer.",
    },
    // 36–50 : Insectes géants
    {
        roll: [36, 50],
        monsters: ["giant-centipede", "crystal-scorpion"],
        habitat: "mineral-caves",
        difficulty: "standard",
        description: "Carapaces chitineuses et mouvements rapides.",
    },
    // 51–65 : Aberrations
    {
        roll: [51, 65],
        monsters: ["void-jelly", "tentacle-watcher"],
        habitat: "eldritch-chasm",
        difficulty: "hard",
        description: "Rictus impossibles et chair difforme venue d’ailleurs.",
    },
    // 66–80 : Créatures anciennes de l’Underdark
    {
        roll: [66, 80],
        monsters: ["deep-troll", "subterranean-horror"],
        habitat: "ancient-deeps",
        difficulty: "hard",
        description: "Des géants difformes, survivants d’ères préhistoriques.",
    },
    // 81–90 : Cultistes du Vide / rituels interdits
    {
        roll: [81, 90],
        monsters: ["void-cultist", "abyssal-acolyte"],
        habitat: "forbidden-shrine",
        difficulty: "hard",
        description: "Les torches violettes dansent au rythme de murmures.",
    },
    // 91–98 : Cavaliers du Néant (élite)
    {
        roll: [91, 98],
        monsters: ["void-knight", "echo-wraith"],
        habitat: "night-crystal-halls",
        difficulty: "deadly",
        description: "Armures fractales, armes qui hurlent, illusions répercutées.",
    },
    // 99–100 : BOSS RARE — Dragon Souterrain
    {
        roll: [99, 100],
        monsters: ["umbral-earth-drake", "chasm-tyrant-mythic"],
        habitat: "mythic-depth",
        difficulty: "deadly",
        description: "Un ancien dragon sculpté dans l’obscurité elle-même.",
    },
];
export default CAVES_ENCOUNTERS;
