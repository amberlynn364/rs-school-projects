import { Urls } from '../../types/types';
import { getTotalItemsFromServer } from '../api-requests/api-requests';

export function updateCarsCounter() {
  const carInGarage = document.querySelector('#cars-in-garage');
  if (carInGarage) {
    getTotalItemsFromServer(Urls.garage).then((number) => (carInGarage.textContent = `Cars in Garage (${number})`));
  }
}
