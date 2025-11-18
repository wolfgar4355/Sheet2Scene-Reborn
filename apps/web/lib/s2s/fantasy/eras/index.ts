export const FANTASY_ERAS = [
  {
    key: "medieval-high",
    label: "Médiéval (High Fantasy)",
    description:
      "Époque classique des royaumes, ordres chevaleresques, grands dragons et magie omniprésente.",
    magicLevel: "high",
    technology: "medieval",
    theme: "Aventure héroïque"
  },
  {
    key: "dark-ages",
    label: "Âges Sombres",
    description:
      "Un monde ravagé par des guerres anciennes. Sorcellerie interdite, monstres dans l'ombre, famine et peste.",
    magicLevel: "low",
    technology: "primitive",
    theme: "Horreur et survie"
  },
  {
    key: "arcane-renaissance",
    label: "Renaissance Arcanique",
    description:
      "La magie est maîtrisée comme une science. Grandes académies, inventions magiques, conflits politiques sophistiqués.",
    magicLevel: "high",
    technology: "arcanic",
    theme: "Intrigues politiques et savoir"
  },
  {
    key: "mythic-age",
    label: "Âge Mythique",
    description:
      "Les dieux marchent encore parmi les mortels. Créatures primordiales, épreuves divines, héros légendaires.",
    magicLevel: "very-high",
    technology: "primitive",
    theme: "Mythologie et destin"
  },
  {
    key: "iron-dominion",
    label: "Domination de Fer",
    description:
      "Première apparition des machines, armures lourdes raffinées, guildes militarisées et magie instable.",
    magicLevel: "medium",
    technology: "pre-steampunk",
    theme: "Expansion et conflits technologiques"
  },
  {
    key: "shattered-realms",
    label: "Royaumes Brisés",
    description:
      "Le monde a été déchiré par une catastrophe magique. Failles dimensionnelles, énergies sauvages et territoires hostiles.",
    magicLevel: "chaotic",
    technology: "medieval",
    theme: "Exploration et survie"
  }
] as const;

export type FantasyEra = typeof FANTASY_ERAS[number];
