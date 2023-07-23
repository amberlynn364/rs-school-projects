import { EngineResource, HTTPRequest, SwitchCarEngineResponse, Urls } from '../../types/types';

const engineUrl: string = Urls.engine;

export async function startCarEngine(carID: number): Promise<EngineResource> {
  return (await fetch(`${engineUrl}?id=${carID}&status=started`, { method: HTTPRequest.PATCH })).json();
}

export async function stopCarEngine(carID: number): Promise<EngineResource> {
  return (await fetch(`${engineUrl}?id=${carID}&status=stopped`, { method: HTTPRequest.PATCH })).json();
}

export async function switchCarEngineToDriveMode(carID: number): Promise<SwitchCarEngineResponse> {
  const response = await fetch(`${engineUrl}?id=${carID}&status=drive`, { method: HTTPRequest.PATCH });
  if (response.status === 200) {
    const data = await response.json();
    return { ...data };
  } else {
    return { success: false };
  }
}
