import { UserRoutineConfig } from "./rountine-config";

export type ActionName = 'await' | 'awaitNot' | 'click' | 'comment' | 'exists' | 'existsNot' | 'fill' | 'log' | 'nav' | 'valueIs' | 'valueIsNot';

export type ActionExpression = { name: ActionName, args: [string, (string | number)?]};

export type Manifest = {
  label: string;
  actions: ActionExpression[];
  config: UserRoutineConfig;
  log: string[],
}
