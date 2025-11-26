// ————————————————
// Patch Fantaisy Compatibility Layer
// ————————————————

declare module "*.ts";

// Tolère tous les modules Fantasy historiques
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

// Moteur
declare module "@engine/mithril";
declare module "@engine/content/*";

// Fallback absolu
declare module "*";
