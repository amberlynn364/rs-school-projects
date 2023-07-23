export function getIDFromElement(element: HTMLElement): number {
  const idToArray = element.id.split('-');
  const lastPart = idToArray[idToArray.length - 1];
  return Number(lastPart);
}
