import { Action } from "../core/Action";
import { ActionExpression, ActionResult } from "../models/action";
import { DEFAULT_ROUTINE_CONFIG, Manifest, UserRoutineOptions } from "../models/routine";

export class Routine {

  protected manifest: Manifest = {
    actions: [],
    config: DEFAULT_ROUTINE_CONFIG,
    label: '',
    log: [],
  };

  constructor(label: string, options?: UserRoutineOptions) {
    this.manifest.label = label;
    this.manifest.config = Object.freeze({ ...options, ...DEFAULT_ROUTINE_CONFIG });
    return this;
  }

  /* Override this function to change how the manifest is used */
  public run() { }

  await(selector: string, textConstraint?: string) {
    this.manifest.actions.push({name: 'await', args: [selector, textConstraint]});
    return this;
  }
  awaitNot(selector: string, textConstraint?: string) {
    this.manifest.actions.push({name: 'awaitNot', args: [selector, textConstraint]});
    return this;
  }
  click(selector: string, textConstraint?: string) {
    this.manifest.actions.push({name: 'click', args: [selector, textConstraint]});
    return this;
  }
  comment(selector: string, text: string) {
    this.manifest.actions.push({name: 'comment', args: [selector, text]});
    return this;
  }
  exists(selector: string, textConstraint?: string) {
    this.manifest.actions.push({name: 'exists', args: [selector, textConstraint]});
    return this;
  }
  existsNot(selector: string, textConstraint?: string) {
    this.manifest.actions.push({name: 'existsNot', args: [selector, textConstraint]});
    return this;
  }
  type(selector: string, newValue: string | number) {
    this.manifest.actions.push({name: 'type', args: [selector, newValue]});
    return this;
  }
  log(message: string) {
    this.manifest.actions.push({name: 'log', args: [message]});
    return this;
  }
  navigate(location: string) {
    this.manifest.actions.push({name: 'nav', args: [location]});
    return this;
  }
  valueIs(selector: string, value: string | number) {
    this.manifest.actions.push({name: 'valueIs', args: [selector, value]});
    return this;
  }
  valueIsNot(selector: string, value: string | number) {
    this.manifest.actions.push({name: 'valueIsNot', args: [selector, value]});
    return this;
  }

  protected async executeAction(action: ActionExpression): Promise<ActionResult> {
    return await Action[action.name](...action.args);
  }

}
