import { WinnersData, Urls, ItemLimit, Car } from '../../types/types';
import { fetchDataFromServerWithLimit, fetchItemFromServer } from '../api-requests/api-requests';
import { addRowToTable } from '../helpers/create-elements';
import { firstPagePagination } from './winner-page-pagination';

export function renderWinnersTable(): void {
  let rowNumber: number = 0;
  const table: HTMLTableElement | null = document.querySelector('#winners-table');

  const tableBody = table!.getElementsByTagName('tbody')[0];
  if (tableBody) tableBody.innerHTML = '';

  fetchDataFromServerWithLimit<WinnersData[]>(Urls.winners, firstPagePagination, ItemLimit.winnersLimit).then(
    (winnersData) => {
      winnersData.forEach((winner) => {
        let carName: string = '';
        let carColor: string = '';
        fetchItemFromServer<Car>(Urls.garage, winner.id).then((car) => {
          if (car.name === 'Mersedes') {
            car.name = 'Mercedes';
          }
          carName = car.name;
          carColor = car.color;
          rowNumber += 1;
          if (table) {
            addRowToTable(table, rowNumber, carColor, carName, winner.wins, winner.time);
          }
        });
      });
    }
  );
}
