import { Urls } from '../../types/types';
import { getTotalItemsFromServer } from '../api-requests/api-requests';

export function updateWinnersCounter(): void {
  const winnersCounter: HTMLElement | null = document.querySelector('#number-of-winners');
  if (winnersCounter) {
    getTotalItemsFromServer(Urls.winners).then((number) => (winnersCounter.textContent = `Winners (${number})`));
  }
}
