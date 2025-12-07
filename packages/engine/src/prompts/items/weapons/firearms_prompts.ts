// firearms_prompts.ts — Prompts IA MQ pour armes à feu arcano-tech & poudre

export const FIREARMS_PROMPTS = [
  {
    key: "flintlock_pistol",
    style: "antique pistol, wood+steel mix, powder-age",
    prompt: `
Pistolet à silex ancien.
Bois foncé, mécanisme à pierre.
Ambiance âge de la poudre MQ.
    `,
  },

  {
    key: "flintlock_dual",
    style: "paired pistols, duelist vibe",
    prompt: `
Deux pistolets à silex assortis.
Décorations subtiles, bois poli.
Ambiance pirate/duelliste MQ (0 IP).
    `,
  },

  {
    key: "arquebus",
    style: "primitive heavy firearm, black powder authenticity",
    prompt: `
Arquebuse longue et lourde.
Canon large, bois brut.
Effet d’ère médiéval tardif MQ.
    `,
  },

  {
    key: "musket",
    style: "refined powder-age craftsmanship",
    prompt: `
Mousquet long et précis.
Bois brun poli, métal clair.
Ambiance armée disciplinée MQ.
    `,
  },

  {
    key: "blunderbuss",
    style: "wide flared barrel, brutal close-range",
    prompt: `
Tromblon à large canon évasé.
Aspect destructeur à courte portée.
Style MQ poudre noire.
    `,
  },

  {
    key: "gnome_hand_cannon",
    style: "gnomish tech, arcane sparks, fantasy engineering",
    prompt: `
Canon de Paume Gnome compact.
Métal brillant + cristaux tech.
Ambiance technomagique MQ.
    `,
  },

  {
    key: "arcane_rifle",
    style: "sleek energy rifle, crystal emitter",
    prompt: `
Fusil arcanique avec chambre à cristaux.
Lumière bleue/violette.
Silhouette futuriste mais fantasy MQ.
    `,
  },

  {
    key: "runic_musket",
    style: "engraved runes, holy energy",
    prompt: `
Mousquet Runique aux glyphes radieuses.
Métal argenté, lueurs sacrées subtiles.
Arme légendaire MQ sacrée.
    `,
  },

  {
    key: "infernal_rifle",
    style: "flaming demonic metal, cursed aura",
    prompt: `
Fusil Infernal forgé démoniaque.
Métal rougeoyé, teintes de chaleur.
Ambiance abyssale MQ.
    `,
  },

  {
    key: "astral_longrifle",
    style: "cosmic beam weapon, stellar runes",
    prompt: `
Longrifle Astral fait d’énergie étoilée.
Silhouette semi-éthérée, lignes cosmiques.
Arme mythique MQ.
    `,
  },
] as const;
