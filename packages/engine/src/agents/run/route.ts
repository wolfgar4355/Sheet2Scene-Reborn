// packages/engine/src/agents/run/route.ts

import { AGENTS } from "@engine/agents/registry";
import type { AgentTask } from "@engine/agents/registry";

export async function POST(req: Request) {
  // 1️⃣ Parsing typé (pas de namespace, pas de cast any global)
  const task: AgentTask = await req.json();

  // 2️⃣ Validation minimale
  if (!task?.target || typeof task.target !== "string") {
    return Response.json(
      { error: "Invalid AgentTask payload" },
      { status: 400 }
    );
  }

  // 3️⃣ Résolution de l’agent
  const agent = AGENTS[task.target];
  if (!agent) {
    return Response.json(
      { error: `Unknown agent: ${task.target}` },
      { status: 400 }
    );
  }

  // 4️⃣ Payload OpenAI canon
  const payload = {
    model: agent.model ?? "gpt-4.1",
    messages: [
      { role: "system", content: agent.system ?? "" },
      {
        role: "user",
        content: JSON.stringify(task, null, 2),
      },
    ],
  };

  // 5️⃣ Appel OpenAI
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    return Response.json(
      { error: "OpenAI request failed", details: err },
      { status: 500 }
    );
  }

  const out = await res.json();
  return Response.json(out);
}
