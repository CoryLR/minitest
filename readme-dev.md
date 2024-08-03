

# Version 6 Notes

Targeted features:

* Typescript
* Use builder pattern (inspiration: Zod, Leaflet)
* Use composition instead of inheritance
* Session storage for multi-page user routines

Naming - is User Routine a good name? More options:

* TARI - Task Automation and Routine Interface
* You Routine / you-routine

## Progress notes

### Continuous development

* `npm run build-v6`
* Open file:///Users/corylr/code/user-routine3/docs/index.html
* Make edits source code, test in ./demo/script.js, and repeat the steps above to test changes


### API brainstorming

```typescript

/* Thoughts 2023-06-18 */

import { routine } from 'user-routine'

routine.test('Should show all actions')
  .await('selector', 'text?')
  .awaitNot('selector', 'text?')
  .click('selector', 'text?')
  .exists('selector', 'text?')
  .existsNot('selector', 'text?')
  .log('message')
  .nav('url')
  .note('selector', 'message')
  .type('selector', 'value')
  .valueIs('input', 'value')
  .valueIsNot('input', 'value')

  .run(); /* async */
  .toJSON() // ?

routine.tutorial()

routine.actions()
  .click()
  .run()

routine.action.click()

routine.run([
  routineOne,
  routineTwo
])

// maybe .start or .run at the end?
routine.test()
  .stuff()
  .run() // or .start()

// or maybe use action set

let actionSet = routine.actionSet('Do thing')
  .click()
  .write()

routine.test('Should y')
  .include(actionSet)
  .run()

// Executive form, also useful for routine storage and transfer
const actions = [
  ['write', 'input', 'hi'],
  ['click', '.btn'],
]

routine.load({
  type: 'test',
  name: 'Should x',
  currentStep: 4,
  options: { ... },
  actions: [ ... ],
  log: [ ... ],
  success: null,
  version: '6.0.0',
})


/******** Initial thoughts ********/
import user from 'user-routine';

/* Before: */
userRoutine([
  'fill input.text Hey',
  'fill input.count 3',
  'click button.duplicate',
  'exists .output Hey Hey Hey',
  'log Done!',
], { message: 'Test a Feature' });
/* After: */
user.routine('Test a feature')
  .fill('input.text', 'Hey')
  .fill('input.count', 3)
  .click('button.duplicate')
  .checkExists('.output', 'Hey Hey Hey') /* Change "exists" to "checkExists" perhaps */
  .comment('Done!'); /* Change "log" to "comment" perhaps */


/* Before: */
userRoutine([
  'log Welcome to the demo',
  'comment .code-carousel Examples',
  'comment nav Links to docs & more',
], {
  message: 'Display a Tutorial',
  tutorialMode: true,
});
/* After: */
user.tutorial('Display a Tutorial')
  .comment('Welcome to the demo') /* Change "log" to "comment" perhaps */
  .commentOn('.code-carousel', 'Examples')
  .commentOn('nav', 'Links to docs & more');


/* Before: */
userRoutine([
  'click .does-not-exist',
  'value .count fake-number',
  'exists nav>>button Fake Link',
], {
  message: 'Examples of Failure',
  continueOnFailure: true,
});
/* After: */
user.routine('Examples of Failure', { continueOnFailure: true })
  .click('.does-not-exist')
  .checkValue('.count', 'fake-number')
  .checkExists('nav button', 'Fake Link Text');


/* Before: */
userRoutine([
  'exists p.some-class', // Checks for the existence of this element
  'exists p.some-class With certain text', // Also checks if it includes certain text
  '!exists p.some-class', // Validates that the element does not exist
  '!exists p.some-class With certain text', // Validates that the element does not exist with certain text
  'value input.required', // Validates that the element has any value
  'value input.name Jane Doe', // Validates that the element has a value of "Jane Doe"
]);
/* After: */
user.routine()
  .checkExists('p.some-class')
  .checkExists('p.some-class', 'With certain text')
  .checkDoesNotExist('p.some-class')
  .checkDoesNotExist('p.some-class', 'With certain text')
  .checkHasValue('input.required')
  .checkHasValue('input.required', 'Jane')
  .checkDoesNotHaveValue('input.required')
  .checkDoesNotHaveValue('input.required', 'Jane')


/* Solo calls options */
user.action.click('.someForm button', 'Submit');
user.act.click('.someForm button', 'Submit');
user.perform.click('.someForm button', 'Submit');
user.execute.click('.someForm button', 'Submit');
user.exec.click('.someForm button', 'Submit');
user.do.click('.someForm button', 'Submit');
user.simulate.click('.someForm button', 'Submit');
user.click('.someForm button', 'Submit');

/*
Maybe `action` can be the base class for `routine` and `tutorial`
that holds all the base functions

I could make `user` the base class so you can do user.click(), but
I would want the type hints for user. to only be .routine and .tutorial
*/


```

## Progress & To Do

- 

## Custom framework

I basically made my own mini custom UI framework when writing the UI elements for User Routine. Maybe I should give it a name and publish it separately?

Potential names:

* Hummingbird (Hummingbird Framework)
* Lil' Framework (lol)
  * CLI: `npx lf init`, `npx lf new component components/NAME`
* 
