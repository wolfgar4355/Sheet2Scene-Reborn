// @ts-nocheck
// ============================================================================
//  ITEMS POSES — MQ ENGINE
//  Poses IA universelles pour l'affichage, l'inventaire, la boutique, la forge
//  Chaque style contient seed, angle, prompt, tags, etc.
// ============================================================================

export interface MQItemPose {
  id: string;
  label: string;
  angle: string;
  style: string;
  prompt: string;
  seed?: number;
  usage: string[];
  tags: string[];
}

// ============================================================================
//  Poses de base — valables pour TOUT item MQ
// ============================================================================

export const ITEM_POSES: MQItemPose[] = [
  // --------------------------------------------------------------------------
  // REALISTIC-LIKE
  // --------------------------------------------------------------------------
  {
    id: "realistic-front",
    label: "Realistic — Front",
    angle: "front",
    style: "realistic-like",
    seed: 14222,
    usage: ["inventory", "shop", "character-sheet"],
    prompt:
      "ultra detailed studio lighting, realistic object render, sharp edges, volumetric shading",
    tags: ["realistic", "hq", "inventory"],
  },
  {
    id: "realistic-iso",
    label: "Realistic — Isometric",
    angle: "3/4 iso",
    style: "realistic-like",
    seed: 18333,
    usage: ["gear-preview", "forge", "market"],
    prompt:
      "isometric product photography, dramatic rim light, high-detail texture",
    tags: ["realistic", "isometric"],
  },

  // --------------------------------------------------------------------------
  // ANIME
  // --------------------------------------------------------------------------
  {
    id: "anime-cellshade",
    label: "Anime — Cellshade",
    angle: "front",
    style: "anime",
    seed: 33211,
    usage: ["inventory", "ui"],
    prompt:
      "anime cel-shaded style, bold outlines, soft gradients, vibrant colors",
    tags: ["anime", "celshade"],
  },

  // --------------------------------------------------------------------------
  // MANGA
  // --------------------------------------------------------------------------
  {
    id: "manga-ink",
    label: "Manga — Encre",
    angle: "front",
    style: "manga",
    seed: 22991,
    usage: ["manuals", "print", "ui"],
    prompt:
      "manga-style monochrome, black ink lines, halftone shading, crisp silhouette",
    tags: ["manga", "ink"],
  },

  // --------------------------------------------------------------------------
  // CARTOON US
  // --------------------------------------------------------------------------
  {
    id: "cartoon-bold",
    label: "Cartoon US — Bold",
    angle: "front",
    style: "cartoon-us",
    seed: 55123,
    usage: ["game-ui", "icons"],
    prompt:
      "american cartoon style, thick lines, expressive shape, bright saturated colors",
    tags: ["cartoon", "flat"],
  },

  // --------------------------------------------------------------------------
  // BLUEPRINT 3D
  // --------------------------------------------------------------------------
  {
    id: "blueprint-3d",
    label: "Blueprint 3D",
    angle: "orthographic",
    style: "blueprint-3d",
    seed: 77882,
    usage: ["3d-print", "crafting", "tech-doc"],
    prompt:
      "blueprint render, white technical lines on deep blue background, orthographic view",
    tags: ["blueprint", "3d-print", "technical"],
  },
];
