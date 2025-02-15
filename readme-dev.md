

# Version 6 Notes

Targeted features:

* Typescript
* Use builder pattern (inspiration: Zod, Leaflet)
* Use composition instead of inheritance (inspiration: https://hashnode.com/post/rusty-composition-in-typescript-cjo8g6y6b004hlxs1sabgzuzd)
* Session storage for multi-page user routines

Naming - is User Routine a good name? More options:

* TARI - Task Automation and Routine Interface
* browserflow

## Progress notes

### Continuous development

* `npm run build-v6`
* Open file:///Users/corylr/code/user-routine3/docs/index.html
* Make edits source code, test in ./demo/script.js, and repeat the steps above to test changes


### API brainstorming

```typescript

/* Thoughts 2024 */

import { routine } from 'userroutine';

routine.test('Should show all actions')
  .await('selector', 'text?')
  .awaitNot('selector', 'text?')
  .click('selector', 'text?')
  .exists('selector', 'text?')
  .existsNot('selector', 'text?')
  .log('message')
  .nav('url')
  .say('selector', 'message')
  .valueIs('input', 'value')
  .valueIsNot('input', 'value')
  .write('selector', 'value')

  .run(); /* async */

  .toJSON(); // Yield exec form JSON object?

  .toString(); // Yield string of exec form JSON object?

// What can you do with routines?
routine.test() // Test a routine (shows controls in the top right and allows pausing/stopping by default)
routine.demo() // Show off a routine (shows visual tooltips by default)
routine.tutorial() // Walk a user through a routine (with click to continue)
routine.list() // Define a list of actions for later

routine.action.click() // one-off actions could be called like this

const waitAndClickRoutine = routine.list().wait().click();
routine.test().wait().include(waitAndClickRoutine).run();
routine.test().loop(waitAndClickRoutine, 5).run();
routine.test().loopUntil(waitAndClickRoutine, routine.action.exists()).run();

const routine1 = routine.list().click().await().click();
const routine2 = routine.list().await().click().await();
const routine1And2 = routine.test()
  .include(routine1)
  .include(routine2)
  .loop(routine1, 3)
  .run();

routine.test()
  .loopUntil(routine1And2, routine.action.await())
  .run();

// The following could be ways to run a routine too
routine1.run()
routine.runAll([routine1, routine2]);

// Executive form, useful for routine storage, transfer, etc
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
