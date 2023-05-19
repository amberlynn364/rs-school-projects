export const cssClasses = {
  BUTTON_EASY: 'easy',
  BUTTON_MEDIUM: 'medium',
  BUTTON_HARD: 'hard',
  BUTTON_START_NEW_GAME: 'new-game',
  BUTTON_UPDATE_FIELD: 'update-field',
  MINE_COUNTER: 'mine-counter',
  MOVE_COUNTER: 'move-counter',
  FLAG_COUNTER: 'flag-counter',
  GAME_STATUS: 'game-status',
  TIMER: 'timer',
  MINESWEEPER: 'minesweeper',
  MINE_INPUT: 'mine-input',
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
  timerOptions: {
    timer: null,
    time: '',
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

export const sounds = [
  {
    title: 'win',
    src: '../assets/sounds/win.mp3',
    duration: '0:05',
  },
  {
    title: 'lose',
    src: '../assets/sounds/lose.mp3',
    duration: '0:06',
  },
  {
    title: 'click',
    src: '../assets/sounds/click.mp3',
    duration: '0:07',
  },
  {
    title: 'flag',
    src: '../assets/sounds/flag.mp3',
    duration: '0:05',
  },
];
