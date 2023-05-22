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
  return firstArray.concat(secondArray, thirdArray);
}

let mainArr = generateTwentyFourItems().concat(generateTwentyFourItems());
  
  const firstPageButton = document.querySelector('#first-page');
  const prevButton = document.querySelector('#prev');
  const currentButton = document.querySelector('#page-number')
  const nextButton = document.querySelector('#next');
  const lastPageButton = document.querySelector('#last-page');
  const itemsWrapper = document.querySelector('.cards-wrapper');
  
  let itemsPerPage
  let currentPage = 1;

  let numPages = function() {
    return Math.ceil(mainArr.length / itemsPerPage);  
  }
  
  let checkButtonDisabled = function() {
    currentPage == 1 ? (prevButton.classList.add('button_round_disabled')) : prevButton.classList.remove('button_round_disabled');
    currentPage == 1 ? (firstPageButton.classList.add('button_round_disabled')) :(() => {
      firstPageButton.classList.remove('button_round_disabled');
      firstPageButton.removeAttribute('disabled');
  
    })()
    currentPage == numPages() ? nextButton.classList.add('button_round_disabled') : nextButton.classList.remove('button_round_disabled');
    currentPage == numPages() ? lastPageButton.classList.add('button_round_disabled') :(() => {
      lastPageButton.classList.remove('button_round_disabled');
      lastPageButton.removeAttribute('disabled');
    })()
  }
  function getScreenWidth () {
    if (window.innerWidth > 1200 ) {
      itemsPerPage = 8;
    } 
    if (window.innerWidth > 720 && window.innerWidth < 1158 ) {
      itemsPerPage = 6;
    }
    if(window.innerWidth < 720) {
      itemsPerPage = 3;
    }
    checkButtonDisabled()
  }
  getScreenWidth()
  
  window.addEventListener('resize', () => {
  if (window.innerWidth > 1200 ) {
    if(currentPage > 6) {
      currentPage = 6;
    }
    itemsPerPage = 8;
    changePage(currentPage)
  } 
  if (window.innerWidth > 720 && window.innerWidth < 1158 ) {
    if(currentPage > 8) {
      currentPage = 8;
    }
    itemsPerPage = 6;
    changePage(currentPage)
  }
  if(window.innerWidth < 720) {
    itemsPerPage = 3;
    changePage(currentPage)
  }
  checkButtonDisabled()
})

let changePage = function(page) {
  itemsWrapper.innerHTML = "";
  let startIndex = (page - 1) * itemsPerPage;
  let endIndex = page * itemsPerPage;
  mainArr.slice(startIndex, endIndex).forEach(el => {
    createItem(el);
  })
  currentButton.textContent = page;
  checkButtonDisabled();
}

changePage(1);

let prevPage = function() {
  if(currentPage > 1) {
      currentPage--;
      changePage(currentPage);
  }
}

let nextPage = function() {
  if(currentPage < numPages()) {
      currentPage++;
      changePage(currentPage);
      console.log(currentPage)
  } 
}

let firstPage = function() {
  changePage(1)
  currentPage = 1;
  checkButtonDisabled()
}

let lastPage = function() {
  changePage(numPages())
  currentPage = numPages();
  checkButtonDisabled()
}

firstPageButton.addEventListener('click', firstPage)
nextButton.addEventListener('click', nextPage);
prevButton.addEventListener('click', prevPage);
lastPageButton.addEventListener('click', lastPage)  

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

