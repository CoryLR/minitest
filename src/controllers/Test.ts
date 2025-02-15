import { ActionExpression } from "../models/action";
import { Manifest, UserRoutineOptions } from "../models/routine";
import { Routine } from "./Routine";

export class Test extends Routine {

  protected manifest: Manifest;
  state = {
    continueActions: true,
    currentStep: 0,
    documentKeyDownSet: false,
    errorOccurred: false,
    nextButtonPressed: false,
    paused: false,
  }

  constructor(label: string, options?: UserRoutineOptions) {
    super(label, options);
    return this;
  }

  public async run() {
    for (const action of this.manifest.actions) {
      await this.performAction(action);
    }
    return 
  }

  private async performAction(action: ActionExpression) {
    const { success, message, error } = await super.executeAction(action);
    const prefix = success ? 'PASS: ' : error ? 'ERROR: ' : 'FAIL: ';
    this.manifest.log.push(prefix + message);
  }

}
