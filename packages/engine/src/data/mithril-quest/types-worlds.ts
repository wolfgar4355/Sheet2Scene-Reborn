// src/data/mithril-quest/types-worlds.ts

// -----------------------------------------------------------------------------
// Types centraux pour Mithril-Quest (MQWorld & MQEra)
// Compatible avec ton moteur actuel et tolérant sur les champs facultatifs
// -----------------------------------------------------------------------------

// Type pour un monde Mithril-Quest
export interface MQWorld {
  id: string;               // identifiant unique
  label: string;            // nom affiché
  key?: string;             // clé facultative : "fantasy", "darknight", etc.
  description?: string;
  isMain?: boolean;         // monde principal
  eras?: string[];          // liste d’IDs d’époques
  tags?: string[];

  // flexibilité totale pour étendre plus tard
  [extra: string]: unknown;
}

// Type pour une époque Mithril-Quest
export interface MQEra {
  id: string;               // identifiant d’époque
  worldId: string;          // monde parent
  name: string;             // (présent dans ton fichier eras.ts)
  key?: string;             // facultatif (tu ne l’utilises pas encore)
  label?: string;           // facultatif
  shortDescription?: string;
  recommendedLevels?: number[];
  tags?: string[];

  [extra: string]: unknown;
}

// Alias utiles
export type MQWorldId = MQWorld["id"];
export type MQEraId = MQEra["id"];
