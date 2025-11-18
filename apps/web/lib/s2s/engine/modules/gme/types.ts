// ---------------------------------------------------------
// Types du moteur GME (GodinVerse Monster Engine)
// Contrats généraux utilisés par tous les mondes
// ---------------------------------------------------------

export type EncounterDifficulty =
  | "easy"
  | "medium"
  | "hard"
  | "deadly";

// ---------------------------------------------------------
// Requête envoyée au moteur pour générer une rencontre
// ---------------------------------------------------------
export interface EncounterRequest {
  world: string;              // ex: "fantasy", "scifi", "postapoc"
  partyLevel: number;         // niveau moyen du groupe
  partySize: number;          // nombre de joueurs
  difficulty: EncounterDifficulty;

  // Filtres CR
  minCR?: number;             // CR minimum
  maxCR?: number;             // CR maximum

  // Filtres environnementaux
  biome?: string;             // ex: "forest", "swamp", "tundra"
  habitat?: string;           // ex: "deep-forest", "underdark", "ruins"

  // Filtres de tags/influences (catégories supplémentaires)
  tags?: string[];            // ex: ["undead", "elite", "boss"]
}

// ---------------------------------------------------------
// Définition interne du moteur GME
// Chaque monstre est transformé dans ce format
// ---------------------------------------------------------
export interface GmeMonster {
  id: string;                 // ID unique (clé interne)
  name: string;               // Nom lisible
  world: string;              // Monde d'origine
  cr: number;                 // Challenge Rating

  category?: string;          // humanoid, undead, dragon, etc.
  biomeTags?: string[];       // types de biomes où il peut apparaître
  habitatTags?: string[];     // variantes plus fines d’habitat

  ref?: {                     // Référence vers le fichier source
    source: string;           // ex: "fantasy-bestiary"
    key: string;              // ex: "zombie"
  };
}

// ---------------------------------------------------------
// Réponse principale du moteur
// ---------------------------------------------------------
export interface GeneratedEncounter {
  monsters: GmeMonster[];         // Liste finale
  totalCR: number;                // CR combiné
  difficulty: EncounterDifficulty;
  request: EncounterRequest;      // la requête originale (avec filtres)
}
