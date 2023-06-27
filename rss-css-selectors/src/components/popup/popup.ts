export default class Popup {
  private popup: HTMLElement | null = document.querySelector('.popup');

  private heightOffset: number = 35;

  private leftOffset: number = 50;

  protected showPopup(element: HTMLElement): void {
    const elementHasClass = `${element.classList.contains('small') ? ' class="small"' : ''}`;
    const elementHasID = `${element.hasAttribute('table-id') ? ' id="fancy"' : ''}`;
    this.popup!.style.display = 'block';
    this.popup!.style.top = `${element.getBoundingClientRect().top - this.heightOffset}px`;
    this.popup!.style.left = `${element.getBoundingClientRect().left + this.leftOffset}px`;
    this.popup!.textContent = `<${element.tagName.toLowerCase()}${elementHasID}${elementHasClass}></${element.tagName.toLowerCase()}>`;
  }

  protected hidePopup(): void {
    this.popup!.style.display = 'none';
  }
}