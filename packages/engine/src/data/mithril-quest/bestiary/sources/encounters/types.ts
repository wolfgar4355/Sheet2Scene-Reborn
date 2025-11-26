// Types de tables de rencontres aléatoires

export interface EncounterTableEntry {
  // intervalle de jets sur 1d10, 1d20, etc.
  roll: [number, number];
  // identifiants de monstres dans ton bestiaire
  monsters: string[];
  // petite description optionnelle de la rencontre
  description?: string;
}
