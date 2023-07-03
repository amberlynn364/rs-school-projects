export default class MyLocalStorage {

  public getItem(key: string, defaultValue?: any): any {
    const keyValueString = localStorage.getItem(key);

    let value;
    if (value === null) {
      value = defaultValue;

      return value;
    }
    
    try {
      value = JSON.parse(keyValueString as string);
    } catch (e) {
      value = defaultValue;
    }
    return value;
  }

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}