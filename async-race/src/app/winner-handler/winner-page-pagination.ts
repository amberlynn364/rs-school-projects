import { PaginationButtons, Urls } from '../../types/types';
import { getTotalItemsFromServer } from '../api-requests/api-requests';
import { disableElement } from '../helpers/disable-element';
import { enableElement } from '../helpers/enable-element';
import { renderWinnersTable } from './render-winners-table';

const firstPageButton: HTMLButtonElement | null = document.querySelector('#first-page-button-winners');
const prevPageButton: HTMLButtonElement | null = document.querySelector('#prev-page-button-winners');
const nextPageButton: HTMLButtonElement | null = document.querySelector('#next-page-button-winners');
const lastPageButton: HTMLButtonElement | null = document.querySelector('#last-page-button-winners');

const LIMIT_WINNERS_ON_PAGE = 10;
const FIRST_PAGE = 1;

export let firstPagePagination = FIRST_PAGE;

firstPageButton!.addEventListener('click', () => handlePaginationButtonClickWinners('first-page-button'));
prevPageButton!.addEventListener('click', () => handlePaginationButtonClickWinners('prev-page-button'));
nextPageButton!.addEventListener('click', () => handlePaginationButtonClickWinners('next-page-button'));
lastPageButton!.addEventListener('click', () => handlePaginationButtonClickWinners('last-page-button'));

export function handlePaginationButtonClickWinners(buttonType: PaginationButtons) {
  switch (buttonType) {
    case 'first-page-button':
      updatePageNumberAndRenderWinners(1);
      break;
    case 'prev-page-button':
      updatePageNumberAndRenderWinners(firstPagePagination - 1);
      break;
    case 'next-page-button':
      updatePageNumberAndRenderWinners(firstPagePagination + 1);
      break;
    case 'last-page-button':
      getTotalItemsFromServer(Urls.winners).then((number) => {
        const lastPage = Math.ceil(number / LIMIT_WINNERS_ON_PAGE);
        updatePageNumberAndRenderWinners(lastPage);
      });
  }
}

function updatePageNumberAndRenderWinners(newPageNumber: number) {
  const pageNumberWinners = document.querySelector('#page-number-winners');
  firstPagePagination = newPageNumber;
  pageNumberWinners!.textContent = `Page #${firstPagePagination}`;
  renderWinnersTable();
  disableWinnersPaginationButtonsWinners();
}

export function disableWinnersPaginationButtonsWinners() {
  if (firstPageButton && prevPageButton && nextPageButton && lastPageButton) {
    getTotalItemsFromServer(Urls.winners).then((number) => {
      const lastPage = Math.ceil(number / LIMIT_WINNERS_ON_PAGE);
      if (firstPagePagination === FIRST_PAGE) {
        disableElement([firstPageButton, prevPageButton]);
      } else {
        enableElement([firstPageButton, prevPageButton]);
      }
      if (firstPagePagination === lastPage) {
        disableElement([nextPageButton, lastPageButton]);
      } else {
        enableElement([nextPageButton, lastPageButton]);
      }
    });
  }
}
