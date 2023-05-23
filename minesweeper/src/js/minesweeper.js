import { minesweeperData, cssClasses } from './data';
import {
  nearbyMinesCells,
  setSounds,
  addRowToTable,
  parseTable,
  changeMinesweeperDataOptions,
  resetCounters,
  getDay,
} from './helpers';

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
  if (localStorage['minesweeper.gameSave']) {
    const loadedData = JSON.parse(localStorage['minesweeper.gameSave']);
    for (let i = 0; i < loadedData.grid.length; i++) {
      for (let j = 0; j < loadedData.grid[i].length; j++) {
        loadedData.grid[i][j] = createCell(loadedData.grid[i][j]);
      }
    }
    Object.assign(minesweeperData, loadedData);
    fillBoard();
    parseTable();
    setSounds();
  } else {
    createGrid();
    // addMinesToBoard();
    // nearbyMinesCounter();
    fillBoard();
    setSounds();
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

export function addMinesToBoard(cellWithOutBomb) {
  let inclusionMines = 0;
  while (inclusionMines < minesweeperData.options.mines) {
    const rowIndex = Math.floor(Math.random() * minesweeperData.options.rows);
    const colIndex = Math.floor(Math.random() * minesweeperData.options.cols);
    const cell = minesweeperData.grid[rowIndex][colIndex];
    if (!cell.isMine && cellWithOutBomb !== cell) {
      cell.isMine = true;
      cell.value = 'M';
      inclusionMines++;
    }
  }
}

export function nearbyMinesCounter() {
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
  document.getElementById(cssClasses.TIMER).textContent = minesweeperData.timerOptions.time;
  document.getElementById(cssClasses.MINE_INPUT).setAttribute('value', minesweeperData.options.mines);
}

export function openCell(cell) {
  if (!cell.isRevealed && !cell.isFlagged && minesweeperData.playing) {
    const cellItem = cell.getItem();
    cell.isRevealed = true;
    cellItem.classList.add('revealed', `value-${cell.value}`);
    cellItem.textContent = (!cell.isMine ? cell.value || '' : '');
    minesweeperData.quantityValues.push('');
    if (cell.isMine) {
      minesweeperData.gameStatus = 'Game over. Try again';
      minesweeperData.timerOptions.timer = clearInterval(minesweeperData.timerOptions.timer);
      minesweeperData.firstClick = false;
      minesweeperData.playing = false;
      document.getElementById(cssClasses.GAME_STATUS).textContent = minesweeperData.gameStatus;
      document.getElementById(cssClasses.GAME_STATUS).style.color = '#ee0000';
      addRowToTable('table', getDay(), 'Lose', minesweeperData.movesMade, minesweeperData.timerOptions.time);
      minesweeperData.quantityValues.pop();
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
  const optionMulti = minesweeperData.options.rows * minesweeperData.options.cols;
  if ((
    minesweeperData.minesFound === minesweeperData.options.mines && minesweeperData.falseMines === 0)
     || (optionMulti - (minesweeperData.options.mines + minesweeperData.quantityValues.length)) === 0
  ) {
    minesweeperData.gameStatus = `Hooray! You found all mines in ${minesweeperData.timerOptions.time} seconds and ${minesweeperData.movesMade} moves!`;
    minesweeperData.timerOptions.timer = clearInterval(minesweeperData.timerOptions.timer);
    minesweeperData.firstClick = false;
    minesweeperData.playing = false;
    gameStatus.textContent = minesweeperData.gameStatus;
    gameStatus.style.color = '#00cc00';
    addRowToTable('table', getDay(), 'Win', minesweeperData.movesMade, minesweeperData.timerOptions.time);
  }
  if (gameStatus.textContent === 'Game over. Try again') {
    minesweeperData.timerOptions.timer = clearInterval(minesweeperData.timerOptions.timer);
    minesweeperData.firstClick = false;
  }
}

export function saveGame() {
  const data = JSON.stringify(minesweeperData);
  localStorage['minesweeper.gameSave'] = data;
  return undefined;
}

export function timer() {
  minesweeperData.timerOptions.timer = setInterval(StartTimer, 10);
  function StartTimer() {
    minesweeperData.timerOptions.milliseconds++;
    if (minesweeperData.timerOptions.milliseconds === 100) {
      minesweeperData.timerOptions.milliseconds = 0;
      minesweeperData.timerOptions.seconds++;
    }
    const s = minesweeperData.timerOptions.seconds < 10 ? `0${minesweeperData.timerOptions.seconds}` : minesweeperData.timerOptions.seconds;
    const ms = minesweeperData.timerOptions.milliseconds < 10 ? `0${minesweeperData.timerOptions.milliseconds}` : minesweeperData.timerOptions.milliseconds;
    minesweeperData.timerOptions.time = `${s},${ms}`;
    document.getElementById(cssClasses.TIMER).textContent = minesweeperData.timerOptions.time;
  }
}

export function sounds() {
  if (minesweeperData.gameStatus === 'Game over. Try again') {
    setSounds('https://audio.jukehost.co.uk/QZKlbFPz2Rd2dwS6AT27uVYmFs4c5r6E');
  }
  if (minesweeperData.minesFound === minesweeperData.options.mines && minesweeperData.falseMines === 0) {
    setSounds('https://audio.jukehost.co.uk/3C36ArOHe2B75hw8ISk5VCvj3neMWxhr');
  }
}

export function updateFieldStatement(rows, cols, mines) {
  if (localStorage['minesweeper.gameSave']) {
    localStorage.clear();
  }
  if (localStorage.tableSave) {
    parseTable();
  }
  minesweeperData.timerOptions.timer = clearInterval(minesweeperData.timerOptions.timer);
  minesweeperData.firstClick = false;
  resetCounters();
  changeMinesweeperDataOptions(rows, cols, mines);
  createBoard();
  fillBoard();
  saveGame();
}
