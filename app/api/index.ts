import { TurnInput, TurnOutput } from '../core/types.js';

export const handleTurn = async (_input: TurnInput): Promise<TurnOutput> => ({
  narration: '<narration placeholder>',
  checks: [],
  outcome: '<outcome placeholder>',
  hooks: ['<next action suggestion>'],
});
