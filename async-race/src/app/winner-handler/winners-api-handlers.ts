// import { HTTPRequest, Urls, WinnersData, WinnersUpdateData } from '../../types/types';

// const winnersUrl = Urls.winners;

// export async function fetchAllWinnersFromServer(): Promise<WinnersData[]> {
//   return (await fetch(winnersUrl, { method: HTTPRequest.GET })).json();
// }

// export async function fetchWinnersFromServer(page: number): Promise<WinnersData[]> {
//   const response = await fetch(`${winnersUrl}?_page=${page}&_limit=10`, {
//     method: HTTPRequest.GET,
//   });

//   return response.json();
// }

// export async function fetchWinnerFromServer(id: number): Promise<WinnersData> {
//   return (await fetch(`${winnersUrl}/${id}`, { method: HTTPRequest.GET })).json();
// }

// export async function createWinnerOnServer(winnerData: WinnersData): Promise<void> {
//   const requestOptions: RequestInit = {
//     method: HTTPRequest.POST,
//     body: JSON.stringify(winnerData),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };

//   await fetch(winnersUrl, requestOptions);
// }

// export async function deleteWinnerFromServer(id: number): Promise<void> {
//   await fetch(`${winnersUrl}/${id}`, { method: HTTPRequest.DELETE });
// }

// export async function updateWinnerDataOnServer(winnerData: WinnersUpdateData, id: number): Promise<void> {
//   const requestOptions: RequestInit = {
//     method: HTTPRequest.PUT,
//     body: JSON.stringify(winnerData),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };

//   await fetch(`${winnersUrl}/${id}`, requestOptions);
// }

// export async function getTotalWinnersNumber(): Promise<number> {
//   const response = await fetch(`${winnersUrl}?_limit=10`, {
//     method: HTTPRequest.GET,
//   });
//   const totalWinnersFromServer = response.headers.get('X-Total-count');
//   return totalWinnersFromServer ? Number(totalWinnersFromServer) : 0;
// }
