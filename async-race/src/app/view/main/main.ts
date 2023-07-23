import { createElement } from '../../helpers/create-elements';
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
});

document.body.append(main);
