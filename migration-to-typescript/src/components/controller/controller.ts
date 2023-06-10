import AppLoader from './appLoader';
import { MethodsAppView, EndPoint } from '../../types/index'

class AppController extends AppLoader {
    public getSources(callback: MethodsAppView): void {
        super.getResp(
            {
                endpoint: EndPoint.Sources,
            },
            callback
        );
    }

    public getNews<T>(e: MouseEvent, callback: (data?: T) => void): void {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        while (target !== newsContainer) {
            if (target) {
                if ((target as HTMLElement).classList.contains('source__item')) {
                    const sourceId: string | null = (target as HTMLElement).getAttribute('data-source-id');
                    if (newsContainer) {
                        if ((newsContainer as HTMLElement).getAttribute('data-source') !== sourceId) {
                            (newsContainer as HTMLElement).setAttribute('data-source', sourceId as string);
                            super.getResp(
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
                target = (target as HTMLElement).parentNode;
            }
        }
    }
}

export default AppController;
