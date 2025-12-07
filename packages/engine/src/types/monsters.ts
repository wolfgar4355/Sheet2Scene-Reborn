// ---------------------------------------------------------
// Types génériques pour tous les monstres (UI + Engine)
// Sheet2Scene — GodinVerse / Mithril Engine
// ---------------------------------------------------------

export interface Monster {
  id: string;                     // Identifiant unique
  name: string;                   // Nom lisible
  world: string;                  // Monde d'origine (mithril-quest, etc.)
  
  // Optionnel : certaines tables n'ont pas d’ère
  era?: string;                   // ex: "First Age", "Arcane Era"

  // Type du monstre (classe globale : undead, beast, golem…)
  type: string;

  // Rang qualitatif (optionnel)
  rank?: "common" | "elite" | "boss" | "mythic";

  // Statistiques de base (compatibles UI actuelles)
  hp: number;
  attack: number;
  defense: number;

  // Tags supplémentaires pour filtres (utilisés par Encounter Engine)
  tags?: string[];                // ex: ["undead", "cursed", "poison"]

  // Métadonnées pour mapper vers tes fichiers sources
  ref?: {
    source: string;               // ex: "mq-bestiary"
    key: string;                  // ex: "black_wolf"
  };
}
