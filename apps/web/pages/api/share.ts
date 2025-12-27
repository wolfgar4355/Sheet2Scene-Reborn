import type { NextApiRequest, NextApiResponse } from "next";
import { getAdmin } from "@/lib/supabase/admin";
import { getUserIdFromRequestHeaders } from "@/lib/getUserId";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const userId = getUserIdFromRequestHeaders(req.headers as any);
    if (!userId) {
      return res.status(401).json({ ok: false, error: "Unauthorized" });
    }

    const { character_id } = req.body;
    if (!character_id) {
      return res.status(400).json({ ok: false, error: "Missing character_id" });
    }

    const { data, error } = await getAdmin()
      .from("shares")
      .insert({
        user_id: userId,
        character_id,
      })
      .select()
      .single();

    if (error) throw error;

    return res.status(201).json({ ok: true, share: data });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}
