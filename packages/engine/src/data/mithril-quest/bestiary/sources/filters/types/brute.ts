// @ts-nocheck
export const TYPE_BRUTE = {
  role: "Brute",
  description:
    "Dégâts très élevés, immense force physique, faible précision et mobilité souvent réduite.",
  stats: {
    hp: "Très élevés",
    ac: "Faible",
    damage: "Très élevé",
    mobility: "Faible",
  },
  traits: [
    "Attaques lentes mais dévastatrices",
    "Peut assommer, projeter ou écraser",
    "Très résistant aux dégâts physiques",
    "Peu d’attaques à distance",
  ],
  examples: [
    "Ogre sauvage",
    "Géant tribal",
    "Troll muté",
    "Béhémoth des cavernes",
    "Goliath ossifié",
  ],
} as const;
