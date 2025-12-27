// app/api/characters/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@lib/supabase/admin";
import { getUserIdFromRequestHeaders } from "@lib/getUserId";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

type CharacterBody = {
  name?: string;
  system?: string;
  data?: Record<string, unknown>;
};

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

/* ============================================================
   GET /api/characters
   ============================================================ */
export async function GET(req: NextRequest) {
  try {
    const userId = getUserIdFromRequestHeaders(req.headers);
    if (!userId) return bad("Missing user id", 401);

    const { data, error } = await getAdmin()
      .from("characters")
      .select("*")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ ok: true, data: data ?? [] });
  } catch (e: any) {
    return bad(e?.message ?? "GET failed", 500);
  }
}

/* ============================================================
   POST /api/characters
   ============================================================ */
export async function POST(req: NextRequest) {
  try {
    const userId = getUserIdFromRequestHeaders(req.headers);
    if (!userId) return bad("Missing user id", 401);

    const body = (await req.json()) as CharacterBody | undefined;
    if (!body) return bad("Missing JSON body", 400);

    const name = (body.name ?? "").trim();
    const system = (body.system ?? "").trim();
    const data = body.data ?? {};

    if (!name) return bad('Field "name" is required', 400);
    if (!system) return bad('Field "system" is required', 400);

    // ⚠️ IMPORTANT
    // Cast volontaire pour éviter les conflits de types Supabase
    const row = {
      user_id: userId,
      name,
      system,
      data,
      updated_at: new Date().toISOString(),
    } as any;

    const { data: inserted, error } = await getAdmin()
      .from("characters")
      .insert(row)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(
      { ok: true, character: inserted },
      { status: 201 }
    );
  } catch (e: any) {
    return bad(e?.message ?? "POST failed", 500);
  }
}
