// ---------------------------------------------------------
// Patch Fantasy Compatibility Layer
// Permet au moteur Mithril Engine d'ignorer les anciens modules
// ---------------------------------------------------------

// Tolère tous les imports de fichiers .ts anciens
declare module "*.ts";

// ---------------------------------------------------------
// Anciens modules Fantasy (legacy) — évite les erreurs TS
// ---------------------------------------------------------
declare module "@s2s/fantasy/types";
declare module "@s2s/fantasy/worlds";
declare module "@s2s/fantasy/monsters";
declare module "@s2s/fantasy/encounters";
declare module "@s2s/fantasy/rituals";
declare module "@s2s/fantasy/spells";
declare module "@s2s/fantasy/classes";
declare module "@s2s/fantasy/bestiary";
declare module "@s2s/fantasy/player";
declare module "@s2s/fantasy/gm";

// ---------------------------------------------------------
// Moteur Mithril Engine
// ---------------------------------------------------------
declare module "@engine/mithril";
declare module "@engine/content/*";

// ---------------------------------------------------------
// Fallback absolu : tout import inconnu est toléré
// ---------------------------------------------------------
declare module "*";
