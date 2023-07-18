import { Car, CreateOrUpdate, PaginationButtons, RemoveOrSelectButtons } from '../../types/types';
import { renderCars } from '../car-handler/render-cars';
import { updateCarsCounter } from '../car-handler/update-cars-counter';
import { disableElement } from '../helpers/disable-element';
import { enableElement } from '../helpers/enable-element';
import { getCarIDFromButton } from '../helpers/get-car-id-from-button';
import { getRandomCarName } from '../helpers/get-random-car-name';
import { getRandomColor } from '../helpers/get-random-color';
import { handleShakeAnimation } from '../helpers/handle-shake-animation';
import {
  createCarOnServer,
  deleteCarFromServer,
  fetchCarFromServer,
  getTotalCarNumber,
  updateCarDataOnServer,
} from './garage-api-handlers';

const createTextInput: HTMLInputElement | null = document.querySelector('#create-text-input');
const createColorInput: HTMLInputElement | null = document.querySelector('#create-color-input');
const updateTextInput: HTMLInputElement | null = document.querySelector('#update-text-input');
const updateColorInput: HTMLInputElement | null = document.querySelector('#update-color-input');

const firstPageButton: HTMLButtonElement | null = document.querySelector('#first-page-button');
const prevPageButton: HTMLButtonElement | null = document.querySelector('#prev-page-button');
const nextPageButton: HTMLButtonElement | null = document.querySelector('#next-page-button');
const lastPageButton: HTMLButtonElement | null = document.querySelector('#last-page-button');

const FIRST_PAGE_NUMBER = 1;
const LIMIT_CARS_ON_PAGE = 7;
export let pageNumber = FIRST_PAGE_NUMBER;
let carID: number;

export function handleCarManagerButtonClick(mode: CreateOrUpdate): void {
  const textInput = mode === 'create' ? createTextInput : updateTextInput;
  const colorInput = mode === 'create' ? createColorInput : updateColorInput;
  const wrapperSelector = mode === 'create' ? '.create-car-wrapper' : '.update-car-wrapper';

  if (textInput && colorInput) {
    const carName = textInput.value;
    const carColor = colorInput.value;

    if (!carName) {
      handleShakeAnimation(wrapperSelector);
    } else {
      if (mode === 'create') {
        createCarOnServer({ name: carName, color: carColor }).then(() => {
          renderCars();
          updateCarsCounter();
          disablePaginationButtons();
        });
        createTextInput!.value = '';
      } else {
        updateCarDataOnServer({ name: carName, color: carColor }, carID)
          .then(() => renderCars())
          .then(() => disableElement([...document.querySelector(wrapperSelector)!.children] as HTMLElement[]));
      }
    }
  }
}

export function handleGenerateCarsButtonClick() {
  for (let i = 0; i < 100; i++) {
    const carName = getRandomCarName();
    const carColor = getRandomColor();

    createCarOnServer({ name: carName, color: carColor });
  }

  renderCars();
  updateCarsCounter();
}

export function handleCarButtonClick(target: HTMLElement, buttonType: RemoveOrSelectButtons): void {
  if (buttonType === 'remove-button') {
    carID = getCarIDFromButton(target);
    deleteCarFromServer(carID).then(() => {
      const carContainer = document.querySelector('.car-container');
      if (carContainer!.children.length === 1) {
        pageNumber -= 1;
        renderCars();
        updateCarsCounter();
        disablePaginationButtons();
      } else {
        renderCars();
        updateCarsCounter();
        disablePaginationButtons();
      }
    });
  }

  if (buttonType === 'select-button') {
    carID = getCarIDFromButton(target);
    const updateCarWrapper = document.querySelector('.update-car-wrapper');
    enableElement([...updateCarWrapper!.children] as HTMLElement[]);
    fetchCarFromServer(carID).then((carData: Car) => {
      updateTextInput!.value = carData.name;
      updateColorInput!.value = carData.color;
    });
  }
}

export function handlePaginationButtonClick(buttonType: PaginationButtons) {
  switch (buttonType) {
    case 'first-page-button':
      pageNumber = 1;
      renderCars();
      disablePaginationButtons();
      break;
    case 'prev-page-button':
      pageNumber -= 1;
      renderCars();
      disablePaginationButtons();
      break;
    case 'next-page-button':
      pageNumber += 1;
      renderCars();
      disablePaginationButtons();
      break;
    case 'last-page-button':
      getTotalCarNumber().then((number) => {
        const lastPage = Math.round(number / LIMIT_CARS_ON_PAGE);
        pageNumber = lastPage;
        renderCars();
        disablePaginationButtons();
      });
  }
}

function disablePaginationButtons() {
  if (firstPageButton && prevPageButton && nextPageButton && lastPageButton) {
    getTotalCarNumber().then((number) => {
      const lastPage = Math.ceil(number / LIMIT_CARS_ON_PAGE);
      if (pageNumber === FIRST_PAGE_NUMBER) {
        disableElement([firstPageButton, prevPageButton]);
      } else {
        enableElement([firstPageButton, prevPageButton]);
      }
      if (pageNumber === lastPage) {
        disableElement([nextPageButton, lastPageButton]);
      } else {
        enableElement([nextPageButton, lastPageButton]);
      }
    });
  }
}

disablePaginationButtons();
