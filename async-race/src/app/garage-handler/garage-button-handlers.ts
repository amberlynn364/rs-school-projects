import {
  Car,
  CarData,
  CreateOrUpdate,
  EngineResource,
  ItemLimit,
  PaginationButtons,
  RemoveOrSelectButtons,
  Urls,
} from '../../types/types';
import { startCarAnimation, stopCarAnimation } from '../car-handler/car-animation';
import { renderCars } from '../car-handler/render-cars';
import { disableElement } from '../helpers/disable-element';
import { enableElement } from '../helpers/enable-element';
import { getIDFromElement } from '../helpers/get-id-from-element';
import { getDistanceBetweenTwoElements } from '../helpers/get-element-positions';
import { getRandomCarName } from '../helpers/get-random-car-name';
import { getRandomColor } from '../helpers/get-random-color';
import { handleShakeAnimation } from '../helpers/handle-shake-animation';
import { startCarEngine, stopCarEngine, switchCarEngineToDriveMode } from './garage-car-engine-api-handler';
import {
  createItemOnServer,
  deleteItemOnServer,
  fetchDataFromServerWithLimit,
  fetchItemFromServer,
  getTotalItemsFromServer,
  updateItemOnServer,
} from '../api-requests/api-requests';
import { updateView } from '../helpers/update-view';

const createTextInput: HTMLInputElement | null = document.querySelector('#create-text-input');
const createColorInput: HTMLInputElement | null = document.querySelector('#create-color-input');
const updateTextInput: HTMLInputElement | null = document.querySelector('#update-text-input');
const updateColorInput: HTMLInputElement | null = document.querySelector('#update-color-input');

const firstPageButton: HTMLButtonElement | null = document.querySelector('#first-page-button-garage');
const prevPageButton: HTMLButtonElement | null = document.querySelector('#prev-page-button-garage');
const nextPageButton: HTMLButtonElement | null = document.querySelector('#next-page-button-garage');
const lastPageButton: HTMLButtonElement | null = document.querySelector('#last-page-button-garage');

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
        createItemOnServer<Car>(Urls.garage, { name: carName, color: carColor }).then(() => {
          updateView('garage');
        });
        createTextInput!.value = '';
      } else {
        updateItemOnServer<Car>(Urls.garage, { name: carName, color: carColor }, carID)
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

    createItemOnServer<Car>(Urls.garage, { name: carName, color: carColor });
  }

  updateView('garage');
}

export function handleCarButtonClick(target: HTMLElement, buttonType: RemoveOrSelectButtons): void {
  if (buttonType === 'remove-button') {
    carID = getIDFromElement(target);
    deleteItemOnServer(Urls.garage, carID).then(() => {
      const carContainer = document.querySelector('.car-container');
      if (carContainer!.children.length === 1) {
        pageNumber -= 1;
        updateView('garage');
      } else {
        updateView('garage');
      }
    });

    deleteItemOnServer(Urls.winners, carID).then(() => {
      updateView('winners');
    });
  }

  if (buttonType === 'select-button') {
    carID = getIDFromElement(target);
    const updateCarWrapper = document.querySelector('.update-car-wrapper');
    enableElement([...updateCarWrapper!.children] as HTMLElement[]);
    fetchItemFromServer<Car>(Urls.garage, carID).then((carData) => {
      updateTextInput!.value = carData.name;
      updateColorInput!.value = carData.color;
    });
  }
}

export function handlePaginationButtonClick(buttonType: PaginationButtons) {
  switch (buttonType) {
    case 'first-page-button':
      updatePageNumberAndRenderCars(1);
      break;
    case 'prev-page-button':
      updatePageNumberAndRenderCars(pageNumber - 1);
      break;
    case 'next-page-button':
      updatePageNumberAndRenderCars(pageNumber + 1);
      break;
    case 'last-page-button':
      getTotalItemsFromServer(Urls.garage).then((number) => {
        const lastPage = Math.ceil(number / LIMIT_CARS_ON_PAGE);
        updatePageNumberAndRenderCars(lastPage);
      });
  }
}

function updatePageNumberAndRenderCars(newPageNumber: number) {
  const pageNumberElement: HTMLElement | null = document.querySelector('#page-number');
  pageNumber = newPageNumber;
  pageNumberElement!.textContent = `Page #${pageNumber}`;
  renderCars();
  disableGaragePaginationButtons();
}

export function disableGaragePaginationButtons() {
  if (firstPageButton && prevPageButton && nextPageButton && lastPageButton) {
    getTotalItemsFromServer(Urls.garage).then((number) => {
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

export function startEngineAndMoveCar(carId: number): void {
  const carElement: HTMLElement | null = document.querySelector(`#car-id-${carId}`);
  const finishFlag: HTMLElement | null = document.querySelector(`#flag-id-${carId}`);
  startCarEngine(carId).then((resourceEngine: EngineResource) => {
    if (carElement && finishFlag) {
      const carVehicleSpeed: number = resourceEngine.velocity;
      const carDistanceTraveled: number = resourceEngine.distance;
      const travelTime: number = carDistanceTraveled / carVehicleSpeed;

      const extraDistance = 10;
      const distanceAnimation = Math.floor(getDistanceBetweenTwoElements(carElement, finishFlag)) + extraDistance;

      startCarAnimation(carElement, distanceAnimation, travelTime, carId);

      switchCarEngineToDriveMode(carId).then((drive) => {
        if (!drive.success) {
          stopCarAnimation(carId);
        }
      });
    }
  });
}

export function resetRaceHandler() {
  const startButtons = document.querySelectorAll('[id^="start-button-id-"]');
  const stopButtons = document.querySelectorAll('[id^="stop-button-id-"]');
  disableElement(Array.from(stopButtons) as HTMLElement[]);
  fetchDataFromServerWithLimit<CarData[]>(Urls.garage, pageNumber, ItemLimit.carsLimit)
    .then((cars) => {
      cars.forEach((car) =>
        stopCarEngine(car.id).then(() => {
          const vehicle: HTMLElement | null = document.querySelector(`#car-id-${car!.id}`);
          vehicle!.style.transform = 'translateX(0px)';
          stopCarAnimation(car.id);
        })
      );
    })
    .then(() => enableElement(Array.from(startButtons) as HTMLElement[]));
}
