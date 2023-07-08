import LevelsHelper from '../components/helpers/levels-helper';
import { expect, it } from '@jest/globals';
import '@testing-library/jest-dom';

describe('getLevelNumberFromString', () => {
  it('pass a string with the first character a number', () => {
    expect(LevelsHelper.getLevelNumberFromString('9 level')).toBe(9);
  });

  it('if pass a string with not the first character a number -> throws error', () => {
    expect(() => {
      LevelsHelper.getLevelNumberFromString('level');
    }).toThrow();
  });
});