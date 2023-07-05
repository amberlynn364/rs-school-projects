
/* eslint-disable no-use-before-define */
export default class PubSub {
  public events: Record<string, ((event: string | number) => void)> = {};
  
  private static instance: PubSub;
  
  static getInstance(): PubSub {
    if (PubSub.instance) {
      return PubSub.instance;
    } else {
      PubSub.instance = new PubSub();
      
      return PubSub.instance;
    }
  }

  public publish<T extends string | number>(eventName: string, value: T): void {
    (this.events)[eventName](value);
  }

  public subscribe(eventName: string, handler: (value: string | number) => void): void {
    this.events[eventName] = handler;
  }
}