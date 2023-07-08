import { JSDOM } from 'jsdom';
import LevelsHelper from '../components/helpers/levels-helper';

describe('highlightLevel', () => {
  let levelsItemMock: NodeListOf<HTMLLIElement>;

  beforeAll(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;
    levelsItemMock = [
      document.createElement('li'),
      document.createElement('li'),
      document.createElement('li'),
    ] as unknown as NodeListOf<HTMLLIElement>;
  });

  it('should highlight the correct level', () => {
    LevelsHelper.highlightLevel(2, levelsItemMock);
    expect(levelsItemMock[1].classList).toContain('selected');
    expect(levelsItemMock[0].classList).not.toContain('selected');
    expect(levelsItemMock[2].classList).not.toContain('selected');
  });
});