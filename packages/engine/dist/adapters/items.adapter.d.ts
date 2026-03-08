export interface Item {
    id: string;
    name: string;
    type: string;
    rarity?: string;
    cost?: number;
    [key: string]: any;
}
export declare function getAllItems(): Item[];
