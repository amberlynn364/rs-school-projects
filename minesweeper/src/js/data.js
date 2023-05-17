export const cssClasses = {
  BUTTON_EASY: 'easy',
  BUTTON_MEDIUM: 'medium',
  BUTTON_HARD: 'hard',
  BUTTON_START_NEW_GAME: 'new-game',
  MINE_COUNTER: 'mine-counter',
  MOVE_COUNTER: 'move-counter',
  FLAG_COUNTER: 'flag-counter',
  GAME_STATUS: 'game-status',
  TIMER: 'timer',
  MINESWEEPER: 'minesweeper',
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
  time: null,
  timer: '00:00:00',
  options: {
    rows: 10,
    cols: 10,
    mines: 10,
  },
};
