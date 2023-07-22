const winnerPopup: HTMLElement | null = document.querySelector('#winner-popup');
const winnerMessage: HTMLElement | null = document.querySelector('#winner-message');
const closePopupButton: HTMLButtonElement | null = document.querySelector('#close-popup-button');
const popupOverlay: HTMLElement | null = document.querySelector('#popup-overlay');

export function showPopupAndTextWinner(carWinner: string, raceTime: string): void {
  if (winnerPopup && winnerMessage) {
    winnerPopup.classList.toggle('hide');
    winnerMessage.textContent = `${carWinner} won the race in ${raceTime} seconds`;
    popupOverlay!.style.display = 'block';
  }
}

export function hidePopup() {
  winnerPopup!.classList.toggle('hide');
  popupOverlay!.style.display = 'none';
}

closePopupButton!.addEventListener('click', () => hidePopup());
popupOverlay!.addEventListener('click', () => hidePopup());
