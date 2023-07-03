import MarkUp from '../markup/markup';
import Table from '../table/table';
import WinValidator from '../game-statement/game-statement';
import { levels } from './levels';
import LevelsListFiller from './levels-list-filler';
import { levelsList } from './levels-list';
import MyLocalStorage from '../helpers/my-local-storage';
import TextContent from '../text-content/text-content';

export default class LevelChanger extends WinValidator {

  private localStorageLvlList = new MyLocalStorage();

  private levelsListWrapper = new LevelsListFiller(this.getLevelsList());

  private levelsItem: NodeList = document.querySelectorAll('.levels-item');
  
  private enterButton: HTMLButtonElement | null = document.querySelector('.enter');

  private firstLevel = 1;
  
  

  
  constructor() {
    // localStorage.clear();
    super();
    this.setLevel();
    this.inputValidator();
    this.newGame(() => this.changeLevel(this.firstLevel));
    console.log(';eve;', this.getLevelsList());
    // this.helpButton(this.getCurrentLvl());
    this.helpButtonID!.addEventListener('click', () => {
      this.textAnimate(levels[this.getCurrentLvl() - 1].rightAnswer as string);
      const lvlList: HTMLElement | null = document.querySelector('.levels-list');
      lvlList!.children[this.getCurrentLvl() - 1].classList.add('helped');
      levelsList[this.getCurrentLvl() - 1].classList.push('helped');
    });
    // this.inputCodeHighlight();
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
    const currentLvl: number = this.getCurrentLvl();
    if (this.winChecker(currentLvl)) {
      console.log('curr', this.getCurrentLvl());
      this.inputCleaner();
      this.updateCheckMark(currentLvl - 1);
      this.localStorageLvlList.setItem('levelsList', (levelsList));
      if (currentLvl < levelsList.length) {
        this.rightAnswerAnimation(() => this.changeLevel(currentLvl + 1));
      } else {
        this.rightAnswerAnimation(() => this.winGame());
      }
    } else {
      this.addShakeAnimation();
    }
  }
   
  private setLevel(): void {
    this.changeLevel(localStorage.saveLVL || 1);
    this.levelsItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        const { target } = e;
        if (target instanceof Element) {
          if (target.classList.contains('levels-item')) {
            const lvlNumber = this.getLevelNumber(target.textContent as string);
            this.changeLevel(lvlNumber);
            this.inputCleaner();
          }
        }
      });
    });
  }
  
  private changeLevel(lvl: number): void {
    new Table(lvl);
    new MarkUp(lvl);
    new TextContent(lvl);
    this.highlightLVL(lvl);
    localStorage.saveLVL = levels[lvl - 1].levelNumber;


  }

  private highlightLVL(lvl: number): void {
    console.log('lvl', lvl);
    this.levelsItem.forEach((item) => (item as HTMLElement).classList.remove('selected'));
    (this.levelsItem[lvl - 1] as HTMLElement).classList.add('selected');
  }

  private getLevelNumber(str: string): number {
    return parseInt(str);
  }

  private getCurrentLvl(): number {
    const firstLvl = 1;
    let str;
    this.levelsItem.forEach((item) => {
      if (item instanceof HTMLElement) {
        if (item.classList.contains('selected')) {
          str = item.textContent;
        }
      }
    });
    return str ? parseInt(str) : firstLvl;
  }

  private getLevelsList() {
    if (this.localStorageLvlList.getItem('levelsList')) {
      const data: any[] = this.localStorageLvlList.getItem('levelsList');
      data.forEach((item, index) => {
        Object.assign(levelsList[index], item);
      });
    }
    return levelsList;
  }

  
}