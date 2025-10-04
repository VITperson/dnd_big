import { promises as fs } from 'fs';
import path from 'path';

export interface StateContainer<T = Record<string, unknown>> {
  load(): Promise<T>;
  save(nextState: T): Promise<void>;
}

export const createJsonStateContainer = <T>(filePath: string, initialState: T): StateContainer<T> => {
  const resolved = path.resolve(filePath);

  const load = async (): Promise<T> => {
    try {
      const content = await fs.readFile(resolved, 'utf-8');
      return JSON.parse(content) as T;
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        await save(initialState);
        return initialState;
      }
      throw error;
    }
  };

  const save = async (nextState: T): Promise<void> => {
    const dir = path.dirname(resolved);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(resolved, JSON.stringify(nextState, null, 2), 'utf-8');
  };

  return { load, save };
};
