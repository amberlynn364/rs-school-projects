import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { MethodsAppView } from '../../types/index';

class App {
    private controller;
    private view;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e: Event): void =>
                this.controller.getNews(e as MouseEvent, (data): void => this.view.drawNews(data as MethodsAppView))
            );
        this.controller.getSources((data): void => this.view.drawSources(data as MethodsAppView));
    }
}

export default App;
