export const TYPE_CASTER = {
  role: "Caster",
  description:
    "Maître des arcanes, fragile mais extrêmement dangereux à distance grâce à une magie dévastatrice.",
  stats: {
    hp: "Faibles",
    ac: "Faible",
    damage: "Très élevé (magique)",
    mobility: "Moyenne",
  },
  traits: [
    "Sorts de dégâts puissants",
    "Contrôle du terrain",
    "Capable d’effets de zone",
    "Très vulnérable en mêlée",
  ],
  examples: [
    "Acolyte élémentaire",
    "Sorcier sauvage",
    "Mage du chaos",
    "Érudit arcanique",
    "Invocateur des flammes",
  ],
} as const;
