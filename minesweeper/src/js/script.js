import '../index.html';
import '../sass/main.scss';
import soundClick from '../assets/sounds/click.mp3';
import soundFlag from '../assets/sounds/flag.mp3';
import soundWin from '../assets/sounds/win.mp3';
import soundLose from '../assets/sounds/lose.mp3';

import createDomElements from './createDomElements';
import { minesweeperData, cssClasses } from './data';
import {
  createBoard,
  openCell,
  setFlag,
  checkGameStatus,
  saveGame,
  timer,
} from './minesweeper';
import {
  resetCounters,
  unhideGrid,
  validateLocalStorage,
  updateFieldStatement,
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
      if (!minesweeperData.firstClick) {
        minesweeperData.firstClick = true;
        minesweeperData.timerOptions.timer = clearInterval(minesweeperData.timerOptions.timer);
        timer();
      }
    }
  }
  new Audio(soundLose).play().then(() => {

  })
    .catch((error) => {
      console.log(error);
    });
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
    }
  }
  if (!minesweeperData.firstClick) {
    minesweeperData.firstClick = true;
    timer();
  }
  checkGameStatus();
});

document
  .getElementById(cssClasses.BUTTON_EASY)
  .addEventListener('click', () => {
    updateFieldStatement(10, 10, 10);
  });

document
  .getElementById(cssClasses.BUTTON_MEDIUM)
  .addEventListener('click', () => {
    updateFieldStatement(15, 15, 40);
  });

document
  .getElementById(cssClasses.BUTTON_HARD)
  .addEventListener('click', () => {
    updateFieldStatement(25, 25, 99);
  });

document
  .getElementById(cssClasses.BUTTON_UPDATE_FIELD)
  .addEventListener('click', () => {
    const mineInput = document.getElementById(cssClasses.MINE_INPUT);
    updateFieldStatement(minesweeperData.options.rows, minesweeperData.options.cols, mineInput.value);
  });

document
  .getElementById(cssClasses.BUTTON_START_NEW_GAME)
  .addEventListener('click', () => {
    if (validateLocalStorage) {
      localStorage.clear();
    }
    minesweeperData.timerOptions.timer = clearInterval(minesweeperData.timerOptions.timer);
    minesweeperData.firstClick = false;
    resetCounters();
    createBoard();
  });
console.log(unhideGrid());
window.addEventListener('beforeunload', () => {
  minesweeperData.firstClick = false;
  saveGame();
}); // for timer
