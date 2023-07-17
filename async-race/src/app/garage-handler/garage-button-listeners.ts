import { RemoveOrSelectButtons } from '../../types/types';
import { handleCarButtonClick, handleCarManagerButtonClick } from './garage-button-handlers';

const createCarButton: HTMLButtonElement | null = document.querySelector('#create-button');
const updateCarButton: HTMLButtonElement | null = document.querySelector('#update-button');

const FIRST_PAGE_NUMBER = 1;

export const pageNumber = FIRST_PAGE_NUMBER;

createCarButton!.addEventListener('click', () => handleCarManagerButtonClick('create'));
updateCarButton!.addEventListener('click', () => handleCarManagerButtonClick('update'));

document.addEventListener('click', (event) => {
  const { target } = event;
  if (target instanceof HTMLElement) {
    const isCarButton = target.id.includes('-button');

    if (isCarButton) {
      const buttonType: RemoveOrSelectButtons = target.id.includes('remove') ? 'remove-button' : 'select-button';
      handleCarButtonClick(target, buttonType);
    }
  }
});
