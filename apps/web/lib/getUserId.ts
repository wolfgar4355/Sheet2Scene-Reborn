// lib/getUserId.ts
// ⚠️ AUCUN import depuis "next/headers"

import type { NextApiRequest } from "next";

/**
 * ─────────────────────────────────────────────
 * App Router (app/api) — Web Headers
 * ─────────────────────────────────────────────
 */
export function getUserIdFromRequestHeaders(
  headers: Headers
): string | null {
  const auth = headers.get("authorization");
  if (!auth) return null;

  const [, token] = auth.split(" ");
  if (!token) return null;

  // TODO: décodage JWT réel plus tard
  return token;
}

/**
 * ─────────────────────────────────────────────
 * Pages Router (pages/api) — Node.js request
 * ─────────────────────────────────────────────
 */
export function getUserIdFromApiRequest(
  req: NextApiRequest
): string | null {
  const auth =
    req.headers["authorization"] ||
    req.headers["Authorization"];

  if (!auth || Array.isArray(auth)) return null;
  if (!auth.startsWith("Bearer ")) return null;

  return auth.slice(7);
}
