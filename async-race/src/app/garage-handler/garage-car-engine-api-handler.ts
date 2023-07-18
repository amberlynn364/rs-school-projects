import { EngineResource, HTTPRequest, Urls } from '../../types/types';

const engineUrl: string = Urls.engine;

export async function startCarEngine(id: number): Promise<EngineResource> {
  return (await fetch(`${engineUrl}?id=${id}&status=started`, { method: HTTPRequest.PATCH })).json();
}

export async function stopCarEngine(id: number): Promise<EngineResource> {
  return (await fetch(`${engineUrl}?id=${id}&status=stopped`, { method: HTTPRequest.PATCH })).json();
}

export async function switchCarEngineToDriveMode(id: number) {
  const response = await fetch(`${engineUrl}?id=${id}&status=drive`, { method: HTTPRequest.PATCH });
  if (response.status === 200) {
    const data = await response.json();
    return { ...data };
  } else {
    return { success: false };
  }
}
