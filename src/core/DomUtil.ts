import { Time } from "./Time";

export class DomUtil {

  public static getElement(selector: string, textConstraint?: string): HTMLElement | undefined {
    if (!textConstraint) {
      return document.querySelector(selector);
    } else {
      const possibleElements = document.querySelectorAll(selector);
      return DomUtil.findElementWithTextRecursive(possibleElements, textConstraint);
    }
  }

  public static sendClickEvent(element?: HTMLElement): boolean {
    if (!element) return false;
    if (!DomUtil.elementIsClickable(element)) return false;
    element.click();
    return true;
  }

  /**
   * Returns the smallest element given the provided text and custom conditions
   * @param elements - Starting elements to try, e.g. querySelectorAll('.class')
   * @param text  - Text to search for
   * @param customFilter - filter run on each candidate element, return `false` to filter out 
   * @returns 
   */
  public static findElementWithTextRecursive(
    elements: any | NodeListOf<any>,
    text: string,
    customFilter = (e: HTMLElement) => e.tagName !== 'SCRIPT',
  ): HTMLElement | undefined {
    for (const element of elements) {
      const elementContainsText = DomUtil.elementContainsText(element, text);
      if (!elementContainsText) continue;
      if (customFilter(element)) {
        return element
      }
      const selectedChildNodes = Array.from(element.childNodes).filter((e: any) => { if (customFilter(e)) return e })
      DomUtil.findElementWithTextRecursive(selectedChildNodes, text, customFilter);
    }
  }

  public static elementIsClickable(element: HTMLElement): boolean {
    return element.click && element.tagName !== 'SCRIPT';
  }

  public static elementContainsText(element: HTMLElement | HTMLInputElement | Element, text: string): boolean {
    const lowerText = text.toLowerCase();
    const matchFoundInTextContent = element.textContent && element.textContent.toLowerCase().includes(lowerText);
    const matchFoundInValue = typeof ((element as HTMLInputElement)).value === 'string' && ((element as HTMLInputElement)).value.toLowerCase().includes(lowerText);
    return matchFoundInTextContent || matchFoundInValue;
  }

  public static setValue(element: HTMLInputElement, newValue: string): boolean {
    if(element.value === undefined) return false;
    element.value = newValue;
    element.dispatchEvent(new InputEvent('input'));
    return true;
  }

  public static checkValueMatch(element: HTMLInputElement, value?: string): boolean {
    return element.value === value;
  }

  public static checkVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return rect.bottom < viewHeight && rect.top > 0;
  }

  public static async scrollIntoViewIfNeeded(element: HTMLElement, options: ScrollIntoViewOptions = { behavior: 'smooth' }): Promise<boolean>  {
    if (!this.checkVisible(element)) {
      element.scrollIntoView(options);
      await Time.sleep(700);
      return true;
    }
  }

}
