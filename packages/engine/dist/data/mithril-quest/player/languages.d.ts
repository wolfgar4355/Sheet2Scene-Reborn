export interface MQLanguage {
    key: string;
    label: string;
    category: "common" | "scholarly" | "ancient" | "magical" | "racial" | "planar";
    description: string;
}
export declare const MQ_LANGUAGES: MQLanguage[];
