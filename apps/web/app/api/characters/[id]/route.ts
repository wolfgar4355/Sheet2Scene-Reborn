import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@lib/supabase/admin";
import { getUserIdFromRequestHeaders } from "@lib/getUserId";
import type { Database } from "@/types/database";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

type CharacterUpdate =
  Database["public"]["Tables"]["characters"]["Update"];

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

// GET /api/characters/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = getUserIdFromRequestHeaders(req.headers);
    if (!userId) return bad("Missing user id", 401);

    const { data, error } = await getAdmin()
      .from("characters")
      .select("*")
      .eq("user_id", userId)
      .eq("id", params.id)
      .single();

    if (error) throw error;
    if (!data) return bad("Not found", 404);

    return NextResponse.json({ ok: true, character: data });
  } catch (e: any) {
    return bad(e?.message ?? "GET failed", 500);
  }
}

// PUT /api/characters/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = getUserIdFromRequestHeaders(req.headers);
    if (!userId) return bad("Missing user id", 401);

    const body = (await req.json()) as {
      name?: string;
      system?: string;
      data?: unknown;
    };

    const update: CharacterUpdate = {
      updated_at: new Date().toISOString(),
    };

    if (body.name !== undefined) update.name = body.name;
    if (body.system !== undefined) update.system = body.system;
    if (body.data !== undefined) update.data = body.data as any;

    const { data, error } = await getAdmin()
      .from("characters")
      .update(update)
      .eq("user_id", userId)
      .eq("id", params.id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ ok: true, character: data });
  } catch (e: any) {
    return bad(e?.message ?? "PUT failed", 500);
  }
}

// DELETE /api/characters/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = getUserIdFromRequestHeaders(req.headers);
    if (!userId) return bad("Missing user id", 401);

    const { error } = await getAdmin()
      .from("characters")
      .delete()
      .eq("user_id", userId)
      .eq("id", params.id);

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return bad(e?.message ?? "DELETE failed", 500);
  }
}
