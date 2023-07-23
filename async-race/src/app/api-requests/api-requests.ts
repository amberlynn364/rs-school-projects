import { FetchUrl, HTTPRequest, ItemLimitValue } from '../../types/types';

export async function fetchAllItemsFromServer<T>(typeUrl: FetchUrl): Promise<T> {
  return (await fetch(typeUrl, { method: HTTPRequest.GET })).json();
}

export async function fetchDataFromServerWithLimit<T>(
  typeUrl: FetchUrl,
  pageNumber: number,
  limitItems: ItemLimitValue
): Promise<T> {
  const response = await fetch(`${typeUrl}?_page=${pageNumber}&_limit=${limitItems}`, {
    method: HTTPRequest.GET,
  });

  return response.json();
}

export async function fetchItemFromServer<T>(typeUrl: FetchUrl, itemID: number): Promise<T> {
  return (await fetch(`${typeUrl}/${itemID}`, { method: HTTPRequest.GET })).json();
}

export async function createItemOnServer<T>(typeUrl: FetchUrl, itemData: T): Promise<void> {
  const requestOptions: RequestInit = {
    method: HTTPRequest.POST,
    body: JSON.stringify(itemData),
    headers: {
      'Content-type': 'application/json',
    },
  };

  await fetch(typeUrl, requestOptions);
}

export async function updateItemOnServer<T>(typeUrl: FetchUrl, itemData: T, itemID: number): Promise<void> {
  const requestOptions: RequestInit = {
    method: HTTPRequest.PUT,
    body: JSON.stringify(itemData),
    headers: {
      'Content-type': 'application/json',
    },
  };
  await fetch(`${typeUrl}/${itemID}`, requestOptions);
}

export async function deleteItemOnServer(typeUrl: FetchUrl, itemID: number): Promise<void> {
  await fetch(`${typeUrl}/${itemID}`, { method: HTTPRequest.DELETE });
}

export async function getTotalItemsFromServer(typeUrl: FetchUrl): Promise<number> {
  const response = await fetch(`${typeUrl}?_limit=1`, {
    method: HTTPRequest.GET,
  });
  const totalItemsOnServer = response.headers.get('X-Total-count');
  return totalItemsOnServer ? Number(totalItemsOnServer) : 0;
}
