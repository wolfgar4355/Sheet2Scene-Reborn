import { NextResponse } from 'next/server';
import { getServerUser, createSupabaseServer } from '@/lib/supabase/server';
import { getCharactersByUser, createCharacter, CharacterBody } from 'engine';

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function GET(req: Request) {
  try {
    const user = await getServerUser();
    if (!user) return bad('Unauthorized', 401);

    const supabase = createSupabaseServer();
    if (!supabase) return bad('Database error', 500);

    const characters = await getCharactersByUser(supabase, user.id);
    return NextResponse.json({ ok: true, data: characters });
  } catch (e: any) {
    return bad(e?.message ?? 'GET failed', 500);
  }
}

export async function POST(req: Request) {
  try {
    const user = await getServerUser();
    if (!user) return bad('Unauthorized', 401);

    const supabase = createSupabaseServer();
    if (!supabase) return bad('Database error', 500);

    const body = (await req.json()) as CharacterBody | undefined;
    if (!body) return bad('Missing JSON body');

    const inserted = await createCharacter(supabase, user.id, body);
    return NextResponse.json({ ok: true, character: inserted }, { status: 201 });
  } catch (e: any) {
    return bad(e?.message ?? 'POST failed', 500);
  }
}
