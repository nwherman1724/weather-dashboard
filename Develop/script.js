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

      console.log(data.weather[0].icon)
      const cityEl = document.getElementById('cityName');
      let iconCode = data.weather[0].icon
      let icon = 'http://openweathermap.org/img/w/' + iconCode + '.png'
      var weatherIcon = document.createElement('img');
      weatherIcon.setAttribute('src', icon);
      weatherIcon.setAttribute('class','weatherImg');
      weatherIcon.setAttribute('alt', 'weather icon');
      cityEl.append(weatherIcon);

      
      cityEl.textContent = `${data.name}` + " " + "(" + dayjs().format('DD/MM/YYYY') + ")" + " " + `${data.weather[0].icon}`;
      const tempEl = document.getElementById('temp');
      tempEl.textContent = "Temp: " + `${data.main.temp}` + " F";

      const windEl = document.getElementById('wind');
      windEl.textContent = "Wind: " + `${data.wind.speed}` + " mph";

      const humidEl = document.getElementById('humid');
      humidEl.textContent = "Humidity: " + `${data.main.humidity}` + "%";

      console.log(data)});

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16c3d00c60dcdcff5c5a0a91a5169a6a&units=imperial`)
        .then((response) => response.json())
        .then((data) => {
        
          // const date1 = document.getElementById('date1');
          // date1.textContent = dayjs().format();

          // const icon1 = document.getElementById('icon1');
          // icon1.textContent = "";
          
          const temp1 = document.getElementById('temp1');
          temp1.textContent = "Temp: " + `${data.list[1].main.temp}` + " F";

          const wind1 = document.getElementById('wind1');
          wind1.textContent = "Wind: " + `${data.list[1].wind.speed}` + " mph";

          const humid1 = document.getElementById('humid1');
          humid1.textContent = "Humidity: " + `${data.list[1].main.humidity}` + "%";

          const temp2 = document.getElementById('temp2');
          temp2.textContent = "Temp: " + `${data.list[9].main.temp}` + " F";

          const wind2 = document.getElementById('wind2');
          wind2.textContent = "Wind: " + `${data.list[9].wind.speed}` + " mph";

          const humid2 = document.getElementById('humid2');
          humid2.textContent = "Humidity: " + `${data.list[9].main.humidity}` + "%";

          const temp3 = document.getElementById('temp3');
          temp3.textContent = "Temp: " + `${data.list[16].main.temp}` + " F";

          const wind3 = document.getElementById('wind3');
          wind3.textContent = "Wind: " + `${data.list[16].wind.speed}` + " mph";

          const humid3 = document.getElementById('humid3');
          humid3.textContent = "Humidity: " + `${data.list[16].main.humidity}` + "%";

          const temp4 = document.getElementById('temp4');
          temp4.textContent = "Temp: " + `${data.list[24].main.temp}` + " F";

          const wind4 = document.getElementById('wind4');
          wind4.textContent = "Wind: " + `${data.list[24].wind.speed}` + " mph";

          const humid4 = document.getElementById('humid4');
          humid4.textContent = "Humidity: " + `${data.list[24].main.humidity}` + "%";

          const temp5 = document.getElementById('temp5');
          temp5.textContent = "Temp: " + `${data.list[32].main.temp}` + " F";

          const wind5 = document.getElementById('wind5');
          wind5.textContent = "Wind: " + `${data.list[32].wind.speed}` + " mph";

          const humid5 = document.getElementById('humid5');
          humid5.textContent = "Humidity: " + `${data.list[32].main.humidity}` + "%";


        console.log(data)})

  //localStorage.setItem('list',list.value)
    
  }

  clickSearch.addEventListener('click', search);