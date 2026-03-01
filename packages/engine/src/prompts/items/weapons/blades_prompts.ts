// blades_prompts.ts — Prompts IA MQ pour épées & lames

export const BLADES_PROMPTS = [
  {
    key: "shortsword",
    style: "clean steel, simple adventurer gear, MQ clarity",
    prompt: `
Épée courte simple. Lame droite acier mat, poignée cuir usé.
Design réaliste, style fantasy propre sans surcharge.
Fond parchemin grimoire.
    `,
  },

  {
    key: "longsword",
    style: "heroic blade, knightly steel, refined engraving",
    prompt: `
Épée longue élégante. Garde croisée classique, lame solide.
Gravures subtiles, reflet métallique propre.
Ambiance chevaleresque MQ.
    `,
  },

  {
    key: "greatsword",
    style: "brutal heavy blade, dark steel, MMO fantasy vibe",
    prompt: `
Espadon massif à deux mains.
Lame large, pointe lourde, style imposant.
Textures d’acier foncé, usure réaliste.
Fond parchemin épais.
    `,
  },

  {
    key: "scimitar",
    style: "curved blade, desert wanderer aesthetic",
    prompt: `
Cimeterre courbe, garde travaillée, métal poli.
Lignes élancées, motifs légers sur la lame.
Ambiance aventurier exotique.
    `,
  },

  {
    key: "katana",
    style: "crafted steel, folded metal, subtle glow",
    prompt: `
Katana à la finition raffinée.
Lame courbe, hamon léger, poignée tressée sombre.
Esthétique élégante et disciplinée MQ.
    `,
  },

  {
    key: "dual_blades",
    style: "twin weapons, mirrored shapes, agility aesthetic",
    prompt: `
Deux lames jumelles symétriques.
Design léger et précis, adapté aux combattants rapides.
Lueur métallique froide.
    `,
  },

  {
    key: "runic_blade",
    style: "magic runes, glowing lines, enchanted weapon",
    prompt: `
Lame runique gravée de glyphes lumineux.
Métal argent-vif, puissance ancienne.
Aura magique contrôlée, style MQ mythic.
    `,
  },
] as const;
