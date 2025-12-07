// @ts-nocheck
// ============================================================================
// 🎨 MQ AI STYLE ENGINE — Styles d’illustration pour poses & scènes
// ============================================================================

export interface MQ_AI_Style {
  key: string;           // identifiant stable ex: "realistic"
  label: string;         // affichage pour UI
  description: string;   // pour onboarding / tooltip
  promptChunk: string;   // bloc injecté dans chaque prompt IA
  icon?: string;         // unicode simple pour UI
  category: "realistic" | "anime" | "manga" | "cartoon" | "3d";
}

export const MQ_AI_STYLES: MQ_AI_Style[] = [

  // --------------------------------------------------------------------------
  // REALISTIC
  // --------------------------------------------------------------------------
  {
    key: "realistic",
    label: "Réaliste",
    category: "realistic",
    icon: "📸",
    description: "Style réaliste détaillé, éclairage cinématique, rendu high-fantasy.",
    promptChunk:
      "Ultra-detailed realistic fantasy illustration, cinematic lighting, volumetric fog, sharp texture detail, 35mm lens, dramatic shadows, high-end concept art."
  },

  // --------------------------------------------------------------------------
  // ANIME
  // --------------------------------------------------------------------------
  {
    key: "anime-classic",
    label: "Anime",
    category: "anime",
    icon: "✨",
    description: "Anime classique, couleurs propres et expressions fortes.",
    promptChunk:
      "anime style, vibrant colors, expressive eyes, clean lineart, soft shading, Japanese animation aesthetic."
  },

  // --------------------------------------------------------------------------
  // MANGA — Variantes
  // --------------------------------------------------------------------------
  {
    key: "manga-shonen",
    label: "Manga Shōnen",
    category: "manga",
    icon: "⚡",
    description: "Shōnen dynamique : lignes énergiques, poses puissantes.",
    promptChunk:
      "manga shonen style, dynamic poses, speed lines, bold ink, high contrast, action-focused composition."
  },
  {
    key: "manga-seinen",
    label: "Manga Seinen",
    category: "manga",
    icon: "🗡️",
    description: "Seinen sombre : détails réalistes, tons matures.",
    promptChunk:
      "seinen manga style, detailed shading, realistic anatomy, dark tone, gritty ink texture."
  },
  {
    key: "manga-shojo",
    label: "Manga Shōjo",
    category: "manga",
    icon: "🌸",
    description: "Shōjo poétique : douceur, paillettes, yeux expressifs.",
    promptChunk:
      "shojo manga style, soft outlines, sparkles, romantic lighting, delicate features, expressive eyes."
  },
  {
    key: "manga-chibi",
    label: "Manga Chibi",
    category: "manga",
    icon: "🐣",
    description: "Chibi super-deformé, proportions mignonnes.",
    promptChunk:
      "chibi style, super-deformed proportions, big eyes, simple shading, cute aesthetic."
  },

  // --------------------------------------------------------------------------
  // CARTOON US
  // --------------------------------------------------------------------------
  {
    key: "cartoon-disney",
    label: "Cartoon Disney",
    category: "cartoon",
    icon: "🌀",
    description: "Style Disney moderne, formes rondes, couleurs saturées.",
    promptChunk:
      "Disney-inspired character style, rounded shapes, warm lighting, expressive facial animation."
  },
  {
    key: "cartoon-dreamworks",
    label: "Cartoon DreamWorks",
    category: "cartoon",
    icon: "🎭",
    description: "Style DreamWorks, dynamique et légèrement satirique.",
    promptChunk:
      "DreamWorks animation style, stylized features, expressive poses, cinematic staging."
  },
  {
    key: "cartoon-comic-us",
    label: "Style Comic US",
    category: "cartoon",
    icon: "💥",
    description: "Style bande dessinée américaine (Marvel/DC), encrage bold.",
    promptChunk:
      "American comic book style, bold ink, dramatic perspective, halftone texture, superhero aesthetic."
  },

  // --------------------------------------------------------------------------
  // 3D PRINTING
  // --------------------------------------------------------------------------
  {
    key: "3d-print",
    label: "3D Print",
    category: "3d",
    icon: "🖨️",
    description: "Rendu style figurine STL : monochrome, sculpté, idéal pour minis.",
    promptChunk:
      "3D printing sculpt style, ZBrush hard sculpt, no textures, monochrome resin look, clean geometry, miniature figure aesthetic."
  },
];
