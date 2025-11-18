import { NextResponse } from 'next/server'
import { getAdmin } from '@/lib/supabase/admin';
import { getUserIdFromRequestHeaders } from '@/lib/getUserId'

type CharacterBody = {
  name?: string
  system?: string
  data?: Record<string, unknown>
}

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status })
}

export async function GET(req: Request) {
  try {
    const userId = getUserIdFromRequestHeaders(new Headers(req.headers));
    if (!userId) return bad('Missing user id')

    const { data, error } = await getAdmin()
      .from('characters')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false })

    if (error) throw error
    return NextResponse.json({ ok: true, data: data ?? [] })
  } catch (e: any) {
    return bad(e?.message ?? 'GET failed', 500)
  }
}

export async function POST(req: Request) {
  try {
    const userId = getUserIdFromRequestHeaders(new Headers(req.headers))
    if (!userId) return bad('Missing user id')

    const body = (await req.json()) as CharacterBody | undefined
    if (!body) return bad('Missing JSON body')

    const name = (body.name ?? '').trim()
    const system = (body.system ?? '').trim()
    const data = body.data ?? {}

    if (!name) return bad('Field "name" is required')
    if (!system) return bad('Field "system" is required')

    const row = { user_id: userId, name, system, data }

    const { data: inserted, error } = await getAdmin()
      .from('characters')
      .insert(row)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ ok: true, character: inserted }, { status: 201 })
  } catch (e: any) {
    return bad(e?.message ?? 'POST failed', 500)
  }
}
