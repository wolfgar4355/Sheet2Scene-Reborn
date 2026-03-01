export const JUNGLE_ENCOUNTERS = [
    // 1–10 : Faune tropicale agressive
    {
        roll: [1, 10],
        monsters: ["jungle-boar", "razor-parrot"],
        habitat: "underbrush",
        difficulty: "easy",
        description: "Petits animaux agressifs, rapides et imprévisibles.",
    },
    // 11–20 : Prédateurs embusqués
    {
        roll: [11, 20],
        monsters: ["shadow-panther", "vine-stalker"],
        habitat: "thick-forest",
        difficulty: "standard",
        description: "Des créatures qui chassent par embuscade.",
    },
    // 21–35 : Chasseurs venimeux
    {
        roll: [21, 35],
        monsters: ["emerald-viper", "toxic-frog"],
        habitat: "swampy-jungle",
        difficulty: "standard",
        description: "La jungle devient silencieuse avant l’attaque.",
    },
    // 36–50 : Tribu de créatures intelligentes
    {
        roll: [36, 50],
        monsters: ["jungle-goblin", "tree-shaman"],
        habitat: "camp-ruins",
        difficulty: "standard",
        description: "Tambours et pièges artisanaux résonnent dans la jungle.",
    },
    // 51–65 : Esprits de la jungle / plantes vivantes
    {
        roll: [51, 65],
        monsters: ["root-wraith", "carnivorous-blossom"],
        habitat: "ancient-grove",
        difficulty: "hard",
        description: "La végétation semble se mouvoir et respirer.",
    },
    // 66–80 : Bêtes colossales
    {
        roll: [66, 80],
        monsters: ["giant-ape", "thunder-lizard"],
        habitat: "lost-plateau",
        difficulty: "hard",
        description: "La terre tremble sous des pas énormes.",
    },
    // 81–95 : Aberrations tropicales anciennes
    {
        roll: [81, 95],
        monsters: ["eldritch-mandrake", "jungle-abomination"],
        habitat: "forbidden-depths",
        difficulty: "deadly",
        description: "Un murmure au fond de votre crâne annonce un danger ancien.",
    },
    // 96–100 : BOSS RARE
    {
        roll: [96, 100],
        monsters: ["ancient-jungle-titan", "serpent-god-mythic"],
        habitat: "mythic-jungle",
        difficulty: "deadly",
        description: "Un ancien dieu-serpent s’éveille sous les lianes.",
    },
];
export default JUNGLE_ENCOUNTERS;
