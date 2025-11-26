// src/adapters/eras.adapter.ts
// Importe directement ton contenu Fantasy
import * as ERAS from "../content/fantasy/eras";
/**
 * Récupère toutes les ères (ALL_ERAS.ts + sources/*.ts)
 */
export function getAllEras() {
    // Object.values suffit car ton index.ts exporte les ères déjà fusionnées
    // Version clean, robuste, compatible futur
    return Object.values(ERAS).flat();
}
/**
 * Récupère une ère par son ID
 */
export function getEraById(id) {
    return getAllEras().find((era) => era.id === id);
}
