import WinValidator from '../game-statement/game-statement';
import MyLocalStorage from '../helpers/my-local-storage';
import LevelsHelper from '../helpers/levels-helper';
import SetLevel from './set-level';
export default class LevelChanger extends WinValidator {

  private levelsItem: NodeListOf<HTMLLIElement> = document.querySelectorAll('.levels-item');

  private setLevel = new SetLevel(MyLocalStorage.getItem('level') || 1);
  
  constructor() {
    super();
    this.changeLevel();
  }

  private changeLevel(): void {
    this.levelsItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        const { target } = e;
        if (target instanceof Element) {
          if (target.classList.contains('levels-item')) {
            const lvlNumber = LevelsHelper.getLevelNumberFromString(target.textContent as string);
            this.setLevel.setLevel(lvlNumber);
            this.inputCleaner();
          }
        }
      });
    });
  }
}