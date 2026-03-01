export interface MQTool {
    key: string;
    label: string;
    category: "artisan" | "instrument" | "kit" | "utility" | "alchemy" | "other";
    description: string;
}
export declare const MQ_TOOLS: MQTool[];
