import { addCarAnimation } from '../app/car-handler/car-animation';

export interface ElementAttributes {
  tag: string;
  classLists: string[];
  id?: string | number;
  textContent?: string;
}

export interface InputElementAttributes {
  id: string;
  classLists: string[];
  type: string;
  placeHolder?: string;
}

export interface CarOptionsAttributes {
  idTextInput: string;
  idColorInput: string;
  idButton: string;
  wrapperClassList: string;
  inputPlaceHolder: string;
  buttonTextContent: string;
  disabled?: boolean;
}

export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface CarData {
  name: string;
  color: string;
}

export interface EngineResource {
  distance: number;
  velocity: number;
}

export interface CarAnimation {
  animation: ReturnType<typeof addCarAnimation>;
  isRunning: boolean;
}

export type CreateOrUpdate = 'create' | 'update';

export type RemoveOrSelectButtons = 'remove-button' | 'select-button';

export type PaginationButtons = 'first-page-button' | 'prev-page-button' | 'next-page-button' | 'last-page-button';

export enum Urls {
  garage = 'http://127.0.0.1:3000/garage',
  engine = 'http://127.0.0.1:3000/engine',
  winners = 'http://127.0.0.1:3000/winners',
}

export enum HTTPRequest {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
