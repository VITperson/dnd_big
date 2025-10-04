# Text D&D Skeleton

This repository contains the bootstrap implementation for a lightweight text-based Dungeons & Dragons experience powered by an LLM. The project is organised to support future roadmap iterations that add world generation, context assembly, and turn processing pipelines.

## Project structure

```
/app
  /api          # HTTP layer and handlers
  /core         # Shared utilities, prompt builder, validation
  /llm          # Abstractions over the language model provider
  /memory       # Memory management utilities (stub)
  /state        # Session and world state helpers
  /tools        # Extra helper utilities (dice, analysis, etc.)
/data
  /indexes      # Vector index and metadata
  /memory       # Long-term memory artefacts
  /state        # Canonical world and scene state files
/scripts        # CLI tooling
/tests          # Automated test suites
```

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and adjust values to match your provider:

   ```bash
   cp .env.example .env
   ```

3. Initialise the project data directories and placeholder files:

   ```bash
   npm run init_game
   ```

## Environment variables

| Variable | Description |
| -------- | ----------- |
| `LLM_PROVIDER` | Provider identifier (e.g. `openai`). |
| `LLM_MODEL` | Completion model name. |
| `LLM_API_KEY` | API key used to authenticate LLM requests. |
| `EMBEDDINGS_MODEL` | Embedding model identifier. |
| `CONTEXT_BUDGET_TOKENS` | Maximum number of tokens allowed in a turn context (default: `1200`). |

## Scripts

- `npm run init_game`: ensures the data directory structure exists and touches placeholder files for world, rules, and state artefacts.

## Roadmap

See `ROADMAP.md` (planned) for the multi-iteration plan guiding future development of the application.
