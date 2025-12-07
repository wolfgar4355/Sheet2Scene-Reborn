// @ts-nocheck
export interface MQAura {
  key: string;
  label: string;
  description: string;
  visualHint: string; // 🎨 Conseils IA
}

export const MQ_AURAS: MQAura[] = [
  { key: "luminous", label: "Lumineuse", description: "Émet une lueur douce.", visualHint: "halo light" },
  { key: "shadow", label: "Ombreuse", description: "Présence sombre.", visualHint: "dark smoke shadow aura" },
  { key: "crimson", label: "Cramoisie", description: "Rouge intense, pulsante.", visualHint: "red energy pulse" },
  { key: "astral", label: "Astrale", description: "Étoiles autour du corps.", visualHint: "starry cosmic aura" },
];
