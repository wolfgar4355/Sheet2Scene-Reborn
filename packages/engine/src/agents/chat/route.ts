export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { AGENT_GROUPS } from "../groups";
import { AGENTS } from "../registry";
import { askAgentLLM } from "../../utils/ai";
import { sendDiscord } from "../../utils/discord";

const Body = z.object({
  to: z.union([z.string(), z.array(z.string())]), // "victor" | "@TechCouncil" | ["victor","priya"]
  text: z.string().min(1),
  meta: z.any().optional(), // optionnel (ticket, lien PR, etc.)
});

function resolveRecipients(to: string | string[]): string[] {
  const items = Array.isArray(to) ? to : [to];
  const resolved = new Set<string>();
  for (const raw of items) {
    if (raw.startsWith("@")) {
      const g = raw.slice(1);
      (AGENT_GROUPS[g] || []).forEach(id => resolved.add(id));
    } else {
      resolved.add(raw);
    }
  }
  return [...resolved].filter(id => AGENTS[id]);
}

export async function POST(req: Request) {
  try {
    const body = Body.parse(await req.json());
    const ids = resolveRecipients(body.to);
    if (ids.length === 0) {
      return NextResponse.json({ error: "Aucun destinataire valide" }, { status: 400 });
    }

    // ping Discord (journal)
    await sendDiscord(`📣 ${ids.map(i => `**${AGENTS[i].name}**`).join(", ")} ← "${body.text}"`);

    // fan-out
    const results = await Promise.all(ids.map(async (id) => {
      const agent = AGENTS[id];
      const reply = await askAgentLLM(agent, body.text);
      return { id, name: agent.name, reply };
    }));

    return NextResponse.json({ to: ids, results }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "invalid request" }, { status: 400 });
  }
}
