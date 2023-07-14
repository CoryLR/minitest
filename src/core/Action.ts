import { ActionResult } from "../models/action";
import { DEFAULT_ROUTINE_CONFIG } from "../models/rountine-config";
import { DomUtil } from "./DomUtil";
import { Time } from "./Time";
import { round } from "./miscelanneous-util";

export class Action {

  /**
   * Awaits for an element to exist
   * @param selector - CSS selector
   * @param textConstraint - (Optional) text to await within the element
   * @param interval - (Default: ) Milliseconds between DOM checks 
   * @param duration - (Default: ) Milliseconds before stopping the search
   */
  public static async await(selector: string, textConstraint = '', interval = DEFAULT_ROUTINE_CONFIG.globalDelay, duration = DEFAULT_ROUTINE_CONFIG.awaitTimeout): Promise<ActionResult> {
    const startTime = performance.now();
    try {
      return await this.tryAwait(selector, textConstraint, duration, interval, startTime);
    } catch(err) {
      return await this.catchAwait(selector, textConstraint, err.message, startTime);
    }
  }

  private static async tryAwait(selector: string, textConstraint: string, interval: number, duration: number, startTime: number): Promise<ActionResult> {
    const result = Action.getEmptyActionResult();
    const selectorWasFound = await Time.loop(duration, interval, () => Action.checkExists(selector, textConstraint), true);
    const stop = performance.now();
    const seconds = round(stop - startTime, 1).toFixed(1);
    const messageParts = [
      `Selector "${selector}"` + textConstraint ? `containing text "${textConstraint}"` : '',
      selectorWasFound ? 'was found' : 'was not found',
      `after ${seconds} seconds`,
    ];
    result.success = selectorWasFound;
    result.message = messageParts.join(' ');
    return result;
  }

  private static async catchAwait(selector: string, textConstraint: string, errorMessage: string, startTime: number): Promise<ActionResult> {
    const result = Action.getEmptyActionResult();
    const stop = performance.now();
    const seconds = round(stop - startTime, 1).toFixed(1);
    const messageParts = [
      `Await for selector "${selector}"` + textConstraint ? `containing text "${textConstraint}"` : '',
      `stopped after ${seconds} seconds due to unexpected error: "${errorMessage}"`,
    ];
    result.success = false;
    result.message = messageParts.join(' ');
    result.error = errorMessage;
    return result;
  }


  public static async awaitNot(selector: string, textConstraint: string, interval = DEFAULT_ROUTINE_CONFIG.globalDelay, duration = DEFAULT_ROUTINE_CONFIG.awaitTimeout): Promise<ActionResult> {
    const start = performance.now();
    try {
      return await this.tryAwaitNot(selector, textConstraint, duration, interval, start);
    } catch(err) {
      return await this.catchAwaitNot(selector, textConstraint, err.message, start );
    }
  }

  private static async tryAwaitNot(selector: string, textConstraint: string, interval: number, duration: number, startTime: number): Promise<ActionResult> {
    const result = Action.getEmptyActionResult();
    const selectorNotFound = await Time.loop(duration, interval, () => Action.checkExistsNot(selector, textConstraint), true);
    const stop = performance.now();
    const seconds = round(stop - startTime, 1).toFixed(1);
    const messageParts = [
      `Selector "${selector}"` + textConstraint ? `containing text "${textConstraint}"` : '',
      selectorNotFound && Number(seconds) === 0 ? 'was not found' : selectorNotFound ? 'disappeared' : 'still appeared',
      `after ${seconds} seconds`,
    ];
    result.success = selectorNotFound;
    result.message = messageParts.join(' ');
    return result;
  }

  private static async catchAwaitNot(selector: string, textConstraint: string, errorMessage: string, startTime: number): Promise<ActionResult> {
    const result = Action.getEmptyActionResult();
    const stop = performance.now();
    const seconds = round(stop - startTime, 1).toFixed(1);
    const messageParts = [
      `Await for selector "${selector}"` + textConstraint ? `containing text "${textConstraint}"` : '' + 'to disappear',
      `stopped after ${seconds} seconds due to unexpected error: "${errorMessage}"`,
    ];
    result.success = false;
    result.message = messageParts.join(' ');
    result.error = errorMessage;
    return result;
  }

  // public static async awaitNot(selector: string, textConstraint: string, duration = DEFAULT_ROUTINE_CONFIG.awaitTimeout, interval = DEFAULT_ROUTINE_CONFIG.globalDelay): Promise<ActionResult> {
  //   const result = Action.getEmptyActionResult();
  //   const start = performance.now();
  //   try {
  //     const selectorDisappeared = await Time.loop(duration, interval, () => Action.checkExistsNot(selector, textConstraint), true);
  //     const stop = performance.now();
  //     const seconds = round(stop - start, 1).toFixed(1);
  //     const messageParts = [
  //       `Selector "${selector}"` + textConstraint ? `containing text "${textConstraint}"` : '',
  //       selectorDisappeared ? 'was found' : 'was not found',
  //       `after ${seconds} seconds`,
  //     ];
  //     result.success = selectorDisappeared;
  //     result.message = messageParts.join(' ');
  //   } catch(err) {
  //     const stop = performance.now();
  //     const seconds = round(stop - start, 1).toFixed(1);
  //     const messageParts = [
  //       `AwaitNot for selector "${selector}"` + textConstraint ? `containing text "${textConstraint}"` : '',
  //       `stopped after ${seconds} seconds due to unexpected error: "${err.message}"`,
  //     ];
  //     result.success = false;
  //     result.message = messageParts.join(' ');
  //     result.error = err.message;
  //   }
  //   return result;
  // }

  public static click(selector: string, textConstraint: string) {
    const element = DomUtil.getElement(selector, textConstraint);
    const success = DomUtil.sendClickEvent(element);
    return success;
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

  public static fill(selector: string, newValue: string | number) {
    const element = DomUtil.getElement(selector);
    return DomUtil.setValue(element as HTMLInputElement, String(newValue));
  }

  public static navigate(location: string) {
    window.location.href = location;
    return true;
  }

  public static valueIs(selector: string, value: string | number) {
    const element = DomUtil.getElement(selector);
    return DomUtil.checkValueMatch(element as HTMLInputElement, String(value));
  }
  
  public static valueIsNot(selector: string, value: string | number) {
    const element = DomUtil.getElement(selector);
    return !DomUtil.checkValueMatch(element as HTMLInputElement, String(value));
  }

  public static async wait(duration: number) {
    await Time.sleep(duration);
    return true;
  }

  //comment, log, write?

  // private static async baseAwait(checkExistsOrNotExists: boolean, selector: string, textConstraint: string, duration = DEFAULT_ROUTINE_CONFIG.awaitTimeout, interval = DEFAULT_ROUTINE_CONFIG.globalDelay): Promise<ActionResult> {
  //   const result = Action.getEmptyActionResult();
  //   const start = performance.now();
  //   try {
  //     const selectorWasFound = await Time.loop(duration, interval, () => Action.checkExists(selector, textConstraint), true);
  //     const stop = performance.now();
  //     const seconds = round(stop - start, 1).toFixed(1);
  //     const messageParts = [
  //       `Selector "${selector}"` + textConstraint ? `containing text "${textConstraint}"` : '',
  //       selectorWasFound ? 'was found' : 'was not found',
  //       `after ${seconds} seconds`,
  //     ]
  //     result.success = selectorWasFound;
  //     result.message = messageParts.join(' ');
  //   } catch(err) {
  //     const stop = performance.now();
  //     const seconds = round(stop - start, 1).toFixed(1);
  //     const messageParts = [
  //       `Await for selector "${selector}"` + textConstraint ? `containing text "${textConstraint}"` : '',
  //       `stopped after ${seconds} seconds due to unexpected error: "${err.message}"`,
  //     ];
  //     result.success = false;
  //     result.message = messageParts.join(' ');
  //     result.error = err.message;
  //   }
  //   return result;
  // }


  private static getEmptyActionResult(): ActionResult {
    return { success: false, message: '' };
  }

}
