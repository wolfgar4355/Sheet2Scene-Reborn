import type { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServerApi } from "@/lib/supabase/server-api";
import type { Database } from "@/types/database";

type CharacterInsert = Database["public"]["Tables"]["characters"]["Insert"];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createSupabaseServerApi(req, res);

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = user.id;

  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("characters")
      .select("*")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.json({ characters: data });
  }

  if (req.method === "POST") {
    const { name, system, data } = req.body ?? {};

    if (typeof name !== "string" || typeof system !== "string") {
      return res.status(400).json({ error: "Missing/invalid name or system" });
    }

    const payload: CharacterInsert = {
      user_id: userId,
      name,
      system,
      data: data ?? {},
    };

    const { data: inserted, error } = await supabase
      .from("characters")
      .insert(payload)
      .select("*")
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ character: inserted });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end();
}
