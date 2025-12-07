// @ts-nocheck
// ============================================================================
// MQ ENGINE — ITEMS / POSES IA
// ============================================================================
// Décrit les poses, angles et cadrages de rendu pour générer des items
// en IA (image, sprite, 3D, inventaire, fiche personnage, vitrine).
// ============================================================================

export interface MQItemPose {
  key: string;
  label: string;
  description: string;
  camera: {
    angle: "front" | "side" | "isometric" | "top" | "perspective";
    distance: "close" | "medium" | "far";
    rotation?: number; // degrés
  };
  lighting: {
    type: "studio" | "dramatic" | "flat" | "rim" | "magic";
    intensity: number; // 1 à 10
  };
  background: "transparent" | "neutral-dark" | "neutral-light" | "parchment" | "void";
  recommendedStyles?: string[];
}

export const MQ_ITEM_POSES: MQItemPose[] = [
  {
    key: "inventory-icon",
    label: "Icône Inventaire",
    description: "Pose simple, angle isométrique léger, fond transparent.",
    camera: { angle: "isometric", distance: "close", rotation: 25 },
    lighting: { type: "studio", intensity: 6 },
    background: "transparent",
  },
  {
    key: "showcase",
    label: "Vitrine / Showcase",
    description: "Pose artistique avec éclairage dramatique, idéale pour artbook.",
    camera: { angle: "perspective", distance: "medium", rotation: 10 },
    lighting: { type: "dramatic", intensity: 8 },
    background: "neutral-dark",
  },
  {
    key: "blueprint",
    label: "Plan Technique / Blueprint",
    description: "Pose top-down fidèle, idéale pour crafting ou blueprint 3D.",
    camera: { angle: "top", distance: "close" },
    lighting: { type: "flat", intensity: 5 },
    background: "neutral-light",
  },
  {
    key: "tabletop",
    label: "VTT / Table",
    description: "Vue légèrement inclinée, idéal pour VTT / battlemap.",
    camera: { angle: "top", distance: "medium", rotation: 15 },
    lighting: { type: "studio", intensity: 7 },
    background: "parchment",
  },
  {
    key: "held-in-hand",
    label: "Tenue en Main",
    description: "Pose montrant l’item tenu par une main neutre (pas d’humanoïde complet).",
    camera: { angle: "side", distance: "close" },
    lighting: { type: "magic", intensity: 6 },
    background: "void",
  },
];

export type MQItemPoseType = (typeof MQ_ITEM_POSES)[number];
