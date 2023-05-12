const minesweeperData = {
  grid: [],
  minesFound: 0,
  falseMines: 0,
  gameStatus: 'Playing',
  playing: true,
  movesMade: 0,
  options: {
    rows: 10,
    cols: 10,
    mines: 10,
  },
};

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


export default function createBoard () {
  fillBoardWithGrid()
  addMinesToBoard() 
}

function fillBoardWithGrid() {
  for (let i = 0; i < minesweeperData.options.rows; i++) {
    minesweeperData.grid[i] = [];
    for (let j = 0; j < minesweeperData.options.cols; j++) {
      minesweeperData.grid[i].push(setCell(j, i));
    }
  }
}

function addMinesToBoard () {
  let inclusionMines = 0;
  while (inclusionMines < minesweeperData.options.mines) {
    const rowIndex = Math.floor(Math.random() * minesweeperData.options.rows);
    const colIndex = Math.floor(Math.random() * minesweeperData.options.cols);
    let cell = minesweeperData.grid[rowIndex][colIndex];
    if (!cell.isMine) {
      cell.isMine = true;
      cell.value = 'M';
      inclusionMines++
    }
  }
}
console.log(minesweeperData.grid);
createBoard()