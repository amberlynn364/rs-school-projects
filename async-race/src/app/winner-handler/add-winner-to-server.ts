import { CarData, WinnersData, Urls } from '../../types/types';
import { getIDFromElement } from '../helpers/get-id-from-element';
import { showPopupAndTextWinner } from '../winner-popup-handlers/winner-popup-handlers';
import {
  createItemOnServer,
  fetchAllItemsFromServer,
  fetchItemFromServer,
  updateItemOnServer,
} from '../api-requests/api-requests';
import { updateView } from '../helpers/update-view';

export function addWinnerToServer(car: HTMLElement, time: number): void {
  const getIDFromCar: number = getIDFromElement(car);
  let convertTimeToSeconds = (time / 1000).toFixed(1);
  let winNumber = 1;
  let carNameWinner = null;
  fetchItemFromServer<CarData>(Urls.garage, getIDFromCar).then((carData) => {
    carNameWinner = carData.name;
    showPopupAndTextWinner(carNameWinner, convertTimeToSeconds);
  });

  fetchAllItemsFromServer<WinnersData[]>(Urls.winners)
    .then((allWinners) => {
      allWinners.forEach((winner) => {
        if (winner.id === getIDFromCar) {
          winNumber = winner.wins + 1;
          convertTimeToSeconds = winner.time > convertTimeToSeconds ? convertTimeToSeconds : winner.time;
        }
      });
    })
    .then(() => {
      if (winNumber > 1) {
        updateItemOnServer(Urls.winners, { wins: winNumber, time: convertTimeToSeconds }, getIDFromCar).then(() => {
          updateView('winners');
        });
      } else {
        createItemOnServer(Urls.winners, { id: getIDFromCar, wins: winNumber, time: convertTimeToSeconds }).then(() => {
          updateView('winners');
        });
      }
    });
}
