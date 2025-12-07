import { ROLES } from "../data/mithril-quest/roles";

/**
 * Le type Role correspond à un des éléments du tableau dans chaque entrée.
 */
export type Role = (typeof ROLES)[keyof typeof ROLES][number];

/**
 * Retourne toutes les rôles sous forme d’un tableau plat
 */
export function getAllRoles(): Role[] {
  return Object.values(ROLES).flat() as Role[];
}

/**
 * Retourne les rôles d’une classe précise
 */
export function getRolesByClass(classId: keyof typeof ROLES): Role[] {
  const raw = ROLES[classId];

  // Si c’est déjà un tableau ⇒ parfait
  if (Array.isArray(raw)) {
    return raw as Role[];
  }

  // Si c’est une string ⇒ on la transforme en tableau
  if (typeof raw === "string") {
    return [raw] as Role[];
  }

  // Fallback sécurité
  return [] as Role[];
}

/**
 * Vérifie si un rôle existe
 */
export function isRole(role: string): role is Role {
  return getAllRoles().includes(role as Role);
}
