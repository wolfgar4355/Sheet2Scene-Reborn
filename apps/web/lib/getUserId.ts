// lib/getUserId.ts
// ⚠️ AUCUN import depuis "next/headers"

export function getUserIdFromRequestHeaders(
  headers: Headers
): string | null {
  // Exemple : Authorization: Bearer xxx
  const auth = headers.get("authorization");
  if (!auth) return null;

  const [, token] = auth.split(" ");
  if (!token) return null;

  // ⚠️ ici tu fais ton décodage JWT / lookup
  // placeholder :
  return token; // ou userId extrait
}
