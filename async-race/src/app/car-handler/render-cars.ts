import { CarData, ItemLimit, Urls } from '../../types/types';
import { fetchDataFromServerWithLimit } from '../api-requests/api-requests';
import { pageNumber } from '../garage-handler/garage-button-handlers';
import { createCarModule } from '../view/car-module/car-module';

export function renderCars(): void {
  const carContainer = document.querySelector('#car-container');
  fetchDataFromServerWithLimit<CarData[]>(Urls.garage, pageNumber, ItemLimit.carsLimit).then((arrWithCars): void => {
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
