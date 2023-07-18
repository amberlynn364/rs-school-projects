import { RemoveOrSelectButtons } from '../../types/types';
import {
  handleCarButtonClick,
  handleCarManagerButtonClick,
  handleGenerateCarsButtonClick,
  handlePaginationButtonClick,
} from './garage-button-handlers';

const createCarButton: HTMLButtonElement | null = document.querySelector('#create-button');
const updateCarButton: HTMLButtonElement | null = document.querySelector('#update-button');
const generateCarsButton: HTMLButtonElement | null = document.querySelector('#generate-cars-button');
const firstPageButton: HTMLButtonElement | null = document.querySelector('#first-page-button');
const prevPageButton: HTMLButtonElement | null = document.querySelector('#prev-page-button');
const nextPageButton: HTMLButtonElement | null = document.querySelector('#next-page-button');
const lastPageButton: HTMLButtonElement | null = document.querySelector('#last-page-button');

createCarButton!.addEventListener('click', () => handleCarManagerButtonClick('create'));
updateCarButton!.addEventListener('click', () => handleCarManagerButtonClick('update'));
generateCarsButton!.addEventListener('click', () => handleGenerateCarsButtonClick());

firstPageButton!.addEventListener('click', () => handlePaginationButtonClick('first-page-button'));
prevPageButton!.addEventListener('click', () => handlePaginationButtonClick('prev-page-button'));
nextPageButton!.addEventListener('click', () => handlePaginationButtonClick('next-page-button'));
lastPageButton!.addEventListener('click', () => handlePaginationButtonClick('last-page-button'));

document.addEventListener('click', (event) => {
  const { target } = event;
  if (target instanceof HTMLElement) {
    if (target.id.includes('remove-button') || target.id.includes('select-button')) {
      const buttonType: RemoveOrSelectButtons = target.id.includes('remove') ? 'remove-button' : 'select-button';
      handleCarButtonClick(target, buttonType);
    }
  }
});
