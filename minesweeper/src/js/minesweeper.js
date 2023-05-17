import { minesweeperData, cssClasses } from './data';
import { nearbyMinesCells, validateLocalStorage } from './helpers';

export function createCell({ xpos, ypos, value = 0, isMine = false, isRevealed = false, isFlagged = false }) {
  const cell = {
    xpos,
    ypos,
    value,
    isMine,
    isRevealed,
    isFlagged,
    getItem() {
      return document.querySelector(`.cell[data-xpos="${xpos}"][data-ypos="${ypos}"]`);
    },
  };
  return cell;
}

export function createBoard() {
  if (validateLocalStorage && localStorage['minesweeper.gameSave']) {
    const loadedData = JSON.parse(localStorage['minesweeper.gameSave']);
    for (let i = 0; i < loadedData.grid.length; i++) {
      for (let j = 0; j < loadedData.grid[i].length; j++) {
        loadedData.grid[i][j] = createCell(loadedData.grid[i][j]);
      }
    }
    Object.assign(minesweeperData, loadedData);
    fillBoard();
  } else {
    createGrid();
    addMinesToBoard();
    nearbyMinesCounter();
    fillBoard();
  }
}

function createGrid() {
  for (let i = 0; i < minesweeperData.options.rows; i++) {
    minesweeperData.grid[i] = [];
    for (let j = 0; j < minesweeperData.options.cols; j++) {
      minesweeperData.grid[i].push(createCell({ xpos: j, ypos: i }));
    }
  }
}

export function addMinesToBoard() {
  let inclusionMines = 0;
  while (inclusionMines < minesweeperData.options.mines) {
    const rowIndex = Math.floor(Math.random() * minesweeperData.options.rows);
    const colIndex = Math.floor(Math.random() * minesweeperData.options.cols);
    const cell = minesweeperData.grid[rowIndex][colIndex];
    if (!cell.isMine) {
      cell.isMine = true;
      cell.value = 'M';
      inclusionMines++;
    }
  }
}

function nearbyMinesCounter() {
  for (let i = 0; i < minesweeperData.options.rows; i++) {
    for (let j = 0; j < minesweeperData.options.cols; j++) {
      if (!minesweeperData.grid[i][j].isMine) {
        let mineCounter = 0;
        const nearbyCells = nearbyMinesCells(i, j);
        for (let k = nearbyCells.length; k--;) {
          if (nearbyCells[k].isMine) {
            mineCounter++;
          }
        }
        minesweeperData.grid[i][j].value = mineCounter;
      }
    }
  }
}

export function fillBoard() {
  const gameWrapper = document.getElementById(cssClasses.MINESWEEPER);
  const mineCounter = document.getElementById(cssClasses.MINE_COUNTER);
  gameWrapper.innerHTML = '';

  let attribute = '';
  for (let i = 0; i < minesweeperData.options.rows; i++) {
    attribute += '<div class="row">';
    for (let j = 0; j < minesweeperData.options.cols; j++) {
      const cellItem = minesweeperData.grid[i][j];
      let setClass = '';
      let value = '';
      if (cellItem.isFlagged) {
        setClass = 'flagged';
      } else if (cellItem.isRevealed) {
        setClass = `revealed value-${cellItem.value}`;
        value = !cellItem.isMine ? cellItem.value || '' : '';
      }
      attribute += `<div class="cell ${setClass}" data-xpos="${j}" data-ypos="${i}">${value}</div>`;
    }
    attribute += '</div>';
  }
  gameWrapper.innerHTML = attribute;
  mineCounter.textContent = minesweeperData.options.mines - (minesweeperData.falseMines + minesweeperData.minesFound);
  document.getElementById(cssClasses.MOVE_COUNTER).textContent = minesweeperData.movesMade;
  document.getElementById(cssClasses.FLAG_COUNTER).textContent = minesweeperData.flagsSet;
  document.getElementById(cssClasses.GAME_STATUS).textContent = minesweeperData.gameStatus;
  document.getElementById(cssClasses.TIMER).textContent = minesweeperData.timer;
  document.getElementById(cssClasses.MINE_INPUT).setAttribute('value', minesweeperData.options.mines);
}

export function openCell(cell) {
  if (!cell.isRevealed && !cell.isFlagged && minesweeperData.playing) {
    const cellItem = cell.getItem();
    cell.isRevealed = true;
    cellItem.classList.add('revealed', `value-${cell.value}`);
    cellItem.textContent = (!cell.isMine ? cell.value || '' : '');
    if (cell.isMine) {
      minesweeperData.gameStatus = 'Game over. Try again';
      minesweeperData.time = clearInterval(minesweeperData.time);
      minesweeperData.firstClick = false;
      minesweeperData.playing = false;
      document.getElementById(cssClasses.GAME_STATUS).textContent = minesweeperData.gameStatus;
      document.getElementById(cssClasses.GAME_STATUS).style.color = '#EE0000';
    } else if (!cell.isFlagged && cell.value === 0) {
      const adjCells = nearbyMinesCells(cell.ypos, cell.xpos);
      for (let k = 0; k < adjCells.length; k++) {
        openCell(adjCells[k]);
      }
    }
  }
}

export function setFlag(cell) {
  if (!cell.isRevealed && minesweeperData.playing) {
    const cellElement = cell.getItem();
    const mineCounter = document.getElementById(cssClasses.MINE_COUNTER);
    const flagCounter = document.getElementById(cssClasses.FLAG_COUNTER);
    if (!cell.isFlagged) {
      cell.isFlagged = true;
      cellElement.classList.add('flagged');
      mineCounter.textContent--;
      minesweeperData.flagsSet++;
      flagCounter.textContent = minesweeperData.flagsSet;
      if (cell.isMine) {
        minesweeperData.minesFound++;
      } else {
        minesweeperData.falseMines++;
      }
    } else {
      cell.isFlagged = false;
      cellElement.classList.remove('flagged');
      cellElement.textContent = '';
      mineCounter.textContent++;
      minesweeperData.flagsSet--;
      flagCounter.textContent = minesweeperData.flagsSet;
      if (cell.isMine) {
        minesweeperData.minesFound--;
      } else {
        minesweeperData.falseMines--;
      }
    }
  }
}

export function checkGameStatus() {
  const gameStatus = document.getElementById(cssClasses.GAME_STATUS);
  if (minesweeperData.minesFound === minesweeperData.options.mines && minesweeperData.falseMines === 0) {
    minesweeperData.gameStatus = `Hooray! You found all mines in ${minesweeperData.timer} seconds and ${minesweeperData.movesMade} moves!`;
    minesweeperData.time = clearInterval(minesweeperData.time);
    minesweeperData.firstClick = false;
    minesweeperData.playing = false;
    gameStatus.textContent = minesweeperData.gameStatus;
    gameStatus.style.color = '#00cc00';
  }
}

export function saveGame() {
  if (!validateLocalStorage()) {
    return false;
  }
  const data = JSON.stringify(minesweeperData);
  localStorage['minesweeper.gameSave'] = data;
  return undefined;
}

export function stopwatch() {
  let [milliseconds, seconds, minutes] = [0, 0, 0];
  minesweeperData.time = setInterval(timer, 10);
  function timer() {
    if (!minesweeperData.timeHasGone) {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
      }
      const m = minutes < 10 ? `0${minutes}` : minutes;
      const s = seconds < 10 ? `0${seconds}` : seconds;
      const ms = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
      minesweeperData.timer = ` ${m}:${s}:${ms}`;
      document.getElementById(cssClasses.TIMER).textContent = minesweeperData.timer;
    }
  }
}
