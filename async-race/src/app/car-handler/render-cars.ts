import { Car } from '../../types/types';
import { fetchCarsFromServer } from '../garage-handler/garage-api-handlers';
import { pageNumber } from '../garage-handler/garage-button-listeners';
import { createCarModule } from '../view/car-module/car-module';

export function renderCars(): void {
  const carContainer = document.querySelector('#car-container');

  fetchCarsFromServer(pageNumber).then((arrWithCars: Car[]): void => {
    if (carContainer) {
      carContainer.innerHTML = '';
      arrWithCars.forEach((car) => carContainer.append(createCarModule(car.name, car.color, car.id)));
    }
  });
}

renderCars();
