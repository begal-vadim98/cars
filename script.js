'use strict'
const boxList = document.querySelector('.box-list');
const btn = document.getElementById('selected');


let selected = [];

// Funtion Отрисовки карточек 

const renderCard = (data) => {

  boxList.innerHTML = '';

  data.cars.forEach(elem => {
  
    if(btn.options[btn.selectedIndex].value === elem.brand)  {
       boxList.insertAdjacentHTML('beforeend', `<div class="card">
       <li>
       <p>Модель: ${elem.model}</p>
     </li>
       <li><p>Цена: ${elem.price}</p>
     </li>
       </div>`)
    }
    
  })
}


const renderSelected = (data) => {
  data.cars.forEach(elem => {
    if(!selected.includes(elem.brand)) selected.push(elem.brand)
  })

  selected.sort().forEach(option => {
    btn.insertAdjacentHTML('beforeend', `<option value="${option}">${option}</option>`)
  })
}

// Функция получения данных для отрисовки selected
const getDataMovie = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    renderSelected(data)
  })
  .catch(error => console.log("Ошибка получения данных"))
}

const getData = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    renderCard(data)
  })
  .catch(error => console.log("Ошибка получения данных"))
}

btn.addEventListener('change', () => getData('cars.json'));


// Получение и отрисовка selected
getDataMovie('cars.json');