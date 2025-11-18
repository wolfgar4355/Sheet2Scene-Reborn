import { NextResponse } from 'next/server';
import { getAdmin } from '@/lib/supabase/admin';
import { getUserIdFromRequestHeaders } from '@/lib/getUserId';

// petit générateur d'id (12 chars)
function nanoid(size = 12) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let id = '';
  for (let i = 0; i < size; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

export async function POST(req: Request) {
  try {
    const userId = getUserIdFromRequestHeaders(new Headers(req.headers));
    const body = (await req.json()) as { characterId: string; expiresAt?: string };
    const { characterId, expiresAt } = body;

    const slug = nanoid(12);

    const { data, error } = await getAdmin()
      .from('shares')
      .insert({
        slug,
        character_id: characterId,
        user_id: userId,
        expires_at: expiresAt || null,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ ok: true, slug, share: data });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message || 'bad payload' }, { status: 400 });
  }
}
