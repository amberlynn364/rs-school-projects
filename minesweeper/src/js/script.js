import '../index.html';
import '../sass/main.scss';
import createDomElements from './createDomElements';
import { minesweeperData, cssClasses, tableData } from './data';
import {
  createBoard,
  openCell,
  setFlag,
  checkGameStatus,
  saveGame,
  timer,
  sounds,
} from './minesweeper';
import {
  resetCounters,
  unhideGrid,
  validateLocalStorage,
  updateFieldStatement,
  setSounds,
  addRowToTable,
  parseTable,
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
      sounds();
      setSounds('https://audio.jukehost.co.uk/Pvy5nBqSCpGanu1hQZ9tM9XLSzamOBMo');
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
      setSounds('https://audio.jukehost.co.uk/IUWnsuYO4EMO1lQ8oygiMuBW4IUqXj9G');
      sounds();
    }
  }
  if (!minesweeperData.firstClick) {
    minesweeperData.firstClick = true;
    timer();
  }
  checkGameStatus();
  console.log('123', minesweeperData.table);
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

document
  .getElementById(cssClasses.BUTTON_SOUND_OFF_ON)
  .addEventListener('click', () => {
    minesweeperData.audioMuted = !minesweeperData.audioMuted;
    setSounds();
  });

document
  .getElementById(cssClasses.BUTTON_TOGGLE_THEME)
  .addEventListener('click', () => {
    document.body.classList.toggle('dark');
    setSounds();
  });

console.log(unhideGrid());
window.addEventListener('beforeunload', () => {
  minesweeperData.firstClick = false;
  saveGame();
}); // for timer
