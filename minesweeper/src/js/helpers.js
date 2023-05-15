import { minesweeperData, cssClasses } from './data';

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
  minesweeperData.options.rows = rows;
  minesweeperData.options.cols = cols;
  minesweeperData.options.mines = mines;
}

export function resetCounters() {
  const gameStatus = document.getElementById(cssClasses.GAME_STATUS);
  const moveCounter = document.getElementById(cssClasses.MOVE_COUNTER);
  const mineCounter = document.getElementById(cssClasses.MINE_COUNTER);
  const flagCounter = document.getElementById(cssClasses.FLAG_COUNTER);
  const timer = document.getElementById(cssClasses.TIMER);

  minesweeperData.minesFound = 0;
  minesweeperData.gameStatus = 'Playing';
  minesweeperData.playing = true;
  minesweeperData.movesMade = 0;
  minesweeperData.timer = '00:00:00';

  gameStatus.textContent = minesweeperData.gameStatus;
  gameStatus.style.color = '#fff';
  moveCounter.textContent = minesweeperData.movesMade;
  mineCounter.textContent = minesweeperData.options.mines;
  flagCounter.textContent = 0;
  timer.textContent = minesweeperData.timer;
}

export function unhideGrid() {
  let result = '';
  for (let i = 0; i < minesweeperData.grid.length; i++) {
    for (let j = 0; j < minesweeperData.grid[i].length; j++) {
      result += minesweeperData.grid[i][j].value + " ";
    }
    result += '\n';
  }
  return result;
}
