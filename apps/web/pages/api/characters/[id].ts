import type { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServer } from "@/lib/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = user.id;
  const id = req.query.id as string;

  if (!id) {
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
    const { data, error } = await supabase
      .from("characters")
      .update(req.body)
      .eq("id", id)
      .eq("user_id", userId)
      .select()
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
  res.status(405).end();
}
