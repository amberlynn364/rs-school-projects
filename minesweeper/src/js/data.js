export const cssClasses = {
  BUTTON_EASY: 'easy',
  BUTTON_MEDIUM: 'medium',
  BUTTON_HARD: 'hard',
  BUTTON_START_NEW_GAME: 'new-game',
  BUTTON_UPDATE_FIELD: 'update-field',
  BUTTON_SOUND_OFF_ON: 'sound-on-off',
  BUTTON_TOGGLE_THEME: 'toggle',
  MINE_COUNTER: 'mine-counter',
  MOVE_COUNTER: 'move-counter',
  FLAG_COUNTER: 'flag-counter',
  GAME_STATUS: 'game-status',
  TIMER: 'timer',
  MINESWEEPER: 'minesweeper',
  MINE_INPUT: 'mine-input',
  TABLE: 'table',
};
export const minesweeperData = {
  grid: [],
  minesFound: 0,
  falseMines: 0,
  gameStatus: 'Playing',
  playing: true,
  movesMade: 0,
  flagsSet: 0,
  firstClick: false,
  firstClickTimer: false,
  audioMuted: false,
  quantityValues: [],
  date: null,
  timerOptions: {
    timer: null,
    time: '00,00',
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
  },
  options: {
    rows: 10,
    cols: 10,
    mines: 10,
  },
};

export const tableData = {
  data: [],
  tableID: 1,
};
