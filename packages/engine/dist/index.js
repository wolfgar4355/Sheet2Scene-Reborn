// ============================================================================
// Engine – Root Exports
// ============================================================================
// --- Core Types -------------------------------------------------------------
export * from "./types/engine.d";
export * from "./types/fantasy.d"; // existe déjà chez toi
export * from "./types/worlds"; // world keys + era keys
export * from "./types/classes"; // class keys
export * from "./types/character"; // character sheet
export * from "./types/spells"; // spell schema
// --- Engine Core ------------------------------------------------------------
export * from "./core/getWorlds";
export * from "./core/index";
// --- Adapters ---------------------------------------------------------------
export * from "./adapters/bestiary.adapter";
export * from "./adapters/character.adapter";
export * from "./adapters/classes.adapter";
export * from "./adapters/eras.adapter";
export * from "./adapters/worlds.adapter";
export * from "./adapters/run/route";
export * from "./adapters/sync";
// --- GM Tools ---------------------------------------------------------------
export * from "./gm/magic";
export * from "./gm/encounter-engine";
// --- Content/Data Sources ---------------------------------------------------
// (Mithril-Quest = ton monde principal)
export * as MQ_Bestiary from "./data/mithril-quest/bestiary";
export * as MQ_Classes from "./data/mithril-quest/classes";
export * as MQ_Spells from "./data/mithril-quest/spells";
export * as MQ_Character from "./data/mithril-quest/character";
export * as MQ_Eras from "./data/mithril-quest/eras";
export * as MQ_Items from "./data/mithril-quest/items";
export * as MQ_Rituals from "./data/mithril-quest/rituals";
export * as MQ_Roles from "./data/mithril-quest/roles";
export * as MQ_Factions from "./data/mithril-quest/factions";
export * as MQ_Tags from "./data/mithril-quest/tags";
export * as MQ_Player from "./data/mithril-quest/player";
export * as MQ_Worlds from "./data/mithril-quest/worlds";
// --- Ambient & Grimoire Systems --------------------------------------------
export * from "./AmbientManager";
export * from "./TransitionLayer";
export * from "./GrimoireFrame";
// ============================================================================
// END OF FILE
// ============================================================================
