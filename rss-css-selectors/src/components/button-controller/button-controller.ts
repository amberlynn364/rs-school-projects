import AnimationController from '../animation-controller/animation-controller';
import LevelsHelper from '../helpers/levels-helper';
import { levels } from '../levels/levels';
import { levelsList } from '../levels/levels-list';
import SetLevel from '../levels/set-level';

export default class ButtonController {
  private helpButton: HTMLElement | null = document.getElementById('help');

  private newGameButton: HTMLElement | null = document.getElementById('new-game');

  private levelsItem: NodeListOf<HTMLLIElement> = document.querySelectorAll('.levels-item');

  constructor() {
    this.initButtons();
  }

  private initButtons(): void {
    this.initNewGameButton();
    this.initHelpButton();
  }

  private initNewGameButton(): void {
    const firstLVL = 1;
    this.newGameButton?.addEventListener('click', () => {
      localStorage.clear();
      levelsList.forEach((item) => item.classList = ['levels-item']);
      const list = document.querySelector('.levels-list')!.children;
      const listArr = Array.from(list);
      listArr.forEach((item) => item.classList.remove('done'));
      new SetLevel(firstLVL);
    });
  }

  private initHelpButton(): void {
    this.helpButton!.addEventListener('click', () => {
      const currentLevel: number = LevelsHelper.getCurrentLvl(this.levelsItem);
      const lvlList: HTMLElement | null = document.querySelector('.levels-list');
      lvlList!.children[currentLevel - 1].classList.add('helped');
      levelsList[currentLevel - 1].classList.push('helped');
      AnimationController.textAnimate(levels[currentLevel - 1].rightAnswer as string);
    });
  }
}