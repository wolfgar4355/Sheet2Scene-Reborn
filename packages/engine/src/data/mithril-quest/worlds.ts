// packages/engine/src/content/fantasy/worlds.ts

export const FANTASY_WORLD_ID = "fantasy" as const;

export const WORLDS = [
  {
    id: FANTASY_WORLD_ID,     // reste "fantasy" pour les routes /worlds/fantasy, /grimoire/fantasy
    key: "fantasy",           // clé interne pour le moteur / contenu
    title: "Mithril Quest",   // 🔥 nouveau nom officiel
    emoji: "🧙‍♂️",
    tags: ["High Fantasy", "Mithril Quest", "Mithril Engine"],
  },
];
