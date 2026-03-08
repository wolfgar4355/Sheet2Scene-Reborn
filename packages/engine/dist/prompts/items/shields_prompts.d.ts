import { MQImageStyle, MQImageVariant, MQPromptDictionary, MQBasePromptConfig, MQGeneratedPrompt, MQRarity } from "../_types";
export declare const MQ_SHIELD_PROMPT_CONFIGS: MQPromptDictionary<MQBasePromptConfig>;
export declare function generateShieldPrompt(args: {
    key: string;
    label?: string;
    rarity?: MQRarity;
    style: MQImageStyle;
    variant?: MQImageVariant;
    extraParts?: string[];
    tags?: string[];
    loreTags?: string[];
}): MQGeneratedPrompt;
