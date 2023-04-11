import './index.html';
import '../sass/pages/pets.scss';
import {pets} from '../js/pets';


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
  
//


// pagination 

const itemsWrapper = document.querySelector('.cards-wrapper');

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

itemsWrapper.innerHTML = ''

function createItem(index) {
  let item = document.createElement('div');
  item.classList.add('cards__item');
  item.setAttribute('data-pet-index', index)
  
  let itemImg = document.createElement('img');
  itemImg.src = pets[index].img;
  itemImg.alt = `${pets[index].name} photo`;
  itemImg.classList.add('cards__pet-photo');
  item.append(itemImg);

  let itemName = document.createElement('span');
  itemName.classList.add('cards__pet-name');
  itemName.textContent = `${pets[index].name}`;
  item.append(itemName)

  let itemButton = document.createElement('button');
  itemButton.classList.add('button', 'cards__button', 'button_secondary');
  itemButton.textContent = 'Learn more';
  item.append(itemButton);

  itemsWrapper.append(item);
}
arrayForMainItems.forEach(el => {
  createItem(el)
})

const genRandoms = () => {
    const result = [];
      for(let i = 0; result.length < 8; i++) {
        let j = Math.round(Math.random() * 7);
          if(!result.includes(j)) {
              result.push(j);
          }
      }
  return result;
}
let firstArray;
let secondArray;
let thirdArray;
function generateTwentyFourItems() {
  firstArray = genRandoms();
  secondArray = genRandoms();
  thirdArray = genRandoms();
  while(true) {
    if (firstArray.slice(-2).includes(secondArray.slice(0, 1)) || thirdArray.slice(0, 2).includes(secondArray.slice(-1))) {
      secondArray = genRandoms();
    } else {
      break;
    }
  }
  return firstArray.concat(secondArray, secondArray);
}

let mainArr = generateTwentyFourItems().concat(generateTwentyFourItems());

let itemsPerPage = 8;
let currentPage = 1;
const buttonFirstPage = document.querySelector('#first-page');
const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');
const buttonLastPage = document.querySelector('#last-page');


window.addEventListener('resize', () => {
  if (window.innerWidth > 1200 ) {
    itemsPerPage = 8;
  } 
  if (window.innerWidth > 720 && window.innerWidth < 1158 ) {
    itemsPerPage = 6;
  }
  if(window.innerWidth < 720) {
    itemsPerPage = 3;
  }
})

console.log(itemsPerPage)






//popup

const popup = document.querySelector('.popup-wrapper');
const sliderCards = document.querySelectorAll('.cards__item');
const popupButton = document.querySelector('.popup__button');
const sliderWrapper = document.querySelector('.cards-wrapper');


sliderWrapper.addEventListener('click', (e) => {
  console.log(e)
  if (e.target.classList.contains('cards__item') || e.target.parentNode.classList.contains('cards__item')) {
    popup.classList.add('visible')
    let card
    if(e.target.classList.contains('cards__item')) {
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