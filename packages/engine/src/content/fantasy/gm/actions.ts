// lib/s2s/fantasy/gm/actions.ts

export interface SpecialAction {
  key: string;
  label: string;
  requiresWeapon?: boolean;
  effect: string;
}

export const SPECIAL_ACTIONS: SpecialAction[] = [
  {
    key: "power-strike",
    label: "Frappe Puissante",
    requiresWeapon: true,
    effect: "Ajoute +5 aux dégâts mais -2 au jet d'attaque.",
  },
  {
    key: "quick-step",
    label: "Pas Agile",
    effect: "Permet de se déplacer de 3m sans provoquer d'attaque d'opportunité.",
  },
  {
    key: "rally",
    label: "Ralliement",
    effect: "Un allié récupère 1d6 PV temporaires.",
  },
];
