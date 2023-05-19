import { minesweeperData, cssClasses } from './data';
import { createBoard, saveGame } from './minesweeper';

export function nearbyMinesCells(row, col) {
  const result = [];
  for (
    let rowPos = row > 0 ? -1 : 0;
    rowPos <= (row < minesweeperData.options.rows - 1 ? 1 : 0);
    rowPos++
  ) {
    for (
      let colPos = col > 0 ? -1 : 0;
      colPos <= (col < minesweeperData.options.cols - 1 ? 1 : 0);
      colPos++
    ) {
      result.push(minesweeperData.grid[row + rowPos][col + colPos]);
    }
  }
  return result;
}

export function changeMinesweeperDataOptions(rows, cols, mines) {
  let mine = mines;
  const mineInput = document.getElementById(cssClasses.MINE_INPUT);
  minesweeperData.grid = [];
  if (Number.isNaN(parseInt(mine, 10))) {
    mine = 10;
    mineInput.value = mine;
  }
  if (mine < 10) {
    mine = 10;
    mineInput.value = mine;
  }
  if (mine > 99) {
    mine = 99;
    mineInput.value = mine;
  }
  minesweeperData.options.rows = parseInt(rows, 10);
  minesweeperData.options.cols = parseInt(cols, 10);
  minesweeperData.options.mines = parseInt(mine, 10);
}

export function resetCounters() {
  const gameStatus = document.getElementById(cssClasses.GAME_STATUS);
  const moveCounter = document.getElementById(cssClasses.MOVE_COUNTER);
  const mineCounter = document.getElementById(cssClasses.MINE_COUNTER);
  const flagCounter = document.getElementById(cssClasses.FLAG_COUNTER);
  const timer = document.getElementById(cssClasses.TIMER);

  minesweeperData.minesFound = 0;
  minesweeperData.falseMines = 0;
  minesweeperData.gameStatus = 'Playing';
  minesweeperData.playing = true;
  minesweeperData.movesMade = 0;
  minesweeperData.timerOptions.time = '00,00';
  minesweeperData.flagsSet = 0;
  minesweeperData.timerOptions.milliseconds = 0;
  minesweeperData.timerOptions.seconds = 0;
  minesweeperData.timerOptions.minutes = 0;

  gameStatus.textContent = minesweeperData.gameStatus;
  gameStatus.style.color = '#fff';
  moveCounter.textContent = minesweeperData.movesMade;
  mineCounter.textContent = minesweeperData.options.mines;
  flagCounter.textContent = minesweeperData.flagsSet;
  timer.textContent = minesweeperData.timerOptions.time;
}

export function unhideGrid() {
  let result = '';
  for (let i = 0; i < minesweeperData.grid.length; i++) {
    for (let j = 0; j < minesweeperData.grid[i].length; j++) {
      result += `${minesweeperData.grid[i][j].value} `;
    }
    result += '\n';
  }
  return result;
}

export function validateLocalStorage() {
  return 'localStorage' in window && window.localStorage !== null;
}

export function updateFieldStatement(rows, cols, mines) {
  if (validateLocalStorage) {
    localStorage.clear();
  }
  minesweeperData.timerOptions.timer = clearInterval(minesweeperData.timerOptions.timer);
  minesweeperData.firstClick = false;
  resetCounters();
  changeMinesweeperDataOptions(rows, cols, mines);
  createBoard();
  saveGame();
}

export function convertTimerToSeconds(str) {
  const p = str.split(':');
  let seconds = 0;
  let minutes = 1;

  while (p.length > 0) {
    seconds += minutes * parseInt(p.pop(), 10);
    minutes *= 60;
  }

  return seconds;
}
