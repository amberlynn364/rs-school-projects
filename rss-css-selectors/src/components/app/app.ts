import AppController from '../controllers/app-controller';
export default class App {
  public start(): void {
    new AppController();
  }
}