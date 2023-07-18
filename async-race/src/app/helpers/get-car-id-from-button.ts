export function getCarIDFromButton(button: HTMLElement): number {
  const idToArray = button.id.split('-');
  const lastPart = idToArray[idToArray.length - 1];
  return Number(lastPart);
}
