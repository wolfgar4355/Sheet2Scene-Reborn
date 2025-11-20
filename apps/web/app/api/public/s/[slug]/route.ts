// app/api/public/s/[slug]/route.ts
import { NextResponse } from 'next/server';
import { getAdmin } from '@lib/supabase/admin';

export const runtime = 'nodejs';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const { data: share, error: e1 } = await getAdmin()
      .from('shares')
      .select('*')
      .eq('slug', slug)
      .single();
    if (e1 || !share) throw e1 || new Error('Share not found');

    if (share.expires_at && new Date(share.expires_at) < new Date()) {
      return NextResponse.json({ ok: false, error: 'Share link expired' }, { status: 410 });
    }

    const { data: character, error: e2 } = await getAdmin()
      .from('characters')
      .select('*')
      .eq('id', share.character_id)
      .single();
    if (e2) throw e2;

    return NextResponse.json({ ok: true, character });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'Not found' }, { status: 404 });
  }
}
