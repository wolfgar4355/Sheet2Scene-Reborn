// @ts-nocheck
// index.ts — façade propre pour toutes les races Mithril Quest

import { ALL_RACES } from "./ALL_RACES";

export const MQ_RACES = ALL_RACES;

export type MQRace = (typeof MQ_RACES)[number];
