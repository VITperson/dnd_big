import path from 'path';
import { createJsonStateContainer } from '../core/state.js';

const defaultState = {} as const;

export const worldState = createJsonStateContainer(path.resolve('data/state/world_state.json'), defaultState);
