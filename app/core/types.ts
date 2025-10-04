export interface TurnInput {
  session_id: string;
  player_action: string;
  trace?: boolean;
}

export interface Check {
  ability: string;
  dc: number;
  roll: string;
}

export interface TurnOutput {
  narration: string;
  checks: Check[];
  outcome: string;
  hooks: string[];
  debug?: unknown;
}
