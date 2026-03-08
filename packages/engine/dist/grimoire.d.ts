/**
 * Entrée d’un grimoire
 */
export type GrimoireEntry = {
    id: string;
    title: string;
    icon?: string;
    tags?: string[];
    excerpt?: string;
    body?: string;
    links?: string[];
    createdAt?: number;
    updatedAt?: number;
};
/**
 * Retourne toutes les entrées
 */
export declare function readAll(): Promise<GrimoireEntry[]>;
/**
 * Retourne toutes les entrées (Synchrone, fallback)
 */
export declare function readAllSync(): GrimoireEntry[];
/**
 * Recherche une entrée par ID
 */
export declare function readOne(id: string): Promise<GrimoireEntry | undefined>;
/**
 * Écrit l'ensemble des entrées dans le fichier
 */
export declare function writeAll(items: GrimoireEntry[]): Promise<void>;
/**
 * Crée ou met à jour une seule entrée
 */
export declare function saveEntry(entry: GrimoireEntry): Promise<void>;
declare const _default: {
    readAll: typeof readAll;
    readAllSync: typeof readAllSync;
    readOne: typeof readOne;
    writeAll: typeof writeAll;
    saveEntry: typeof saveEntry;
};
export default _default;
