import { renderCars } from '../car-handler/render-cars';
import { updateCarsCounter } from '../car-handler/update-cars-counter';
import { disableGaragePaginationButtons } from '../garage-handler/garage-button-handlers';
import { renderWinnersTable } from '../winner-handler/render-winners-table';
import { updateWinnersCounter } from '../winner-handler/update-winners-counter';
import { disableWinnersPaginationButtonsWinners } from '../winner-handler/winner-page-pagination';

export function updateView(typeView: 'garage' | 'winners'): void {
  if (typeView === 'garage') {
    renderCars();
    updateCarsCounter();
    disableGaragePaginationButtons();
  }

  if (typeView === 'winners') {
    renderWinnersTable();
    updateWinnersCounter();
    disableWinnersPaginationButtonsWinners();
  }
}
