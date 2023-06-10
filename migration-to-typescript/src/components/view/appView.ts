import News from './news/news';
import Sources from './sources/sources';
import { NewsApi, sourceNews, MethodsAppView } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: MethodsAppView): void {
        const values: NewsApi[]  = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: MethodsAppView): void {
        const values:sourceNews[]  = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}