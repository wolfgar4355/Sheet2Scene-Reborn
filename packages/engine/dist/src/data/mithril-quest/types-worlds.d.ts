export interface MQWorld {
    id: string;
    label: string;
    key?: string;
    description?: string;
    isMain?: boolean;
    eras?: string[];
    tags?: string[];
    [extra: string]: unknown;
}
export interface MQEra {
    id: string;
    worldId: string;
    name: string;
    key?: string;
    label?: string;
    shortDescription?: string;
    recommendedLevels?: number[];
    tags?: string[];
    [extra: string]: unknown;
}
export type MQWorldId = MQWorld["id"];
export type MQEraId = MQEra["id"];
