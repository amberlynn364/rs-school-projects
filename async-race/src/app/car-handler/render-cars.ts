import { Car } from '../../types/types';
import { fetchCarsFromServer, getTotalCarNumber } from '../garage-handler/garage-api-handlers';
import { pageNumber } from '../garage-handler/garage-button-handlers';
import { createCarModule } from '../view/car-module/car-module';

export function renderCars(): void {
  const carContainer = document.querySelector('#car-container');
  fetchCarsFromServer(pageNumber).then((arrWithCars: Car[]): void => {
    if (carContainer) {
      carContainer.innerHTML = '';
      arrWithCars.forEach((car) => {
        if (car.name === 'Mersedes') {
          car.name = 'Mercedes';
        }
        carContainer.append(createCarModule(car.name, car.color, car.id));
      });
    }
  });
}

renderCars();
