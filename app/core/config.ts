import { config as loadEnv } from 'dotenv';

loadEnv();

export interface AppConfig {
  llmProvider: string;
  llmModel: string;
  llmApiKey: string;
  embeddingsModel: string;
  contextBudgetTokens: number;
}

const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const loadConfig = (): AppConfig => ({
  llmProvider: getEnv('LLM_PROVIDER', '<provider>'),
  llmModel: getEnv('LLM_MODEL', '<model>'),
  llmApiKey: getEnv('LLM_API_KEY', ''),
  embeddingsModel: getEnv('EMBEDDINGS_MODEL', '<embeddings-model>'),
  contextBudgetTokens: Number(getEnv('CONTEXT_BUDGET_TOKENS', '1200')),
});
