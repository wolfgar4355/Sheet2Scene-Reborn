import type { MithrilWorld, MithrilWorldId } from "./types/world";
/**
 * Liste officielle des mondes supportés par Mithril Engine.
 */
export declare const ALL_WORLDS: MithrilWorld[];
/**
 * API principale du moteur.
 */
export declare const MithrilEngine: {
    id: string;
    label: string;
    version: string;
    /** Retourne tous les mondes disponibles. */
    getWorlds(): MithrilWorld[];
    /** Retourne un monde par id, ou null s'il n'existe pas. */
    getWorld(id: MithrilWorldId): MithrilWorld | null;
    /** Monde principal (actuellement Mithril-Quest). */
    getMainWorld(): MithrilWorld;
};
export type { MithrilWorld, MithrilWorldId };
