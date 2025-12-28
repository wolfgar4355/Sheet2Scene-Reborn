import type { NextApiRequest, NextApiResponse } from "next";
import { getAdmin } from "@/lib/supabase/admin";
import { getUserIdFromApiRequest } from "@/lib/getUserId";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = getUserIdFromApiRequest(req);
  const id = req.query.id as string | undefined;

  if (!userId) {
    return res.status(401).json({ ok: false, error: "Missing user id" });
  }

  if (!id) {
    return res.status(400).json({ ok: false, error: "Missing id" });
  }

  const supabase = getAdmin();

  try {
    // ─────────────────────────────
    // GET /api/characters/[id]
    // ─────────────────────────────
    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("user_id", userId)
        .eq("id", id)
        .single();

      if (error) throw error;

      return res.status(200).json({ ok: true, character: data });
    }

    // ─────────────────────────────
    // PUT /api/characters/[id]
    // ─────────────────────────────
    if (req.method === "PUT") {
      const update = {
        ...(req.body ?? {}),
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from("characters")
        .update(update)
        .eq("user_id", userId)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return res.status(200).json({ ok: true, character: data });
    }

    // ─────────────────────────────
    // DELETE /api/characters/[id]
    // ─────────────────────────────
    if (req.method === "DELETE") {
      const { error } = await supabase
        .from("characters")
        .delete()
        .eq("user_id", userId)
        .eq("id", id);

      if (error) throw error;

      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    return res.status(405).end("Method Not Allowed");
  } catch (e: any) {
    return res.status(500).json({
      ok: false,
      error: e?.message ?? "Internal error",
    });
  }
}
