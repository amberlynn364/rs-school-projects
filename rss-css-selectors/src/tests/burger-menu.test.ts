import { expect, it } from '@jest/globals';
import { JSDOM } from 'jsdom';
const { window } = new JSDOM();
const { MouseEvent } = window;
import 'jest-localstorage-mock';
import '@testing-library/jest-dom';

import BurgerMenu from '../components/burger-menu/burger-menu';

describe('BurgerMenu', () => {
  let burgerMenu: BurgerMenu;

  beforeAll(() => {
    global.document = window.document;
  });

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="burger"></div>
      <ul>
        <li class="levels-item"></li>
        <li class="levels-item"></li>
      </ul>
      <div class="burger-overlay"></div>
      <div class="right-side"></div>
    `;
    burgerMenu = new BurgerMenu();
  });

  it('toggles the menu when the burger button is clicked', () => {
    const burgerButton = document.querySelector('.burger');
    jest.spyOn(burgerMenu, 'toggleMenu' as keyof BurgerMenu);

    burgerButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(burgerMenu.toggleMenu).toHaveBeenCalled();
  });

  it('closes the menu when the overlay is clicked', () => {
    const overlay = document.querySelector('.burger-overlay');
    jest.spyOn(burgerMenu, 'toggleMenu' as keyof BurgerMenu);
    burgerMenu.toggleMenu = jest.fn();

    overlay!.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(burgerMenu.toggleMenu).toHaveBeenCalled();
  });

  it('toggles the menu state when the burger button is clicked', () => {
    const body = document.body;
    const levelsWrapper = document.querySelector('.right-side');
    const burgerButton = document.querySelector('.burger');

    burgerButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(body.style.overflow).toBe('hidden');
    expect((levelsWrapper as HTMLElement)!.style.right).toBe('0px');

    burgerButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(body.style.overflow).toBe('visible');
    expect((levelsWrapper as HTMLElement)!.style.right).toBe('-999px');
  });
});