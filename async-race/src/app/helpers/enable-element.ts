export function enableElement(elem: HTMLElement | HTMLElement[]): void {
  const elementsToEnable = Array.isArray(elem) ? elem : [elem];

  elementsToEnable.forEach((element) => {
    if (isCanBeEnable(element)) {
      element.disabled = false;
    }
  });
}

function isCanBeEnable(element: HTMLElement): element is HTMLInputElement | HTMLButtonElement {
  return element instanceof HTMLInputElement || element instanceof HTMLButtonElement;
}
