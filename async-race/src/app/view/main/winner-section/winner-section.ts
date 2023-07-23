import { createElement, createPaginationView, createTable } from '../../../helpers/create-elements';
import './winner-section.scss';

export const winnerSection = createElement({
  tag: 'section',
  classLists: ['winner', 'hide'],
  id: 'winner-section',
});

const numbersOfWinners = createElement({
  tag: 'h2',
  classLists: ['number-of-winners'],
  id: 'number-of-winners',
  textContent: 'Winners (0)',
});

const pageNumber = createElement({
  tag: 'h3',
  classLists: ['page-number'],
  id: 'page-number-winners',
  textContent: 'Page #1',
});
const columns = 5;
const winnersTable = createTable(columns);

const newColumnNames = ['№', 'Car Image', 'Car Name', 'Number of Wins', 'Best time (Seconds)'];
const headerCells = winnersTable.querySelectorAll('th');
headerCells.forEach((cell, index) => {
  cell.textContent = newColumnNames[index];
});

const pagination = createPaginationView('winners');
const tableWrapper = createElement({
  tag: 'div',
  classLists: ['table-wrapper'],
  id: 'table-wrapper',
});
tableWrapper.append(winnersTable);

winnerSection.append(numbersOfWinners, pageNumber, tableWrapper, pagination);
