import { expect, it } from '@jest/globals';
import { JSDOM } from 'jsdom';
const { window } = new JSDOM();
import '@testing-library/jest-dom';

import ElementCreator from '../components/helpers/element-creator';

describe('ElementCreator', () => {

  beforeAll(() => {
    global.document = window.document;
  });

  it('returns an element if it is created', () => {
    const elementCreator = new ElementCreator({ tag: 'div', classNames: [] });
    expect(elementCreator.getElement()).not.toBeNull();
  });

  it('sets the id attribute if index is provided', () => {
    const elementCreator = new ElementCreator({ tag: 'div', classNames: [], index: 1 });
    expect(elementCreator.getElement()).toHaveAttribute('id', '1');
  });

  it('sets the css class if classNames are provided', () => {
    const elementCreator = new ElementCreator({ tag: 'div', classNames: ['my-class'] });
    expect(elementCreator.getElement()).toHaveClass('my-class');
  });
});