// apps/web/config/artAgents.ts
export type ArtAgentId = "aiko-manga" | "elias-real" | "rowan-fantasy";

export type CharacterBrief = {
  name?: string;
  race?: string;
  class?: string;
  tags?: string[];
  bio?: string;
};

export type ArtStyleOptions = {
  quality?: "low" | "medium" | "high";
  size?: "512x512" | "768x768" | "1024x1024";
  background?: "transparent" | "simple" | "scenic";
  format?: "png" | "jpg" | "webp";
};

export type ArtAgent = {
  id: ArtAgentId;
  label: string;
  system: string;
  userTemplate: (c: CharacterBrief) => string;
  defaultOptions: ArtStyleOptions;
};

const joinTags = (tags?: string[]) => (tags && tags.length ? tags.join(", ") : "—");

export const ART_AGENTS: ArtAgent[] = [
  {
    id: "aiko-manga",
    label: "Aiko — Manga/Anime",
    system:
      "Illustratrice manga/anime. Traits propres, yeux expressifs, palette harmonieuse. Respecte strictement la fiche.",
    userTemplate: (c) => `
Portrait style anime japonais (léger 3/4).
Nom: ${c.name ?? "—"}
Race: ${c.race ?? "—"}
Classe / Rôle: ${c.class ?? "—"}
Traits visuels / tags: ${joinTags(c.tags)}
Bio / Contexte: ${c.bio ?? "—"}
Détails: lineart propre, ombrages doux, fond ${c.tags?.includes("fond détaillé") ? "détaillé" : "simple"}.
`,
    defaultOptions: { quality: "medium", size: "768x768", background: "simple", format: "png" },
  },
  {
    id: "elias-real",
    label: "Elias — Portrait réaliste",
    system:
      "Portraitiste réaliste. Lumière naturelle, textures peau crédibles. Priorise la ressemblance à la fiche.",
    userTemplate: (c) => `
Portrait réaliste (plan buste/poitrine).
Nom: ${c.name ?? "—"} | Race: ${c.race ?? "—"} | Classe: ${c.class ?? "—"}
Traits / tags: ${joinTags(c.tags)}
Contexte: ${c.bio ?? "—"}
Style: cinématographique, fond discret.
`,
    defaultOptions: { quality: "medium", size: "1024x1024", background: "simple", format: "jpg" },
  },
  {
    id: "rowan-fantasy",
    label: "Rowan — Illustration fantasy",
    system:
      "Illustrateur fantasy épique (couvertures). Composition dramatique, textures riches. Respect strict de la fiche.",
    userTemplate: (c) => `
Illustration fantasy héroïque.
Nom: ${c.name ?? "—"} (Race: ${c.race ?? "—"}, Classe: ${c.class ?? "—"})
Tags: ${joinTags(c.tags)}
Bio: ${c.bio ?? "—"}
Ambiance: majestueuse, fond scenic adapté.
`,
    defaultOptions: { quality: "high", size: "1024x1024", background: "scenic", format: "png" },
  },
];

export function buildPrompt(agentId: ArtAgentId, brief: CharacterBrief) {
  const agent = ART_AGENTS.find(a => a.id === agentId);
  if (!agent) throw new Error("Unknown agentId");
  return {
    system: agent.system,
    prompt: agent.userTemplate(brief),
    options: agent.defaultOptions,
  };
}
export default ART_AGENTS;
