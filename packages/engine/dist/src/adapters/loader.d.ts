export type AdapterKey = "bestiary" | "spells" | "items" | "classes" | "races" | "eras" | "roles" | "factions" | "habitats" | "rituals" | "gm" | "character";
/**
 * Charge un dataset spécifique
 * ex : engine.load("bestiary")
 */
export declare function loadAdapter(key: AdapterKey): any;
/**
 * Charge *toutes* les données du moteur
 * ex: engine.loadAll()
 */
export declare function loadAllAdapters(): {
    [k: string]: any;
};
