// types/world.ts

export type Field = {
  id: string;
  title: string;
  type?: "text" | "long" | "tags";
  placeholder?: string;
};

export type Agent = {
  name: string;
  modelId: string;
  style: string;
};

export type Theme = {
  bgColor: string;
  textColor: string;
  accentColor: string;
  parchmentTexture: string;
};

export type World = {
  id: string;
  title: string;
  emoji?: string;
  icon?: string;
  specs: {
    character: { fields: Field[] };
    story: { fields: Field[] };
  };
  generators: {
    characterPrompt: (data: Record<string, any>) => string;
    storyPrompt: (data: Record<string, any>) => string;
  };
  agents?: Agent[];
  theme?: Theme;
};
