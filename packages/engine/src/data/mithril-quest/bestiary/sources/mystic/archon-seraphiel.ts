// @ts-nocheck
// SERAPHIEL — Archon Céleste Déchu (Mythic Boss)
// Boss céleste en 2 phases : Lumière Sacrée → Lumière Brisée

export type MythicPhase = {
  key: string;
  name: string;
  cr: number;
  hp: number;
  ac: number;
  role: string;
  description: string;
  tactics: string[];
  abilities: string[];
  phaseTriggers?: string[];
};

export type MythicBoss = {
  id: string;
  name: string;
  epithet: string;
  category: string;
  tags: string[];
  biomes: string[];
  phases: MythicPhase[];
  loot: string[];

  summary?: string;
  encounterDifficulty?: "hard" | "deadly" | "mythic";
  mythicActions?: string[];
  aiProfile?: string;
};

// ---------------------------------------------------------------------------
// SERAPHIEL — ARCHON DÉCHU DU PREMIER CANTIQUE
// ---------------------------------------------------------------------------

export const SERAPHIEL: MythicBoss = {
  id: "seraphiel",
  name: "SERAPHIEL",
  epithet: "Archon Céleste Déchu",
  category: "celestial",
  tags: ["mythic", "celestial", "fallen", "archon"],
  biomes: [
    "celestial-planes",
    "holy-temples",
    "sky-fortresses",
    "fractured-light",
    "sanctums-of-light"
  ],

  summary:
    "Ancien Archon du Premier Cantique, Seraphiel était jadis un parangon de lumière pure. " +
    "Sa chute a fragmenté son essence en deux aspects : la lumière sacrée punitive et la lumière brisée chaotique. " +
    "Il alterne entre bénédictions, illusions lumineuses et déchaînements radiants.",

  encounterDifficulty: "mythic",
  aiProfile: "mythic-celestial-executioner",

  mythicActions: [
    "Tempête de Lumière : début de round — inflige 4d8 radiant à toutes les créatures non-célestes dans un rayon de 12 m.",
    "Regard du Cantique : annule un sort de niveau 5 ou moins lancé dans sa ligne de vue (1/round).",
    "Chœur Brisé : les illusions de lumière gagnent 10 PV temporaires chaque round et se multiplient en cas d’attaque ratée."
  ],

  // -----------------------------------------------------------------------
  // PHASES
  // -----------------------------------------------------------------------

  phases: [
    // PHASE 1 — Archon du Premier Cantique
    {
      key: "phase-1",
      name: "Archon du Premier Cantique",
      cr: 22,
      hp: 600,
      ac: 24,
      role: "mythic-elite-controller",
      description:
        "Seraphiel irradie une lumière sacrée écrasante. Il punit les mages et soigneurs, " +
        "frappe de rayons convergents et déchaîne des vagues d’énergie céleste.",
      tactics: [
        "Priorise les lanceurs de sorts et soigneurs.",
        "Empêche le regroupement des PJ via des rayons en ligne.",
        "Utilise sa mobilité aérienne pour punir les cibles exposées."
      ],
      abilities: [
        "Lame de l'Aube — Dégâts radiant + aveuglement court.",
        "Bouclier Céleste — Réduction de 50% des dégâts magiques.",
        "Cantique Béni — Dissipe les malédictions dans 9 m et soigne légèrement.",
        "Rayons Convergents — Attaques en ligne de lumière compressée."
      ],
      phaseTriggers: [
        "À 0 PV pour la première fois, son corps se brise en éclats prismatiques.",
        "Lumière fracturée se répand dans l’arène, modifiant le terrain.",
        "Transition immédiate vers la Phase 2 : illusions actives + distorsions lumineuses."
      ]
    },

    // PHASE 2 — Lumière Brisée
    {
      key: "phase-2",
      name: "Lumière Brisée",
      cr: 25,
      hp: 770,
      ac: 26,
      role: "mythic-controller",
      description:
        "L’essence brisée de Seraphiel explose en un torrent de lumière chaotique. " +
        "Il déchaîne des illusions vivantes, des fractures lumineuses et des ondes photométriques.",
      tactics: [
        "Contrôle total du terrain via zones de lumière instables.",
        "Illusions pour détourner l’attention et piéger les PJ.",
        "Attire les PJ dans les zones dangereuses fracturées."
      ],
      abilities: [
        "Lumière Fractale — Se divise en 3 copies lumineuses (illusions offensives).",
        "Jugement Prismatique — Dégâts radiant + foudre + dissociation magique.",
        "Explosion Photométrique — Zone 12 m, aveuglement puissant + dégâts massifs.",
        "Cœur de Lumen — Fait apparaître des éclats de lumière orbitaux.",
        "Régénération Sacrée — 30 PV/round tant qu'une lumière active existe."
      ],
      phaseTriggers: [
        "Si toutes ses illusions sont détruites en même temps, Seraphiel perd sa régénération pendant 1d4 rounds.",
        "Si un PJ purifie une zone de lumière, la suivante devient instable (explosion 3d10 radiant).",
        "À 100 PV restants, Seraphiel implose en une sphère de lumière noire puis déclenche son Jugement Final."
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // LOOT
  // -----------------------------------------------------------------------

  loot: [
    "Cœur Prismatique de Seraphiel — focus céleste, +2 aux sorts radiants.",
    "Aile de Lumière Pure — cape légendaire, vol + absorbance de sort radiant.",
    "Couronne du Premier Cantique — améliore les bénédictions et aura sacrée.",
    "Talisman de l’Éclat Perdu — protège contre illusions et lumière fractale."
  ]
};

export default SERAPHIEL;
