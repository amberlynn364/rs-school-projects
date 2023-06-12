import './sources.css';
import { NewsApiSource } from '../../../types/index';

class Sources {
    public draw(data: NewsApiSource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item: NewsApiSource): void => {
            if (sourceItemTemp) {
                const sourceClone: Node = sourceItemTemp.content.cloneNode(true) as HTMLElement;
                if (sourceClone instanceof DocumentFragment) {
                    sourceClone.querySelector('.source__item-name')!.textContent = item.name;
                    sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);
                }
                fragment.append(sourceClone);
            }
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
