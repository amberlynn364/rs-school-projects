import { minesweeperData } from './data';

export default function nearbyMinesCells(row, col) {
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
