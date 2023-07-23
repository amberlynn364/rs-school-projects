import { createElement } from '../../helpers/create-elements';
import './header.scss';

export const header = createElement({
  tag: 'header',
  classLists: ['header', 'content-wrapper'],
});

const title = createElement({
  tag: 'h1',
  classLists: ['title'],
  textContent: 'Async race',
});

const nav = createElement({
  tag: 'nav',
  classLists: ['nav'],
});

const toGarageButton = createElement({
  tag: 'button',
  classLists: ['nav__button', 'button'],
  id: 'to-garage',
  textContent: 'TO GARAGE',
});

const toWinnersButton = createElement({
  tag: 'button',
  classLists: ['nav__button', 'button'],
  id: 'to-winners',
  textContent: 'TO WINNERS',
});

nav.append(toGarageButton, toWinnersButton);

header.append(title, nav);
document.body.append(header);
