import { ElementObject, LevelsListItem } from '../../types/types';
import ElementCreator from '../helpers/element-creator';

export default class LevelsListFiller {
  private levelsListWrapper = document.querySelector('.levels-list');

  private parentElement: HTMLElement | null;

  private childElement: HTMLElement | null;

  constructor(arr: LevelsListItem[]) {
    this.levelsListFiller(arr);
  }

  levelsListFiller(arr: LevelsListItem[]) {
    this.levelsListWrapper!.innerHTML = '';
    arr.forEach((item) => {
      const elemParent: ElementObject = {
        tag: item.tag,
        classNames: item.classList,
        textContent: item.textContent,
      };

      const elemChild: ElementObject = {
        tag: item.childTag,
        classNames: item.childClassList as string[],
        textContent: '',
      };
      this.parentElement = new ElementCreator(elemParent).getElement();
      this.childElement = new ElementCreator(elemChild).getElement();
      this.parentElement!.append(this.childElement as HTMLElement);
      this.levelsListWrapper!.append(this.parentElement as HTMLElement);
    });
  }
}