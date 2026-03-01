import type { MQAlignment } from "./alignements";
export interface MQAlignmentIcon {
    key: MQAlignment["key"];
    emoji: string;
    tailwindBg: string;
    tailwindBorder: string;
    lucideIcon?: string;
}
export declare const MQ_ALIGNMENT_ICONS: MQAlignmentIcon[];
export declare function getAlignmentIcon(key: MQAlignment["key"]): MQAlignmentIcon | undefined;
