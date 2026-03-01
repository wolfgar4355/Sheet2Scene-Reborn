/**
 * Entrée d’un grimoire
 */
export type GrimoireEntry = {
    id: string;
    title: string;
    icon: string;
    tags: string[];
    excerpt?: string;
    body?: string;
    links?: string[];
    createdAt?: number;
    updatedAt?: number;
};
/**
 * Retourne toutes les entrées
 */
export declare function readAll(): GrimoireEntry[];
/**
 * Recherche une entrée par ID
 */
export declare function readOne(id: string): GrimoireEntry | undefined;
declare const _default: {
    readAll: typeof readAll;
    readOne: typeof readOne;
};
export default _default;
