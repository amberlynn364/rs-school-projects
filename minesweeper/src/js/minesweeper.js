import { minesweeperData, cssClasses } from './data';
import { nearbyMinesCells } from './helpers';

function setCell(xpos, ypos) {
  const cell = {
    xpos,
    ypos,
    value: 0,
    isMine: false,
    isRevealed: false,
    isFlagged: false,
    getItem() {
      return document.querySelector(`.cell[data-xpos="${this.xpos}"][data-ypos="${this.ypos}"]`);
    },
  };
  return cell;
}

export function createBoard() {
  createGrid();
  addMinesToBoard();
  nearbyMinesCounter();
  fillBoard();

  document.getElementById(cssClasses.MINE_COUNTER).textContent = minesweeperData.options.mines;
}

function createGrid() {
  for (let i = 0; i < minesweeperData.options.rows; i++) {
    minesweeperData.grid[i] = [];
    for (let j = 0; j < minesweeperData.options.cols; j++) {
      minesweeperData.grid[i].push(setCell(j, i));
    }
  }
}

function addMinesToBoard() {
  let inclusionMines = 0;
  while (inclusionMines < minesweeperData.options.mines) {
    const rowIndex = Math.floor(Math.random() * minesweeperData.options.rows);
    const colIndex = Math.floor(Math.random() * minesweeperData.options.cols);
    const cell = minesweeperData.grid[rowIndex][colIndex];
    if (!cell.isMine) {
      cell.isMine = true;
      cell.value = 'Mine';
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

function fillBoard() {
  const gameWrapper = document.getElementById(cssClasses.MINESWEEPER);
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
}

export function openCell(cell) {
  if (!cell.isRevealed && !cell.isFlagged && minesweeperData.playing) {
    const cellItem = cell.getItem();
    cell.isRevealed = true;
    cellItem.classList.add('revealed', `value-${cell.value}`);
    cellItem.textContent = (!cell.isMine ? cell.value || '' : '');
    if (cell.isMine) {
      minesweeperData.gameStatus = 'BOOM, you lost!';
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
