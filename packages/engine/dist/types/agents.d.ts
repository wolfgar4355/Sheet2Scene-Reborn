export interface Agent {
    id: string;
    name: string;
    role: string;
    specialty?: string;
    traits?: string[];
    powerLevel: number;
}
