// Base schema pour tous les rituels Fantasy

export interface Ritual {
  id: string;
  label: string;
  school: string;        // divine, nature, arcane, necromancy, spirit
  level: number;         // difficulté approximative 1-10
  castTime: string;      // "1 heure", "3 heures", "une nuit"
  ingredients: string[]; // objets requis
  description: string;   // effet narratif
}
