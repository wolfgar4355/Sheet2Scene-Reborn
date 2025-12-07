import { AGENTS } from "@engine/agents/registry";
import type { AgentTask } from "@engine/agents/registry";

export async function POST(req: Request) {
  // Le namespace AgentTask ne peut pas être utilisé comme type → cast complet
  const task = (await req.json()) as any;

  const agent = AGENTS[task.target];
  if (!agent) {
    return Response.json({ error: "Unknown agent" }, { status: 400 });
  }

  const payload = {
    model: agent.model ?? "gpt-4.1",
    messages: [
      { role: "system", content: agent.system },
      { role: "user", content: JSON.stringify(task) }
    ]
  };

  const out = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(r => r.json());

  return Response.json(out);
}
