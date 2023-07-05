import { ElementObject, TableItem } from '../../types/types';
import ElementCreator from '../helpers/element-creator';
import { levels } from '../levels/levels';
import Popup from '../popup/popup';
import PubSub from '../pubsub/pubsub';


export default class Table extends Popup {
  
  private table: HTMLElement | null = document.querySelector('.table');

  private tableItem: ElementCreator;

  private tableItemChild: ElementCreator;

  constructor(lvl?: number) {
    super();
    this.fillTable(lvl);
    this.backlightMarkUp();
    this.backlightTable(); 
  }
  
  private fillTable(lvl = 1): void {
    document.querySelector('.table')!.innerHTML = '';
    levels[lvl - 1].tableFill.forEach((item) => {
      this.recursiveFillTable(item as unknown as TableItem);
    });
  }

  private backlightMarkUp(): void {
    if (this.table) {
      for (let i = 0; i < this.table.children.length; i++) {
        if (this.table.children[i] as HTMLElement) {
          this.table.children[i].addEventListener('mouseover', (event) => this.mouseEventBacklightMarkUp(
            event as MouseEvent, () => this.showPopup(event.target as HTMLElement),
          ));

          this.table.children[i].addEventListener('mouseout', (event) => this.mouseEventBacklightMarkUp(
            event as MouseEvent, () => this.hidePopup(),
          ));
        }
      }
    }
  }

  private mouseEventBacklightMarkUp(e: MouseEvent, callback: () => void): void {
    const { target } = e;
    if (target instanceof HTMLElement) {
      const plateID = Number(target.getAttribute('id'));
      callback();
      PubSub.getInstance().publish<number>('backlightMarkUp', plateID);
      target.classList.toggle('hovered');
    }
  }

  private backlightTable(): void {
    PubSub.getInstance().subscribe('backlightTable', (eventValue) => {
      const elements = this.table?.children;
      const result = [];
      if (elements !== undefined) {
        for (let i = 0; i < elements?.length; i++) {
          result.push(elements[i]);
          if (elements[i].children.length > 0) {
            result.push(elements[i].children[0]);
          }
        }
      }
      result[Number(eventValue)].classList.toggle('hovered');
    });
  }

  private recursiveFillTable<T extends TableItem>(obj: T): void {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.recursiveFillTable(obj[key] as T);
      }
  
      if (obj[key] === obj.parent) {
        const elem: ElementObject = {
          tag: obj.parent,
          classNames: obj.parentClasses,
          textContent: '',
          index: obj.parentIndex,
          id: obj.id,
        };
        this.tableItem = new ElementCreator(elem);
        this.table!.append(this.tableItem.getElement() as HTMLElement);
      }
  
      if (obj[key] === obj.child) {
        const elemChild: ElementObject = {
          tag: obj.child as string,
          classNames: obj.childClasses as string[],
          textContent: '',
          index: obj.childIndex,
        };
        this.tableItemChild = new ElementCreator(elemChild);
        this.tableItem.getElement()?.append(this.tableItemChild.getElement() as HTMLElement);
      }
    }
  }
}
