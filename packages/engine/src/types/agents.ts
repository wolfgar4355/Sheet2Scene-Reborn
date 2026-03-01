// ========================================================
// Agents du moteur (IA, PNJ spéciaux, helpers internes)
// Utilisé par : moteur, UI, modules GM et front-end
// ========================================================

export interface Agent {
  /** Identifiant unique interne */
  id: string;

  /** Nom complet de l’agent */
  name: string;

  /** Rôle principal : ex. "navigator", "mentor", "guardian", "oracle" */
  role: string;

  /** Spécialité optionnelle : ex. "healing", "tracking", "runes" */
  specialty?: string;

  /** Traits / tags descriptifs : ex. ["calm", "mystic", "loyal"] */
  traits?: string[];

  /** Niveau de puissance interne (1–100) */
  powerLevel: number;
}
