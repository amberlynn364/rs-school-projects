export function handleShakeAnimation(wrapperSelector: string): void {
  const wrapper = document.querySelector(wrapperSelector);
  wrapper?.classList.add('shake');
  wrapper?.addEventListener('animationend', () => wrapper.classList.remove('shake'));
}
