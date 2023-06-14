import News from './news/news';
import Sources from './sources/sources';
import { Article, Source, NewsResponse, SourcesResponse } from '../../types/index';

export class AppView {
    private news = new News();
    private sources = new Sources();

    public drawNews(data: NewsResponse): void {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesResponse): void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
