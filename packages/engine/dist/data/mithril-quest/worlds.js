// -----------------------------------------------------------------------------
// worlds.ts — Mondes Mithril-Quest
// -----------------------------------------------------------------------------
// Tableau principal des mondes MQ
export const MQ_WORLDS = [
    {
        id: "mithril-quest",
        label: "Mithril-Quest",
        description: "Monde central : aventures, quêtes, artefacts, épopées MQ.",
    },
];
// Helpers standards
export function getWorld(id) {
    return MQ_WORLDS.find((w) => w.id === id) ?? null;
}
export function getWorlds() {
    return MQ_WORLDS;
}
// Export par défaut (utilisé par le moteur interne)
export default MQ_WORLDS;
