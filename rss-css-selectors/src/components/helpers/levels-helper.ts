import { LevelsListItem } from '../../types/types';
import { levelsList } from '../data/levels-list';
import MyLocalStorage from './my-local-storage';

export default class LevelsHelper {

  private static firstLevel: number = 1;

  public static getLevelNumberFromString(str: string): number {
    if (Number(str[0]) !== parseInt(str)) {
      throw new Error('you need to pass a string with first char number');
    }
    
    return parseInt(str);
  }

  public static getCurrentLvl(levelsItem: NodeListOf<HTMLLIElement>): number {
    let str;
    levelsItem.forEach((item) => {
      if (item instanceof HTMLElement) {
        if (item.classList.contains('selected')) {
          str = item.textContent;
        }
      }
    });
    return str ? parseInt(str) : this.firstLevel;
  }

  public static getLevelsList(): LevelsListItem[] {
    if (MyLocalStorage.getItem('levelsList')) {
      const data: LevelsListItem[] = MyLocalStorage.getItem('levelsList');
      data.forEach((item, index) => {
        Object.assign(levelsList[index], item);
      });
    }
    return levelsList;
  }

  public static highlightLevel(lvl: number, levelsItem: NodeListOf<HTMLLIElement>): void {
    levelsItem.forEach((item) => (item as HTMLElement).classList.remove('selected'));
    (levelsItem[lvl - 1] as HTMLElement).classList.add('selected');
  }
}
