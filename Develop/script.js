https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch('https://api.openweathermap.org/data/2.5/forecast?lat=42.1167&lon=-86.4542&appid=16c3d00c60dcdcff5c5a0a91a5169a6a')
  .then((response) => response.json())
  .then((data) => console.log());

  //search function

  let clickSearch = document.querySelector('.search');

  function search() {

    let city = document.querySelector('.city').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16c3d00c60dcdcff5c5a0a91a5169a6a&units=imperial`)
    .then((response) => response.json())
    .then((data) => {
      const cityEl = document.getElementById('cityName');
      cityEl.textContent = `${data.name}` + " " + "(" + dayjs().format('DD/MM/YYYY') + ")";
      console.log(data)});

  localStorage.setItem('searchedCity', city);

  let savedCity = localStorage.getItem('searchedCity');

  let list = document.querySelector('#searchLog');
  
  let p = document.createElement("p")
  
  list.append(p);
    p.textContent = savedCity;

  //localStorage.setItem('list',list.value)
    
  }

  clickSearch.addEventListener('click', search);