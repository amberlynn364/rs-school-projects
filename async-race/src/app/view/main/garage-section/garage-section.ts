import './garage-section.scss';
import {
  buttonController,
  createCarOptions,
  createElement,
  createPaginationView,
} from '../../../helpers/create-elements';

export const garageSection = createElement({
  tag: 'section',
  classLists: ['garage'],
  id: 'garage-section',
});

const carManager = createElement({
  tag: 'div',
  classLists: ['car-manager'],
});
const createCarWrapper = createCarOptions({
  idTextInput: 'create-text-input',
  idColorInput: 'create-color-input',
  idButton: 'create-button',
  wrapperClassList: 'create-car-wrapper',
  inputPlaceHolder: 'Enter the name of the car',
  buttonTextContent: 'CREATE CAR',
});
const updateCarWrapper = createCarOptions({
  idTextInput: 'update-text-input',
  idColorInput: 'update-color-input',
  idButton: 'update-button',
  wrapperClassList: 'update-car-wrapper',
  inputPlaceHolder: 'Enter the new name of the car',
  buttonTextContent: 'UPDATE CAR',
  disabled: true,
});
const buttonControllerWrapper = buttonController();
carManager.append(createCarWrapper, updateCarWrapper, buttonControllerWrapper);

const garageContainer = createElement({
  tag: 'div',
  classLists: ['garage-container'],
});

const carsInGarage = createElement({
  tag: 'h2',
  classLists: ['cars-in-garage'],
  id: 'cars-in-garage',
  textContent: 'Cars in Garage (4)',
});

const pageNumber = createElement({
  tag: 'h3',
  classLists: ['page-number'],
  id: 'page-number',
  textContent: 'Page #1',
});

const carContainer = createElement({
  tag: 'div',
  classLists: ['car-container'],
  id: 'car-container',
});
garageContainer.append(carsInGarage, pageNumber);

const pagination = createPaginationView('garage');

garageSection.append(carManager, garageContainer, carContainer, pagination);
