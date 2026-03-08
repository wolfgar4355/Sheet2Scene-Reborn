export interface MQItemPose {
    key: string;
    label: string;
    description: string;
    camera: {
        angle: "front" | "side" | "isometric" | "top" | "perspective";
        distance: "close" | "medium" | "far";
        rotation?: number;
    };
    lighting: {
        type: "studio" | "dramatic" | "flat" | "rim" | "magic";
        intensity: number;
    };
    background: "transparent" | "neutral-dark" | "neutral-light" | "parchment" | "void";
    recommendedStyles?: string[];
}
export declare const MQ_ITEM_POSES: MQItemPose[];
export type MQItemPoseType = (typeof MQ_ITEM_POSES)[number];
