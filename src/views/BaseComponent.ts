
export class BaseComponent {

  protected readonly element = document.createElement('user-routine-component');

  constructor(html: string, css: string, mountTarget?: HTMLElement) {
    this._render(html, css);
    this._mount(mountTarget);
    return this;
  }

  private _render(html: string, css: string) {
    this.element.innerHTML = html;
    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    this.element.appendChild(styleElement);
  }

  /**
   * Mounts the component on the DOM, typically called at the end of the subclass's constructor
   * @param target - Element to append this component to
   */
  private _mount(target: HTMLElement = document.querySelector('body')) {
    target.appendChild(this.element);
  }

}
