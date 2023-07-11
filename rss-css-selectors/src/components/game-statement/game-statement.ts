import { levels } from '../data/levels';
import { levelsList } from '../data/levels-list';
export default class GameStatement {

  protected input: HTMLInputElement | null = document.querySelector('.selector-input');

  protected winChecker(lvl: number = 1): boolean {
    const rightAnswers = levels[lvl - 1].rightAnswer;
    if (rightAnswers.includes(this.input?.value.toLowerCase() as string)) {
      return true;
    } else {
      return false;
    }
  }

  protected winGame(): void {
    const title = document.querySelector('.table-title');
    title!.textContent = 'You win!';
  }
  
  protected updateCheckMark(index: number): void {
    const lvlList: HTMLElement | null = document.querySelector('.levels-list');
    lvlList!.children[index].classList.add('done');
    if (!levelsList[index].classList.includes('done')) {
      levelsList[index].classList.push('done'); 
    }
  }

  protected inputCleaner(): void {
    this.input!.value = '';
    this.input!.focus();
    this.input!.style.animation = 'flashing 1s infinite';
    this.input!.style.background = 'rgba(45, 146, 183, 0.3)';
  }
}

