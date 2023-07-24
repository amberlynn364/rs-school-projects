import { createElement } from '../../helpers/create-elements';
import { sortTable } from '../../sort-table/sort-table';
import { garageSection } from './garage-section/garage-section';
import './main.scss';
import { winnerSection } from './winner-section/winner-section';

export const main = createElement({
  tag: 'main',
  classLists: ['main', 'content-wrapper'],
});

main.append(garageSection, winnerSection);

const toGarageButton = document.querySelector('#to-garage');
const toWinnersButton = document.querySelector('#to-winners');

let ascendingWins = true;
let ascendingTime = true;

document.addEventListener('click', (event) => {
  const { target } = event;

  if (target === toGarageButton) {
    winnerSection.classList.add('hide');
    garageSection!.classList.remove('hide');
  }

  if (target === toWinnersButton) {
    winnerSection.classList.remove('hide');
    garageSection!.classList.add('hide');
  }
  if (target instanceof HTMLTableCellElement && target.textContent === 'Number of Wins') {
    const cellIndex = parseInt(target.getAttribute('data-column-index') as string);
    sortTable(cellIndex, ascendingWins);
    ascendingWins = !ascendingWins;
  }

  if (target instanceof HTMLTableCellElement && target.textContent === 'Best time (Seconds)') {
    const cellIndex = parseInt(target.getAttribute('data-column-index') as string);
    sortTable(cellIndex, ascendingTime);
    ascendingTime = !ascendingTime;
  }
});

document.body.append(main);
