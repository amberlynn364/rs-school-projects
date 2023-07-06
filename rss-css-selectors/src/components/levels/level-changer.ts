import WinValidator from '../game-statement/game-statement';
import MyLocalStorage from '../helpers/my-local-storage';
import LevelsHelper from '../helpers/levels-helper';
import InputValidator from '../input-validator/input-validator';
import SetLevel from './set-level';
import ButtonController from '../button-controller/button-controller';
import AnimationController from '../animation-controller/animation-controller';

export default class LevelChanger extends WinValidator {

  private levelsItem: NodeListOf<HTMLLIElement> = document.querySelectorAll('.levels-item');
  
  constructor() {
    super();
    this.changeLevel();
    new InputValidator();
    new ButtonController();
    AnimationController.addInputFlashingAnimation();

  }

  private changeLevel(): void {
    const changeLevel = new SetLevel(MyLocalStorage.getItem('level') || 1);
    this.levelsItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        const { target } = e;
        if (target instanceof Element) {
          if (target.classList.contains('levels-item')) {
            const lvlNumber = LevelsHelper.getLevelNumberFromString(target.textContent as string);
            changeLevel.setLevel(lvlNumber);
            this.inputCleaner();
          }
        }
      });
    });
  }
}