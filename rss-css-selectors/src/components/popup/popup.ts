export default class Popup {
  private popup: HTMLElement | null = document.querySelector('.popup');

  showPopup(element: HTMLElement) {
    this.popup!.style.display = 'block';
    this.popup!.style.top = `${element.getBoundingClientRect().top - 35}px`;
    this.popup!.style.left = `${element.getBoundingClientRect().left + 50}px`;
  }

  hidePopup() {
    this.popup!.style.display = 'none';
  }
}