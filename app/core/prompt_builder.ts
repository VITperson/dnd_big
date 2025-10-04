export interface PromptParts {
  system: string;
  context: string[];
  user: string;
}

export const buildPrompt = (parts: Partial<PromptParts>): PromptParts => {
  return {
    system: parts.system ?? '<system prompt placeholder>',
    context: parts.context ?? ['<context placeholder>'],
    user: parts.user ?? '<user action placeholder>',
  };
};
