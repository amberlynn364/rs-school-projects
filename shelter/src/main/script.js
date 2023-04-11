import './index.html';
import '../sass/pages/main-page.scss';
import {pets} from '../js/pets.js';
for (let value of pets) {
}

alert('Если это возможно, проверьте, пожалуйста, завтра 12.04.2023, сейчас делаю коммит в 6:37 утра по Москве 11.04.2023, было много работы на этой неделе чуть-чуть не успел доделать пагинацию')
let burgerButton = document.querySelector('.burger-btn');
let navigation = document.querySelector('.navigation');
let burgerBar = document.querySelector('header');
let body = document.querySelector('body');

  burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('active');
    burgerBar.classList.toggle('active');
    navigation.classList.toggle('active');
    body.classList.toggle('lock');
  })

let navigationLink = document.querySelector('.navigation');
  
navigationLink.addEventListener('click', function(){
    burgerButton.classList.remove('active');
    burgerBar.classList.remove('active');
    navigation.classList.remove('active');
    body.classList.remove('lock');
  })
  
  let burgerDefault = document.querySelector('.burger-menu-overlay');

  burgerDefault.addEventListener('click', function(){
    burgerButton.classList.remove('active');
    burgerBar.classList.remove('active');
    navigation.classList.remove('active');
    body.classList.remove('lock');
  })

// end burger


//slider

const leftItem = document.querySelector('.slider__item_left');
const mainItem = document.querySelector('.slider__item_main');
const rightItem = document.querySelector('.slider__item_right');

const slider = document.querySelector('.card-wrapper');
const buttonLeft = document.querySelector('#left');
const buttonRight = document.querySelector('#right');

function createItem(index, currentItem) {
  let item = document.createElement('div');
  item.classList.add('slider__card');
  item.setAttribute('data-pet-index', index)

  let itemImg = document.createElement('img');
  itemImg.src = `${pets[index].img}`;
  itemImg.alt = `${pets[index].name} photo`
  item.append(itemImg);

  let itemName = document.createElement('span');
  itemName.classList.add('slider__pet-name');
  itemName.textContent = `${pets[index].name}`;
  item.append(itemName)

  let itemButton = document.createElement('button');
  itemButton.classList.add('button', 'cards__button', 'button_secondary');
  itemButton.textContent = 'Learn more';
  item.append(itemButton);

  currentItem.append(item);
}


let arrayForMainItems = [];
function generateCardSequence () {
  while(arrayForMainItems.length < 3) {
    let indexForItems = Math.ceil(Math.random() * 7);
    if(!arrayForMainItems.includes(indexForItems)) {
      arrayForMainItems.push(indexForItems);
    }
  }
}
generateCardSequence();


function buildMainItems() {
  arrayForMainItems.forEach(el => {
    createItem(el, mainItem);
  })
}
buildMainItems();

let arrayForSideItems = [];

const addIndexForSideItems = (array) => {
  arrayForSideItems = [...array];
  while(arrayForSideItems.length < 6) {
    let indexForItems = Math.ceil(Math.random() * 7);
    if(!arrayForSideItems.includes(indexForItems)) {
      arrayForSideItems.push(indexForItems);
    }
  }
  return arrayForSideItems.splice(0, 3);
}

addIndexForSideItems(arrayForMainItems)

const buildSideItems = (array) => {
    array.forEach(el => {
          createItem(el, rightItem);
          createItem(el, leftItem)
    })
}
buildSideItems(arrayForSideItems);


let leftClickCounter = 0;
let rightClickCounter = 0;

const motionToLeft = () => {
  leftClickCounter++
  slider.classList.add('transition-to-left');
  buttonLeft.removeEventListener('click', motionToLeft);
  buttonRight.removeEventListener('click', motionToRight);
  if (rightClickCounter === 1 && leftClickCounter === 1) {
    leftItem.innerHTML = cardState;
    rightItem.innerHTML = cardState;
  }
}

const motionToRight = () => {
  rightClickCounter++
  slider.classList.add('transition-to-right');
  buttonLeft.removeEventListener('click', motionToLeft);
  buttonRight.removeEventListener('click', motionToRight);
  if (rightClickCounter === 1 && leftClickCounter === 1) {
    leftItem.innerHTML = cardState;
    rightItem.innerHTML = cardState;
  }
}

buttonLeft.addEventListener('click', motionToLeft);
buttonRight.addEventListener('click', motionToRight);

let cardState;

slider.addEventListener('animationend', (AnimationEvent) => { 
  console.log('rightClick', rightClickCounter, 'leftClick', leftClickCounter)
  
  // if (rightClickCounter === 0) { 
  //   console.log(1)
  //     if(AnimationEvent.animationName === 'move-to-right') { 
  //         slider.classList.remove('transition-to-right'); 
  //         mainItem.innerHTML = rightItem.innerHTML; 
  //     } else if (AnimationEvent.animationName === 'move-to-left') { 
  //         slider.classList.remove('transition-to-left'); 
  //         mainItem.innerHTML = leftItem.innerHTML; 
  //     } 
  //     leftItem.innerHTML = ''; 
  //     rightItem.innerHTML = ''; 
  //     arrayForMainItems = arrayForSideItems;
      
  //     addIndexForSideItems(arrayForMainItems) 
  //     buildSideItems(arrayForSideItems); 
      
      // if(leftClickCounter > 0) { 
      //     leftClickCounter = 0; 
      // } 
  // } 
  if ((rightClickCounter > 0 && leftClickCounter === 0) || (rightClickCounter === 0 && leftClickCounter > 0)) { 
    console.log(2)
      if(AnimationEvent.animationName === 'move-to-right') { 
          slider.classList.remove('transition-to-right'); 
          cardState = mainItem.innerHTML; 
          mainItem.innerHTML = rightItem.innerHTML; 
          // console.log('for3', arrayForMainItems, arrayForSideItems) 
          arrayForMainItems = arrayForSideItems;
          // console.log('for3 changes', arrayForMainItems, arrayForSideItems) 
          leftItem.innerHTML = ''; 
          rightItem.innerHTML = '';
          addIndexForSideItems(arrayForMainItems); 
          // console.log('afterFunc', arrayForSideItems)
          buildSideItems(arrayForSideItems); 
        } 

        if(AnimationEvent.animationName === 'move-to-left') { 
          slider.classList.remove('transition-to-left'); 
          cardState = mainItem.innerHTML; 
          mainItem.innerHTML = leftItem.innerHTML; 
          // console.log('for3', arrayForMainItems, arrayForSideItems) 
          arrayForMainItems = arrayForSideItems;
          // console.log('for3 changes', arrayForMainItems, arrayForSideItems) 
          leftItem.innerHTML = ''; 
          rightItem.innerHTML = '';
          addIndexForSideItems(arrayForMainItems); 
          // console.log('afterFunc', arrayForSideItems)
          buildSideItems(arrayForSideItems); 
        }
    // leftItem.innerHTML = cardState;
    // rightItem.innerHTML = cardState;
  }
  // fsdjkfdskfj
  if ((rightClickCounter > 0 && leftClickCounter === 1) || (leftClickCounter > 0 && rightClickCounter === 1)) { 
    if (AnimationEvent.animationName === 'move-to-left') {
      console.log(3)
      slider.classList.remove('transition-to-left'); 
      leftItem.innerHTML = cardState; 
      mainItem.innerHTML = leftItem.innerHTML; 
      // leftItem.innerHTML = ''; 
      // rightItem.innerHTML = ''; 
      // console.log('1', arrayForMainItems, '2', arrayForSideItems);
      // addIndexForSideItems(arrayForMainItems)
      // buildSideItems(arrayForMainItems); 
      // console.log('3', arrayForMainItems, '6', arrayForSideItems);
      // console.log('for3', arrayForMainItems, arrayForSideItems) 
          arrayForMainItems = arrayForSideItems;
          // console.log('for3 changes', arrayForMainItems, arrayForSideItems) 
          leftItem.innerHTML = ''; 
          rightItem.innerHTML = '';
          addIndexForSideItems(arrayForMainItems); 
          // console.log('afterFunc', arrayForSideItems)
          buildSideItems(arrayForSideItems); 
      rightClickCounter = 0; 
      leftClickCounter = 0; 
      cardState = ''; 
    }

    if (AnimationEvent.animationName === 'move-to-right') {
      console.log(7)
      slider.classList.remove('transition-to-right'); 
      leftItem.innerHTML = cardState; 
      mainItem.innerHTML = rightItem.innerHTML; 
      // leftItem.innerHTML = ''; 
      // rightItem.innerHTML = ''; 
      // console.log('1', arrayForMainItems, '2', arrayForSideItems);
      // addIndexForSideItems(arrayForMainItems)
      // buildSideItems(arrayForMainItems); 
      // console.log('3', arrayForMainItems, '6', arrayForSideItems);
      // console.log('for3', arrayForMainItems, arrayForSideItems) 
          arrayForMainItems = arrayForSideItems;
          // console.log('for3 changes', arrayForMainItems, arrayForSideItems) 
          leftItem.innerHTML = ''; 
          rightItem.innerHTML = '';
          addIndexForSideItems(arrayForMainItems); 
          // console.log('afterFunc', arrayForSideItems)
          buildSideItems(arrayForSideItems); 
      rightClickCounter = 0; 
      leftClickCounter = 0; 
      cardState = ''; 
    }
     
  } 

  if (rightClickCounter > 0 && leftClickCounter > 1 && AnimationEvent.animationName === 'move-to-left') { 
    console.log(4)
      slider.classList.remove('transition-to-left'); 
      mainItem.innerHTML = leftItem.innerHTML; 
      leftItem.innerHTML = ''; 
      rightItem.innerHTML = ''; 
      arrayForMainItems = arrayForSideItems; 
      addIndexForSideItems(arrayForSideItems) 
      buildSideItems(arrayForSideItems);  
      rightClickCounter = 0; 
      leftClickCounter = 0; 
  } 
    buttonLeft.addEventListener('click', motionToLeft) 
    buttonRight.addEventListener('click', motionToRight) 
})


//popup

const popup = document.querySelector('.popup-wrapper');
const sliderCards = document.querySelectorAll('.slider__card');
const popupButton = document.querySelector('.popup__button');
const sliderWrapper = document.querySelector('.slider-wrapper');


sliderWrapper.addEventListener('click', (e) => {
  console.log(e)
  if (e.target.classList.contains('slider__card') || e.target.parentNode.classList.contains('slider__card')) {
    popup.classList.add('visible')
    let card
    if(e.target.classList.contains('slider__card')) {
      card = e.target;
    } else {
      card = e.target.parentNode;
    }
    let petIndex = parseInt(card.getAttribute('data-pet-index'));
    generatePopup(petIndex)
  }
  document.querySelector('body').style.overflow = 'hidden';
})

function generatePopup (petIndex) {
  const petImg = document.querySelector('.popup .cards__pet-photo');
  const petName = document.querySelector('.pet-name');
  const petBreed = document.querySelector('.pet-breed');
  const petDescription = document.querySelector('.pet-description');
  const petAge = document.querySelector('.pet-age :nth-child(2)');
  console.log('1', petAge);
  const petInoculation = document.querySelector('.pet-inoculation :nth-child(2)');
  const petDiseases = document.querySelector('.pet-diseases :nth-child(2)');
  const petParasites = document.querySelector('.pet-parasites :nth-child(2)');

  petImg.src = pets[petIndex].img;
  petName.textContent = pets[petIndex].name;
  petBreed.textContent = pets[petIndex].breed;
  petDescription.textContent = pets[petIndex].description;
  petAge.textContent = pets[petIndex].age;
  petInoculation.textContent = pets[petIndex].inoculations.join(',');
  petDiseases.textContent = pets[petIndex].diseases.join(',');
  petParasites.textContent = pets[petIndex].parasites.join(',');

}



// sliderCards.forEach(el => {
//   el.addEventListener('click', () => {
//     popup.classList.add('visible')
//   })
// }) 

popupButton.addEventListener('click', () => {
  popup.classList.remove('visible');
  document.querySelector('body').style.overflow = 'inherit';
})


popup.addEventListener('click', (e) => {
  if (e.target !== popup) {
    return;
  } 
  popup.classList.remove('visible');
  document.querySelector('body').style.overflow = 'inherit';
})