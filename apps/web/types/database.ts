// apps/web/types/database.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      characters: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          system: string;
          data: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          system: string;
          data?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          system?: string;
          data?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "characters_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };

      // ✅ TABLE SHARES (alignée avec Supabase)
      shares: {
        Row: {
          id: string;
          user_id: string;
          character_id: string;
          slug: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          character_id: string;
          slug?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          character_id?: string;
          slug?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "shares_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "shares_character_id_fkey";
            columns: ["character_id"];
            referencedRelation: "characters";
            referencedColumns: ["id"];
          }
        ];
      };
    };

    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
