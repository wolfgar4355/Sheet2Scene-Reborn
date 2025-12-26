import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@lib/supabase/admin";
import { getUserIdFromRequestHeaders } from "@lib/getUserId";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

// GET /api/characters/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const userId = getUserIdFromRequestHeaders(req.headers);

    if (!userId) return bad("Missing user id", 401);
    if (!id) return bad("Missing id", 400);

    const { data, error } = await getAdmin()
      .from("characters")
      .select("*")
      .eq("user_id", userId)
      .eq("id", id)
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
    const { id } = params;
    const userId = getUserIdFromRequestHeaders(req.headers);

    if (!userId) return bad("Missing user id", 401);
    if (!id) return bad("Missing id", 400);

    const body = (await req.json()) as {
      name?: string;
      system?: string;
      data?: Record<string, unknown>;
    };

    const { data, error } = await getAdmin()
      .from("characters")
      .update({ ...body, updated_at: new Date().toISOString() })
      .eq("user_id", userId)
      .eq("id", id)
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
    const { id } = params;
    const userId = getUserIdFromRequestHeaders(req.headers);

    if (!userId) return bad("Missing user id", 401);
    if (!id) return bad("Missing id", 400);

    const { error } = await getAdmin()
      .from("characters")
      .delete()
      .eq("user_id", userId)
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return bad(e?.message ?? "DELETE failed", 500);
  }
}
