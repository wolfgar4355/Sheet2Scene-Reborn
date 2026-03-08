// @ts-nocheck
// lib/s2s/fantasy/gm/rules-core.ts
export const CORE_DIFFICULTIES = [
    { label: "Très facile", dc: 5, description: "Une tâche que presque tout le monde peut faire." },
    { label: "Facile", dc: 10, description: "Demande un peu d’attention." },
    { label: "Moyenne", dc: 15, description: "Un aventurier standard a 50% de chance de réussir." },
    { label: "Difficile", dc: 20, description: "Nécessite expertise ou chance." },
    { label: "Très difficile", dc: 25, description: "Réservée aux experts." },
    { label: "Quasi impossible", dc: 30, description: "Seuls les héros légendaires peuvent y parvenir." },
];
export function resolveCheck(check) {
    const roll = Math.floor(Math.random() * 20) + 1;
    return roll + check.modifier >= check.difficulty.dc;
}
export const ACTION_TYPES = [
    "Action",
    "Bonus Action",
    "Réaction",
    "Mouvement",
];
