export function disableElement(elem: HTMLElement | HTMLElement[]): void {
  const elementsToDisable = Array.isArray(elem) ? elem : [elem];
  elementsToDisable.forEach((element) => {
    if (isCanBeDisable(element)) {
      element.disabled = true;

      if (element instanceof HTMLInputElement && element.getAttribute('type') === 'text') {
        element.value = '';
      }
    }
  });
}

function isCanBeDisable(element: HTMLElement): element is HTMLInputElement | HTMLButtonElement {
  return element instanceof HTMLInputElement || element instanceof HTMLButtonElement;
}
