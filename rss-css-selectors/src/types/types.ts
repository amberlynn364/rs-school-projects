/* eslint-disable no-use-before-define */
export interface LevelsListItem {
  tag: string;
  classList: string[];
  textContent: string;
  childTag: string;
  childClassList?: string[];
}
export interface Level {
  levelNumber: number;
  rightAnswer: string[];
  anotherRightAnswer?: string;
  tableTitle: string;
  syntax: string;
  description: string;
  tableFill: LevelTableFill[];
  boardMarkup: LevelBoardMarkup[];
}
export interface LevelBoardMarkup {
  firstTag: LevelsTag;
  secondTag: LevelsTag;
  thirdTag?: LevelsTag;
  fourthTag?: LevelsTag;
  fifthTag?: LevelsTag;
}
export interface LevelsTag {
  parent: string;
  child?: string;
  closeTag?: string;
}

export type LevelTableFill = {
  firstItem: TableItem;
  secondItem: TableItem;
  thirdItem?: TableItem;
  fourthItem?: TableItem;
  fifthItem?: TableItem;
};

export type TableItem = {
  parent: string;
  parentClasses: string[];
  parentIndex: number;
  child?: string,
  childClasses?: string[],
  childIndex?: number,
  id?: string,
};

export interface ElementObject {
  tag: string,
  classNames: string[],
  textContent?: string,
  index?: number,
  id?: string,
}

export interface MarkUpElementObject {
  parent: string;
  child?: string;
  closeTag?: string;
}

export enum PubSubEvents {
  backlightMarkUp = 'backlightMarkUp',
  backlightTable = 'backlightTable',
}
