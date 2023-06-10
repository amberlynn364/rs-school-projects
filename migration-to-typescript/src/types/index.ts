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
};

interface drawSources {
  sources: sourceNews[];
}