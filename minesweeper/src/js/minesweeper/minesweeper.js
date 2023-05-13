import { minesweeperData } from './data';
import nearbyMinesCells from './helpers';

function setCell(xpos, ypos) {
  const cell = {
    xpos,
    ypos,
    value: 0,
    isMine: false,
    isRevealed: false,
    isFlagged: false,
  };
  return cell;
}

export default function createBoard() {
  createGrid();
  addMinesToBoard();
  nearbyMinesCounter();
  fillBoard();
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

function fillBoard() {
  const gameWrapper = document.getElementById('minesweeper');
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
        setClass = `revealed adj-${cellItem.value}`;
        value = !cellItem.isMine ? cellItem.value || '' : '';
      }
      attribute += `<div class="cell ${setClass}" data-xpos="${j}" data-ypos="${i}">${value}</div>`;
    }
    attribute += '</div>';
  }
  gameWrapper.innerHTML = attribute;
}

// function updateCounters() {

// }
console.log(minesweeperData.grid);
