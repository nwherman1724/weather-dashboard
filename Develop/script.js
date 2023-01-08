https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch('https://api.openweathermap.org/data/2.5/forecast?lat=42.1167&lon=-86.4542&appid=16c3d00c60dcdcff5c5a0a91a5169a6a')
  .then((response) => response.json())
  .then((data) => console.log());

  //search function

  let clickSearch = document.querySelector('.search');

  function search() {

    let city = document.querySelector('.city').value;

    localStorage.setItem('searchedCity', city);

    let savedCity = localStorage.getItem('searchedCity');
  
    let list = document.querySelector('#searchLog');
    
    let p = document.createElement("p")
    
    list.append(p);
      p.textContent = savedCity;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16c3d00c60dcdcff5c5a0a91a5169a6a&units=imperial`)
    .then((response) => response.json())
    .then((data) => {
      const cityEl = document.getElementById('cityName');
      cityEl.textContent = `${data.name}` + " " + "(" + dayjs().format('DD/MM/YYYY') + ")" + " " + `${data.weather.icon}`;
      const tempEl = document.getElementById('temp');
      tempEl.textContent = "Temp: " + `${data.main.temp}`

      const windEl = document.getElementById('wind');
      windEl.textContent = "Wind: " + `${data.wind.speed}`

      const humidEl = document.getElementById('humid');
      humidEl.textContent = "Humidity: " + `${data.main.humidity}`

      console.log(data)});

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16c3d00c60dcdcff5c5a0a91a5169a6a&units=imperial`)
        .then((response) => response.json())
        .then((data) => console.log(data))

  //localStorage.setItem('list',list.value)
    
  }

  clickSearch.addEventListener('click', search);