import '../index.html';
import '../sass/main.scss';
import createDomElements from './createDomElements';
import { minesweeperData, cssClasses } from './data';
import {
  createBoard,
  openCell,
  setFlag,
  checkGameStatus,
  saveGame,
  stopwatch,
} from './minesweeper';
import {
  changeMinesweeperDataOptions,
  resetCounters,
  unhideGrid,
  validateLocalStorage,
} from './helpers';

createDomElements();
createBoard();

const minesweeper = document.getElementById(cssClasses.MINESWEEPER);

minesweeper.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('cell')) {
    const cell = minesweeperData.grid[target.getAttribute('data-ypos')][target.getAttribute('data-xpos')];
    if (!cell.isRevealed && minesweeperData.playing) {
      minesweeperData.movesMade++;
      document.getElementById(cssClasses.MOVE_COUNTER).textContent = minesweeperData.movesMade;
      openCell(cell);
      if (!minesweeper.firstClick) {
        minesweeper.firstClick = true;
        stopwatch();
        minesweeper.timeHasGone = true;
      }
      saveGame();
    }
  }
  checkGameStatus();
});

minesweeper.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const { target } = e;
  if (target.classList.contains('cell')) {
    const cell = minesweeperData.grid[target.getAttribute('data-ypos')][target.getAttribute('data-xpos')];
    if (!cell.isRevealed && minesweeperData.playing) {
      minesweeperData.movesMade++;
      document.getElementById(cssClasses.MOVE_COUNTER).textContent = minesweeperData.movesMade;
      setFlag(cell);
      saveGame();
    }
  }
  checkGameStatus();
});

document
  .getElementById(cssClasses.BUTTON_EASY)
  .addEventListener('click', () => {
    resetCounters();
    changeMinesweeperDataOptions(10, 10, 10);
    createBoard();
  });

document
  .getElementById(cssClasses.BUTTON_MEDIUM)
  .addEventListener('click', () => {
    resetCounters();
    changeMinesweeperDataOptions(15, 15, 40);
    createBoard();
  });

document
  .getElementById(cssClasses.BUTTON_HARD)
  .addEventListener('click', () => {
    resetCounters();
    changeMinesweeperDataOptions(25, 25, 99);
    createBoard();
  });

document
  .getElementById(cssClasses.BUTTON_START_NEW_GAME)
  .addEventListener('click', () => {
    if (validateLocalStorage) {
      localStorage.clear();
    }
    resetCounters();
    createBoard();
  });
console.log(unhideGrid());
