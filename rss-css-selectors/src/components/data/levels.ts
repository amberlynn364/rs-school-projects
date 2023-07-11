import { Level } from '../../types/types';

export const levels: Level[] = [
  {
    levelNumber: 1,
    rightAnswer: ['menu'],
    tableTitle: 'Welcome to the restaurant! Take the menu',
    syntax: 'syntax: "div, span, p"',
    description: 'You came with a girl, Selects all menu by tag selector.',
    tableFill: [
      {
        firstItem: {
          parent: 'menu',
          parentClasses: ['wiggle'],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'menu',
          parentClasses: ['wiggle'],
          parentIndex: 1,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<menu />',
        },
        secondTag: {
          parent: '<menu />',
        },
      },
    ],
  },
  {
    levelNumber: 2,
    rightAnswer: ['*'],
    tableTitle: 'Select ALL food',
    syntax: 'syntax: "*"',
    description: 'Definitely you like to eat, Selects all by universal selector.',
    tableFill: [
      {
        firstItem: {
          parent: 'doner',
          parentClasses: ['wiggle'],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'steak',
          parentClasses: ['wiggle'],
          parentIndex: 1,
        },
        thirdItem: {
          parent: 'donut',
          parentClasses: ['wiggle'],
          parentIndex: 2,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<doner />',
        },
        secondTag: {
          parent: '<stake />',
        },
        thirdTag: {
          parent: '<donut />',
        },
      },
    ],
  },
  {
    levelNumber: 3,
    rightAnswer: ['.tea'],
    tableTitle: 'Ooops mistake',
    syntax: 'syntax: ".classname"',
    description: 'You ordered coffee, and the unlucky waiter brought one coffee and one tea. Select wrong glass with class selector',
    tableFill: [
      {
        firstItem: {
          parent: 'coffee',
          parentClasses: [],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'coffee',
          parentClasses: ['tea', 'wiggle'],
          parentIndex: 1,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<coffee />',
        },
        secondTag: {
          parent: '<coffee class="tea" />',
        },
      }, 
    ],
  },
  {
    levelNumber: 4,
    rightAnswer: ['#apologize'],
    tableTitle: 'Apologizing the waiter to the visitors',
    syntax: 'syntax: "#id"',
    description: 'The waiter repeated the order and added dessert as an apology. Select dessert with id selector',
    tableFill: [
      {
        firstItem: {
          parent: 'doner',
          parentClasses: [],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'steak',
          parentClasses: [],
          parentIndex: 1,
        },
        thirdItem: {
          parent: 'donut',
          parentClasses: [],
          parentIndex: 2,
        },
        fourthItem: {
          parent: 'dessert',
          parentClasses: ['wiggle'],
          parentIndex: 3,
          id: 'apologize',
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<doner />',
        },
        secondTag: {
          parent: '<stake />',
        },
        thirdTag: {
          parent: '<donut />',
        },
        fourthTag: {
          parent: 'dessert id="apologize"',
        },
      }, 
    ],
  },
  {
    levelNumber: 5,
    rightAnswer: ['dessert + coffee', 'coffee + dessert'],
    tableTitle: 'Dessert with coffee',
    syntax: 'syntax: "tag + tag"',
    description: 'You liked the dessert and decided to order another one with coffee. Select dessert and coffee',
    tableFill: [
      {
        firstItem: {
          parent: 'coffee',
          parentClasses: ['wiggle'],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'dessert',
          parentClasses: ['wiggle'],
          parentIndex: 1,
        },
        thirdItem: {
          parent: 'donut',
          parentClasses: [],
          parentIndex: 2,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<coffee>',
        },
        secondTag: {
          parent: '<dessert>',
        },
        thirdTag: {
          parent: '<donut>',
        },
      }, 
    ],
  },
  {
    levelNumber: 6,
    rightAnswer: [':nth-of-type(even)', 'coffee:nth-of-type(even)'],
    tableTitle: 'The next table treats you',
    syntax: 'syntax: ":nth-of-type(A) or tag::nth-of-type(A)"',
    description: 'You were ordered cocktails and coffee, but you only like coffee. Select even drinks',
    tableFill: [
      {
        firstItem: {
          parent: 'cocktail',
          parentClasses: [],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'coffee',
          parentClasses: ['wiggle'],
          parentIndex: 1,
        },
        thirdItem: {
          parent: 'cocktail',
          parentClasses: [],
          parentIndex: 2,
        },
        fourthItem: {
          parent: 'coffee',
          parentClasses: ['wiggle'],
          parentIndex: 3,
        },
        fifthItem: {
          parent: 'cocktail',
          parentClasses: [],
          parentIndex: 4,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<cocktail />',
        },
        secondTag: {
          parent: '<coffee />',
        },
        thirdTag: {
          parent: '<cocktail />',
        },
        fourthTag: {
          parent: '<coffee />',
        },
        fifthTag: {
          parent: '<cocktail />',
        },
      }, 
    ],
  },
  {
    levelNumber: 7,
    rightAnswer: ['plate hamburger:only-child'],
    tableTitle: 'In some century dishes appeared',
    syntax: 'syntax: ":only-child"',
    description: 'Eat from dishes. You can select any element that is the only element inside of another one.',
    tableFill: [
      {
        firstItem: {
          parent: 'donut',
          parentClasses: [],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'steak',
          parentClasses: [],
          parentIndex: 1,
        },
        thirdItem: {
          parent: 'plate',
          parentClasses: ['board'],
          parentIndex: 2,
          child: 'hamburger',
          childClasses: ['wiggle'],
          childIndex: 3,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<donut />',
        },
        secondTag: {
          parent: '<steak />',
        },
        thirdTag: {
          parent: '<plate>',
          child: '<hamburger />',
          closeTag: '</plate>',
        },
      }, 
    ],
  },
  {
    levelNumber: 8,
    rightAnswer: ['waiter:nth-child(3)', ':nth-child(3)'],
    tableTitle: 'Choose the best waiter',
    syntax: 'syntax: ":nth-child(A) or tag:nth-child(A)"',
    description: 'Help to choose the best employee. Selects the nth (1st, 3rd, 12th etc.) child element in another element.',
    tableFill: [
      {
        firstItem: {
          parent: 'waiter',
          parentClasses: [],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'waiter',
          parentClasses: ['with-bottle'],
          parentIndex: 1,
        },
        thirdItem: {
          parent: 'waiter',
          parentClasses: ['dog', 'wiggle'],
          parentIndex: 2,
        },
        fourthItem: {
          parent: 'waiter',
          parentClasses: ['with-mustache'],
          parentIndex: 3,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<waiter />',
        },
        secondTag: {
          parent: '<waiter />',
        },
        thirdTag: {
          parent: '<waiter />',
        },
        fourthTag: {
          parent: '<waiter />',
        },
      }, 
    ],
  },
  {
    levelNumber: 9,
    rightAnswer: ['plate > pizza'],
    tableTitle: 'Eat some pizza',
    syntax: 'syntax: "tag > tag"',
    description: 'Eat pizza before leaving. You can select elements that are direct children of other elements.',
    tableFill: [
      {
        firstItem: {
          parent: 'plate',
          parentClasses: [],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'steak',
          parentClasses: [],
          parentIndex: 1,
        },
        thirdItem: {
          parent: 'plate',
          parentClasses: ['plate'],
          parentIndex: 2,
          child: 'pizza',
          childClasses: ['wiggle'],
          childIndex: 3,
        },
        fourthItem: {
          parent: 'donut',
          parentClasses: [],
          parentIndex: 4,
        },
        fifthItem: {
          parent: 'plate',
          parentClasses: ['plate'],
          parentIndex: 5,
          child: 'hamburger',
          childClasses: [],
          childIndex: 6,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<plate />',
        },
        secondTag: {
          parent: '<steak />',
        },
        thirdTag: {
          parent: '<plate>',
          child: '<pizza />',
          closeTag: '</plate>',
        },
        fourthTag: {
          parent: '<donut />',
        },
        fifthTag: {
          parent: '<plate>',
          child: '<hamburger />',
          closeTag: '</plate>',
        },
      }, 
    ],
  },
  {
    levelNumber: 10,
    rightAnswer: ['bill:empty'],
    tableTitle: 'Oh yes! pay the bill',
    syntax: 'syntax: ":empty"',
    description: 'Forgot to pay the bill?. Selects elements that don\'t have any other elements inside of them.',
    tableFill: [
      {
        firstItem: {
          parent: 'bill',
          parentClasses: ['wiggle'],
          parentIndex: 0,
        },
        secondItem: {
          parent: 'plate',
          parentClasses: [],
          parentIndex: 1,
          child: 'pizza',
          childClasses: [],
          childIndex: 2,
        },
        thirdItem: {
          parent: 'coffee',
          parentClasses: [],
          parentIndex: 3,
        },
      },
    ],
    boardMarkup: [
      {
        firstTag: {
          parent: '<bill />',
        },
        secondTag: {
          parent: '<plate>',
          child: '<pizza />',
          closeTag: '</plate>',
        },
        thirdTag: {
          parent: '<coffee />',
        },
      }, 
    ],
  },
];

