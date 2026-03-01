export interface MQEraPose {
    key: string;
    eraKey: string;
    label: string;
    camera: string;
    mood: string;
    lighting: string;
    environment: string;
    gesture: string;
    expression: string;
    style?: string;
}
export declare const MQ_ERA_POSES: MQEraPose[];
