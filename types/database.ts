};
export type Tables = {
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
      world_id: string;
    };
    Insert: {
      id?: string;
      name: string;
      world_id: string;
    };
    Update: {
      id?: string;
      name?: string;
      world_id?: string;
    };
  };
};
