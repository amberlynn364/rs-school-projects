export function getCarIDFromButton(button: HTMLElement): number {
  return Number(button.id.slice(-1));
}
