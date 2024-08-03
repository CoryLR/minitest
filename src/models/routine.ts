import { ActionExpression } from "./action";
import { Mutable } from "./mutable";

export type UserRoutineConfig = typeof DEFAULT_ROUTINE_CONFIG;
export type UserRoutineOptions = Mutable<Partial<typeof DEFAULT_ROUTINE_CONFIG>>;

export const DEFAULT_ROUTINE_CONFIG = Object.freeze({
  // messageAttribution: 'UserRoutine', // unnecessary
  // message: 'UserRoutine', // don't need due to new api's label argument
  // separator: ' ', // don't need due to builder pattern
  // simultaneousAllowed: false, // don't need due to routine.run api
  // tutorialMode: false, // don't need due to routine.tutorial() api
  awaitTimeout: 15_000, // milliseconds
  continueOnFailure: false,
  displayLabel: true, // displayMessage: true,
  displayProgress: true, // show what User Routine is doing in the UI
  displaySpeed: 1, // scaling factor
  globalDelay: 500, // milliseconds
  keyboardControls: true,
  logCollapse: false,
  logProgress: true,
  logResult: true,
  overrideCss: '',
});

export interface Manifest {
  label: string;
  actions: ActionExpression[];
  config: UserRoutineConfig;
  log: string[];
}

export type UserRoutineResult = Pick<Manifest, 'log' | 'config'> & {
  success: boolean;
};
