export interface MQBackgroundPose {
    key: string;
    label: string;
    backgroundKey: string;
    description: string;
    camera: string;
    lighting: string;
    mood: string;
    environment: string;
    gesture: string;
    expression: string;
    style?: string;
}
export declare const MQ_BACKGROUND_POSES: MQBackgroundPose[];
