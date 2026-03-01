// @ts-nocheck
import type { EraDefinition } from "../../types-worlds";

export const DARK_AGE: EraDefinition[] = [
  {
    id: "dark-age",
    worldId: "fantasy", // si ton monde MQ principal s'appelle fantasy
    name: "Âge Sombre",
    shortDescription:
      "Peste, invasions, magie corrompue et royaumes brisés. Un monde de survie, de fanatisme et de ténèbres.",
    recommendedLevels: [1, 10],

    themes: ["désolation", "fanatisme", "occultisme", "survie"],

    magieDominante: ["malédictions", "nécromancie", "magie interdite"],

    technologie: ["fer brut", "armes lourdes", "reliques corrompues"],

    factions: [
      "Inquisiteurs de l’Aube",
      "Culte du Voile Gris",
      "Cavaliers du Néant",
    ],

    ennemis: ["morts-vivants", "cultistes", "démons mineurs"],

    climat: ["marécages", "cendres", "forêts mortes"],

    events: [
      "La Grande Peste",
      "Chute des Remparts Noirs",
      "Éclipse Rouge",
    ],

    tags: ["dark", "plague", "grim", "necrotic", "occult"],
  },
] as const;
