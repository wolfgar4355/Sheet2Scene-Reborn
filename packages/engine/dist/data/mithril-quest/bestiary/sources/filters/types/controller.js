export const TYPE_CONTROLLER = {
    role: "Controller",
    description: "Manipule le rythme du combat : entrave, pièges, illusions, contrôle mental ou altérations d’état.",
    stats: {
        hp: "Moyens",
        ac: "Moyenne",
        damage: { dice: "Faible à", type: "moyen" },
        mobility: "Faible à moyenne",
    },
    traits: [
        "Immobilisation ou entrave",
        "Télékinésie ou manipulation",
        "Illusions, malédictions ou contrôle mental",
        "Perturbe ou isole des ennemis",
    ],
    examples: [
        "Enchanteur spectral",
        "Dryade ancestrale",
        "Esprit manipulateur",
        "Tisseur d’illusions",
        "Marionnettiste occulte",
    ],
};
