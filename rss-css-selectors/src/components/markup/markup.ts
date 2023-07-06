import { ElementObject, MarkUpElementObject } from '../../types/types';
import CodeHighlight from '../helpers/code-highlight';
import ElementCreator from '../helpers/element-creator';
import { levels } from '../data/levels';
import Popup from '../popup/popup';
import PubSub from '../pubsub/pubsub';

export default class MarkUp extends Popup {
  private markUpWrapper: ElementCreator;

  private elementParent: ElementCreator;

  private elementChild: ElementCreator;

  private elementParentCloseTag: ElementCreator;

  private markUpElementsArray: HTMLElement[] = [];

  

  constructor(lvl?: number) {
    super();
    this.fillMarkUpWrapper(lvl);
    this.backlightMarkUp();
    this.backlightTable();
    
  }
  
  fillMarkUpWrapper(lvl = 1) {
    document.querySelector('.html-markup-wrapper')!.innerHTML = '';
    this.createMarkupWrapper();
    levels[lvl - 1].boardMarkup.forEach((item) => {
      this.recursiveFilling(item as unknown as MarkUpElementObject);
    });
    const closeDiv: ElementObject = {
      tag: 'div',
      classNames: [],
      textContent: new CodeHighlight('</div>').getText(),
    };
    const element = new ElementCreator(closeDiv);
    const htmlMarkupWrapper: HTMLElement | null = document.querySelector('.html-markup-wrapper');
    htmlMarkupWrapper?.append(element.getElement() as HTMLElement);
    
  }

  recursiveFilling<T extends MarkUpElementObject>(obj: T): void {
    for (const key in obj) {
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.recursiveFilling(obj[key] as T);
      }
      
      if (obj[key] === obj.parent) {
        const elem: ElementObject = {
          tag: 'div',
          classNames: ['markup'],
          textContent: new CodeHighlight(obj[key] as string).getText(),
        };
        this.elementParent = new ElementCreator(elem);
        this.markUpWrapper.getElement()!.append(this.elementParent.getElement() as HTMLElement);
      }
      
      if (obj[key] === obj.child) {
        const elem: ElementObject = {
          tag: 'div',
          classNames: ['markup-child'],
          textContent: new CodeHighlight(obj[key] as string).getText(),
        };
        this.elementChild = new ElementCreator(elem);
        this.elementParent.getElement()?.append(this.elementChild.getElement() as HTMLElement);
      }

      if (obj[key] === obj.closeTag) {
        this.elementParent.getElement()!.innerHTML += new CodeHighlight(obj[key] as string).getText();
      }
    }
  }

  private backlightMarkUp(): void {
    PubSub.getInstance().subscribe('backlightMarkUp', (eventValue) => {
      const markUpWrapper: HTMLElement | null = this.markUpWrapper.getElement();
      const markUpElementsArray = [];
      for (let i = 0; i < markUpWrapper!.children.length; i++) {
        if (markUpWrapper!.children[i].classList.contains('markup')) {
          markUpElementsArray.push(markUpWrapper!.children[i]);

          for (let j = 0; j < markUpWrapper!.children[i].children.length; j++) {
            if (markUpWrapper!.children[i].children[j].classList.contains('markup-child')) {
              markUpElementsArray.push(markUpWrapper!.children[i].children[j]);
            }
          }
        }
      }
      
      markUpElementsArray[eventValue as number].classList.toggle('backlight');
    });
  }

  private fillingMarkUpElementsArray(): void {
    for (let i = 0; i < this.markUpWrapper.getElement()!.children.length; i++) {
      if (this.markUpWrapper.getElement()!.children[i].classList.contains('markup')) {
        this.markUpElementsArray.push(this.markUpWrapper.getElement()!.children[i] as HTMLElement);
        for (let j = 0; j < this.markUpWrapper.getElement()!.children[i].children.length; j++) {
          if (this.markUpWrapper.getElement()!.children[i].children[j].classList.contains('markup-child')) {
            this.markUpElementsArray.push(this.markUpWrapper.getElement()!.children[i].children[j] as HTMLElement);
          }
        }
      }
    }
  }

  private backlightTable(): void {
    this.fillingMarkUpElementsArray();
    this.markUpElementsArray.forEach((item, index) => {
      if (item instanceof HTMLElement) {

        item.addEventListener('mouseover', (event) => this.mouseEventBacklightTable(
          event, index, () => this.showPopup(document.querySelector('.hovered') as HTMLElement),
        ));

        item.addEventListener('mouseout', (event) => this.mouseEventBacklightTable(
          event, index, () => this.hidePopup(),
        ));
      }
    });
  }

  private mouseEventBacklightTable(e: MouseEvent, index: number, callback: () => void): void {
    const { target } = e;
    if (target instanceof HTMLElement) {
      if (target.classList.contains('markup-child') || target.classList.contains('markup')) {
        e.stopImmediatePropagation();
        target.classList.toggle('backlight');
      }
    }
    PubSub.getInstance().publish<string>('backlightTable', String(index));
    callback();

  }

  private createMarkupWrapper(): void {
    const htmlMarkupWrapper: HTMLElement | null = document.querySelector('.html-markup-wrapper');
    const elem: ElementObject = {
      tag: 'div',
      classNames: ['markup-wrapper'],
      textContent: new CodeHighlight('<div class="table">').getText(),
    };
    this.markUpWrapper = new ElementCreator(elem);
    htmlMarkupWrapper?.append(this.markUpWrapper.getElement() as HTMLElement);
  }
}