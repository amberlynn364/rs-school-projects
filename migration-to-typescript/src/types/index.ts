export interface NewsApi {
    author: string;
    publishedAt: string;
    title: string;
    source: { name: string };
    description: string;
    urlToImage: string;
    url: string;
}

export interface sourceNews {
    name: string;
    id: string;
}

export type NewsApiResponse = NewsResponse & SourcesResponse;
interface NewsResponse {
    articles: NewsApi[];
}

interface SourcesResponse {
    sources: sourceNews[];
    (): void;
}

export interface LoaderOptions {
    apiKey: string;
    sources?: string;
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
