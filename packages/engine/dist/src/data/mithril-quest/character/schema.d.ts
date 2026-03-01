export type FieldType = "text" | "number" | "textarea" | "select";
export interface FieldOption {
    value: string;
    label: string;
}
export interface SheetField {
    path: string;
    label: string;
    type: FieldType;
    width?: "full" | "half";
    options?: FieldOption[];
}
export interface SheetSection {
    key: string;
    label: string;
    description?: string;
    fields: SheetField[];
}
export interface MQCharacterSheetSchema {
    variant: string;
    sections: SheetSection[];
}
export declare const MQ_SHEET_SCHEMA_CORE: MQCharacterSheetSchema;
export declare const MQ_SHEET_SCHEMAS: Record<string, MQCharacterSheetSchema>;
export declare function getMQSheetSchema(variant?: string): MQCharacterSheetSchema;
