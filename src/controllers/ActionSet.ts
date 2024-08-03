import { ActionExpression } from "../models/action";

export class ActionSet {

  protected actions: ActionExpression[] = []

  constructor() { return this }

  await(selector: string, textConstraint?: string) {
    this.actions.push({name: 'await', args: [selector, textConstraint]});
    return this;
  }
  awaitNot(selector: string, textConstraint?: string) {
    this.actions.push({name: 'awaitNot', args: [selector, textConstraint]});
    return this;
  }
  click(selector: string, textConstraint?: string) {
    this.actions.push({name: 'click', args: [selector, textConstraint]});
    return this;
  }
  comment(selector: string, text: string) {
    this.actions.push({name: 'comment', args: [selector, text]});
    return this;
  }
  exists(selector: string, textConstraint?: string) {
    this.actions.push({name: 'exists', args: [selector, textConstraint]});
    return this;
  }
  existsNot(selector: string, textConstraint?: string) {
    this.actions.push({name: 'existsNot', args: [selector, textConstraint]});
    return this;
  }
  fill(selector: string, newValue: string | number) {
    this.actions.push({name: 'fill', args: [selector, newValue]});
    return this;
  }
  log(message: string) {
    this.actions.push({name: 'log', args: [message]});
    return this;
  }
  navigate(location: string) {
    this.actions.push({name: 'nav', args: [location]});
    return this;
  }
  valueIs(selector: string, value: string | number) {
    this.actions.push({name: 'valueIs', args: [selector, value]});
    return this;
  }
  valueIsNot(selector: string, value: string | number) {
    this.actions.push({name: 'valueIsNot', args: [selector, value]});
    return this;
  }

}
