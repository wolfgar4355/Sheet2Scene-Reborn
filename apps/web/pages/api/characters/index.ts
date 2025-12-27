import type { NextApiRequest, NextApiResponse } from "next";
import { getAdmin } from "@/lib/supabase/admin";
import { getUserIdFromRequestHeaders } from "@/lib/getUserId";

type CharacterBody = {
  name?: string;
  system?: string;
  data?: Record<string, unknown>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = getUserIdFromRequestHeaders(req.headers);
  if (!userId) {
    return res.status(401).json({ ok: false, error: "Missing user id" });
  }

  const supabase = getAdmin();

  try {
    // GET /api/characters
    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false });

      if (error) throw error;
      return res.status(200).json({ ok: true, data: data ?? [] });
    }

    // POST /api/characters
    if (req.method === "POST") {
      const body = req.body as CharacterBody;

      const name = body?.name?.trim();
      const system = body?.system?.trim();
      const data = body?.data ?? {};

      if (!name) {
        return res.status(400).json({ ok: false, error: 'Field "name" is required' });
      }
      if (!system) {
        return res.status(400).json({ ok: false, error: 'Field "system" is required' });
      }

      const row = {
        user_id: userId,
        name,
        system,
        data,
        updated_at: new Date().toISOString(),
      };

      const { data: inserted, error } = await supabase
        .from("characters")
        .insert(row)
        .select()
        .single();

      if (error) throw error;

      return res.status(201).json({ ok: true, character: inserted });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end();
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
