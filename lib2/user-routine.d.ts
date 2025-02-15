
type ActionSimple = 'await' | 'click' | 'comment' | 'exists' | 'log' | 'nav' | 'wait';
type ActionComplex = 'await' | 'append' | 'exists' | 'value' | 'write';
type StringSimple = `${ActionSimple} ${string}`;
type StringComplex = `${ActionComplex} ${string} ${string}`;

export type UserRoutineAction = UserRoutineActionString | (() => void) | Promise<void> | string;
export type UserRoutineActionString = StringSimple | StringComplex;

export type UserRoutineOptions = {
  awaitTimeout?: number,
  continueOnFailure?: boolean,
  displayMessage?: boolean,
  displayProgress?: boolean,
  displaySpeed?: number,
  globalDelay?: number,
  keyboardControls?: boolean,
  logCollapse?: boolean,
  logProgress?: boolean,
  logResult?: boolean,
  message?: string,
  messageAttribution?: string,
  overrideCss?: string,
  separator?: string,
  simultaneousAllowed?: boolean,
  tutorialMode?: boolean,
}

export type UserRoutineReturn = {
  success: boolean,
  log: string[],
  message: string,
  configuration: UserRoutineOptions
};
