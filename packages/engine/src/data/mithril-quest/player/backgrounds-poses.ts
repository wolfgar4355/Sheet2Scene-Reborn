// @ts-nocheck
// ============================================================================
// 🎭 MQ PLAYER BACKGROUND POSES — Engine for AI Character Generation
// ============================================================================
//
// Chaque Background possède plusieurs "poses conceptuelles"
// utilisées pour générer des portraits via l'IA.
// Le style IA final est appliqué via MQ_AI_STYLES (ai-styles.ts).
//
// ============================================================================

export interface MQBackgroundPose {
  key: string;                // identifiant stable
  label: string;              // affichage UI
  backgroundKey: string;      // ex: "village-guardian"
  description: string;        // lore / ambiance
  camera: string;             // ex: "portrait", "buste", "mi-corps"
  lighting: string;           // ex: "dramatic", "soft", "natural"
  mood: string;               // ex: "heroic", "calm", "mysterious"
  environment: string;        // décor
  gesture: string;            // pose du corps
  expression: string;         // visage
  style?: string;             // clé optionnelle du style IA
}

export const MQ_BACKGROUND_POSES: MQBackgroundPose[] = [

  // ==========================================================================
  // 🌲 VILLAGE GUARDIAN — Gardien de Village
  // ==========================================================================
  {
    key: "village-guardian-heroic",
    backgroundKey: "village-guardian",
    label: "Gardien héroïque",
    description: "Posture fière, arme en main, défenseur du village.",
    camera: "mi-corps",
    lighting: "natural warm",
    mood: "heroic",
    environment: "clairière avec maisons en bois en arrière-plan",
    gesture: "debout, arme tenue en diagonale",
    expression: "déterminé et vigilant"
  },
  {
    key: "village-guardian-scout",
    backgroundKey: "village-guardian",
    label: "Éclaireur discret",
    description: "Gardien silencieux observant la forêt.",
    camera: "portrait",
    lighting: "soft shadows",
    mood: "focused",
    environment: "bordure de forêt",
    gesture: "accroupi, main sur une branche",
    expression: "concentration"
  },
  {
    key: "village-guardian-nightwatch",
    backgroundKey: "village-guardian",
    label: "Veilleur nocturne",
    description: "Sentinelle sous la lune, prête à défendre les siens.",
    camera: "buste",
    lighting: "moonlight + rim light",
    mood: "tense",
    environment: "palisade sombre, brume légère",
    gesture: "torse tourné, arme sur l’épaule",
    expression: "regard perçant dans l’ombre"
  },

  // ==========================================================================
  // 🔮 ARCANE APPRENTICE — Apprenti Arcaniste
  // ==========================================================================
  {
    key: "arcane-apprentice-study",
    backgroundKey: "arcane-apprentice",
    label: "Étudiant du mystique",
    description: "L’apprenti étudie un grimoire illuminé.",
    camera: "mi-corps",
    lighting: "arcane glow",
    mood: "curious",
    environment: "tour de mage ou bibliothèque mystique",
    gesture: "tenant un grimoire ouvert",
    expression: "émerveillement concentré"
  },
  {
    key: "arcane-apprentice-channel",
    backgroundKey: "arcane-apprentice",
    label: "Canalisation de mana",
    description: "L'apprenti canalise une énergie magique brute.",
    camera: "portrait",
    lighting: "dramatic contrast",
    mood: "focused",
    environment: "cercle runique brillant",
    gesture: "main levée avec énergie",
    expression: "volonté intense"
  },
  {
    key: "arcane-apprentice-secret",
    backgroundKey: "arcane-apprentice",
    label: "Secret interdit",
    description: "L’apprenti découvre un sort interdit.",
    camera: "buste",
    lighting: "cold arcane light",
    mood: "mysterious",
    environment: "salle obscure, symboles au mur",
    gesture: "tenant un fragment magique",
    expression: "inquiet mais fasciné"
  },

  // ==========================================================================
  // ⛪ TEMPLE ACOLYTE — Acolyte de Temple
  // ==========================================================================
  {
    key: "temple-acolyte-prayer",
    backgroundKey: "temple-acolyte",
    label: "Prière sacrée",
    description: "L’acolyte médite devant un symbole saint.",
    camera: "portrait",
    lighting: "soft divine glow",
    mood: "peaceful",
    environment: "autel lumineux",
    gesture: "mains jointes",
    expression: "sérénité"
  },
  {
    key: "temple-acolyte-healer",
    backgroundKey: "temple-acolyte",
    label: "Guérisseur",
    description: "Invocation d’une lumière curative.",
    camera: "mi-corps",
    lighting: "holy light",
    mood: "compassion",
    environment: "chambre sacrée",
    gesture: "mains projetant une lumière douce",
    expression: "bienveillance"
  },
  {
    key: "temple-acolyte-ritual",
    backgroundKey: "temple-acolyte",
    label: "Rituel ancien",
    description: "L’acolyte exécute un rite sacré.",
    camera: "buste",
    lighting: "candlelight",
    mood: "solemn",
    environment: "temple ancien",
    gesture: "tenant un parchemin sacré",
    expression: "grave et concentré"
  },

  // ==========================================================================
  // 🏙️ STREET URCHIN — Enfant des Rues
  // ==========================================================================
  {
    key: "street-urchin-shadow",
    backgroundKey: "street-urchin",
    label: "Ombre des ruelles",
    description: "Agile et furtif, tapi dans un passage sombre.",
    camera: "mi-corps",
    lighting: "back alley dim light",
    mood: "furtive",
    environment: "ruelle sale avec lanternes",
    gesture: "dos contre un mur",
    expression: "regard méfiant"
  },
  {
    key: "street-urchin-thief",
    backgroundKey: "street-urchin",
    label: "Petit voleur",
    description: "Instant de vol habile.",
    camera: "portrait",
    lighting: "warm and dirty street light",
    mood: "playful but cautious",
    environment: "marché bondé",
    gesture: "main dissimulant un objet volé",
    expression: "sourire espiègle"
  },
  {
    key: "street-urchin-run",
    backgroundKey: "street-urchin",
    label: "Fuite rapide",
    description: "L’enfant s’enfuit à toute vitesse.",
    camera: "buste dynamique",
    lighting: "motion smear",
    mood: "urgent",
    environment: "ruelle en perspective fuyante",
    gesture: "course, épaules tournées",
    expression: "peur et détermination"
  },

  // ==========================================================================
  // 👑 NOBLE BORN — Noble de Naissance
  // ==========================================================================
  {
    key: "noble-born-formal",
    backgroundKey: "noble-born",
    label: "Portrait officiel",
    description: "Noble en tenue élégante, posture fière.",
    camera: "portrait",
    lighting: "soft royal lighting",
    mood: "dignified",
    environment: "salle noble drapée",
    gesture: "posture droite, bras croisés",
    expression: "calme assuré"
  },
  {
    key: "noble-born-letter",
    backgroundKey: "noble-born",
    label: "Lettre scellée",
    description: "Le noble tient un parchemin important.",
    camera: "buste",
    lighting: "golden candlelight",
    mood: "intriguing",
    environment: "bureau richement décoré",
    gesture: "tenant une lettre scellée",
    expression: "sourire ambigu"
  },
  {
    key: "noble-born-duelist",
    backgroundKey: "noble-born",
    label: "Duel d’honneur",
    description: "Prêt pour un duel élégant.",
    camera: "mi-corps",
    lighting: "dramatic spotlight",
    mood: "tense",
    environment: "cour intérieure noble",
    gesture: "épée fine levée",
    expression: "détermination glaciale"
  }
];
