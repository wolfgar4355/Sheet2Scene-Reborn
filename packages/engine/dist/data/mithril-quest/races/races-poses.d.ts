export interface MQRacePose {
    key: string;
    raceKey: string;
    label: string;
    camera: string;
    mood: string;
    lighting: string;
    environment: string;
    gesture: string;
    expression: string;
    style?: string;
}
export declare const MQ_RACE_POSES: MQRacePose[];
