export interface CompletionParams {
  prompt: string;
  model?: string;
}

export interface EmbeddingParams {
  input: string;
  model?: string;
}

export interface EmbeddingResult {
  vector: number[];
}

export class LLMClient {
  async complete(params: CompletionParams): Promise<string> {
    void params;
    return Promise.resolve('<llm completion placeholder>');
  }

  async embed(params: EmbeddingParams): Promise<EmbeddingResult> {
    void params;
    return Promise.resolve({ vector: [] });
  }
}
