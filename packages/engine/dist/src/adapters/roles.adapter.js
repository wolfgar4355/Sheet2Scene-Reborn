import { ROLES } from "../data/mithril-quest/roles";
/**
 * Retourne toutes les rôles sous forme d’un tableau plat
 */
export function getAllRoles() {
    return Object.values(ROLES).flat();
}
/**
 * Retourne les rôles d’une classe précise
 */
export function getRolesByClass(classId) {
    const raw = ROLES[classId];
    // Si c’est déjà un tableau ⇒ parfait
    if (Array.isArray(raw)) {
        return raw;
    }
    // Si c’est une string ⇒ on la transforme en tableau
    if (typeof raw === "string") {
        return [raw];
    }
    // Fallback sécurité
    return [];
}
/**
 * Vérifie si un rôle existe
 */
export function isRole(role) {
    return getAllRoles().includes(role);
}
