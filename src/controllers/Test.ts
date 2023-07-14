import { ActionExpression, Manifest } from "../models/manifest";
import { UserRoutineOptions } from "../models/rountine-config";
import { BaseRoutine } from "./BaseRoutine";

export class Test extends BaseRoutine {

  protected manifest: Manifest = super.manifest;
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
  }

  private async performAction(action: ActionExpression) {
    const { success, message, error } = await super.executeAction(action);
    const prefix = success ? 'PASS: ' : error ? 'ERROR: ' : 'FAIL: ';
    this.manifest.log.push(prefix + message);
  }

}
