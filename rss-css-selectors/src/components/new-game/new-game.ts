import LevelChanger from '../levels/level-changer';
import { levelsList } from '../levels/levels-list';
import LevelsListFiller from '../levels/levels-list-filler';

export default class NewGame {
  private newGameButton: HTMLElement | null = document.getElementById('new-game');

  // constructor() {
  //   this.newGame();
  // }

  newGame() {
    this.newGameButton?.addEventListener('click', () => {
      localStorage.clear();
      levelsList.forEach((item) => item.classList = ['levels-item']);
      new LevelsListFiller(levelsList);
      new LevelChanger();
    });
  }
}