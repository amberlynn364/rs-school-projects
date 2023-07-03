import { levels } from '../levels/levels';

export default class TextContent {

  private tableTitle: HTMLHeadingElement | null = document.querySelector('.table-title');

  private syntax: HTMLDivElement | null = document.querySelector('.syntax');

  private description: HTMLDivElement | null = document.querySelector('.description');

  constructor(lvl: number) {
    this.fillTextContent(lvl);
  }

  fillTextContent(lvl: number): void {
    this.tableTitle!.textContent = levels[lvl - 1].tableTitle as string;
    this.syntax!.textContent = levels[lvl - 1].syntax as string;
    this.description!.textContent = levels[lvl - 1].description as string;
  }
}