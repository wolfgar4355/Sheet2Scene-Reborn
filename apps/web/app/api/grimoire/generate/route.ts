import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({} as any));

  const s2sUrl = process.env.S2S_API_URL;
  const s2sToken = process.env.S2S_API_TOKEN;

  try {
    if (s2sUrl && s2sToken) {
      const r = await fetch(`${s2sUrl.replace(/\/$/, '')}/api/grimoire/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${s2sToken}`,
        },
        body: JSON.stringify(body),
      });
      const data = await r.json().catch(() => ({}));
      return NextResponse.json(data, { status: r.status });
    }

    const openaiKey = process.env.OPENAI_API_KEY;
    if (!openaiKey) {
      return NextResponse.json(
        { error: 'Generator not configured (set S2S_API_URL+S2S_API_TOKEN or OPENAI_API_KEY).' },
        { status: 501 }
      );
    }

    // Exemple: prompt "grimoire" direct via OpenAI
    const r = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        input: body?.prompt ?? 'Generate grimoire content',
      }),
    });

    const data = await r.json().catch(() => ({}));
    return NextResponse.json(data, { status: r.status });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Internal error' }, { status: 500 });
  }
}
