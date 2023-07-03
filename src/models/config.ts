import { Mutable } from "./mutable";

export type UserRoutineOptions = Mutable<Partial<typeof DEFAULT_CONFIG>>;

export const DEFAULT_CONFIG = Object.freeze({
  // messageAttribution: 'UserRoutine', // unnecessary
  // message: 'UserRoutine', // don't need due to new api's label argument
  // separator: ' ', // don't need due to builder pattern
  // simultaneousAllowed: false, // don't need due to routine.run api
  // tutorialMode: false, // don't need due to routine.tutorial() api
  awaitTimeout: 10_000,
  continueOnFailure: false,
  displayLabel: true, // displayMessage: true,
  displayProgress: true,
  displaySpeed: 1,
  globalDelay: 500,
  keyboardControls: true,
  logCollapse: false,
  logProgress: true,
  logResult: true,
  overrideCss: '',
});
