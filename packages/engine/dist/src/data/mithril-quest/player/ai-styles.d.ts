export interface MQ_AI_Style {
    key: string;
    label: string;
    description: string;
    promptChunk: string;
    icon?: string;
    category: "realistic" | "anime" | "manga" | "cartoon" | "3d";
}
export declare const MQ_AI_STYLES: MQ_AI_Style[];
