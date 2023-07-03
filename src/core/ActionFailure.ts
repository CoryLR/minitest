/**
 * @example
 * try {
 *   throw new ActionFailure('Selector not found');
 * } catch (err) {
 *   console.log(err.name, err.message);
 *   // "ActionFailure Selector not found"
 * }
 */
class ActionFailure extends Error {
  constructor(message) {
    super(message);
    this.name = 'ActionFailure';
  }
}
