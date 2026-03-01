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
export declare function readAll(): Promise<GrimoireEntry[]>;
export declare function createEntry(patch: Partial<GrimoireEntry>): Promise<GrimoireEntry>;
export declare function readOne(id: string): Promise<GrimoireEntry | null>;
export declare function updateEntry(id: string, patch: Partial<GrimoireEntry>): Promise<GrimoireEntry | null>;
