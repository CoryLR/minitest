import { DomUtil } from '../../core/DomUtil';
import { Time } from '../../core/Time';
import { ANIMATION_FADE_TIME, FIND_TOOLTIP_TIME, MAX_READ_TIME, READ_TIME_PER_LETTER } from '../../models/const';
import { DEFAULT_TOOLTIP_CONFIG, TooltipConfig, TooltipOptions } from '../../models/tooltip-config';
import { BaseComponent } from '../BaseComponent';
import css from './tooltip.css';
import html from './tooltip.html';

/**
 * User Routine Component
 * @example const component = new Tooltip(); // renders an instance of the component in the DOM
 */
export class Tooltip extends BaseComponent {

  /* Component elements */
  private focusBox = this.element.querySelector('user-routine-focus-box') as HTMLElement;
  private arrow = this.element.querySelector('user-routine-tooltip-arrow') as HTMLElement;
  private arrowShadow = this.arrow.cloneNode(true) as HTMLElement;
  private tooltip = this.element.querySelector('user-routine-tooltip') as HTMLElement;
  private tooltipShadow = this.tooltip.cloneNode(true) as HTMLElement;

  /* Input parameters */
  private targetElement: HTMLElement;
  private message: string;
  private type: 'info' | 'error' = 'info';
  private pinnedOverride = false;

  readonly config: TooltipConfig;


  constructor(
    targetElement: HTMLElement,
    message: string,
    options: TooltipOptions,
  ) {
    super(html, css);
    this.targetElement = targetElement;
    this.message = message;
    this.config = Object.freeze({ ...DEFAULT_TOOLTIP_CONFIG, ...options });
    this.open();
    return this;
  }

  public async open() {
    const bodyRect = document.body.getBoundingClientRect();
    const elementRect = this.targetElement.getBoundingClientRect();
    const scrollTop = this.pinnedOverride ? 0 : window.pageYOffset || this.targetElement.scrollTop || document.body.scrollTop;
    const scrollLeftActual = window.pageXOffset || this.targetElement.scrollLeft || document.body.scrollLeft;

    this.arrowShadow.classList.add('user-routine-arrow-shadow');
    this.tooltipShadow.classList.add('user-routine-tooltip-shadow');
    if (this.type === 'error') this.tooltip.classList.add('user-routine-tooltip-error');

    await DomUtil.scrollIntoViewIfNeeded(this.focusBox);
    await DomUtil.scrollIntoViewIfNeeded(this.tooltip);

    this.focusBox.classList.add('user-routine-fade-in');
    this.arrowShadow.classList.add('user-routine-fade-in');
    this.tooltipShadow.classList.add('user-routine-fade-in');
    this.arrow.classList.add('user-routine-fade-in');
    this.tooltip.classList.add('user-routine-fade-in');

    this.keepOpen();
  }

  // Should close, but only after open is done... how?
  public async close() {

  }

  private async keepOpen() {
    const readTime =
      this.message.length * READ_TIME_PER_LETTER < MAX_READ_TIME
        ? this.message.length * READ_TIME_PER_LETTER
        : MAX_READ_TIME;
    await Time.sleep((ANIMATION_FADE_TIME + FIND_TOOLTIP_TIME + readTime) / this.config.animationSpeed);
  }

  /* Use this.element.remove() to destroy the component */

  async animateTooltipOpen(element: HTMLElement, actionMessage: string, type: 'info' | 'error' = 'info', pinnedOverride?: boolean) {
    // if (!config.displayProgress) return;

    const bodyRect = document.body.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const scrollTop = pinnedOverride ? 0 : window.pageYOffset || element.scrollTop || document.body.scrollTop;
    const scrollLeftActual = window.pageXOffset || element.scrollLeft || document.body.scrollLeft;



    // if (config.tutorialMode) {
    //   this.nextButton = document.createElement('button');
    //   this.nextButton.textContent = getNextButtonText();
    //   this.nextButton.classList.add('user-routine-next-button');
    //   this.nextButton.addEventListener('click', async () => {
    //     await next();
    //   });
    //   this.tooltip.appendChild(this.nextButton);
    // }

    const tooltipWidth = this.tooltip.getBoundingClientRect().width;

    let tooltipTop = elementRect.bottom + 10 + scrollTop;
    let arrowLeft = elementRect.left + scrollLeftActual + (elementRect.width / 2) - 10;
    let tooltipLeft = elementRect.left + scrollLeftActual + (elementRect.width / 2) - (tooltipWidth / 2);

    if (arrowLeft < 8) {
      arrowLeft = 8;
    } else if (bodyRect.right + scrollLeftActual - arrowLeft < 20) {
      arrowLeft = bodyRect.right + scrollLeftActual - 20;
    }
    if (tooltipLeft < 0) {
      tooltipLeft = 0;
    }

    if (pinnedOverride) {
      this.focusBox.style.display = 'none';
      this.arrow.style.display = 'none';
      this.tooltip.style.position = 'fixed';
      arrowLeft -= scrollLeftActual;
      tooltipTop -= 5;
      tooltipLeft -= scrollLeftActual;
    }

    this.arrow.style.top = String(elementRect.bottom + scrollTop + 2) + 'px';
    this.arrow.style.left = String(arrowLeft) + 'px';
    this.tooltip.style.top = String(tooltipTop + 2) + 'px';
    this.tooltip.style.left = String(tooltipLeft) + 'px';

    this.focusBox.style.top = String(elementRect.top + scrollTop - 2) + 'px';
    this.focusBox.style.left = String(elementRect.left + scrollLeftActual - 2) + 'px';
    this.focusBox.style.width = String(elementRect.width) + 'px';
    this.focusBox.style.height = String(elementRect.height) + 'px';

    /* Make the shadow/outline */
    this.arrowShadow = this.arrow.cloneNode(true) as HTMLElement;
    this.tooltipShadow = this.tooltip.cloneNode(true) as HTMLElement;
    this.arrowShadow.classList.add('user-routine-arrow-shadow');
    this.tooltipShadow.classList.add('user-routine-tooltip-shadow');
    document.body.appendChild(this.arrowShadow);
    document.body.appendChild(this.tooltipShadow);

    // if (config.displayProgress) {
    //   await scrollIntoViewIfNeeded(this.focusBox, pinnedOverride);
    //   await scrollIntoViewIfNeeded(this.tooltip, pinnedOverride);
    // }

    this.focusBox.classList.add('user-routine-fade-in');
    this.arrowShadow.classList.add('user-routine-fade-in');
    this.tooltipShadow.classList.add('user-routine-fade-in');
    this.arrow.classList.add('user-routine-fade-in');
    this.tooltip.classList.add('user-routine-fade-in');
    let readTime =
      actionMessage.length * READ_TIME_PER_LETTER < MAX_READ_TIME
        ? actionMessage.length * READ_TIME_PER_LETTER
        : MAX_READ_TIME;
    // await advanceDelay((ANIMATION_FADE_TIME + FIND_TOOLTIP_TIME + readTime) / config.displaySpeed);
  }

}



// async function animateTooltipOpen(element: HTMLElement, actionMessage: string, type: 'info' | 'error' = 'info', pinnedOverride?: boolean) {
//   if (!config.displayProgress) return;

//   const bodyRect = document.body.getBoundingClientRect();
//   const elementRect = element.getBoundingClientRect();
//   const scrollTop = pinnedOverride ? 0 : window.pageYOffset || element.scrollTop || document.body.scrollTop;
//   const scrollLeftActual = window.pageXOffset || element.scrollLeft || document.body.scrollLeft;

//   this.focusBox = document.createElement('div');
//   this.focusBox.classList.add('user-routine-focus-box');

//   this.arrow = document.createElement('div');
//   this.arrow.classList.add('user-routine-arrow');

//   this.tooltip = document.createElement('div');
//   this.tooltip.classList.add('user-routine-tooltip');
//   if (type === 'error') this.tooltip.classList.add('user-routine-tooltip-error');
//   this.tooltip.textContent = actionMessage.replace(/>>/g, ' ');


//   if (config.tutorialMode) {
//     this.nextButton = document.createElement('button');
//     this.nextButton.textContent = getNextButtonText();
//     this.nextButton.classList.add('user-routine-next-button');
//     this.nextButton.addEventListener('click', async () => {
//       await next();
//     });
//     this.tooltip.appendChild(this.nextButton);
//   }

//   document.body.appendChild(this.focusBox);
//   document.body.appendChild(this.arrow);
//   document.body.appendChild(this.tooltip);
//   const tooltipWidth = this.tooltip.getBoundingClientRect().width;

//   let tooltipTop = elementRect.bottom + 10 + scrollTop;
//   let arrowLeft = elementRect.left + scrollLeftActual + (elementRect.width / 2) - 10;
//   let tooltipLeft = elementRect.left + scrollLeftActual + (elementRect.width / 2) - (tooltipWidth / 2);

//   if (arrowLeft < 8) {
//     arrowLeft = 8;
//   } else if (bodyRect.right + scrollLeftActual - arrowLeft < 20) {
//     arrowLeft = bodyRect.right + scrollLeftActual - 20;
//   }
//   if (tooltipLeft < 0) {
//     tooltipLeft = 0;
//   }

//   if (pinnedOverride) {
//     this.focusBox.style.display = 'none';
//     this.arrow.style.display = 'none';
//     this.tooltip.style.position = 'fixed';
//     arrowLeft -= scrollLeftActual;
//     tooltipTop -= 5;
//     tooltipLeft -= scrollLeftActual;
//   }

//   this.arrow.style.top = String(elementRect.bottom + scrollTop + 2) + 'px';
//   this.arrow.style.left = String(arrowLeft) + 'px';
//   this.tooltip.style.top = String(tooltipTop + 2) + 'px';
//   this.tooltip.style.left = String(tooltipLeft) + 'px';

//   this.focusBox.style.top = String(elementRect.top + scrollTop - 2) + 'px';
//   this.focusBox.style.left = String(elementRect.left + scrollLeftActual - 2) + 'px';
//   this.focusBox.style.width = String(elementRect.width) + 'px';
//   this.focusBox.style.height = String(elementRect.height) + 'px';

//   /* Make the shadow/outline */
//   this.arrowShadow = this.arrow.cloneNode(true) as HTMLElement;
//   this.tooltipShadow = this.tooltip.cloneNode(true) as HTMLElement;
//   this.arrowShadow.classList.add('user-routine-arrow-shadow');
//   this.tooltipShadow.classList.add('user-routine-tooltip-shadow');
//   document.body.appendChild(this.arrowShadow);
//   document.body.appendChild(this.tooltipShadow);

//   if (config.displayProgress) {
//     await scrollIntoViewIfNeeded(this.focusBox, pinnedOverride);
//     await scrollIntoViewIfNeeded(this.tooltip, pinnedOverride);
//   }

//   this.focusBox.classList.add('user-routine-fade-in');
//   this.arrowShadow.classList.add('user-routine-fade-in');
//   this.tooltipShadow.classList.add('user-routine-fade-in');
//   this.arrow.classList.add('user-routine-fade-in');
//   this.tooltip.classList.add('user-routine-fade-in');
//   let readTime =
//     actionMessage.length * READ_TIME_PER_LETTER < MAX_READ_TIME
//       ? actionMessage.length * READ_TIME_PER_LETTER
//       : MAX_READ_TIME;
//   await advanceDelay((ANIMATION_FADE_TIME + FIND_TOOLTIP_TIME + readTime) / config.displaySpeed);
// }


// async function animateTooltipClose(addComprehensionTime = true) {
//   if (!config.displayProgress || !this.focusBox || !this.arrow || !this.tooltip || !this.arrowShadow || !this.tooltipShadow) return;
//   if (addComprehensionTime) await (advanceDelay(COMPREHEND_ACTION_RESULT_TIME / config.displaySpeed));
//   this.focusBox.classList.add('user-routine-fade-out');
//   this.arrow.classList.add('user-routine-fade-out');
//   this.tooltip.classList.add('user-routine-fade-out');
//   this.arrowShadow.classList.add('user-routine-fade-out');
//   this.tooltipShadow.classList.add('user-routine-fade-out');
//   await advanceDelay(ANIMATION_FADE_TIME / config.displaySpeed);
//   this.focusBox.remove();
//   this.tooltip.remove();
//   this.arrow.remove();
//   this.tooltipShadow.remove();
//   this.arrowShadow.remove();
// }

