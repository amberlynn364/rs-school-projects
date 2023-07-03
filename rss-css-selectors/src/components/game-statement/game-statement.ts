import CodeHighlight from '../helpers/code-highlight';
import { levels } from '../levels/levels';
import { levelsList } from '../levels/levels-list';

export default class GameStatement {

  protected input: HTMLInputElement | null = document.querySelector('.selector-input');

  helpButtonID = document.getElementById('help');

  constructor() {
    this.addInputFlashingAnimation();
  }

  protected winChecker(lvl: number = 1): boolean {
    console.log('1', lvl);
    if (this.input?.value.toLowerCase() === levels[lvl - 1].rightAnswer 
    || this.input?.value.toLowerCase() === levels[lvl - 1].anotherRightAnswer) {
      return true;
    } else {
      return false;
    }
  }

  protected inputCleaner(): void {
    this.input!.value = '';
    this.input!.focus();
    this.input!.style.animation = 'flashing 1s infinite';
    this.input!.style.background = 'rgba(45, 146, 183, 0.3)';
  }

  protected addInputFlashingAnimation(): void {
    this.input?.addEventListener('input', () => {
      this.inputCodeHighlight();
      
      if (this.input!.value.length > 0) {
        this.input!.style.animation = 'none';
        this.input!.style.background = 'inherit';
      }
      if (this.input!.value.length === 0) {
        this.input!.style.animation = 'flashing 1s infinite';
        this.input!.style.background = 'rgba(45, 146, 183, 0.3)';
      }
    });
  }

  protected addShakeAnimation(): void {
    const textField = document.querySelector('.text-fields');
    textField!.classList.add('shake');
    textField?.addEventListener('animationend', () => textField!.classList.remove('shake'));
  }

  protected rightAnswerAnimation(callback: () => void): void {
    const tableChildren = document.querySelector('.table')?.children;
    if (tableChildren) {
      for (let i = 0; i < tableChildren.length; i++) {
        tableChildren[i].classList.add('vanished');
        tableChildren[i].addEventListener('animationend', () => callback());
      }
    }
  }

  protected updateCheckMark(index: number): void {
    const lvlList: HTMLElement | null = document.querySelector('.levels-list');
    lvlList!.children[index].classList.add('done');
    if (!levelsList[index].classList.includes('done')) {
      levelsList[index].classList.push('done'); 
    }
  }

  protected winGame(): void {
    const title = document.querySelector('.table-title');
    title!.textContent = 'You win!';
  }

  protected textAnimate(str: string): void {
    for (let i = 0; i < str.length; i++) {
      setTimeout(() => this.input!.value += str.charAt(i), 300 * i);
    }
    console.log(this.input?.value.length);
  }

  helpButton(lvl: number) {
    const helpButton = document.getElementById('help');
    helpButton?.addEventListener('click', () => {
      this.textAnimate(levels[lvl - 1].rightAnswer as string);
    });
  }

  protected newGame(callback: (data: number) => void): void {
    const firstLVL = 1;
    const newGameButton = document.getElementById('new-game');
    newGameButton?.addEventListener('click', () => {
      localStorage.clear();
      levelsList.forEach((item) => item.classList = ['levels-item']);
      const list = document.querySelector('.levels-list')!.children;
      const listArr = Array.from(list);
      listArr.forEach((item) => item.classList.remove('done'));
      callback(firstLVL);
    });
  }

  protected inputCodeHighlight(): void {
    switch (this.input!.value.charAt(0)) {
      case ('.'):
        this.input!.style.color = '#00a';
        break;
      case ('#'):
        this.input!.style.color = '#707';
        break;
      default: 
        this.input!.style.color = '#535353';
    }
  }

}

