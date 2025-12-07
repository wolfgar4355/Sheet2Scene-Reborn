// -----------------------------------------------------------------------------
// worlds.ts — Mondes Mithril-Quest
// -----------------------------------------------------------------------------
// Liste canonique des mondes MQ
export const MQ_WORLDS = [
    {
        id: "mithril-quest",
        label: "Mithril-Quest",
        key: "mithril-quest",
        description: "Monde central : aventures, quêtes, artefacts, épopées MQ.",
        isMain: true
    }
];
// Helpers
export function getWorld(id) {
    return MQ_WORLDS.find(w => w.id === id) ?? null;
}
export function getWorlds() {
    return MQ_WORLDS;
}
// Monde par défaut (requis par index.ts et le moteur)
export function getMainWorld() {
    // prends le premier monde marqué "isMain" sinon le 1er
    return MQ_WORLDS.find(w => w.isMain) ?? MQ_WORLDS[0];
}
// Export principal + type
export default MQ_WORLDS;
