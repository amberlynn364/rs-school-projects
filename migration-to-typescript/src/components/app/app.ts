import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsApiResponse } from '../../types/index';

class App {
    private controller = new AppController();
    private view = new AppView();

    public start(): void {
        document.querySelector('.sources')!.addEventListener('click', (e: Event): void =>
            this.controller.getNews<NewsApiResponse>(e as MouseEvent, (data): void => {
                if (data !== undefined) {
                    this.view.drawNews(data);
                }
            })
        );
        this.controller.getSources<NewsApiResponse>((data): void => {
            if (data !== undefined) {
                this.view.drawSources(data);
            }
        });
    }
}

export default App;
