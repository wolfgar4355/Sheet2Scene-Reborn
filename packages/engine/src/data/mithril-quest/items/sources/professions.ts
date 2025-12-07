// @ts-nocheck
// professions.ts — Métiers, spécialisations, rôles narratifs et mécaniques pour S2S

export const PROFESSIONS = [

  // ───────────────────────────────────────────
  //  A — ARTISANS
  // ───────────────────────────────────────────

  {
    key: "blacksmith",
    label: "Forgeron",
    category: "artisan",
    skills: ["Forge", "Métallurgie"],
    tools_required: ["smith_tools"],
    perks: [
      "+10% qualité armes/armures fabriquées",
      "Réparation gratuite des équipements",
      "Accès aux recettes métalliques rares"
    ],
    loot_bonus: ["minerai", "ingots", "armes brisées"],
    crafts: ["armes", "armures", "outils en métal"],
    description:
      "Maître du métal, créateur de lames et d’armures, essentiel dans toute communauté."
  },

  {
    key: "leatherworker",
    label: "Tanneur",
    category: "artisan",
    skills: ["Travail du cuir"],
    tools_required: ["leatherworker_tools"],
    perks: [
      "Création d’armures légères améliorées",
      "Réparation rapide du cuir",
      "Bonus de discrétion sur équipements moddés"
    ],
    loot_bonus: ["peaux", "cuir traité"],
    crafts: ["armures légères"],
    description:
      "Spécialiste du cuir, créateur de vêtements renforcés et d’armures discrètes."
  },

  {
    key: "alchemist",
    label: "Alchimiste",
    category: "artisan",
    skills: ["Alchimie", "Chimie arcane"],
    tools_required: ["alchemist_supplies"],
    perks: [
      "Création de potions rares",
      "Explosifs alchimiques",
      "+20% efficacité soins"
    ],
    loot_bonus: ["essences", "réactifs", "fioles"],
    crafts: ["potions", "bombes", "huiles"],
    description:
      "Manipulateur de substances étranges, capable de miracles… ou de catastrophes."
  },

  // ───────────────────────────────────────────
  //  B — CRIMINAL
  // ───────────────────────────────────────────

  {
    key: "thief",
    label: "Voleur",
    category: "criminal",
    skills: ["Discrétion", "Crochetage"],
    tools_required: ["thieves_tools"],
    perks: [
      "Dégâts +20% en attaque surprise",
      "Ouverture de serrures complexe",
      "Bonus de loot dans zones urbaines"
    ],
    loot_bonus: ["objets précieux", "papiers secrets"],
    crafts: ["crochets", "outils modifiés"],
    description:
      "Expert de l’ombre, agile et rusé, maître des serrures et de la discrétion."
  },

  {
    key: "assassin",
    label: "Assassin",
    category: "criminal",
    skills: ["Discrétion", "Poisons", "Perception"],
    tools_required: ["poison_kit"],
    perks: [
      "+50% dégâts avec poison",
      "Attaque critique facilitée",
      "Infiltration renforcée"
    ],
    loot_bonus: ["toxines", "armes légères"],
    crafts: ["poisons"],
    description:
      "Tueur silencieux maîtrisant les poisons et les frappes mortelles."
  },

  // ───────────────────────────────────────────
  //  C — NATURE / SPIRITUAL
  // ───────────────────────────────────────────

  {
    key: "druid",
    label: "Druide",
    category: "nature",
    skills: ["Nature", "Médecine", "Survie"],
    tools_required: ["druid_seedpouch"],
    perks: [
      "Accès aux rituels naturels",
      "Amélioration de soins naturels",
      "Compagnon animal amélioré"
    ],
    loot_bonus: ["plantes", "essences naturelles"],
    crafts: ["baumes", "potions naturelles"],
    description:
      "Gardien des forces naturelles, guérisseur et protecteur des terres sauvages."
  },

  {
    key: "herbalist",
    label: "Herboriste",
    category: "nature",
    skills: ["Botanique", "Médecine"],
    tools_required: ["herbalism_kit"],
    perks: [
      "Création accélérée d’antidotes",
      "Bonus de guérison naturelle",
      "Détection automatique plantes rares"
    ],
    loot_bonus: ["herbes rares", "racines"],
    crafts: ["antidotes", "onguents"],
    description:
      "Expert en plantes, capable de concocter remèdes et antidotes."
  },

  // ───────────────────────────────────────────
  //  D — MAGIC / ARCANE
  // ───────────────────────────────────────────

  {
    key: "artificer",
    label: "Artificier",
    category: "tech",
    skills: ["Ingénierie", "Arcanotech"],
    tools_required: ["gnome_toolkit"],
    perks: [
      "Création gadgets",
      "Tirs améliorés avec armes technomagiques",
      "Réparation rapide appareils"
    ],
    loot_bonus: ["engrenages", "cristaux tech"],
    crafts: ["golems miniatures", "pièges mécaniques"],
    description:
      "Un ingénieur magitech capable de créer gadgets et machines arcaniques."
  }

] as const;
