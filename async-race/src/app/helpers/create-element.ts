import { CarOptionsAttributes, ElementAttributes, InputElementAttributes } from '../../types/types';
import { disableElement } from './disable-element';

export function createElement({ tag, classLists, id, textContent }: ElementAttributes): HTMLElement {
  const elem: HTMLElement = document.createElement(tag);

  if (id) {
    elem.setAttribute('id', id.toString());
  }

  if (textContent) {
    elem.textContent = textContent;
  }

  if (classLists.length > 0) {
    elem.classList.add(...classLists);
  }

  return elem;
}

export function createInputElement({ id, classLists, type, placeHolder }: InputElementAttributes): HTMLInputElement {
  const elem: HTMLInputElement = document.createElement('input');

  if (id) {
    elem.setAttribute('id', id.toString());
  }

  if (classLists.length > 0) {
    elem.classList.add(...classLists);
  }
  elem.setAttribute('type', type);

  if (placeHolder) {
    elem.setAttribute('placeholder', placeHolder);
  }

  return elem;
}

export function createCarOptions({
  idTextInput,
  idColorInput,
  idButton,
  wrapperClassList,
  inputPlaceHolder,
  buttonTextContent,
  disabled,
}: CarOptionsAttributes): HTMLDivElement {
  const wrapper = createElement({ tag: 'div', classLists: [wrapperClassList] });
  const nameInput = createInputElement({
    id: idTextInput,
    classLists: ['text-input'],
    type: 'text',
    placeHolder: inputPlaceHolder,
  });
  const colorInput = createInputElement({
    id: idColorInput,
    classLists: [],
    type: 'color',
  });
  const button = createElement({
    tag: 'button',
    classLists: ['button'],
    id: idButton,
    textContent: buttonTextContent,
  });
  wrapper.append(nameInput, colorInput, button);
  const wrapperChild = [...wrapper.children];

  if (disabled) {
    disableElement(wrapperChild as HTMLElement[]);
  }

  return wrapper as HTMLDivElement;
}

export function buttonController(): HTMLElement {
  const buttonWrapper = createElement({
    tag: 'div',
    classLists: ['button-controller'],
  });
  const raceButton = createElement({
    tag: 'button',
    classLists: ['button'],
    id: 'race-button',
    textContent: 'RACE',
  });
  const resetButton = createElement({
    tag: 'button',
    classLists: ['button'],
    id: 'reset-button',
    textContent: 'RESET',
  });
  const generateCarsButton = createElement({
    tag: 'button',
    classLists: ['button'],
    id: 'generate-cars-button',
    textContent: 'GENERATE CARS',
  });
  buttonWrapper.append(raceButton, resetButton, generateCarsButton);
  return buttonWrapper;
}

export function createPaginationView(): HTMLElement {
  const pagination = createElement({
    tag: 'div',
    classLists: ['pagination'],
  });
  const firstPageButton = createElement({
    tag: 'button',
    classLists: ['button', 'pagination-button'],
    id: 'first-page-button',
    textContent: 'FIRST PAGE',
  });
  const prevPageButton = createElement({
    tag: 'button',
    classLists: ['button', 'pagination-button'],
    id: 'prev-page-button',
    textContent: 'PREV PAGE',
  });
  const nextPageButton = createElement({
    tag: 'button',
    classLists: ['button', 'pagination-button'],
    id: 'next-page-button',
    textContent: 'NEXT PAGE',
  });
  const lastPageButton = createElement({
    tag: 'button',
    classLists: ['button', 'pagination-button'],
    id: 'last-page-button',
    textContent: 'LAST PAGE',
  });

  disableElement([firstPageButton, prevPageButton]);
  pagination.append(firstPageButton, prevPageButton, nextPageButton, lastPageButton);
  return pagination;
}
