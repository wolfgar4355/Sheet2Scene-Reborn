import { ROLES } from "../data/mithril-quest/roles";
/**
 * Le type Role correspond à un des éléments du tableau dans chaque entrée.
 */
export type Role = (typeof ROLES)[keyof typeof ROLES][number];
/**
 * Retourne toutes les rôles sous forme d’un tableau plat
 */
export declare function getAllRoles(): Role[];
/**
 * Retourne les rôles d’une classe précise
 */
export declare function getRolesByClass(classId: keyof typeof ROLES): Role[];
/**
 * Vérifie si un rôle existe
 */
export declare function isRole(role: string): role is Role;
