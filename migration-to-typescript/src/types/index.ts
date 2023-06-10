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

export type MethodsAppView = drawNews & drawSources;
interface drawNews {
    articles: NewsApi[];
}

interface drawSources {
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
