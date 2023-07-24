import { CarOptionsAttributes, ElementAttributes, InputElementAttributes } from '../../types/types';
import createCarView from '../view/car-module/create-car-view';
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
  disableElement(resetButton);
  buttonWrapper.append(raceButton, resetButton, generateCarsButton);
  return buttonWrapper;
}

export function createPaginationView(page: string): HTMLElement {
  const pagination = createElement({
    tag: 'div',
    classLists: ['pagination', 'content-wrapper'],
  });
  const firstPageButton = createElement({
    tag: 'button',
    classLists: ['button', 'pagination-button'],
    id: `first-page-button-${page}`,
    textContent: 'FIRST PAGE',
  });
  const prevPageButton = createElement({
    tag: 'button',
    classLists: ['button', 'pagination-button'],
    id: `prev-page-button-${page}`,
    textContent: 'PREV PAGE',
  });
  const nextPageButton = createElement({
    tag: 'button',
    classLists: ['button', 'pagination-button'],
    id: `next-page-button-${page}`,
    textContent: 'NEXT PAGE',
  });
  const lastPageButton = createElement({
    tag: 'button',
    classLists: ['button', 'pagination-button'],
    id: `last-page-button-${page}`,
    textContent: 'LAST PAGE',
  });

  disableElement([firstPageButton, prevPageButton]);
  pagination.append(firstPageButton, prevPageButton, nextPageButton, lastPageButton);
  return pagination;
}

export function createTable(columns: number): HTMLTableElement {
  const table: HTMLTableElement | null = createElement({
    tag: 'table',
    classLists: ['table'],
    id: 'winners-table',
  }) as HTMLTableElement;

  const headerRow = document.createElement('thead');
  for (let j = 0; j < columns; j++) {
    const headerCell = document.createElement('th');
    headerCell.setAttribute('data-column-index', `${j}`);
    headerCell.textContent = `Column ${j + 1}`;
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  return table;
}

export function addRowToTable(
  tableElement: HTMLTableElement,
  rowNumber: number,
  carImage: string,
  carName: string,
  numberOfWins: number,
  bestTime: string
): void {
  const table: HTMLTableElement | null = tableElement;
  const newRow = table!.insertRow(-1);

  const cellRowNumber = newRow.insertCell(0);
  cellRowNumber.innerText = `${rowNumber}`;

  const cellCarImage = newRow.insertCell(1);
  cellCarImage.innerHTML = createCarView(carImage);

  const cellCarName = newRow.insertCell(2);
  cellCarName.innerText = carName;

  const cellNumberOfWins = newRow.insertCell(3);
  cellNumberOfWins.innerText = `${numberOfWins}`;

  const celLBestTime = newRow.insertCell(4);
  celLBestTime.innerText = bestTime;
}
