import { Action } from "../core/Action";
import { ActionResult } from "../models/action";
import { ActionExpression, Manifest } from "../models/manifest";
import { DEFAULT_ROUTINE_CONFIG, UserRoutineOptions } from "../models/rountine-config";
import { ActionSet } from "./ActionSet";

export class BaseRoutine extends ActionSet {

  protected manifest: Manifest = {
    label: '',
    actions: [],
    config: DEFAULT_ROUTINE_CONFIG,
    log: [],
  };

  constructor(label: string, options?: UserRoutineOptions) {
    super();
    this.manifest.label = label;
    this.manifest.config = Object.freeze({ ...options, ...DEFAULT_ROUTINE_CONFIG });
    return this;
  }

  /* Override this function to change how the manifest is used */
  public run() { }

  protected async executeAction(action: ActionExpression): Promise<ActionResult> {
    return await Action[action.name](...action.args);
  }

}
