import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadConfig } from '../app/core/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const directories = [
  'app/api',
  'app/core',
  'app/llm',
  'app/memory',
  'app/state',
  'app/tools',
  'data',
  'data/indexes',
  'data/memory',
  'data/memory/knowledge',
  'data/state',
  'scripts',
  'tests',
];

const files: Record<string, string> = {
  'data/world.md': '',
  'data/rules.yaml': '',
  'data/state/world_state.json': '{}\n',
  'data/state/current_scene.md': '',
  'data/memory/episodic_log.md': '',
};

const ensureDirectories = async (): Promise<void> => {
  await Promise.all(
    directories.map(async (relativePath) => {
      const absolutePath = path.join(projectRoot, relativePath);
      await fs.mkdir(absolutePath, { recursive: true });
    }),
  );
};

const ensureFiles = async (): Promise<void> => {
  await Promise.all(
    Object.entries(files).map(async ([relativePath, contents]) => {
      const absolutePath = path.join(projectRoot, relativePath);
      try {
        await fs.access(absolutePath);
      } catch (error: any) {
        if (error.code === 'ENOENT') {
          await fs.writeFile(absolutePath, contents, 'utf8');
        } else {
          throw error;
        }
      }
    }),
  );
};

const main = async (): Promise<void> => {
  const config = loadConfig();
  console.info('Loaded configuration for provider %s using model %s', config.llmProvider, config.llmModel);

  await ensureDirectories();
  await ensureFiles();
  console.info('Project directories and placeholder files are ready.');
};

main().catch((error) => {
  console.error('Failed to initialise project:', error);
  process.exitCode = 1;
});
