export interface MQ_BackgroundDef {
    key: string;
    label: string;
    description: string;
    suggestedSkills: string[];
    suggestedTools?: string[];
    suggestedLanguages?: string[];
    startingWealth?: string;
    startingGear?: string[];
}
export declare const MQ_BACKGROUNDS: MQ_BackgroundDef[];
