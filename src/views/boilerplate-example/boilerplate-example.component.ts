import { BaseComponent } from '../BaseComponent';
import * as css from './boilerplate-example.component.css';
import * as html from './boilerplate-example.component.html';

/**
 * User Routine Component
 * @example const component = new BoilerplateExampleComponent(); // renders an instance of the component in the DOM
 */
export class BoilerplateExampleComponent extends BaseComponent {

  /* Use this.element to target the component HTML container any time after the constructor's super() method call */
  exampleMessage = this.element.querySelector('.boilerplate-example-message');

  constructor() {
    super(html, css);
    this.main();
    return this;
  }

  private main() {
    console.log(this.exampleMessage.textContent);
  }

}
