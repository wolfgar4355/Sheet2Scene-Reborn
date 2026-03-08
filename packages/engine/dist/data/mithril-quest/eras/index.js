// @ts-nocheck
// eras/index.ts — Mithril-Quest Eras Registry
// -----------------------------------------------------
//  LISTE CANON DES ÈRES DU MONDE MITHRIL-QUEST
// -----------------------------------------------------
export const MQ_ERAS = [
    {
        id: "age-of-heroes",
        worldId: "mithril-quest",
        name: "Age of Heroes",
        shortDescription: "Épopées héroïques, premiers artefacts mythiques et naissance des proto-royaumes.",
        recommendedLevels: [1, 10],
    },
    {
        id: "ancient-age",
        worldId: "mithril-quest",
        name: "Ancient Age",
        shortDescription: "Empires antiques, cités-États mystiques, ruines colossales et secrets enfouis.",
        recommendedLevels: [3, 12],
    },
    {
        id: "dark-age",
        worldId: "mithril-quest",
        name: "Dark Age",
        shortDescription: "Peste, guerres sacrées, nécromancie interdite et royaumes en chute.",
        recommendedLevels: [1, 8],
    },
    {
        id: "high-kingdoms",
        worldId: "mithril-quest",
        name: "High Kingdoms",
        shortDescription: "Royaumes d'Or, ordres chevaleresques, renaissance commerciale et magie organisée.",
        recommendedLevels: [1, 20],
    },
    {
        id: "arcane-renaissance",
        worldId: "mithril-quest",
        name: "Arcane Renaissance",
        shortDescription: "Explosion de la magie savante, inventions arcanes et essor des grandes académies.",
        recommendedLevels: [5, 15],
    },
    {
        id: "mystic-age",
        worldId: "mithril-quest",
        name: "Mystic Age",
        shortDescription: "Ère des dieux, titans, dragons primordiaux et phénomènes planaires extrêmes.",
        recommendedLevels: [10, 20],
    },
];
// -----------------------------------------------------
//   INDEX PAR MONDE (extensible si tu ajoutes GS, etc.)
// -----------------------------------------------------
export const ERAS_BY_WORLD = {
    "mithril-quest": MQ_ERAS,
};
