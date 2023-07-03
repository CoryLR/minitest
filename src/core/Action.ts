import { DEFAULT_CONFIG } from "../models/config";
import { DomUtil } from "./DomUtil";
import { Time } from "./Time";

export class Action {

  public static async await(selector: string, textConstraint: string, duration = DEFAULT_CONFIG.awaitTimeout, interval = DEFAULT_CONFIG.globalDelay) {
    return await Time.loop(duration, interval, () => Action.checkExists(selector, textConstraint), true);
  }

  public static async awaitNot(selector: string, textConstraint: string, duration = DEFAULT_CONFIG.awaitTimeout, interval = DEFAULT_CONFIG.globalDelay) {
    return await Time.loop(duration, interval, () => Action.checkExistsNot(selector, textConstraint), true);
  }

  public static async comment() {
    
  }
  
  public static checkExists(selector: string, textConstraint: string) {
    const element = DomUtil.getElement(selector, textConstraint);
    return Boolean(element);
  }
  
  public static checkExistsNot(selector: string, textConstraint: string) {
    const element = DomUtil.getElement(selector, textConstraint);
    return !Boolean(element);
  }

  public static click(selector: string, textConstraint: string) {
    const element = DomUtil.getElement(selector, textConstraint);
    const success = DomUtil.sendClickEvent(element);
    return success;
  }

  public static fill(selector: string, newValue: string | number) {
    const element = DomUtil.getElement(selector);
    return DomUtil.setValue(element as HTMLInputElement, String(newValue))
  }

  public static navigate(location: string) {
    window.location.href = location;
    return true;
  }

  public static valueIs(selector: string, value: string | number) {
    const element = DomUtil.getElement(selector);
    return DomUtil.checkValueMatch(element as HTMLInputElement, String(value))
  }
  
  public static valueIsNot(selector: string, value: string | number) {
    const element = DomUtil.getElement(selector);
    return !DomUtil.checkValueMatch(element as HTMLInputElement, String(value))
  }

  public static async wait(duration: number) {
    await Time.sleep(duration);
    return true;
  }

  //comment, log, write?
  
}
