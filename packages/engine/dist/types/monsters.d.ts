export interface Monster {
    id: string;
    name: string;
    world: string;
    era?: string;
    type: string;
    rank: "common" | "elite" | "boss" | "mythic";
    hp: number;
    attack: number;
    defense: number;
    tags?: string[];
}
