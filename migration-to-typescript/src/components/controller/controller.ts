import AppLoader from './appLoader';
import { EndPoint, MyCallBack } from '../../types/index';

class AppController extends AppLoader {
    public getSources<T>(callback: MyCallBack<T>): void {
        super.getResp(
            {
                endpoint: EndPoint.Sources,
            },
            callback
        );
    }

    public getNews<T>(e: MouseEvent, callback: MyCallBack<T>): void {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        while (target !== newsContainer) {
            if (target && target instanceof HTMLElement) {
                if (target.classList.contains('source__item')) {
                    const sourceId: string = target.getAttribute('data-source-id') || '';
                    if (newsContainer && newsContainer instanceof HTMLElement) {
                        if (newsContainer.getAttribute('data-source') !== sourceId) {
                            newsContainer.setAttribute('data-source', sourceId);
                            super.getResp<T>(
                                {
                                    endpoint: EndPoint.Everything,
                                    options: {
                                        sources: sourceId,
                                    },
                                },
                                callback
                            );
                        }
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
