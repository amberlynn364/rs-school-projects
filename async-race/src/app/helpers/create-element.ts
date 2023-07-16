import { ElementAttributes } from '../../types/types';

export function createElement({ tag, classLists, id, textContent }: ElementAttributes): HTMLElement {
  const elem: HTMLElement = document.createElement(tag);
  
  if (id) {
    elem.setAttribute('id', id.toString());
  }
  
  if (textContent) {
    elem.textContent = textContent;
  }

  classLists.forEach((item: string) => elem.classList.add(item));
  
  return elem;
}

