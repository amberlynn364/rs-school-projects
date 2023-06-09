import './sources.css';
import { sourceNews } from '../../../types/index';

class Sources {
    draw(data: sourceNews[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item: sourceNews) => {
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
