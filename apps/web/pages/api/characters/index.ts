import type { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServerApi } from "@/lib/supabase/server-api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createSupabaseServerApi(req, res);

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user || authError) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // GET /api/characters
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("characters")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ characters: data });
  }

  // POST /api/characters
  if (req.method === "POST") {
    const { name, system, data } = req.body;

    if (!name || !system) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const { data: inserted, error } = await supabase
      .from("characters")
      .insert({
        user_id: user.id,
        name,
        system,
        data,
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ character: inserted });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end();
}
