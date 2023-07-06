import GameStatement from '../game-statement/game-statement';
import LevelsHelper from '../helpers/levels-helper';
import MyLocalStorage from '../helpers/my-local-storage';
import ChangeLevel from '../levels/set-level';
import { levelsList } from '../data/levels-list';
import AnimationController from '../controllers/animation-controller';

export default class InputValidator extends GameStatement {

  private enterButton: HTMLButtonElement | null = document.querySelector('.enter');

  private levelsItem: NodeListOf<HTMLLIElement> = document.querySelectorAll('.levels-item');

  constructor() {
    super();
    AnimationController.addInputFlashingAnimation();
    this.inputValidator();
  }

  private inputValidator(): void {
    this.enterButton?.addEventListener('click', () => this.inputEvent());

    this.input?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.inputEvent();
        this.enterButton?.classList.add('enter-press');
        this.enterButton?.addEventListener('transitionend', () => this.enterButton?.classList.remove('enter-press'));
      }
    });
  }

  private inputEvent(): void {
    const currentLvl: number = LevelsHelper.getCurrentLvl(this.levelsItem);
    if (this.winChecker(currentLvl)) {
      this.inputCleaner();
      this.updateCheckMark(currentLvl - 1);
      MyLocalStorage.setItem('levelsList', (levelsList));
      if (currentLvl < levelsList.length) { 
        AnimationController.rightAnswerAnimation(() => new ChangeLevel(currentLvl + 1));
      } else {
        AnimationController.rightAnswerAnimation(() => this.winGame());
      }
    } else {
      AnimationController.addShakeAnimation();
    }
  }
}