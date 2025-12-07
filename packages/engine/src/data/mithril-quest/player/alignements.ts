// @ts-nocheck
// ============================================================================
// 🔮 MQ ALIGNMENTS — Échos de l’Âme (Signature System MQ)
// ============================================================================

export interface MQAlignment {
  key: string;
  label: string;
  color: string;
  summary: string;
  description: string;
}

export const MQ_ALIGNMENTS: MQAlignment[] = [
  {
    key: "aurion",
    label: "Aurion — Écho de Lumière",
    color: "#f4e8a6",
    summary: "Protecteur, éthique, lumineux.",
    description:
      "Un cœur noble qui cherche à protéger les autres et à illuminer les ténèbres."
  },
  {
    key: "solvain",
    label: "Solvain — Écho du Courage",
    color: "#ffb366",
    summary: "Brave, déterminé, passionné.",
    description:
      "La bravoure et la volonté comme armes principales, guidé par un feu intérieur."
  },
  {
    key: "verdalis",
    label: "Verdalis — Écho de Vie",
    color: "#79d48a",
    summary: "Empathique, naturel, guérisseur.",
    description:
      "Connexion profonde à la nature, au soin, à l’équilibre vivant."
  },
  {
    key: "aetheryn",
    label: "Aetheryn — Écho des Arcanes",
    color: "#b09cff",
    summary: "Mystique, érudit, curieux.",
    description:
      "La magie, les secrets et la connaissance sont votre langage."
  },
  {
    key: "nocthyr",
    label: "Nocthyr — Écho des Ombres",
    color: "#595f81",
    summary: "Discret, subtil, ambigu.",
    description:
      "Un esprit silencieux, rusé, qui navigue entre lumière et ténèbres."
  },
  {
    key: "emberfall",
    label: "Emberfall — Écho de Fureur",
    color: "#e84a4a",
    summary: "Intense, impulsif, ardent.",
    description:
      "La colère est un moteur, parfois destructeur, parfois salvateur."
  },
  {
    key: "gravemind",
    label: "Gravemind — Écho du Néant",
    color: "#6c6c6c",
    summary: "Froid, analytique, implacable.",
    description:
      "Le vide vous guide : logique pure, calcul, absence d’émotion."
  },
  {
    key: "tempestris",
    label: "Tempestris — Écho du Chaos",
    color: "#3cc0ff",
    summary: "Imprévisible, libre, changeant.",
    description:
      "Résonance d’âme instable : créativité, tempêtes, mouvement constant."
  },
  {
    key: "obsidian",
    label: "Obsidian — Écho de Corruption",
    color: "#2d1b27",
    summary: "Sombre, pactisant, dangereux.",
    description:
      "Ambition dévorante, pouvoir interdit, pactes scellés dans l’ombre."
  }
];
