import { CarData, WinnersData } from '../../types/types';
import { fetchCarFromServer } from '../garage-handler/garage-api-handlers';
import { getIDFromElement } from '../helpers/get-id-from-element';
import { createWinnerOnServer, fetchAllWinnersFromServer, updateWinnerDataOnServer } from './winners-api-handlers';
import { updateWinnersTableUI } from './update-winners-table';
import { showPopupAndTextWinner } from '../winner-popup-handlers/winner-popup-handlers';

export function addWinnerToServer(car: HTMLElement, time: number): void {
  const getIDFromCar: number = getIDFromElement(car);
  const convertTimeToSeconds = (time / 1000).toFixed(1);
  let winNumber = 1;
  let carNameWinner = null;
  fetchCarFromServer(getIDFromCar).then((carData: CarData) => {
    carNameWinner = carData.name;
    showPopupAndTextWinner(carNameWinner, convertTimeToSeconds);
  });

  fetchAllWinnersFromServer()
    .then((allWinners: WinnersData[]) => {
      allWinners.forEach((winner) => {
        if (winner.id === getIDFromCar) {
          winNumber = winner.wins + 1;
        }
      });
    })
    .then(() =>
      winNumber > 1
        ? updateWinnerDataOnServer({ wins: winNumber, time: convertTimeToSeconds }, getIDFromCar)
        : createWinnerOnServer({ id: getIDFromCar, wins: winNumber, time: convertTimeToSeconds })
    )
    .then(() => updateWinnersTableUI());
}
