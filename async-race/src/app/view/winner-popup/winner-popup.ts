import './winner-popup.scss';

import { createElement } from '../../helpers/create-elements';

export const winnerPopup = createElement({
  tag: 'div',
  classLists: ['winner-popup', 'hide'],
  id: 'winner-popup',
});

const winnerMessage = createElement({
  tag: 'h2',
  classLists: ['winner-message'],
  id: 'winner-message',
  textContent: 'Winner car - VAZ, time - 1.9s',
});

const closeAndResetRaceButton = createElement({
  tag: 'button',
  classLists: ['button'],
  id: 'close-and-reset-button',
  textContent: 'CLOSE POPUP AND RESET RACE BUTTON',
});

const closePopupButton = createElement({
  tag: 'button',
  classLists: ['close-popup', 'button'],
  id: 'close-popup-button',
  textContent: '✖',
});

export const popupOverlay = createElement({
  tag: 'div',
  classLists: ['popup-overlay'],
  id: 'popup-overlay',
});

winnerPopup.append(winnerMessage, closeAndResetRaceButton, closePopupButton);
document.body.append(winnerPopup, popupOverlay);
