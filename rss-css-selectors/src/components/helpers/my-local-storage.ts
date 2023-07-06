import { LevelsListItem } from '../../types/types';

export default class MyLocalStorage {

  static getItem<T extends LevelsListItem[] | number>(key: string): T {
    const keyValueString = localStorage.getItem(key);
    const data = JSON.parse(keyValueString as string);    
    return data;
  }

  static setItem<T extends LevelsListItem[] | number>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}