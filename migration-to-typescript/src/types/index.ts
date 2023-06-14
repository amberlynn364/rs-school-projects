export interface Source {
    id: string;
    name: string;
}
export interface Article {
    author: string;
    publishedAt: string;
    title: string;
    source: Pick<Source, 'id' | 'name'>;
    description: string;
    urlToImage: string;
    url: string;
    name: string;
    id: string;
}

export type NewsApiResponse = NewsResponse & SourcesResponse;
interface NewsResponse {
    articles: Article[];
}

interface SourcesResponse {
    sources: Source[];
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
    options?: LoaderOptions;
}

export enum HTTPRequest {
    Get = 'GET',
    Post = 'POST',
}

export type MyCallBack<T> = (data?: T) => void;
