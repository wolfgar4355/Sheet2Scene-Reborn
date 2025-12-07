// daggers_prompts.ts — Prompts IA MQ pour dagues & couteaux

export const DAGGERS_PROMPTS = [
  {
    key: "simple_dagger",
    style: "basic gear, beginner adventurer, grounded design",
    prompt: `
Dague simple en acier poli.
Poignée en cuir, lame courte triangulaire.
Aspect utilitaire, zéro magic, style MQ propre.
    `,
  },

  {
    key: "steel_knife",
    style: "kitchen-combat hybrid, worn metal",
    prompt: `
Couteau d’acier robuste.
Lame fine et pratique, reflet métallique.
Ambiance artisanale simple.
    `,
  },

  {
    key: "throwing_dagger",
    style: "balanced blade, aerodynamic design",
    prompt: `
Dague de jet légère.
Lignes épurées, lame fine équilibrée pour lancer.
Fond parchemin minimaliste MQ.
    `,
  },

  {
    key: "assassin_stiletto",
    style: "thin stiletto blade, assassination aesthetic",
    prompt: `
Stiletto assassin.
Lame longue et étroite.
Reflets métalliques froids.
    `,
  },

  {
    key: "ceremonial_knife",
    style: "ornamental blade, ritual motifs",
    prompt: `
Couteau cérémonial décoré de symboles.
Couleurs or/rouge ou noir/or.
Ambiance ésotérique MQ.
    `,
  },

  {
    key: "shadowfang",
    style: "dark smoke, stealth magic aesthetic",
    prompt: `
Croche-Ombre. Métal noirâtre absorbant la lumière.
Accent violet foncé, petite lueur magique.
Dague rare MQ.
    `,
  },

  {
    key: "runic_dirk",
    style: "old runes, subtle glow, magical engravings",
    prompt: `
Dague runique avec glyphes gravés.
Effets magiques doux bleutés.
Ambiance ancestrale MQ.
    `,
  },

  {
    key: "poisoner_blade",
    style: "hollow tube blade, toxin-ready design",
    prompt: `
Lame du Toxineux.
Canal interne pour toxines.
Détails acérés, métal sombre.
Style dangereux mais élégant MQ.
    `,
  },

  {
    key: "moonsteel_knife",
    style: "radiant glow, lunar magic, mythic purity",
    prompt: `
Couteau en Lune-Argent.
Métal clair lumineux.
Lueur blanche sacrée.
    `,
  },

  {
    key: "void_stinger",
    style: "ethereal void stinger, soul energy aesthetic",
    prompt: `
Aiguillon du Vide. Lame d’ombre pure.
Lignes d’énergie, déformation subtile.
Arme mythique MQ.
    `,
  },
] as const;
