// tags.ts — Tags fonctionnels utilisables pour filtrer / trier / générer des sorts

import type { SpellTagId } from "./schema";

export interface SpellTag {
  id: SpellTagId;
  label: string;
  description: string;
}

export const SPELL_TAGS: SpellTag[] = [
  {
    id: "damage",
    label: "Dégâts",
    description: "Sort infligeant des dégâts directs."
  },
  {
    id: "damage-fire",
    label: "Dégâts de Feu",
    description: "Sort infligeant principalement des dégâts de feu."
  },
  {
    id: "damage-cold",
    label: "Dégâts de Froid",
    description: "Sort infligeant des dégâts de froid ou de glace."
  },
  {
    id: "damage-lightning",
    label: "Dégâts de Foudre",
    description: "Sort infligeant des dégâts électriques."
  },
  {
    id: "damage-radiant",
    label: "Dégâts Radiants",
    description: "Sort infligeant une lumière brûlante."
  },
  {
    id: "damage-necrotic",
    label: "Dégâts Nécrotiques",
    description: "Sort drainant la vie ou corrompant la chair."
  },
  {
    id: "heal",
    label: "Soin",
    description: "Restitue des points de vie ou purge des afflictions."
  },
  {
    id: "buff-offense",
    label: "Buff offensif",
    description: "Améliore la capacité offensive d’une cible."
  },
  {
    id: "buff-defense",
    label: "Buff défensif",
    description: "Renforce la défense ou la résistance d’une cible."
  },
  {
    id: "buff-utility",
    label: "Buff utilitaire",
    description: "Apporte un avantage non directement lié au combat."
  },
  {
    id: "control",
    label: "Contrôle",
    description: "Restreint les mouvements ou options de l’ennemi."
  },
  {
    id: "summon",
    label: "Invocation",
    description: "Fait apparaître des créatures ou des entités."
  },
  {
    id: "movement",
    label: "Mouvement",
    description: "Modifie la mobilité d’une cible."
  },
  {
    id: "teleport",
    label: "Téléportation",
    description: "Déplace instantanément la cible ailleurs."
  },
  {
    id: "vision",
    label: "Vision",
    description: "Modifie la perception, la détection ou la vue."
  },
  {
    id: "debuff",
    label: "Affaiblissement",
    description: "Réduit les capacités d’une cible."
  },
  {
    id: "charm",
    label: "Charme",
    description: "Influence la volonté ou l’attitude d’une créature."
  },
  {
    id: "fear",
    label: "Peur",
    description: "Provoque la terreur ou la panique."
  },
  {
    id: "ritual",
    label: "Rituel",
    description: "Sort lancé lentement, souvent hors combat."
  },
  {
    id: "area-large",
    label: "Zone large",
    description: "Affecte une zone importante."
  },
  {
    id: "single-target",
    label: "Cible unique",
    description: "Affecte une seule créature ou un seul point."
  },
  {
    id: "multi-target",
    label: "Cibles multiples",
    description: "Affecte plusieurs créatures distinctes."
  }
];
