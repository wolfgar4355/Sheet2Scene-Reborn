// @ts-nocheck
// ============================================================================
// 🎨 MQ ALIGNMENT ICONS — Icônes & Couleurs UI
// ============================================================================
//
// Couplage des Échos MQ avec emojis, couleurs et icônes (ex: lucide-react).
//
// ============================================================================

import type { MQAlignment } from "./alignements";

export interface MQAlignmentIcon {
  key: MQAlignment["key"];
  emoji: string;
  tailwindBg: string;   // classe Tailwind bg-...
  tailwindBorder: string;
  lucideIcon?: string;  // nom d’icône lucide-react (optionnel)
}

export const MQ_ALIGNMENT_ICONS: MQAlignmentIcon[] = [
  {
    key: "aurion",
    emoji: "✨",
    tailwindBg: "bg-yellow-100",
    tailwindBorder: "border-yellow-300",
    lucideIcon: "Sun"
  },
  {
    key: "solvain",
    emoji: "🔥",
    tailwindBg: "bg-orange-100",
    tailwindBorder: "border-orange-300",
    lucideIcon: "Flame"
  },
  {
    key: "verdalis",
    emoji: "🌿",
    tailwindBg: "bg-green-100",
    tailwindBorder: "border-green-300",
    lucideIcon: "Leaf"
  },
  {
    key: "aetheryn",
    emoji: "🔮",
    tailwindBg: "bg-violet-100",
    tailwindBorder: "border-violet-300",
    lucideIcon: "Sparkles"
  },
  {
    key: "nocthyr",
    emoji: "🌘",
    tailwindBg: "bg-slate-100",
    tailwindBorder: "border-slate-300",
    lucideIcon: "MoonStar"
  },
  {
    key: "emberfall",
    emoji: "⚔️",
    tailwindBg: "bg-red-100",
    tailwindBorder: "border-red-300",
    lucideIcon: "Sword"
  },
  {
    key: "gravemind",
    emoji: "💀",
    tailwindBg: "bg-neutral-100",
    tailwindBorder: "border-neutral-300",
    lucideIcon: "Skull"
  },
  {
    key: "tempestris",
    emoji: "🌪️",
    tailwindBg: "bg-cyan-100",
    tailwindBorder: "border-cyan-300",
    lucideIcon: "CloudLightning"
  },
  {
    key: "obsidian",
    emoji: "🕳️",
    tailwindBg: "bg-fuchsia-100",
    tailwindBorder: "border-fuchsia-300",
    lucideIcon: "CircleSlash2"
  }
];

// Helper pratique pour retrouver l’icône par key
export function getAlignmentIcon(key: MQAlignment["key"]): MQAlignmentIcon | undefined {
  return MQ_ALIGNMENT_ICONS.find(a => a.key === key);
}
