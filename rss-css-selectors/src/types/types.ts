export interface PubSubCallBack {
  [key: string]: (data: () => void) => void
}


export type TextContent = {
  parent: string;
  child?: string;
  closeTag?: string;
};
export type ElementObject = {
  tag: string;
  classNames: any;
  textContent: string;
  index?: number;
  id?: string;
};


export type Recursive = { 
  wrapper: {
    parent: string; 
    child?: string;
    closeTag?: string
  };
  nextWrapper: {
    parent: string;
    child?: string;
    closeTag?: string
  }; 
};
export type MarkUpType = Recursive & TextContent;
