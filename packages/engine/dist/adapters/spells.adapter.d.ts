export interface Spell {
    name: string;
    school: string;
    tier: string;
    type: string;
    tags?: string[];
    description?: string;
    [key: string]: any;
}
export declare function getAllSpells(): Spell[];
