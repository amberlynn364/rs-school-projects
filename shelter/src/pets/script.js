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

// let arrayForMainItems = [];
// function generateCardSequence () {
//   while(arrayForMainItems.length <= 7) {
//     let indexForItems = Math.round(Math.random() * 7);
//     if(!arrayForMainItems.includes(indexForItems)) {
//       arrayForMainItems.push(indexForItems);
//     }
//   }
// }
// generateCardSequence();

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
// arrayForMainItems.forEach(el => {
//   createItem(el)
// })

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
const firstPageButton = document.querySelector('#first-page');
const prevButton = document.querySelector('#prev');
const currentButton = document.querySelector('#page-number')
const nextButton = document.querySelector('#next');
const lastPageButton = document.querySelector('#last-page');


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

let checkButtonDisabled = function() {
  currentPage == 1 ? (prevButton.classList.add('button_round_disabled')) : prevButton.classList.remove('button_round_disabled');
  currentPage == 1 ? (firstPageButton.classList.add('button_round_disabled')) : firstPageButton.classList.remove('button_round_disabled');
  currentPage == numPages() ? nextButton.classList.add('button_round_disabled') : nextButton.classList.remove('button_round_disabled');
  currentPage == numPages() ? lastPageButton.classList.add('button_round_disabled') : lastPageButton.classList.remove('button_round_disabled');
}


let numPages = function() {
  return Math.ceil(mainArr.length / itemsPerPage);  
}
numPages()

let changePage = function(page) {

  if (page < 1) {
      page = 1;
  } 
  if (page > (numPages() -1)) {
      page = numPages();
  }

  itemsWrapper.innerHTML = "";

  for(var i = (page -1) * itemsPerPage; i < (page * itemsPerPage) && i < mainArr.length; i++) {
      // listingTable.innerHTML += "<div class='objectBlock'>" + objJson[i].adName + "</div>";
      console.log(i)
      createItem(i)
  }
  checkButtonDisabled();
  // selectedPage();
}
console.log(mainArr)

changePage(2);

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
  } 
}

nextButton.addEventListener('click', nextPage)
prevButton.addEventListener('click', prevPage)

// let selectedPage = function() {
//   for (let i = 0; i < page_number.length; i++) {
//       if (i == current_page - 1) {
//           page_number[i].style.opacity = "1.0";
//       } 
//       else {
//           page_number[i].style.opacity = "0.5";
//       }
//   }   
// } 






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

