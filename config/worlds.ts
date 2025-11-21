import type { World } from "@types/worlds";

export const WORLDS: World[] = [
  {
    id: "fantasy",
    title: "Fantasy",
    specs: {
      character: {
        fields: [
          { id: "name", title: "Nom", placeholder: "Eloann, Arya…" },
          { id: "race", title: "Race", placeholder: "Elfe, Nain, Humain…" },
          { id: "class", title: "Classe", placeholder: "Mage, Guerrier…" },
          { id: "goal", title: "But", type: "long" },
          { id: "background", title: "BG", type: "long", placeholder: "Fils d’un roi déchu…" },
        ],
      },
      story: {
        fields: [
          { id: "hook", title: "Accroche" },
          { id: "twist", title: "Révélation" },
          { id: "antagonist", title: "Antagoniste" },
          { id: "format", title: "Format", type: "long" },
        ],
      },
    },
    generators: {
      characterPrompt: (d) => `Crée une fiche de personnage fantasy courte et jolie.`,
      storyPrompt: (d) => `Donne un synopsis Fantasy pour une quête. \nLieu: ${d.hook ?? "???"}`,
    },
    agents: [
      {
        name: "evara",
        modelId: "gpt-4o-mini",
        style: "dark-fantasy",
      },
    ],
    theme: {
      accentColor: "#B8BFCF",
      bgColor: "",
      textColor: "",
      parchmentTexture: "/textures/parchemin-fantasy.png",
    },
  },
  {
    id: "galactic",
    title: "Galactic Saga",
    specs: {
      characters: {
        fields: [
          { id: "name", title: "Nom" },
          { id: "background", title: "Historique", type: "long" },
          { id: "class", title: "Rôle" },
          { id: "goal", title: "Mission" },
          { id: "mood", title: "Tonalité" },
          { id: "tags", title: "Tags", type: "tags", placeholder: "espion, droïde…" },
        ],
      },
      story: {
        fields: [
          { id: "sector", title: "Secteur Galactique" },
          { id: "threat", title: "Menace" },
          { id: "twist", title: "Twist", type: "long" },
        ],
      },
    },
    generators: {
      characterPrompt: (d) => `Crée un personnage Space Opera (style expédition galactique).`,
      storyPrompt: (d) => `Pitch Space Opera. \nSecteur: ${d.sector ?? "???"}`,
    },
    agents: [
      {
        name: "lazaro",
        modelId: "gpt-4o-mini",
        style: "sci-fi-neon",
      },
    ],
    theme: {
      accentColor: "#00F7FF",
      bgColor: "",
      textColor: "",
      parchmentTexture: "/textures/parchemin-galactic.png",
    },
  },
  {
    id: "pathseeker",
    title: "Pathseeker",
    specs: {
      characters: {
        fields: [
          { id: "name", title: "Nom" },
          { id: "background", title: "Passé", type: "long" },
          { id: "goal", title: "Objectif" },
          { id: "virtue", title: "Vertu" },
          { id: "vice", title: "Vice" },
          { id: "memory", title: "Souvenirs" },
        ],
      },
      story: {
        fields: [
          { id: "region", title: "Région" },
          { id: "terrain", title: "Terrain" },
          { id: "track", title: "Sentier" },
          { id: "obstacle", title: "Obstacle" },
          { id: "reward", title: "Récompense" },
        ],
      },
    },
    generators: {
      characterPrompt: (d) => `Crée un marcheur spirituel grounded (Pathseeker).`,
      storyPrompt: (d) => `Synopsis lent (jeu fantasy survival). \nRégion: ${d.region ?? "???"}`,
    },
    agents: [
      {
        name: "evara",
        modelId: "gpt-4o-mini",
        style: "gritty-natural",
      },
    ],
    theme: {
      accentColor: "#AA8240",
      bgColor: "",
      textColor: "",
      parchmentTexture: "/textures/parchemin-pathseeker.png",
    },
  },
  {
    id: "custom",
    title: "Custom",
    specs: {
      characters: {
        fields: [
          { id: "name", title: "Nom" },
          { id: "concept", title: "Concept", type: "long" },
        ],
      },
      story: {
        fields: [
          { id: "idea", title: "Idée", type: "long" },
        ],
      },
    },
    generators: {
      characterPrompt: (d) => `Fiche personnage concise pour un univers personnalisé.`,
      storyPrompt: (d) => `Synopsis court pour univers personnalisé. \nIdée: ${d.idea ?? "???"}`,
    },
    agents: [
      {
        name: "noak",
        modelId: "gpt-4o-mini",
        style: "neutral-generic",
      },
    ],
    theme: {
      accentColor: "#4F4F4F",
      bgColor: "",
      textColor: "",
      parchmentTexture: "/textures/parchemin-custom.png",
    },
  },
];

export function worldById(id: string | null | undefined) {
  return WORLDS.find((w) => w.id === id);
}
