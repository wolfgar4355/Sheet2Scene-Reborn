// =========================================================
// Types du moteur GME (GodinVerse Monster Engine)
// Contrats généraux utilisés par tous les mondes
// =========================================================

// Difficulté d’une rencontre
export type EncounterDifficulty =
  | "easy"
  | "medium"
  | "hard"
  | "deadly";

// =========================================================
// Requête envoyée au moteur GME pour générer une rencontre
// =========================================================
export interface EncounterRequest {
  world: string;          // ex: "mithril-quest"
  partyLevel: number;     // niveau moyen du groupe
  partySize: number;      // nombre de joueurs
  difficulty: EncounterDifficulty;

  // Filtres CR
  minCR?: number;         // CR minimum
  maxCR?: number;         // CR maximum

  // Filtres environnementaux
  biome?: string;         // ex: "forest", "swamp", "tundra"
  habitat?: string;       // ex: "deep-forest", "underdark", "ruins"

  // Tags additionnels (catégorie, traits, atmosphère)
  tags?: string[];        // ex: ["undead", "elite", "boss"]
}

// =========================================================
// Format interne d’un monstre utilisé par le moteur GME
// Ce format est obtenu via les adapters.
// =========================================================
export interface GmeMonster {
  id: string;                 // identifiant interne unique
  name: string;               // nom lisible
  world: string;              // monde d’origine
  cr: number;                 // Challenge Rating

  category?: string;          // humanoid, undead, beast, etc.
  biomeTags?: string[];       // biomes compatibles
  habitatTags?: string[];     // habitats précis

  // Référence vers les données d’origine
  ref?: {
    source: string;           // ex: "mithril-bestiary"
    key: string;              // ex: "wolf_alpha"
  };
}

// =========================================================
// Réponse finale générée par le moteur GME
// =========================================================
export interface GeneratedEncounter {
  monsters: GmeMonster[];        // liste des monstres choisis
  totalCR: number;               // CR total combiné
  difficulty: EncounterDifficulty;
  request: EncounterRequest;     // la requête originale
}
