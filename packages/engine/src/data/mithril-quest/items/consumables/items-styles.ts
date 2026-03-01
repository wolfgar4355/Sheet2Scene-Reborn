// @ts-nocheck
// ============================================================================
// MQ ENGINE — ITEMS / STYLES IA
// ============================================================================
// Définit les styles visuels utilisés lors de la génération d’items
// (inventaire, props, illustrations, 3D, blueprint, manga, AAA, etc.)
// ============================================================================

export interface MQItemStyle {
  key: string;
  label: string;
  description: string;
  prompt: string;      // Ce bloc est injecté dans le prompt IA
  negativePrompt?: string;
}

export const MQ_ITEM_STYLES: MQItemStyle[] = [
  {
    key: "realistic-like",
    label: "Réalisme AAA",
    description: "Style cinéma/jeu vidéo AAA, matériaux réalistes, ombres fidèles.",
    prompt:
      "ultra detailed, physically based rendering, realistic materials, accurate shadows, high-end video game asset, 8k texture",
    negativePrompt: "cartoon, flat colors, anime eyes, toy-like",
  },
  {
    key: "anime",
    label: "Anime",
    description: "Style anime moderne, lignes propres, couleurs vives.",
    prompt:
      "anime rendering, clean linework, vibrant cel-shading, stylized highlights, modern anime prop design",
    negativePrompt: "photo-realistic, gritty, hyper texture",
  },
  {
    key: "manga",
    label: "Manga Noir & Blanc",
    description: "Style manga N&B avec trames, ombrages et contours marqués.",
    prompt:
      "manga-style black and white, screentones, bold line art, inked shading, high contrast",
    negativePrompt: "colorful, realistic lighting",
  },
  {
    key: "cartoon-us",
    label: "Cartoon US",
    description: "Style cartoon occidental, formes exagérées, rendu fun.",
    prompt:
      "american cartoon style, bold shapes, smooth outlines, expressive exaggeration, colorful prop design",
    negativePrompt: "hyper realism, photo texture",
  },
  {
    key: "printable-3d",
    label: "3D Printable",
    description: "Style STL, surfaces propres, orientation multi-angle, sans texture.",
    prompt:
      "3d printable stl, clean geometry, no textures, single-color matte surface, optimal for 3D printing, high detail sculpt",
    negativePrompt: "color, texture, anime lines, shading gradients",
  },
  {
    key: "mq-mythic",
    label: "MQ Mythic Runes",
    description: "Style signature de Mithril-Quest : runes, brume, lueur mystique.",
    prompt:
      "mithril quest style, ancient runes, mythic glow, arcane mist, enchanted artifact rendering, mystical lighting",
    negativePrompt: "sci-fi tech, cyberpunk neon",
  },
];

export type MQItemStyleType = (typeof MQ_ITEM_STYLES)[number];
