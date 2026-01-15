import type { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";
import { getAdmin } from "@/lib/supabase/admin";
import { getUserIdFromRequestHeaders } from "@/lib/getUserId";

type ShareBody = {
  character_id?: string;
};

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

    const { character_id } = req.body as ShareBody;

    if (!character_id) {
      return res
        .status(400)
        .json({ ok: false, error: "Missing character_id" });
    }

    const slug = nanoid(10); // ex: A9kL3sPq2Z

    const admin = getAdmin();

    const { data, error } = await admin
      .from("shares")
      .insert({
        user_id: userId,
        character_id,
        slug,
      })
      .select("*")
      .single();

    if (error) throw error;

    return res.status(201).json({
      ok: true,
      share: data,
      url: `/share/${data.slug}`,
    });
  } catch (e: any) {
    console.error("[share api error]", e);
    return res.status(500).json({
      ok: false,
      error: e?.message ?? "Internal error",
    });
  }
}
