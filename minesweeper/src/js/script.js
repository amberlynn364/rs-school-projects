import '../index.html';
import '../sass/main.scss';
import createDomElements from './createDomElements';
import { minesweeperData } from './minesweeper/data';
import { createBoard, openCell } from './minesweeper/minesweeper';

createDomElements();
createBoard();
// openCell();

document
  .getElementById('minesweeper')
  .addEventListener('click', (e) => {
    const { target } = e;

    if (target.classList.contains('cell')) {
      const cell = minesweeperData.grid[target.getAttribute('data-ypos')][target.getAttribute('data-xpos')];

      if (!cell.isRevealed && minesweeperData.playing) {
        minesweeperData.movesMade++;
        document.getElementById('move-counter').textContent = minesweeperData.movesMade;
        openCell(cell);
        // save();
      }
    }
  });
console.log('2', minesweeperData.grid);
