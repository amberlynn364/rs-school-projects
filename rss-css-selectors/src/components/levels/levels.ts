export const levels = [
  {
    levelNumber: 1,
    tags: [['plate'], ['plate']],
    tableFill: [['plate', 'wiggle'], ['plate', 'wiggle']],
    boardMarkup: [
      {
        wrapper: {
          parent: '  <plate />\n',
        },
        nextWrapper: {
          parent: '  <plate />',
        },
      },
    ],
  },
  {
    levelNumber: 2,
    tags: [['plate'], ['plate']],
    tableFill: [['plate', 'wiggle'], ['plate', 'wiggle']],
    boardMarkup: [
      {
        wrapper: {
          parent: '<level 2 />',
        },
        nextWrapper: {
          parent: '<level 2 />',
        },
      },
    ],
  },
  {
    levelNumber: 3,
    tags: [['plate'], ['plate'], ['plate'], ['plate']],
    tableFill: [['plate', 'wiggle'], ['plate', 'wiggle'], ['plate', 'wiggle'], ['plate', 'wiggle']],
    boardMarkup: [
      {
        wrapper: {
          parent: '<plate>',
          child: '<apple />',
          closeTag: '</plate>',
        },
        nextWrapper: {
          parent: '<plate>',
          child: '<watermelon />',
          closeTag: '</plate>',
        },
      }, 
    ],
  },
];