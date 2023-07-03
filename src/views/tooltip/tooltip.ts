import { BaseComponent } from '../BaseComponent';
import css from './tooltip.css';
import html from './tooltip.html';

/**
 * User Routine Component
 * @example const component = new Tooltip(); // renders an instance of the component in the DOM
 */
export class Tooltip extends BaseComponent {

  constructor() {
    super(html, css);
    return this;
  }

  /**
   * Entrypoint called by superconstructor
   */
  protected main() {
    /* Use this.element to access the component HTML template */
    console.log(this.element.querySelector('.boilerplate-example.component'));
  }

  /* Use this.element.remove() to destroy the component */

}



// async function animateTooltipOpen(element: HTMLElement, actionMessage: string, type: 'info' | 'error' = 'info', pinnedOverride?: boolean) {
//   if (!config.displayProgress) return;

//   const bodyRect = document.body.getBoundingClientRect();
//   const elementRect = element.getBoundingClientRect();
//   const scrollTop = pinnedOverride ? 0 : window.pageYOffset || element.scrollTop || document.body.scrollTop;
//   const scrollLeftActual = window.pageXOffset || element.scrollLeft || document.body.scrollLeft;

//   domElements.focusBox = document.createElement('div');
//   domElements.focusBox.classList.add('user-routine-focus-box');

//   domElements.arrow = document.createElement('div');
//   domElements.arrow.classList.add('user-routine-arrow');

//   domElements.tooltip = document.createElement('div');
//   domElements.tooltip.classList.add('user-routine-tooltip');
//   if (type === 'error') domElements.tooltip.classList.add('user-routine-tooltip-error');
//   domElements.tooltip.textContent = actionMessage.replace(/>>/g, ' ');


//   if (config.tutorialMode) {
//     domElements.nextButton = document.createElement('button');
//     domElements.nextButton.textContent = getNextButtonText();
//     domElements.nextButton.classList.add('user-routine-next-button');
//     domElements.nextButton.addEventListener('click', async () => {
//       await next();
//     });
//     domElements.tooltip.appendChild(domElements.nextButton);
//   }

//   document.body.appendChild(domElements.focusBox);
//   document.body.appendChild(domElements.arrow);
//   document.body.appendChild(domElements.tooltip);
//   const tooltipWidth = domElements.tooltip.getBoundingClientRect().width;

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
//     domElements.focusBox.style.display = 'none';
//     domElements.arrow.style.display = 'none';
//     domElements.tooltip.style.position = 'fixed';
//     arrowLeft -= scrollLeftActual;
//     tooltipTop -= 5;
//     tooltipLeft -= scrollLeftActual;
//   }

//   domElements.arrow.style.top = String(elementRect.bottom + scrollTop + 2) + 'px';
//   domElements.arrow.style.left = String(arrowLeft) + 'px';
//   domElements.tooltip.style.top = String(tooltipTop + 2) + 'px';
//   domElements.tooltip.style.left = String(tooltipLeft) + 'px';

//   domElements.focusBox.style.top = String(elementRect.top + scrollTop - 2) + 'px';
//   domElements.focusBox.style.left = String(elementRect.left + scrollLeftActual - 2) + 'px';
//   domElements.focusBox.style.width = String(elementRect.width) + 'px';
//   domElements.focusBox.style.height = String(elementRect.height) + 'px';

//   /* Make the shadow/outline */
//   domElements.arrowShadow = domElements.arrow.cloneNode(true) as HTMLElement;
//   domElements.tooltipShadow = domElements.tooltip.cloneNode(true) as HTMLElement;
//   domElements.arrowShadow.classList.add('user-routine-arrow-shadow');
//   domElements.tooltipShadow.classList.add('user-routine-tooltip-shadow');
//   document.body.appendChild(domElements.arrowShadow);
//   document.body.appendChild(domElements.tooltipShadow);

//   if (config.displayProgress) {
//     await scrollIntoViewIfNeeded(domElements.focusBox, pinnedOverride);
//     await scrollIntoViewIfNeeded(domElements.tooltip, pinnedOverride);
//   }

//   domElements.focusBox.classList.add('user-routine-fade-in');
//   domElements.arrowShadow.classList.add('user-routine-fade-in');
//   domElements.tooltipShadow.classList.add('user-routine-fade-in');
//   domElements.arrow.classList.add('user-routine-fade-in');
//   domElements.tooltip.classList.add('user-routine-fade-in');
//   let readTime =
//     actionMessage.length * READ_TIME_PER_LETTER < MAX_READ_TIME
//       ? actionMessage.length * READ_TIME_PER_LETTER
//       : MAX_READ_TIME;
//   await advanceDelay((ANIMATION_FADE_TIME + FIND_TOOLTIP_TIME + readTime) / config.displaySpeed);
// }


// async function animateTooltipClose(addComprehensionTime = true) {
//   if (!config.displayProgress || !domElements.focusBox || !domElements.arrow || !domElements.tooltip || !domElements.arrowShadow || !domElements.tooltipShadow) return;
//   if (addComprehensionTime) await (advanceDelay(COMPREHEND_ACTION_RESULT_TIME / config.displaySpeed));
//   domElements.focusBox.classList.add('user-routine-fade-out');
//   domElements.arrow.classList.add('user-routine-fade-out');
//   domElements.tooltip.classList.add('user-routine-fade-out');
//   domElements.arrowShadow.classList.add('user-routine-fade-out');
//   domElements.tooltipShadow.classList.add('user-routine-fade-out');
//   await advanceDelay(ANIMATION_FADE_TIME / config.displaySpeed);
//   domElements.focusBox.remove();
//   domElements.tooltip.remove();
//   domElements.arrow.remove();
//   domElements.tooltipShadow.remove();
//   domElements.arrowShadow.remove();
// }

