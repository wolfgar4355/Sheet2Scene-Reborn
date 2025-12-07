// src/adapters/roles.adapter.ts
import ROLES from "../data/mithril-quest/roles";
/**
 * Retourne toutes les rôles sous forme d’un tableau plat
 */
export function getAllRoles() {
    return Object.values(ROLES).flat();
}
/**
 * Retourne les rôles d’une classe précise
 * ex: getRolesByClass("warrior")
 */
export function getRolesByClass(classId) {
    return ROLES[classId] ?? [];
}
/**
 * Vérifie si un rôle existe
 */
export function isRole(role) {
    return getAllRoles().includes(role);
}
