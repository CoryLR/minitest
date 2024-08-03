
import 'flickity';
import 'flickity-hash';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import '@fortawesome/fontawesome-free/js/regular.min.js';
import '@fortawesome/fontawesome-free/js/solid.min.js';
import hljs from 'highlight.js/lib/common';

import './style.css';
import { userRoutine } from '../dist/user-routine.min';
import { runRegressionTests } from './regression-tests';
import { codeCardFunctionArray } from './code-cards.min';

import { routine } from '../dist/user-routine-v6.min.js';


async function devTest() {
  const testResult = await routine.test('test').click('.btn');
  console.log('testResult', testResult);
  
  console.log('\n\n\n');  
}
devTest();

const state = {
  processTime: 2000,
  actionStringIdCounter: 0,
}

function main() {

  /* Enable userRoutine access from console */
  window.userRoutine = userRoutine;

  syntaxHighlightCodeCards();

  /*
   * URL parameters
   */
  const urlParams = new URLSearchParams(window.location.search);
  console.info(`URL parameter options:
  * action=quick-regression-test
  * action=full-regression-test
  `);
  if (urlParams.get('action') === 'quick-regression-test') {
    console.log('Quick regression tests activated');
    runRegressionTests();
    state.processTime = 20;
  } else if (urlParams.get('action') === 'full-regression-test') {
    console.log('Full regression tests activated');
    runRegressionTests(500, true, true, true);
    state.processTime = 2000;
  }

  /* Add demo code card event listeners */
  document.querySelectorAll('button.run').forEach((runButton) => {
    runButton.addEventListener('click', runExample)
  });
  document.querySelectorAll('button.copy-code').forEach((copyButton) => {
    copyButton.addEventListener('click', copyCodeOnClick)
  });
  document.querySelectorAll('button.copy-link').forEach((copyButton) => {
    copyButton.addEventListener('click', copyLinkOnClick)
  });
  document.querySelectorAll('code span.action-keyword').forEach((actionKeywordSpan) => {
    actionKeywordSpan.addEventListener('click', showTooltipOnActionKeywordClick);
  });
  document.querySelectorAll('code span.selector').forEach((selectorSpan) => {
    selectorSpan.addEventListener('click', showTooltipOnSelectorClick);
  });
  document.querySelectorAll('code span.argument').forEach((argumentSpan) => {
    argumentSpan.addEventListener('click', showTooltipOnArgumentClick);
  });

  /* Add mock-app event listeners */
  document.querySelector('button.duplicate').addEventListener('click', duplicateText);
  document.querySelector('button.process').addEventListener('click', startMockLongProcess);

  /* Add initial highlight removal event listener; click helps with mobile */
  document.querySelector('.code-carousel').addEventListener('mouseover', removeInitialCodeHighlightIfNeeded);
  document.querySelector('.code-carousel').addEventListener('click', removeInitialCodeHighlightIfNeeded);

}

function removeInitialCodeHighlightIfNeeded(event) {
  if(event.target.classList.contains('custom-highlight')) {
    document.querySelectorAll('.initial-highlight').forEach(element => {
      element.classList.remove('initial-highlight');
    });
    document.querySelector('.code-carousel').removeEventListener('mouseover', removeInitialCodeHighlightIfNeeded);
    document.querySelector('.code-carousel').removeEventListener('click', removeInitialCodeHighlightIfNeeded);
  }
}

/* Code Card Functions */

function runExample() {
  const codeCard = event.target.parentNode.parentNode;
  const codeCardId = Number(codeCard.getAttribute('data-card-id'));
  codeCardFunctionArray[codeCardId]();
}

function copyCodeOnClick(event) {
  const codeCard = event.target.parentNode.parentNode;
  const codeCardId = Number(codeCard.getAttribute('data-card-id'));
  const code = codeCard.querySelector('pre > code').textContent;
  navigator.clipboard.writeText(code);
  showUserRoutineTooltip(
    `figure:nth-child(${codeCardId + 1}) button.copy-code`,
    '✔️ Code copied!'
  );
}

function copyLinkOnClick(event) {
  const codeCard = event.target.parentNode.parentNode;
  const codeCardId = Number(codeCard.getAttribute('data-card-id'));
  const figureId = codeCard.parentNode.id;
  const link = location.protocol + '//' + location.host + location.pathname + '#' + figureId;
  navigator.clipboard.writeText(link);
  showUserRoutineTooltip(
    `figure:nth-child(${codeCardId + 1}) button.copy-link`,
    '✔️ Link copied!',
  );
}

function showTooltipOnActionKeywordClick(event) {
  const selectorId = event.target.getAttribute('data-action-keyword-id');
  showUserRoutineTooltip(
    `[data-action-keyword-id="${selectorId}"]`,
    'Action keyword',
  );
}
function showTooltipOnSelectorClick(event) {
  const selectorId = event.target.getAttribute('data-selector-id');
  showUserRoutineTooltip(
    `[data-selector-id="${selectorId}"]`,
    'CSS selector',
  );
}
function showTooltipOnArgumentClick(event) {
  const selectorId = event.target.getAttribute('data-argument-id');
  showUserRoutineTooltip(
    `[data-argument-id="${selectorId}"]`,
    'Data used by action',
  );
}

function showUserRoutineTooltip(cssSelector, message, speed = 1.5) {
  userRoutine(
    `comment ${cssSelector.replaceAll(' ', '>>')} ${message}`,
    {
      displayMessage: false, logProgress: false,
      logResult: false, simultaneousAllowed: true, keyboardControls: false,
      globalDelay: 0, displaySpeed: speed
    }
  );
}

function syntaxHighlightCodeCards() {
  hljs.highlightAll();

  // TODO: Figure out why "Welcome" in "Welcome to the demo" is disappearing

  /* Custom highlight action string */
  const actionCodesWithSelectors = [
    'app', 'awa', '!aw', 'cli', 'com', 'exi', '!ex', 'fil', 'val', '!va', 'wri',
  ];
  const actionCodesWithoutSelectors = ['log', 'nav', 'wai'];

  document.querySelectorAll('.hljs .hljs-string').forEach((stringElement) => {
    const stringWithQuotes = stringElement.textContent;
    const codeString = stringWithQuotes.substring(1, stringWithQuotes.length - 1);
    const actionParts = codeString.split(' ');
    const actionCode = actionParts[0].substring(0, 3);

    const isActionStringWithSelector = isLowerCase(actionCode[0]) && actionCodesWithSelectors.includes(actionCode);
    const isActionStringWithoutSelector = isLowerCase(actionCode[0]) && actionCodesWithoutSelectors.includes(actionCode);

    const initHighlightClass = state.actionStringIdCounter === 0 ? 'custom-highlight initial-highlight' : 'custom-highlight';

    if (isActionStringWithSelector) {
      const newActionParts = [];
      newActionParts.push(`<span class="action-keyword ${initHighlightClass}"
        data-action-keyword-id="${state.actionStringIdCounter}">${actionParts[0]}</span>`);
      newActionParts.push(`<span class="selector ${initHighlightClass}"
        data-selector-id="${state.actionStringIdCounter}">${actionParts[1]}</span>`);
      if (actionParts[2]) {
        const parts = [...actionParts];
        const argumentString = parts.splice(2).join(' ');
        newActionParts.push(`<span class="argument ${initHighlightClass}"
          data-argument-id="${state.actionStringIdCounter}">${argumentString}</span>`);
      }
      stringElement.innerHTML = `'${newActionParts.join(' ')}'`;
      state.actionStringIdCounter++;

    } else if (isActionStringWithoutSelector) {
      const newActionParts = [];
      const parts = [...actionParts];
      const argumentString = parts.splice(1).join(' ');
      newActionParts.push(`<span class="action-keyword" title="Action keyword"
        data-action-keyword-id="${state.actionStringIdCounter}">${actionParts[0]}</span>`);
      newActionParts.push(`<span class="argument" title="Data used by action"
        data-argument-id="${state.actionStringIdCounter}">${argumentString}</span>`);
      stringElement.innerHTML = `'${newActionParts.join(' ')}'`;
      state.actionStringIdCounter++;  
    }

  });
}

function isLowerCase(string) {
  return string === string.toLowerCase();
}

/* Mock App Functions */

function duplicateText() {
  const outputArea = document.querySelector('pre.output');
  outputArea.textContent = '';
  const text = document.querySelector('input.text').value;
  const count = document.querySelector('input.count').value;
  for (let i = 0; i < Number(count); i++) {
    outputArea.textContent += (text + " ")
  }
}

function startMockLongProcess() {
  const processOutput = document.querySelector('.result');
  processOutput.textContent = '';
  processOutput.textContent = 'Processing...';
  setTimeout(() => {
    processOutput.textContent = 'Almost there...'
  }, state.processTime);
  setTimeout(() => {
    processOutput.textContent = 'Process complete!';
    /* Reset process time after any automated tests */
    state.processTime = 2000;
  }, state.processTime * 2);
}

main();
