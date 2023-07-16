import { createElement } from '../../helpers/create-element';
import './header.scss';

const header = createElement({
  tag: 'header',
  classLists: ['header'],
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

const toWinnersButton = createElement({
  tag: 'button',
  classLists: ['nav__button', 'button'],
  textContent: 'TO WINNERS',
});

const toGarageButton = createElement({
  tag: 'button',
  classLists: ['nav__button', 'button'],
  textContent: 'TO GARAGE',
});
nav.append(toGarageButton, toWinnersButton);


header.append(title, nav);
document.body.append(header);

