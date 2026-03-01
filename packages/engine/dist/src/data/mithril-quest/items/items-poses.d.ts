export interface MQItemPose {
    id: string;
    label: string;
    angle: string;
    style: string;
    prompt: string;
    seed?: number;
    usage: string[];
    tags: string[];
}
export declare const ITEM_POSES: MQItemPose[];
