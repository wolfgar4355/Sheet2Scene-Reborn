import type { MQAlignment } from "./alignements";
export interface MQAlignmentPosePreset {
    key: MQAlignment["key"];
    posePrompt: string;
    cameraPrompt: string;
    lightingPrompt: string;
    extraStyle?: string;
}
export declare const MQ_ALIGNMENT_POSES: MQAlignmentPosePreset[];
export declare function getAlignmentPosePreset(key: MQAlignment["key"]): MQAlignmentPosePreset | undefined;
