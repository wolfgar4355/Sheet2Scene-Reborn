// @ts-nocheck
// EXOTIC — Races rares mais jouables

export const MQ_RACES_EXOTIC = [
  {
    key: "celestial-born",
    label: "Célestiel-Né",
    description: "Portant une lumière intérieure, ils sont liés aux plans supérieurs.",
    traits: ["Résistance radieuse", "Lueur divine", "Soin mineur"]
  },
  {
    key: "infernal-born",
    label: "Infernal-Né",
    description: "Marqués par les flammes sombres, ils inspirent crainte et fascination.",
    traits: ["Résistance au feu", "Magie infernale", "Intimidation accrue"]
  },
  {
    key: "titanborn",
    label: "Titanborn",
    description: "Descendants des géants, leur stature imposante leur confère force brute.",
    traits: ["Puissance massive", "Résistance naturelle", "Athlétisme supérieur"]
  },
  {
    key: "elemental-born",
    label: "Élémentaire-Né",
    description: "Enfants des forces primordiales, leur affinité élémentaire est innée.",
    subtypes: [
      "airborne",
      "fireborn",
      "waterborn",
      "earthborn"
    ],
    traits: ["Affinité élémentaire", "Résistance élémentaire"]
  },
  {
    key: "rock-gnome",
    label: "Gnomefer",
    description: "Inventifs et résistants, ils excellent en artisanat technique.",
    traits: ["Ingéniosité", "Connaissance mécanique", "Résistance mentale"]
  },
  {
    key: "forest-gnome",
    label: "Gnomeclipse",
    description: "Rapprochés du monde féerique, ils sont talentueux en illusions.",
    traits: ["Magie illusoire", "Furtivité", "Connexion naturelle"]
  }
] as const;
