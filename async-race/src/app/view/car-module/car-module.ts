/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import './car-module.scss';

import { createElement } from '../../helpers/create-elements';
import createCarView from './create-car-view';
import { disableElement } from '../../helpers/disable-element';

export function createCarModule(carTitle: string, color: string, id: number): HTMLElement {
  const carModule = createElement({
    tag: 'div',
    classLists: ['car-module'],
  });

  carModule.append(createCarSettings(carTitle, id), createCarHandler(color, id));
  return carModule;
}

function createCarSettings(carTitle: string, id: number): HTMLElement {
  const carSettings = createElement({
    tag: 'div',
    classLists: ['car-settings'],
  });

  const buttonSelect = createElement({
    tag: 'button',
    classLists: ['button', 'cars-button'],
    id: `select-button-id-${id}`,
    textContent: 'SELECT',
  });

  const buttonRemove = createElement({
    tag: 'button',
    classLists: ['button', 'cars-button'],
    id: `remove-button-id-${id}`,
    textContent: 'REMOVE',
  });

  const carName = createElement({
    tag: 'h3',
    classLists: ['car-title'],
    textContent: carTitle,
  });

  carSettings.append(buttonSelect, buttonRemove, carName);
  return carSettings;
}

function createCarHandler(color: string, id: number): HTMLElement {
  const carHandler = createElement({
    tag: 'div',
    classLists: ['car-handler'],
  });

  const buttonStart = createElement({
    tag: 'button',
    classLists: ['button', 'cars-button', 'button-small'],
    id: `start-button-id-${id}`,
    textContent: 'START',
  });

  const buttonStop = createElement({
    tag: 'button',
    classLists: ['button', 'cars-button', 'button-small'],
    id: `stop-button-id-${id}`,
    textContent: 'STOP',
  });

  const carView = createElement({
    tag: 'div',
    classLists: ['car-view'],
    id: `car-id-${id}`,
  });
  carView.innerHTML = createCarView(color);

  const finishFlag = createElement({
    tag: 'div',
    classLists: ['finish-flag'],
    id: `flag-id-${id}`,
  });

  disableElement(buttonStop);
  carHandler.append(buttonStart, buttonStop, carView, finishFlag);

  return carHandler;
}
