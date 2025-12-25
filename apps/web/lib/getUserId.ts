// lib/getUserId.ts

/**
 * Extrait l'user_id depuis les headers de la requête.
 *
 * Sources possibles (par ordre de priorité) :
 * - x-user-id (custom, recommandé)
 * - authorization: Bearer <user_id> (fallback simple)
 */
export function getUserIdFromRequestHeaders(
  headers: Headers
): string | null {
  // 1️⃣ Header custom explicite (RECOMMANDÉ)
  const direct = headers.get("x-user-id");
  if (direct) return direct;

  // 2️⃣ Authorization: Bearer <userId>
  const auth = headers.get("authorization");
  if (auth?.startsWith("Bearer ")) {
    return auth.slice("Bearer ".length).trim();
  }

  return null;
}
