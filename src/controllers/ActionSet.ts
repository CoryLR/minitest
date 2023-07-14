import { ActionExpression, Manifest } from "../models/manifest";

export class ActionSet {

  protected actions: ActionExpression[] = []

  constructor() { return this }

  await(selector: string, textConstraint?: string) {
    this.actions.push({action: 'await', args: [selector, textConstraint]});
    return this;
  }
  awaitNot(selector: string, textConstraint?: string) {
    this.actions.push({action: 'awaitNot', args: [selector, textConstraint]});
    return this;
  }
  click(selector: string, textConstraint?: string) {
    this.actions.push({action: 'click', args: [selector, textConstraint]});
    return this;
  }
  comment(selector: string, text: string) {
    this.actions.push({action: 'comment', args: [selector, text]});
    return this;
  }
  exists(selector: string, textConstraint?: string) {
    this.actions.push({action: 'exists', args: [selector, textConstraint]});
    return this;
  }
  existsNot(selector: string, textConstraint?: string) {
    this.actions.push({action: 'existsNot', args: [selector, textConstraint]});
    return this;
  }
  fill(selector: string, newValue: string | number) {
    this.actions.push({action: 'fill', args: [selector, newValue]});
    return this;
  }
  log(message: string) {
    this.actions.push({action: 'log', args: [message]});
    return this;
  }
  navigate(location: string) {
    this.actions.push({action: 'nav', args: [location]});
    return this;
  }
  valueIs(selector: string, value: string | number) {
    this.actions.push({action: 'valueIs', args: [selector, value]});
    return this;
  }
  valueIsNot(selector: string, value: string | number) {
    this.actions.push({action: 'valueIsNot', args: [selector, value]});
    return this;
  }

}
