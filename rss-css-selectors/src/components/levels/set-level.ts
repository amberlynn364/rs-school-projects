import LevelsHelper from '../helpers/levels-helper';
import MyLocalStorage from '../helpers/my-local-storage';
import MarkUp from '../markup/markup';
import Table from '../table/table';
import TextContent from '../text-content/text-content';
import { levels } from '../data/levels';

export default class SetLevel {
  private levelsItem: NodeListOf<HTMLLIElement> = document.querySelectorAll('.levels-item');

  constructor(lvl: number) {
    this.setLevel(lvl);
  }

  public setLevel(lvl: number): void {
    new Table(lvl);
    new MarkUp(lvl);
    new TextContent(lvl);
    LevelsHelper.highlightLevel(lvl, this.levelsItem);
    MyLocalStorage.setItem('level', levels[lvl - 1].levelNumber);
  }
}