import { expect } from '@jest/globals';
import 'jest-localstorage-mock';
import '@testing-library/jest-dom';

import MyLocalStorage from '../components/helpers/my-local-storage';

describe('MyLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should set and get an array', () => {
    const key = 'test-array';
    const value = [{
      tag: 'li',
      classList: ['levels-item'],
      textContent: '1 level',
      childTag: 'span',
      childClassList: ['levels-check'],
    }];
    MyLocalStorage.setItem(key, value);
    const result = MyLocalStorage.getItem<typeof value>(key);
    expect(result).toEqual(value);
  });

  it('should set and get a number', () => {
    const key = 'test-number';
    const value = 42;
    MyLocalStorage.setItem(key, value);
    const result = MyLocalStorage.getItem<typeof value>(key);
    expect(result).toEqual(value);
  });
});