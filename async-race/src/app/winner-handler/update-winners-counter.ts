import { getTotalWinnersNumber } from './winners-api-handlers';

export function updateWinnersCounter(): void {
  const winnersCounter: HTMLElement | null = document.querySelector('#number-of-winners');
  if (winnersCounter) {
    getTotalWinnersNumber().then((number) => (winnersCounter.textContent = `Winners (${number})`));
  }
}
