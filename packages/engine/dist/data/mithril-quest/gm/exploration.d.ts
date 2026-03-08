export interface TravelPace {
    key: string;
    label: string;
    distancePerDay: number;
    stealthPenalty: number;
}
export declare const TRAVEL_PACES: TravelPace[];
export interface Hazard {
    key: string;
    label: string;
    description: string;
    dangerLevel: number;
}
export declare const EXPLORATION_HAZARDS: Hazard[];
