import { minesweeperData, cssClasses, tableData } from './data';
// import { createBoard, saveGame } from './minesweeper';

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
  minesweeperData.quantityValues = [];
  minesweeperData.firstClick = false;
  minesweeperData.firstClickTimer = false;
  minesweeperData.date = null;

  gameStatus.textContent = minesweeperData.gameStatus;
  gameStatus.style.color = 'inherit';
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

export function setSounds(link) {
  const audio = new Audio();
  if (link) {
    audio.src = link;
    audio.play();
  }
  const buttonOnOf = document.getElementById(cssClasses.BUTTON_SOUND_OFF_ON);
  if (minesweeperData.audioMuted) {
    audio.muted = true;
    buttonOnOf.textContent = 'Press to sound on';
  } else {
    audio.muted = false;
    buttonOnOf.textContent = 'Press to sound off';
  }
}

export function addRowToTable(tableID, col1, col2, col3, col4) {
  // let date = new Date();
  // const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const table = document.getElementById(tableID);
  const newRow = table.insertRow(0);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  cell1.innerText = col1;
  cell2.innerText = col2;
  cell3.innerText = `${col3} moves`;
  cell4.innerText = `${col4} seconds`;
  if (table.rows.length > 10) {
    table.deleteRow(-1);
    tableData.data.pop();
  }
  if (col2 === 'Win') {
    cell2.style.backgroundColor = '#00cc00';
  }
  if (col2 === 'Lose') {
    cell2.style.backgroundColor = '#ee0000';
  }
  tableData.data.push({ date: col1, status: col2, moves: col3, seconds: col4 });
  saveTable();
}

export function saveTable() {
  const data = JSON.stringify(tableData);
  localStorage.tableSave = data;
}

export function parseTable() {
  if (localStorage.tableSave) {
    const loadedData = JSON.parse(localStorage.tableSave);
    for (let i = 0; i < loadedData.data.length; i++) {
      addRowToTable(
        'table',
        loadedData.data[i].date,
        loadedData.data[i].status,
        loadedData.data[i].moves,
        loadedData.data[i].seconds,
      );
    }
  }
}

export function getDay() {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateOptions = `${date.toLocaleDateString('en-EN', options)} ${date.toLocaleTimeString()}`;
  return dateOptions;
}
