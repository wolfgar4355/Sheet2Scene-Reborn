// app/api/agents/sync/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { AGENTS, AGENT_GROUPS } from "../registry";
import { readEnv } from "@lib/env";

type Agent = {
  id: string;
  name: string;
  role?: string | null;
  locale: string;
  model: string;
  system: string;
};
type AgentMap = Record<string, Agent>;
type GroupMap = Record<string, string[]>;

export async function POST() {
  const env = readEnv();
  if (!env) {
    return NextResponse.json(
      { ok: false, stage: "env", error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" },
      { status: 500 }
    );
  }

  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  try {
    // 1) Agents
    const agents = Object.values(AGENTS as AgentMap).map((a: Agent) => ({
      id: a.id,
      name: a.name,
      role: a.role ?? null,
      meta: { locale: a.locale, model: a.model, system: a.system },
    }));
    const { error: e1 } = await supabase.from("ai_agents").upsert(agents);
    if (e1) return NextResponse.json({ ok: false, stage: "agents", error: e1.message });

    // 2) Groupes
    const groups = Object.keys(AGENT_GROUPS as GroupMap).map((id: string) => ({ id }));
    const { error: e2 } = await supabase.from("ai_groups").upsert(groups);
    if (e2) return NextResponse.json({ ok: false, stage: "groups", error: e2.message });

    // 3) Liens groupe ↔ agent
    const links = Object.entries(AGENT_GROUPS as GroupMap)
      .flatMap(([group_id, members]) => members.map((agent_id: string) => ({ group_id, agent_id })));

    await supabase.from("ai_group_members").delete().neq("group_id", "");
    const { error: e3 } = await supabase.from("ai_group_members").upsert(links);
    if (e3) return NextResponse.json({ ok: false, stage: "members", error: e3.message });

    return NextResponse.json({ ok: true, agents: agents.length });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, stage: "unknown", error: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}
