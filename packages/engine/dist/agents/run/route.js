import { AGENTS } from "@engine/agents/registry";
export async function POST(req) {
    const task = (await req.json());
    const agent = AGENTS[task.target];
    if (!agent) {
        return Response.json({ error: "Unknown agent" }, { status: 400 });
    }
    // On construit une requête pour OpenAI ou Anthropic
    const payload = {
        model: agent.model ?? "gpt-4.1",
        messages: [
            { role: "system", content: agent.system },
            { role: "user", content: JSON.stringify(task) }
        ]
    };
    // Appel LLM
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
