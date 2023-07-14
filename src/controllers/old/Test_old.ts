import { Action } from "../../core/Action";
import { Time } from "../../core/Time";
import { ActionExpression, Manifest } from "../../models/manifest";
import { DEFAULT_ROUTINE_CONFIG, UserRoutineConfig, UserRoutineOptions } from "../../models/rountine-config";
import { ActionSet } from "../ActionSet";

export class Test extends ActionSet {

  protected actions: ActionExpression[];
  readonly label: string;
  readonly config: UserRoutineConfig;
  state = {
    paused: false,
    errorOccurred: false,
    continueActions: true,
    documentKeyDownSet: false,
    nextButtonPressed: false,
    currentStep: 0,
  }
  logArray: string[] = [];

  constructor(label: string, options?: UserRoutineOptions) {
    super();
    this.label = label;
    this.config = Object.freeze({ ...options, ...DEFAULT_ROUTINE_CONFIG });
    return this;
  }

  /* Override this function to change how the manifest is used */
  public async run() {
    try {

      this.logArray.push('PASS: ');
    } catch (error) {
      if (error instanceof ActionFailure) {
        this.logArray.push('FAIL: ' + error.message);
      } else {
        this.logArray.push('ERROR: Unexpected Error: ' + error.message);
      }
    }
  }

  private async executeAction(actionExpression: ActionExpression) {
    await this.beforeEach();
    const result = await Action[actionExpression.action](...actionExpression.args);
    await this.afterEach();
  }

  protected async beforeEach() {

  }

  protected async afterEach() {

  }

}