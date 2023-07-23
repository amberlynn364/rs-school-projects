import { PageType } from '../../types/types';

export function changeView(page: PageType): void {
  const winnerSection: HTMLElement | null = document.querySelector('#winner-section');
  const garageSection: HTMLElement | null = document.querySelector('#garage-section');
  if (winnerSection && garageSection) {
    if (page === 'garage') {
      winnerSection.classList.add('hide');
      garageSection.classList.remove('hide');
    }

    if (page === 'winners') {
      winnerSection.classList.remove('hide');
      garageSection.classList.add('hide');
    }
  }
}
