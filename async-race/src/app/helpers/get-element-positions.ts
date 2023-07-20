function getCenterElementPosition(element: HTMLElement): { x: number; y: number } {
  const { top, left, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

export function getDistanceBetweenTwoElements(firstElement: HTMLElement, secondElement: HTMLElement): number {
  const firstElementPosition = getCenterElementPosition(firstElement);
  const secondElementPosition = getCenterElementPosition(secondElement);

  return Math.sqrt(
    (firstElementPosition.x - secondElementPosition.x) ** 2 + (firstElementPosition.y - secondElementPosition.y) ** 2
  );
}
