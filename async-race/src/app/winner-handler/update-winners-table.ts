import { WinnersData } from '../../types/types';
import { fetchCarFromServer } from '../garage-handler/garage-api-handlers';
import { addRowToTable } from '../helpers/create-element';
import { firstPagePagination } from './winner-page-pagination';
import { fetchWinnersFromServer } from './winners-api-handlers';

export function updateWinnersTableUI(): void {
  let rowNumber: number = 0;
  const table: HTMLTableElement | null = document.querySelector('#winners-table');

  const tableBody = table!.getElementsByTagName('tbody')[0];
  if (tableBody) tableBody.innerHTML = '';

  fetchWinnersFromServer(firstPagePagination).then((winnersData: WinnersData[]) => {
    winnersData.forEach((winner) => {
      let carName: string = '';
      let carColor: string = '';
      fetchCarFromServer(winner.id).then((car) => {
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
  });
}
