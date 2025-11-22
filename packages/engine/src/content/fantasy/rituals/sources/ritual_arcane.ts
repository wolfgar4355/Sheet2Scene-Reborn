import type { Ritual } from "../schema.ts";

export const RITUALS_ARCANE: Ritual[] = [
  {
    id: "teleport_circle",
    label: "Cercle de Téléportation",
    school: "arcane",
    level: 8,
    castTime: "4 heures",
    ingredients: ["craie fine", "poussière d'argent", "rune"],
    description:
      "Crée un cercle permanent permettant des téléportations sûres vers des lieux marqués."
  },
  {
    id: "arcane_lock",
    label: "Sceau Arcanique",
    school: "arcane",
    level: 4,
    castTime: "1 heure",
    ingredients: ["poudre de quartz", "verrou en cuivre"],
    description:
      "Scelle magiquement une porte ou un coffre. Seuls ceux choisis par le lanceur peuvent l'ouvrir."
  },
  {
    id: "astral_projection",
    label: "Projection Astrale",
    school: "arcane",
    level: 9,
    castTime: "8 heures",
    ingredients: ["fil d'or", "encens rare"],
    description:
      "Sépare l'âme du corps pour voyager dans les plans supérieurs ou l'Astral."
  },
  {
    id: "identify_arcane",
    label: "Identification Suprême",
    school: "arcane",
    level: 3,
    castTime: "1 heure",
    ingredients: ["perle", "parchemin vierge"],
    description:
      "Analyse profondément un artefact magique et révèle son origine, son créateur et sa puissance réelle."
  },
  {
    id: "ward_barrier",
    label: "Barrière Runique",
    school: "arcane",
    level: 6,
    castTime: "2 heures",
    ingredients: ["poussière de saphir", "runes peintes"],
    description:
      "Érige une barrière invisible qui bloque la magie d'un type déterminé."
  },
  {
    id: "mirror_scry",
    label: "Miroir de Divination",
    school: "arcane",
    level: 5,
    castTime: "2 heures",
    ingredients: ["miroir poli", "fumée d'encens"],
    description:
      "Permet de voir un individu distant ou un lieu marqué par le mage."
  },
  {
    id: "bind_element",
    label: "Lien Élémentaire",
    school: "arcane",
    level: 7,
    castTime: "3 heures",
    ingredients: ["gemme élémentaire", "cercle de sel"],
    description:
      "Lie temporairement un élémentaire à un objet ou une arme."
  },
  {
    id: "phase_door_ritual",
    label: "Porte de Phase",
    school: "arcane",
    level: 6,
    castTime: "2 heures",
    ingredients: ["ambre", "bâton", "glyphe"],
    description:
      "Crée un passage intangible permettant de traverser murs et obstacles."
  }
];
