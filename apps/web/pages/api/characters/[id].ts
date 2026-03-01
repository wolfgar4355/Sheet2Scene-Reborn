import type { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServerApi } from "@/lib/supabase/server-api";
import type { Database } from "@/types/database";

type CharacterUpdate = Database["public"]["Tables"]["characters"]["Update"];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createSupabaseServerApi(req, res);

  // ✅ Guard: ne jamais appeler supabase si env manquantes
  if (!supabase) {
    return res.status(500).json({
      error: "Server not configured (missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY)",
    });
  }

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = user.id;

  const rawId = req.query.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Missing id" });
  }

  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("characters")
      .select("*")
      .eq("id", id)
      .eq("user_id", userId)
      .single();

    if (error) return res.status(404).json({ error: error.message });
    return res.json({ character: data });
  }

  if (req.method === "PUT") {
    const body = (req.body ?? {}) as Record<string, unknown>;

    const patch: CharacterUpdate = {};
    if (typeof body.name === "string") patch.name = body.name;
    if (typeof body.system === "string") patch.system = body.system;
    if (body.data !== undefined) patch.data = body.data as any;

    if (Object.keys(patch).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    const { data, error } = await supabase
      .from("characters")
      .update(patch)
      .eq("id", id)
      .eq("user_id", userId)
      .select("*")
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.json({ character: data });
  }

  if (req.method === "DELETE") {
    const { error } = await supabase
      .from("characters")
      .delete()
      .eq("id", id)
      .eq("user_id", userId);

    if (error) return res.status(500).json({ error: error.message });
    return res.json({ ok: true });
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  return res.status(405).end();
}
