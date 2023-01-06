https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch('https://api.openweathermap.org/data/2.5/forecast?lat=42.1167&lon=-86.4542&appid=16c3d00c60dcdcff5c5a0a91a5169a6a')
  .then((response) => response.json())
  .then((data) => console.log(data));

  //search function

  let clickSearch = document.querySelector('.search');

  function search() {

    let city = document.querySelector('.city').value;

    console.log(city);

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16c3d00c60dcdcff5c5a0a91a5169a6a&units=imperial`)
    .then((response) => response.json())
    .then((data) => console.log(data));
  }

  clickSearch.addEventListener('click', search);

  clickSearch.addEventListener('click', () => {
    
  });