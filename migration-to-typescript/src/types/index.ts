export interface NewsApi {
    author: string;
    publishedAt: string;
    title: string;
    source: { name: string };
    description: string;
    urlToImage: string;
    url: string;
    name: string;
    id: string;
}

export type NewsApiSource = Pick<NewsApi, 'name' | 'id'>;

export type NewsApiResponse = NewsResponse & SourcesResponse;
interface NewsResponse {
    articles: NewsApi[];
}

interface SourcesResponse {
    sources: NewsApiSource[];
    (): void;
}

export interface LoaderOptions {
    [apiKey: string]: string;
}

export enum EndPoint {
    Everything = 'everything',
    Sources = 'sources',
}
export interface GetResp {
    endpoint: EndPoint;
    options?: object;
}

export enum HTTPRequest {
    Get = 'GET',
    Post = 'POST',
}
