/* eslint-disable no-use-before-define */
import { PubSubCallBack } from '../../types/types';

export default class PubSub {
  public events: PubSubCallBack = {};
  
  private static instance: PubSub;
  
  static getInstance(): PubSub {
    if (PubSub.instance) {
      return PubSub.instance;
    } else {
      PubSub.instance = new PubSub();
      
      return PubSub.instance;
    }
  }

  public publish(eventName: string, value: any): void {
    (this.events)[eventName](value);
  }

  public subscribe(eventName: string, handler: any): void {
    this.events[eventName] = handler;
  }
}