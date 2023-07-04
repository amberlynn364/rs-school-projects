export default class BurgerMenu {
  private burgerMenu: HTMLDivElement | null = document.querySelector('.burger');
  
  private levels: NodeListOf<HTMLLIElement> = document.querySelectorAll('.levels-item');

  private overlay: HTMLDivElement | null = document.querySelector('.burger-overlay');

  constructor() {
    this.initEventListener();
  }

  private initEventListener(): void {
    this.burgerMenu!.addEventListener('click', () => this.toggleMenu());
    this.levels!.forEach((level) => level.addEventListener('click', () => {
      if (this.burgerMenu!.classList.contains('active')) {
        this.toggleMenu();
      }
    }));
    this.overlay!.addEventListener('click', () => this.toggleMenu());
  }

  private toggleMenu(): void {
    const body: HTMLElement | null = document.body;
    const levelsWrapper: HTMLElement | null = document.querySelector('.right-side');
    this.burgerMenu!.classList.toggle('active');

    if (this.burgerMenu!.classList.contains('active')) {
      body.style.overflow = 'hidden';
      levelsWrapper!.style.right = '0';
    } else {
      body.style.overflow = 'visible';
      levelsWrapper!.style.right = '-999px';
    }
  }
}