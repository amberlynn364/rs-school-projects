// import { CarData, HTTPRequest, Urls } from '../../types/types';

// const garageUrl: string = Urls.garage;

// export async function fetchCarsFromServer(pageNumber: number): Promise<CarData[]> {
//   const response = await fetch(`${garageUrl}?_page=${pageNumber}&_limit=7`, {
//     method: HTTPRequest.GET,
//   });

//   return response.json();
// }

// export async function fetchCarFromServer(id: number): Promise<CarData> {
//   return (await fetch(`${garageUrl}/${id}`, { method: HTTPRequest.GET })).json();
// }

// export async function createCarOnServer(carData: CarData): Promise<void> {
//   const requestOptions: RequestInit = {
//     method: HTTPRequest.POST,
//     body: JSON.stringify(carData),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };

//   await fetch(garageUrl, requestOptions);
// }

// export async function deleteCarFromServer(id: number): Promise<void> {
//   await fetch(`${garageUrl}/${id}`, { method: HTTPRequest.DELETE });
// }

// export async function updateCarDataOnServer(carData: CarData, id: number): Promise<void> {
//   const requestOptions: RequestInit = {
//     method: HTTPRequest.PUT,
//     body: JSON.stringify(carData),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };

//   await fetch(`${garageUrl}/${id}`, requestOptions);
// }

// export async function getTotalCarNumber(): Promise<number> {
//   const response = await fetch(`${garageUrl}?_limit=7`, {
//     method: HTTPRequest.GET,
//   });
//   const totalCarFromServer = response.headers.get('X-Total-count');
//   return totalCarFromServer ? Number(totalCarFromServer) : 0;
// }
