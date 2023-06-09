export interface NewsApi {
  author: string;
  publishedAt: string;
  title: string;
  source: { name: string };
  description: string;
  urlToImage: string;
  url: string;
}