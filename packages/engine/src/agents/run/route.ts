import { AGENTS } from "../registry";
import type { AgentTask } from "../registry";

export async function POST(req: Request) {
  // 1️⃣ Parsing contrôlé (unknown → AgentTask)
  const raw = (await req.json()) as unknown;

  // 2️⃣ Validation minimale runtime
  if (
    typeof raw !== "object" ||
    raw === null ||
    typeof (raw as any).target !== "string"
  ) {
    return Response.json(
      { error: "Invalid AgentTask payload" },
      { status: 400 }
    );
  }

  const task = raw as AgentTask;

  // 3️⃣ Résolution de l’agent
  const agent = AGENTS[task.target];
  if (!agent) {
    return Response.json(
      { error: `Unknown agent: ${task.target}` },
      { status: 400 }
    );
  }

  // 4️⃣ Payload OpenAI
  const payload = {
    model: agent.model ?? "gpt-4.1",
    messages: [
      { role: "system", content: agent.system ?? "" },
      { role: "user", content: JSON.stringify(task, null, 2) },
    ],
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return Response.json(
      { error: "OpenAI request failed", details: await res.text() },
      { status: 500 }
    );
  }

  return Response.json(await res.json());
}
