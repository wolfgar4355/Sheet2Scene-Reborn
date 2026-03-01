export interface MQClassPose {
    key: string;
    classKey: string;
    label: string;
    camera: string;
    mood: string;
    lighting: string;
    environment: string;
    gesture: string;
    expression: string;
    style?: string;
}
export declare const MQ_CLASS_POSES: MQClassPose[];
