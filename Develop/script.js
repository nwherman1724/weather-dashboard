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
    
      cityEl.textContent = `${data.name}` + " " + "(" + dayjs().format('DD/MM/YYYY') + ")" + " ";

      let iconCode = data.weather[0].icon;
      let icon = 'http://openweathermap.org/img/w/' + iconCode + '.png'
      var weatherIcon = document.createElement('img');
      weatherIcon.setAttribute('src', icon);
      weatherIcon.setAttribute('class','weatherImg');
      weatherIcon.setAttribute('alt', 'weather icon');
      cityEl.append(weatherIcon);

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
        
          const date1 = document.getElementById('date1')
          const dateFormat = new Date((data.list[2].dt) * 1000);
          date1.textContent = dateFormat.toDateString();
        

          const icon1 = document.getElementById('icon1');

          let iconCode2 = data.list[2].weather[0].icon;
          var day1Icon = 'http://openweathermap.org/img/w/' + iconCode2 + '.png'
          var weatherIconDay1 = document.createElement('img');
          weatherIconDay1.setAttribute('src', day1Icon)
          icon1.append(weatherIconDay1);
          
          const temp1 = document.getElementById('temp1');
          temp1.textContent = "Temp: " + `${data.list[2].main.temp}` + " F";

          const wind1 = document.getElementById('wind1');
          wind1.textContent = "Wind: " + `${data.list[2].wind.speed}` + " mph";

          const humid1 = document.getElementById('humid1');
          humid1.textContent = "Humidity: " + `${data.list[2].main.humidity}` + "%";

          const date2 = document.getElementById('date2')
          const dateFormat2 = new Date((data.list[10].dt) * 1000);
          date2.textContent = dateFormat2.toDateString();

          const icon2 = document.getElementById('icon2');

          let iconCode3 = data.list[10].weather[0].icon;
          var day2Icon = 'http://openweathermap.org/img/w/' + iconCode3 + '.png'
          var weatherIconDay2 = document.createElement('img');
          weatherIconDay2.setAttribute('src', day2Icon)
          icon2.append(weatherIconDay2);

          const temp2 = document.getElementById('temp2');
          temp2.textContent = "Temp: " + `${data.list[10].main.temp}` + " F";

          const wind2 = document.getElementById('wind2');
          wind2.textContent = "Wind: " + `${data.list[10].wind.speed}` + " mph";

          const humid2 = document.getElementById('humid2');
          humid2.textContent = "Humidity: " + `${data.list[10].main.humidity}` + "%";

          const date3 = document.getElementById('date3')
          const dateFormat3 = new Date((data.list[18].dt) * 1000);
          date3.textContent = dateFormat3.toDateString();

          const icon3 = document.getElementById('icon3');

          let iconCode4 = data.list[18].weather[0].icon;
          var day3Icon = 'http://openweathermap.org/img/w/' + iconCode4 + '.png'
          var weatherIconDay3 = document.createElement('img');
          weatherIconDay3.setAttribute('src', day3Icon)
          icon3.append(weatherIconDay3);

          const temp3 = document.getElementById('temp3');
          temp3.textContent = "Temp: " + `${data.list[18].main.temp}` + " F";

          const wind3 = document.getElementById('wind3');
          wind3.textContent = "Wind: " + `${data.list[18].wind.speed}` + " mph";

          const humid3 = document.getElementById('humid3');
          humid3.textContent = "Humidity: " + `${data.list[18].main.humidity}` + "%";

          const date4 = document.getElementById('date4')
          const dateFormat4 = new Date((data.list[26].dt) * 1000);
          date4.textContent = dateFormat4.toDateString();

          const icon4 = document.getElementById('icon4');

          let iconCode5 = data.list[26].weather[0].icon;
          var day4Icon = 'http://openweathermap.org/img/w/' + iconCode5 + '.png'
          var weatherIconDay4 = document.createElement('img');
          weatherIconDay4.setAttribute('src', day4Icon)
          icon4.append(weatherIconDay4);

          const temp4 = document.getElementById('temp4');
          temp4.textContent = "Temp: " + `${data.list[26].main.temp}` + " F";

          const wind4 = document.getElementById('wind4');
          wind4.textContent = "Wind: " + `${data.list[26].wind.speed}` + " mph";

          const humid4 = document.getElementById('humid4');
          humid4.textContent = "Humidity: " + `${data.list[26].main.humidity}` + "%";

          const date5 = document.getElementById('date5')
          const dateFormat5 = new Date((data.list[34].dt) * 1000);
          date5.textContent = dateFormat5.toDateString();

          const icon5 = document.getElementById('icon5');

          let iconCode6 = data.list[34].weather[0].icon;
          var day5Icon = 'http://openweathermap.org/img/w/' + iconCode6 + '.png'
          var weatherIconDay5 = document.createElement('img');
          weatherIconDay5.setAttribute('src', day5Icon)
          icon5.append(weatherIconDay5);

          const temp5 = document.getElementById('temp5');
          temp5.textContent = "Temp: " + `${data.list[34].main.temp}` + " F";

          const wind5 = document.getElementById('wind5');
          wind5.textContent = "Wind: " + `${data.list[34].wind.speed}` + " mph";

          const humid5 = document.getElementById('humid5');
          humid5.textContent = "Humidity: " + `${data.list[34].main.humidity}` + "%";


        console.log(data)})

  //localStorage.setItem('list',list.value)
    
  }

  clickSearch.addEventListener('click', search);