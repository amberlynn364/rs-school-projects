export function disableElement(elem: HTMLElement | HTMLElement[]): void {
  const elementsToDisable = Array.isArray(elem) ? elem : [elem];
  elementsToDisable.forEach((element) => {
    if (isCanBeDisable(element)) {
      element.value = '';
      element.disabled = true;
    }
  });
}

function isCanBeDisable(element: HTMLElement): element is HTMLInputElement | HTMLButtonElement {
  return element instanceof HTMLInputElement || element instanceof HTMLButtonElement;
}
