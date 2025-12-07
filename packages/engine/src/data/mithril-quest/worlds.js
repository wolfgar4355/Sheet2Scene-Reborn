// @ts-nocheck
// worlds.ts — Définition officielle des mondes Mithril-Quest (MQ)
// ID du monde principal
export const MQ_WORLD_ID = "mithril_quest";
// Liste des mondes disponibles (extensible plus tard)
export const MQ_WORLDS = [
    {
        id: MQ_WORLD_ID,
        key: "mithril_quest", // utilisé dans /worlds/mithril_quest
        title: "Mithril Quest", // nom officiel
        emoji: "⚔️📜", // style grimoire-aventure
        tags: [
            "High Fantasy",
            "Mithril Quest",
            "Mithril Engine",
            "Adventure",
            "Magic",
            "RPG",
        ],
    },
];
// Export par défaut
export default MQ_WORLDS;
