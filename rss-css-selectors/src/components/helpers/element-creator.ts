import { ElementObject } from '../../types/types';

export default class ElementCreator {
  private element: HTMLElement | null = null;

  constructor(elem: ElementObject) {
    this.createElement(elem);
  }

  private createElement(elem: ElementObject): void {
    this.element = document.createElement(elem.tag);
    this.setCssClass(elem.classNames);
    this.setTextContent(elem.textContent as string);
    if (elem.index !== undefined) {
      this.element.setAttribute('id', String(elem.index));
    }

    if (elem.id !== undefined) {
      this.element.setAttribute('table-id', elem.id);
    }
  }

  public getElement(): HTMLElement | null {
    return this.element;
  }

  private setCssClass(classes: string[]): void {
    classes.forEach((className) => this.element!.classList.add(className));
  }

  private setTextContent(text: string): void {
    this.element!.innerHTML = text;
  }
}