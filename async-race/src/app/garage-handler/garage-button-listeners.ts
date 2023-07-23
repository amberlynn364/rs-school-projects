import { CarData, ItemLimit, RemoveOrSelectButtons, Urls } from '../../types/types';
import { fetchDataFromServerWithLimit } from '../api-requests/api-requests';
import { stopCarAnimation } from '../car-handler/car-animation';
import { disableElement } from '../helpers/disable-element';
import { enableElement } from '../helpers/enable-element';
import { getIDFromElement } from '../helpers/get-id-from-element';
import { hidePopup } from '../winner-popup-handlers/winner-popup-handlers';
import {
  handleCarButtonClick,
  handleCarManagerButtonClick,
  handleGenerateCarsButtonClick,
  handlePaginationButtonClick,
  pageNumber,
  resetRaceHandler,
  startEngineAndMoveCar,
} from './garage-button-handlers';
import { stopCarEngine } from './garage-car-engine-api-handler';

const createCarButton: HTMLButtonElement | null = document.querySelector('#create-button');
const updateCarButton: HTMLButtonElement | null = document.querySelector('#update-button');
const generateCarsButton: HTMLButtonElement | null = document.querySelector('#generate-cars-button');
const raceButton: HTMLButtonElement | null = document.querySelector('#race-button');
const resetRaceButton: HTMLButtonElement | null = document.querySelector('#reset-button');
const firstPageButton: HTMLButtonElement | null = document.querySelector('#first-page-button-garage');
const prevPageButton: HTMLButtonElement | null = document.querySelector('#prev-page-button-garage');
const nextPageButton: HTMLButtonElement | null = document.querySelector('#next-page-button-garage');
const lastPageButton: HTMLButtonElement | null = document.querySelector('#last-page-button-garage');
const closePopupAndResetRace: HTMLButtonElement | null = document.querySelector('#close-and-reset-button');

createCarButton!.addEventListener('click', () => handleCarManagerButtonClick('create'));
updateCarButton!.addEventListener('click', () => handleCarManagerButtonClick('update'));
generateCarsButton!.addEventListener('click', () => handleGenerateCarsButtonClick());

firstPageButton!.addEventListener('click', () => handlePaginationButtonClick('first-page-button'));
prevPageButton!.addEventListener('click', () => handlePaginationButtonClick('prev-page-button'));
nextPageButton!.addEventListener('click', () => handlePaginationButtonClick('next-page-button'));
lastPageButton!.addEventListener('click', () => handlePaginationButtonClick('last-page-button'));

raceButton!.addEventListener('click', () => {
  const startButtons = document.querySelectorAll('[id^="start-button-id-"]');
  const stopButtons = document.querySelectorAll('[id^="stop-button-id-"]');
  disableElement(raceButton!);
  disableElement(Array.from(startButtons) as HTMLElement[]);
  enableElement(Array.from(stopButtons) as HTMLElement[]);
  enableElement(resetRaceButton!);
  fetchDataFromServerWithLimit<CarData[]>(Urls.garage, pageNumber, ItemLimit.carsLimit).then((cars) => {
    cars.forEach((car) => startEngineAndMoveCar(car.id));
  });
});

resetRaceButton!.addEventListener('click', () => {
  disableElement(resetRaceButton!);
  resetRaceHandler();
  enableElement(raceButton!);
});
closePopupAndResetRace!.addEventListener('click', () => {
  hidePopup();
  disableElement(resetRaceButton!);
  resetRaceHandler();
  enableElement(raceButton!);
});

document.addEventListener('click', (event) => {
  const { target } = event;
  if (target instanceof HTMLElement) {
    if (target.id.includes('remove-button') || target.id.includes('select-button')) {
      const buttonType: RemoveOrSelectButtons = target.id.includes('remove') ? 'remove-button' : 'select-button';
      handleCarButtonClick(target, buttonType);
    }

    if (target.id.includes('start-button')) {
      const carID = getIDFromElement(target);
      const stopEngineButton: HTMLElement | null = document.querySelector(`#stop-button-id-${carID}`);
      startEngineAndMoveCar(carID);
      enableElement(stopEngineButton!);
      disableElement(target);
    }

    if (target.id.includes('stop-button')) {
      const carID = getIDFromElement(target);
      const car: HTMLElement | null = document.querySelector(`#car-id-${carID}`);
      const startEngineButton: HTMLElement | null = document.querySelector(`#start-button-id-${carID}`);
      target.textContent = 'Stopped';
      stopCarEngine(carID).then(() => {
        stopCarAnimation(carID);
        car!.style.transform = 'translateX(0px)';
        enableElement(startEngineButton!);
        target.textContent = 'STOP';
        disableElement(target);
      });
    }
  }
});
