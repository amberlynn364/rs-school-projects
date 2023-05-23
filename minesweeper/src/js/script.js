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
  timer,
  sounds,
  updateFieldStatement,
  addMinesToBoard,
  nearbyMinesCounter,
  fillBoard,
} from './minesweeper';
import {
  resetCounters,
  unhideGrid,
  setSounds,
  saveTable,
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
      if (!minesweeperData.firstClick) {
        addMinesToBoard(cell);
        nearbyMinesCounter();
        fillBoard();
        minesweeperData.firstClick = true;
      }
      if (!minesweeperData.firstClickTimer) {
        minesweeperData.firstClickTimer = true;
        timer();
      }
      openCell(cell);
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
  if (!minesweeperData.firstClickTimer) {
    minesweeperData.firstClickTimer = true;
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
    if (localStorage['minesweeper.gameSave']) {
      localStorage.clear();
    }
    minesweeperData.timerOptions.timer = clearInterval(minesweeperData.timerOptions.timer);
    minesweeperData.firstClick = false;
    minesweeperData.firstClickTimer = false;
    resetCounters();
    createBoard();
    fillBoard();
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
  minesweeperData.firstClickTimer = false;
  saveGame();
  saveTable();
}); // for timer
