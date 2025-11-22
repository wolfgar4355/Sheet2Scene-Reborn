// schools.ts — Écoles de magie S2S (Fantasy & base pour les autres mondes)

import type { SpellSchoolId } from "./schema";

export interface SpellSchool {
  id: SpellSchoolId;
  label: string;
  colorHint: string;      // hint pour l’UI (pas obligé d’être utilisé tout de suite)
  iconHint: string;       // hint pour icône (emoji ou nom interne)
  themes: string[];       // thèmes principaux
  typicalCasters: string[]; // classes / archétypes typiques
  description: string;
}

export const SPELL_SCHOOLS: SpellSchool[] = [
  {
    id: "pyromancy",
    label: "Pyromancie",
    colorHint: "#ff6b3a",
    iconHint: "🔥",
    themes: ["feu", "explosions", "brûlures", "lumière"],
    typicalCasters: ["sorciers du feu", "mages de bataille", "prêtres du soleil"],
    description:
      "La magie des flammes, de la chaleur et de la lumière destructrice."
  },
  {
    id: "frostbinding",
    label: "Cryomancie",
    colorHint: "#7fd0ff",
    iconHint: "❄️",
    themes: ["glace", "ralentissement", "contrôle de terrain"],
    typicalCasters: ["mystiques du givre", "gardiens du nord"],
    description:
      "La magie du froid mordant, des barrières de glace et du contrôle du mouvement."
  },
  {
    id: "stormcalling",
    label: "Invocation des Tempêtes",
    colorHint: "#c6f0ff",
    iconHint: "⚡",
    themes: ["tonnerre", "éclairs", "vents violents"],
    typicalCasters: ["chamans tempétueux", "mages orageux"],
    description:
      "Le pouvoir des orages, de l’électricité et des bourrasques destructrices."
  },
  {
    id: "terraforge",
    label: "Terraforgie",
    colorHint: "#c58b4b",
    iconHint: "⛰️",
    themes: ["terre", "pierre", "métal", "structure"],
    typicalCasters: ["géomanciens", "forgerons mystiques", "druides rocheux"],
    description:
      "La manipulation de la terre, de la pierre et des métaux pour défendre ou écraser."
  },
  {
    id: "aethercraft",
    label: "Éthérurgie",
    colorHint: "#b48cff",
    iconHint: "✨",
    themes: ["énergie pure", "force", "gravité", "magie brute"],
    typicalCasters: ["arcanistes", "savants mystiques"],
    description:
      "La magie de l’énergie pure, des champs de force et des distorsions magiques."
  },
  {
    id: "vitae",
    label: "Vitaemancie",
    colorHint: "#7fff8a",
    iconHint: "💚",
    themes: ["soin", "renforcement", "aura protectrice"],
    typicalCasters: ["clercs", "paladins sacrés", "druides guérisseurs"],
    description:
      "La magie de la vie, de la guérison et de la protection des alliés."
  },
  {
    id: "umbramancy",
    label: "Umbramancie",
    colorHint: "#4a365f",
    iconHint: "🕯️",
    themes: ["ombre", "ténèbres", "nécrotique", "malédictions"],
    typicalCasters: ["nécromants", "sorciers des ombres", "prêtres de la nuit"],
    description:
      "La manipulation des ténèbres, de l’énergie nécrotique et des malédictions."
  },
  {
    id: "mindweave",
    label: "Tissage Mental",
    colorHint: "#6fb2ff",
    iconHint: "🧠",
    themes: ["mental", "illusions", "contrôle", "émotions"],
    typicalCasters: ["illusionnistes", "psioniques", "enchanteurs"],
    description:
      "La magie qui altère perceptions, pensées et émotions des créatures."
  },
  {
    id: "spiritbond",
    label: "Lien Spirituel",
    colorHint: "#ffd66b",
    iconHint: "🕊️",
    themes: ["esprits", "divin", "ancêtres", "oaths"],
    typicalCasters: ["prêtres", "shamans", "paladins", "médiums"],
    description:
      "La magie des esprits, des divinités et des serments sacrés."
  },
  {
    id: "wildgrowth",
    label: "Croissance Sauvage",
    colorHint: "#6adf7b",
    iconHint: "🌿",
    themes: ["plantes", "animaux", "météo", "saisons"],
    typicalCasters: ["druides", "rôdeurs", "mystiques sylvestres"],
    description:
      "La magie du monde vivant, des forêts, des bêtes et des saisons changeantes."
  }
];
