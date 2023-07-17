import { Car, CreateOrUpdate, RemoveOrSelectButtons } from '../../types/types';
import { renderCars } from '../car-handler/render-cars';
import { enableElement } from '../helpers/enable-element';
import { getCarIDFromButton } from '../helpers/get-car-id-from-button';
import { handleShakeAnimation } from '../helpers/handle-shake-animation';
import {
  createCarOnServer,
  deleteCarFromServer,
  fetchCarFromServer,
  updateCarDataOnServer,
} from './garage-api-handlers';

const createTextInput: HTMLInputElement | null = document.querySelector('#create-text-input');
const createColorInput: HTMLInputElement | null = document.querySelector('#create-color-input');

const updateTextInput: HTMLInputElement | null = document.querySelector('#update-text-input');
const updateColorInput: HTMLInputElement | null = document.querySelector('#update-color-input');

let carID: number;

export function handleCarManagerButtonClick(mode: CreateOrUpdate) {
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
        createCarOnServer({ name: carName, color: carColor }).then(() => renderCars());
        createTextInput!.value = '';
      } else {
        updateCarDataOnServer({ name: carName, color: carColor }, carID).then(() => renderCars());
      }
    }
  }
}

export function handleCarButtonClick(target: HTMLElement, buttonType: RemoveOrSelectButtons) {
  if (buttonType === 'remove-button') {
    carID = getCarIDFromButton(target);
    deleteCarFromServer(carID).then(() => renderCars());
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
