import News from './news/news';
import Sources from './sources/sources';
import { NewsApi, NewsApiSource, NewsApiResponse } from '../../types/index';

export class AppView {
    private news = new News();
    private sources = new Sources();

    public drawNews(data: NewsApiResponse): void {
        const values: NewsApi[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: NewsApiResponse): void {
        const values: NewsApiSource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
