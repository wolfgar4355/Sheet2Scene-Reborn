export const MITHRIL_QUEST_WORLD = {
    id: "mithril-quest",
    key: "mq",
    label: "Mithril-Quest",
    description: "Monde high-fantasy héroïque dans l'esprit D&D : magie, guildes, artefacts légendaires et épopées.",
    tags: ["fantasy", "magic", "heroic", "rpg"],
    worldType: "fantasy",
    eras: [
        "age-of-myths", // Ère des premiers dragons et des dieux distants
        "age-of-kingdoms", // Grandes cités, empires, croisades
        "shattered-realms", // Royaumes brisés, prophéties et portails
    ],
    // Hook libre pour les systèmes :
    // on pourra raccrocher ici bestiaire, classes, sorts, etc.
    // ex: classesKey: "mq-classes", bestiaryKey: "mq-bestiary", etc.
};
