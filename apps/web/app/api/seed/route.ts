export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
const isProd = process.env.NODE_ENV === 'production'
const isSeedEnabled = process.env.SEED_ENABLED === '1' && !isProd

export async function POST(req: Request) {
  if (!isSeedEnabled) return new Response('Not found', { status: 404 })

  const secret = (process.env.SEED_SECRET ?? '').trim()
  const got = (req.headers.get('x-seed-secret') ?? '').trim()
  if (!secret || got !== secret) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }

  // ... tes upserts ...
  return NextResponse.json({ ok: true })
}
