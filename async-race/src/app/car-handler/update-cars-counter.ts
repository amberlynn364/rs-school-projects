import { getTotalCarNumber } from '../garage-handler/garage-api-handlers';

export function updateCarsCounter() {
  const carInGarage = document.querySelector('#cars-in-garage');
  if (carInGarage) {
    getTotalCarNumber().then((number) => (carInGarage.textContent = `Cars in Garage (${number})`));
  }
}

updateCarsCounter();
