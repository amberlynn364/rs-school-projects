// import './index.html';
// import '../sass/pages/main-page.scss';
// import {pets} from '../js/pets';
// for (let value of pets) {
// }


// let burgerButton = document.querySelector('.burger-btn');
// let navigation = document.querySelector('.navigation');
// let burgerBar = document.querySelector('header');
// let body = document.querySelector('body');

//   burgerButton.addEventListener('click', function() {
//     burgerButton.classList.toggle('active');
//     burgerBar.classList.toggle('active');
//     navigation.classList.toggle('active');
//     body.classList.toggle('lock');
//   })

// let navigationLink = document.querySelector('.navigation');
  
// navigationLink.addEventListener('click', function(){
//     burgerButton.classList.remove('active');
//     burgerBar.classList.remove('active');
//     navigation.classList.remove('active');
//     body.classList.remove('lock');
//   })
  
//   let burgerDefault = document.querySelector('.burger-menu-overlay');

//   burgerDefault.addEventListener('click', function(){
//     burgerButton.classList.remove('active');
//     burgerBar.classList.remove('active');
//     navigation.classList.remove('active');
//     body.classList.remove('lock');
//   })

// // end burger


// //slider

// const leftItem = document.querySelector('.slider__item_left');
// const mainItem = document.querySelector('.slider__item_main');
// const rightItem = document.querySelector('.slider__item_right');
// const sliderWrapper = document.querySelector('.slider-wrapper')
// const slider = document.querySelector('.card-wrapper');
// const buttonLeft = document.querySelector('#left');
// const buttonRight = document.querySelector('#right');
// let slideIndex = 0;
// let isMoving = false;

// function createCard(index, currentItem) {
//   let card = document.createElement('div');
//   card.classList.add('slider__card');

//   let cardImg = document.createElement('img');
//   cardImg.src = `${pets[index].img}`;
//   cardImg.alt = `${pets[index].name} photo`
//   card.append(cardImg);

//   let cardName = document.createElement('span');
//   cardName.classList.add('slider__pet-name');
//   cardName.textContent = `${pets[index].name}`;
//   card.append(cardName)

//   let cardButton = document.createElement('button');
//   cardButton.classList.add('button', 'cards__button', 'button_secondary');
//   cardButton.textContent = 'Learn more';
//   card.append(cardButton);

//   currentItem.append(card);
// }

// let arr = [];
// function generateCardSequence () {
//   while(arr.length < 3) {
//     let number = Math.ceil(Math.random() * 7);
//     if(!arr.includes(number)) {
//       arr.push(number);
//     }
//   }
// }
// generateCardSequence();
// console.log('arr', arr)


// function createMainItems() {
//   arr.forEach(el => {
//     createCard(el, mainItem);
//   })
// }
// createMainItems();

// let rightSideArr = [];
// const sliderRightItem = (array) => {
//   console.log('1func', array, rightSideArr)
//   if(array) {
//     rightSideArr = [...array];
//   } else {
//     // rightSideArr = [...arr];
//   }
//   console.log('func', array,rightSideArr)
//   while(rightSideArr.length < 6) {
//     let number = Math.ceil(Math.random() * 7);
//     if(!rightSideArr.includes(number)) {
//       rightSideArr.push(number);
//     }
//   }
//   rightSideArr.splice(0, 3);
//   console.log('13', arr, rightSideArr)
// }
// sliderRightItem(arr)

// const createRightSideItem = (array) => {
//   array.forEach(el => {
//         createCard(el, rightItem);
//         // createCard(el, leftItem)
//   })
// //   rightSideArr.forEach(el => {
// //     createCard(el, rightItem);
// //     // createCard(el, leftItem)
// // })
// }
// createRightSideItem(rightSideArr);


// const createLeftSideItem = (array) => {
//   array.forEach(el => {
//         // createCard(el, rightItem);
//         createCard(el, leftItem);
//   })
// }
// createLeftSideItem(rightSideArr)

// // const createLeftSideItem = () => {
// //   sliderRightItem()
// //   rightSideArr.forEach(el => {
// //         createCard(el, leftItem)
// //   })
// // }
// // createLeftSideItem()

// // function addClone() {
// //   // let lastSlide = slider.lastElementChild.cloneNode(true);
// //   // slider.insertBefore(lastSlide, slider.firstChild)
// //   // let clone = slider.firstChild;
// //   // slider.lastChild.after(clone)
// //   slider.classList.add('transition-to-right')
// // }

// // function moveToLeft() {
// //   // slider.firstChild.innerHtml = slider.lastChild.innerHtml;
// //   // slider.classList.add('transition-to-left');
// //   slider.firstChild.before(slider.lastChild);
// //   // console.log(leftItem.innerHtml);
// // }

// // function moveToRight() {
// //   slider.classList.add('transition-to-right')
// //   // slider.append(slider.firstChild)

// // }

// // // function removeClone() {
// // //   let firstSlide = slider.firstElementChild;
// // //   firstSlide.parentNode.removeChild(firstSlide);
// // // }

// // buttonRight.addEventListener('click', moveToRight)
// // buttonLeft.addEventListener('click', moveToLeft)

// // slider.addEventListener('animationend', (animationEvent) => {
// //   if (animationEvent.animationName === 'move-to-right') {
// //     slider.classList.remove('transition-to-right');
// //     slider.append(slider.firstChild)
// //   } else if (animationEvent.animationName === 'move-to-left') {
// //     slider.classList.remove('transition-to-left');
// //     // slider.firstChild.innerHtml = slider.lastChild.innerHtml;
// //     slider.lastChild.after(slider.firstChild);
// //     console.log(slider.firstChild);
// //     // console.log(slider.lastChild)
// //   }
// // })


//     // sliderRightItem()
    
//     // let leftSideArr = [];
//     // const sliderLeftItem = () => {
//       //   leftSideArr = [...rightSideArr];
//       //   while(leftSideArr.length < 6) {
//         //     let number = Math.ceil(Math.random() * 7);
// //     if(!leftSideArr.includes(number)) {
// //       leftSideArr.push(number);
// //     }
// //   }
// //   return leftSideArr.splice(0, 3);
// // }

// // sliderLeftItem();

// // const createRightSideItem = () => {
// //     rightSideArr.forEach(el => {
// //       createCard(el, rightItem);
// //     })
    
// //   }
// // createRightSideItem()
  
// //   const createLeftSideItem = () => {
// //     rightSideArr.forEach(el => {
// //     createCard(el, leftItem);
// //   })
// // }
// // createLeftSideItem()


// // let mainSlide
// // let leftSlide
// // function cloneItems () {
// //   mainSlide = mainItem.cloneNode(true);
// //   mainSlide.innerHtml = mainItem;
// //   mainSlide.setAttribute('data-clone', 'clone');
// //   rightItem.after(mainSlide);
  
// //   leftSlide = leftItem.cloneNode(true);
// //   leftSlide.innerHtml = leftItem;
// //   leftSlide.setAttribute('data-clone', 'clone');
// //   rightItem.after(leftSlide);

// // }
// // cloneItems()

// // function moveSlides() {
// //   slider.style.transform = `translateX(${-slideIndex * 10}%)`;
// // }

// // let page = 0;
// // function moveHandler(direction) {
// //   isMoving = true;
// //   slider.style.transition = `transform 450ms ease-in-out`;
// //   direction !== 'right' ? (slideIndex -= 2) : (slideIndex += 2);
// //   direction !== 'right' ? (page--) : (page++);
// //   // if (page >= 0) {
// //   //   if (page % 3 === 1) {
// //   //     leftItem.innerHTML = '';
// //   //     createLeftSideItem();
// //   //     leftSlide.innerHTML = '';
// //   //     leftSlide.innerHTML = leftItem.innerHTML;
// //   //   }
// //   // }
// //   // } else {
// //   //   if (3 + (page % 3) === 1) {
// //   //     mainItem.innerHTML = '';
// //   //     createMainItems();
// //   //     mainSlide.innerHTML = '';
// //   //     mainSlide.innerHTML = mainItem.innerHTML;
// //   //   }
// //   // }

// //   moveSlides();
// // }

// // let rightClick = 0;
// // let leftClick = 0;
// // function clickCheck(side) {
// //   if (side === 'right') {
// //     rightClick++
// //   }
// //   if (side === 'left') {
// //     leftClick++
// //   }

// //   if (rightClick === 1) {
// //     // leftClick = -1;
// //     rightClick = -2;
// //   }

// //   if (leftClick === 1) {
// //     leftClick = -2;
// //     // rightClick = -1;
// //   }
// // }
// // let mainArr = [];

// // const refreshLeftSideItems = () => {
// //   mainArr = [...leftSideArr];
// //   leftSideArr.forEach(el => {
// //   createCard(el, leftItem);
// //   })
// // }

// // refreshLeftSideItems()
// // console.log('mainArr', mainArr)
// // let refreshMainArr = [];
// // const refreshMainSideItems = () => {
// //   let refreshMainArr = [...mainArr]
// //   while(refreshMainArr.length < 6) {
// //     let number = Math.ceil(Math.random() * 7);
// //     if(!refreshMainArr.includes(number)) {
// //       refreshMainArr.push(number);
// //     }
// //   }
// //   mainArr = [...refreshMainArr]
// //   refreshMainArr.splice(0, 3);

// //   refreshMainArr.forEach(el => {
// //     createCard(el, mainItem);
// //   })
// // }
// // refreshMainSideItems()
// // console.log('main Arr', mainArr);

// // let refreshRightArr = []
// // const refreshRightSideItems = () => {
// //   refreshRightArr = [...refreshMainArr];
// //   while(refreshRightArr.length < 6) {
// //     let number = Math.ceil(Math.random() * 7);
// //     if(!refreshRightArr.includes(number)) {
// //       refreshRightArr.push(number);
// //     }
// //   }
// //   refreshRightArr.splice(0, 3);

// //   refreshRightArr.forEach(el => {
// //     createCard(el, rightItem);
// //   })
// //   return refreshRightArr;
// // }
// // // refreshRightSideItems()

// // function refreshItems () {
// //   // clickCheck()
// //   if (rightClick === -2) {
// //     leftItem.innerHTML = '';
// //     refreshLeftSideItems()
// //     leftSlide.innerHTML = '';
// //     leftSlide.innerHTML = leftItem.innerHTML;
// //   }
// //   if (rightClick === -1) {
// //     mainItem.innerHTML = '';
// //     refreshMainSideItems()
// //     mainSlide.innerHTML = '';
// //     mainSlide.innerHTML = mainItem.innerHTML;
// //   }
// //   if (rightClick === 0) {
// //     rightItem.innerHTML = '';
// //     refreshRightSideItems()
// //     // mainSlide.innerHTML = '';
// //     // mainSlide.innerHTML = mainItem.innerHTML;
// //   }
// //   // if (leftClick === -2) {
// //   // mainItem.innerHTML = '';
// //   // createMainItems();
// //   // mainSlide.innerHTML = '';
// //   // mainSlide.innerHTML = mainItem.innerHTML;
// //   // }
// // }

// // buttonRight.addEventListener('click', () => {
// //   if(isMoving){
// //     return;
// //   }
// //   moveHandler('right');
// //   clickCheck('right');
// //   console.log('rightClick', rightClick)
// //   refreshItems()
// // })

// // buttonLeft.addEventListener('click', () => {
// //   if(isMoving){
// //     return;
// //   }
// //   moveHandler();
// //   clickCheck('left');
// //   console.log('leftClick', leftClick)
// //   refreshItems();
// // })


// // slider.addEventListener('transitionend', () => {
// //   isMoving = false;
// //   if(slideIndex === -2){
// //     slider.style.transition = 'none';
// //     slideIndex = 4;
// //     moveSlides()
// //   }
// //   if(slideIndex === 6){
// //     slider.style.transition = 'none';
// //     slideIndex = 0;
// //     moveSlides()
// //   }
// // })

// // let counterLeftClick = 0;
// // let counterRightClick = 0;

// let counterClick = 0;

// const moveLeft = () => {
//   // counterLeftClick++
//   counterClick--
//   if (counterClick == -2) {
//     leftItem.innerHTML = '';
//     arr = rightSideArr
//     sliderRightItem(rightSideArr);
//     createLeftSideItem(rightSideArr); 
//   }
//   if (counterClick == -3) {
//     counterClick = 0;
//     if(cardState) {
//       mainItem.innerHTML = cardState;
//   }
// }
  
//   slider.classList.add('transition-to-left');
//   // buttonLeft.removeEventListener('click', moveLeft);
//   // buttonRight.removeEventListener('click', moveRight);
// }

// const moveRight = () => {
//   // counterRightClick++
//   counterClick++
  
//   if (counterClick == 2) {
//     rightItem.innerHTML = '';
//     arr = rightSideArr
//     sliderRightItem(rightSideArr);
//     createRightSideItem(rightSideArr);
    
  
// }
//   if (counterClick == 3) {
//     counterClick = 0;
//     rightItem.innerHTML = '';
//     arr = rightSideArr
//     sliderRightItem(rightSideArr);
//     createRightSideItem(rightSideArr);
//   }
//   console.log(counterClick)
//   slider.classList.add('transition-to-right');
//   // buttonLeft.removeEventListener('click', moveLeft);
//   // buttonRight.removeEventListener('click', moveRight);
// }
// // buttonLeft.addEventListener('click', () => {
// //   moveLeft()
// //   counterClick--
// //   if (counterClick == -3) {
// //     counterClick = 0;
// //   }
// //   // console.log(counterClick)
// // });
// buttonLeft.addEventListener('click', moveLeft);
// buttonRight.addEventListener('click', moveRight);



// let cardState
// let leftCardState
// let rightCardState
// let secondCardState
// let anotherState

// slider.addEventListener('animationend', (animationEvent) => {
  
//   if (counterClick === 1 || counterClick === -1) {
//     if(animationEvent.animationName === 'move-to-right') {
//       slider.classList.remove('transition-to-right');
//       // if(cardState) {
//       //   mainItem.innerHTML = cardState;
//       // } else {
//       //   cardState = mainItem.innerHTML;
//       //   mainItem.innerHTML = rightItem.innerHTML;
//       // }
//       if(rightCardState) {
//           mainItem.innerHTML = rightCardState;
//         } else {
//           cardState = mainItem.innerHTML;
//           mainItem.innerHTML = rightItem.innerHTML;
//         }
//       } 

//       if (animationEvent.animationName === 'move-to-left') {
//         slider.classList.remove('transition-to-left');
//         // if(secondCardState) {
//         //   console.log('secondCardState')
//         //   mainItem.innerHTML = leftItem.innerHTML;
//         // }

//         if(leftCardState) {
//           mainItem.innerHTML = leftCardState;
//         } else {
//           cardState = mainItem.innerHTML;
//           mainItem.innerHTML = leftItem.innerHTML;
//         }
//       }
//       rightCardState = rightItem.innerHTML;
//       leftCardState = leftItem.innerHTML;
//       rightItem.innerHTML = cardState;
//       leftItem.innerHTML = cardState;
//     }
    
//     if (counterClick == 0) {
//       if (animationEvent.animationName === 'move-to-right') {
//         if(secondCardState) {
//           mainItem.innerHTML = rightItem.innerHTML;
//           slider.classList.remove('transition-to-right');
//           // mainItem.innerHTML = secondCardState;
          
//         } else {
//           // cardState = mainItem.innerHTML;
//           // mainItem.innerHTML = rightItem.innerHTML;
//           slider.classList.remove('transition-to-right');
//           mainItem.innerHTML = cardState;
//           rightItem.innerHTML = rightCardState;
//       }
//         // mainItem.innerHTML = cardState;
//         // rightItem.innerHTML = rightCardState;
//     }
      
//       if (animationEvent.animationName === 'move-to-left') {
//         if(rightCardState) {
//           mainItem.innerHTML = leftItem.innerHTML;
//           slider.classList.remove('transition-to-left');
//           rightItem.innerHTML = anotherState;
//         } else {
//           slider.classList.remove('transition-to-left');
//             mainItem.innerHTML = cardState;
//             leftItem.innerHTML = leftCardState;
//         }
//         rightItem.innerHTML = rightCardState;
//         leftItem.innerHTML = leftCardState;
//         rightItem.innerHTML = cardState;
//       }
//     }
      
//       if (counterClick === 2 || counterClick === -2) {
        
//         if(animationEvent.animationName === 'move-to-right') {
//           slider.classList.remove('transition-to-right');
//           if(anotherState) {
//             mainItem.innerHTML = anotherState;
//           } else {
//             rightCardState = mainItem.innerHTML;
//             mainItem.innerHTML = rightItem.innerHTML;
//             // anotherState = mainItem.innerHTML;
//             // leftCardState = '';
//           }
//         }
        
//         if (animationEvent.animationName === 'move-to-left') {
//           slider.classList.remove('transition-to-left');
//           // if(!leftCardState) {
//           //   // mainItem.innerHTML = leftCardState;
//           // } else {
//             secondCardState = mainItem.innerHTML;
//             mainItem.innerHTML = leftItem.innerHTML;
//           // }
//         }
//         console.log('before', rightItem.innerHTML)
//         rightItem.innerHTML = rightCardState;
//         console.log('after', rightItem.innerHTML)
//         leftItem.innerHTML = rightCardState;
//         // rightItem.innerHTML = '';
//         // arr = rightSideArr
//         // sliderRightItem(rightSideArr);
//         // createRightSideItem(rightSideArr);
//         // leftItem.innerHTML = '';
//         // arr = rightSideArr
//         // sliderRightItem(arr);
//         // createLeftSideItem(arr); 
//       }
        
      
//   // if(counterRightClick === 0) {
//   //   if (animationEvent.animationName === 'move-to-right') {
//   //     slider.classList.remove('transition-to-right');
//   //     mainItem.innerHTML = rightItem.innerHTML;
//   //   } else if (animationEvent.animationName === 'move-to-left') {
//   //     slider.classList.remove('transition-to-left');
//   //     mainItem.innerHTML = leftItem.innerHTML;
//   //   }
//   // }

//   // if (counterRightClick > 0) {
//   //   if (animationEvent.animationName === 'move-to-right') {
//   //     slider.classList.remove('transition-to-right');
//   //     cardState = mainItem.innerHTML;
//   //     console.log('1', cardState)
//   //     mainItem.innerHTML = rightItem.innerHTML;
//   //     leftItem.innerHTML = cardState;
//   //   }
//   // }
  
//   // if (counterRightClick > 0 && counterLeftClick === 1 && animationEvent.animationName === 'move-to-left') {
//   //   console.log('2', cardState)
//   //   slider.classList.remove('transition-to-left');
//   //   mainItem.innerHTML = cardState;
//   // }
//     // console.log('left', counterLeftClick, 'right', counterRightClick);
//     console.log('click', counterClick);
//     // leftItem.innerHTML = '';
//     // rightItem.innerHTML = '';
//     // arr = rightSideArr;
//     // createRightSideItem(arr);
//     // createLeftSideItem();
  
//   buttonLeft.addEventListener('click', moveLeft);
//   buttonRight.addEventListener('click', moveRight);
// })

const pets = [
  {
    "name": "Jennifer",
    "img": "../assets/img/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../assets/img/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
    {
      "name": "Woody",
      "img": "../assets/img/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../assets/img/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../assets/img/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../assets/img/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../assets/img/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../assets/img/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]


  // let arr = [];
  // function generateCardSequence () {
  //   while(arr.length <= 47) {
  //     let indexForItems = Math.floor(Math.random() * 8);
  //     // if(!arr.includes(indexForItems)) {
  //       arr.push(pets[indexForItems]);
  //     // }
  //   }
  // }
  // generateCardSequence();
  
  // console.log(arr)
// let mainArr = []

// function generateMainArr () {
//   while(mainArr.length <= 47) {
//     mainArr.concat(arr);
//     arr = [];
//     generateCardSequence()
//     mainArr.concat(arr);
//     console.log(mainArr.length)
//   }
// }
// generateMainArr()


// let arr = [];
// function generateCardSequence () {
//     while(arr.length <= 7) {
//       let indexForItems = Math.floor(Math.random() * 8);
//       if(!arr.includes(indexForItems)) {
//         arr.push(pets[indexForItems]);
//       }
//     }
//     while(arr.length <= 15) {
//       let indexForItems = Math.floor(Math.random() * 8);
//       if(!arr.includes(indexForItems)) {
//         arr.push(pets[indexForItems]);
//       }
//     }
//     while(arr.length <= 23) {
//       let indexForItems = Math.floor(Math.random() * 8);
//       if(!arr.includes(indexForItems)) {
//         arr.push(pets[indexForItems]);
//       }
//     }
//     while(arr.length <= 31) {
//       let indexForItems = Math.floor(Math.random() * 8);
//       if(!arr.includes(indexForItems)) {
//         arr.push(pets[indexForItems]);
//       }
//     }
//     while(arr.length <= 39) {
//       let indexForItems = Math.floor(Math.random() * 8);
//       if(!arr.includes(indexForItems)) {
//         arr.push(pets[indexForItems]);
//       }
//     }
//     while(arr.length <= 47) {
//       let indexForItems = Math.floor(Math.random() * 8);
//       if(!arr.includes(indexForItems)) {
//         arr.push(pets[indexForItems]);
//       }
//     }
//   }
// generateCardSequence();

// console.log(arr)

let arrayForMainItems = [];
function generateCardSequence () {
  while(arrayForMainItems.length <= 7) {
    let indexForItems = Math.round(Math.random() * 7);
    if(!arrayForMainItems.includes(indexForItems)) {
      arrayForMainItems.push(indexForItems);
    }
  }
}
generateCardSequence();
console.log(arrayForMainItems);
let anotherArr = arrayForMainItems.splice(6,7);
console.log(anotherArr)


let kek = [[],[],[],[],[],[],[],[]];
console.log(kek.length)
let arr = []
// for (let i = 0; arr.length <= 7; i++) {
//   arrayForMainItems 
// }