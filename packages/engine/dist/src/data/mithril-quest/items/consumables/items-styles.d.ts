export interface MQItemStyle {
    key: string;
    label: string;
    description: string;
    prompt: string;
    negativePrompt?: string;
}
export declare const MQ_ITEM_STYLES: MQItemStyle[];
export type MQItemStyleType = (typeof MQ_ITEM_STYLES)[number];
