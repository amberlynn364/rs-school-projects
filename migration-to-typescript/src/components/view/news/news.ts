import './news.css';
import { NewsApi } from '../../../types/index';

class News {
    public draw(data: NewsApi[]): void {
        const news: NewsApi[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const newsWrapper: HTMLDivElement | null = document.querySelector('.news');

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: NewsApi, idx: number): void => {
            if (newsItemTemp) {
                const newsClone: Node = newsItemTemp.content.cloneNode(true);
                if (newsClone instanceof DocumentFragment) {
                    if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

                    newsClone.querySelector<HTMLElement>('.news__meta-photo')!.style.backgroundImage = `url(${
                        item.urlToImage || 'img/news_placeholder.jpg'
                    })`;
                    newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
                    newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                        .slice(0, 10)
                        .split('-')
                        .reverse()
                        .join('-');

                    newsClone.querySelector('.news__description-title')!.textContent = item.title;
                    newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
                    newsClone.querySelector('.news__description-content')!.textContent = item.description;
                    newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

                    fragment.append(newsClone);
                }
            }
        });

        newsWrapper!.innerHTML = '';
        newsWrapper!.appendChild(fragment);
    }
}

export default News;
