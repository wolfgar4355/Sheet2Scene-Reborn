// sheet2scene/types/database.ts

export type Database = {
  public: {
    Tables: {
      worlds: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id?: string;
          name: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
      };

      characters: {
        Row: {
          id: string;
          name: string;
          system: string;
          data: unknown;
          user_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          system: string;
          data?: unknown;
          user_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          system?: string;
          data?: unknown;
          updated_at?: string;
        };
      };
    };
  };
};
