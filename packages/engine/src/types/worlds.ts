export type Field = {
  id: string;
  title: string;
  type?: string;
  placeholder?: string;
};

export type CharacterSpecs = {
  fields: Field[];
};

export type StorySpecs = {
  fields: Field[];
};

export type Specs = {
  characters: CharacterSpecs;
  story: StorySpecs;
};

export type Agent = {
  name: string;
  modelId: string;
  style: string;
};

export type Theme = {
  accentColor: string;
  bgColor?: string;
  textColor?: string;
  parchmentTexture: string;
};

export type Generators = {
  characterPrompt: (d: any) => string;
  storyPrompt: (d: any) => string;
};

export type World = {
  id: string;
  title: string;
  specs: Specs;
  generators: Generators;
  agents: Agent[];
  theme: Theme;
};
