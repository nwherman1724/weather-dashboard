$(function () {

//used day.js library to pull the date/time and format it to be printed to the page
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

  //sets currentTime equal to the time in hours
  let currentTime = dayjs().format('H');


  // Function that changes the color of the time block based on the time time of day
  function changeColor() {

  // initializing variable that point to each time block element
  var nine = document.getElementById('hour-9');
  var ten = document.getElementById('hour-10');
  var eleven = document.getElementById('hour-11');
  var twelve = document.getElementById('hour-12');
  var thirteen = document.getElementById('hour-13');
  var fourteen = document.getElementById('hour-14');
  var fifteen = document.getElementById('hour-15');
  var sixteen = document.getElementById('hour-16');
  var seventeen = document.getElementById('hour-17');

  // if currentTime is greater than 9 remove the class present and add the class past
  // this changes the color
  if(currentTime > 9) {
    nine.classList.remove('present')
    nine.classList.add('past')
  } 
  // if currentTime is less than 9 remove the class present and add the class future
  // this changes the color
  else if (currentTime < 9){
    nine.classList.remove('present')
    nine.classList.add('future')
  }
  // same logic in lines 39-37 applies in lines 50-105
  if(currentTime > 10) {
    ten.classList.remove('present')
    ten.classList.add('past')
  } else if (currentTime < 10){
    ten.classList.remove('present')
    ten.classList.add('future')
  }
  if(currentTime > 11) {
    eleven.classList.remove('present')
    eleven.classList.add('past')
  } else if (currentTime < 11){
    eleven.classList.remove('present')
    eleven.classList.add('future')
  }
  if(currentTime > 12) {
    twelve.classList.remove('present')
    twelve.classList.add('past')
  } else if (currentTime < 12){
    twelve.classList.remove('present')
    twelve.classList.add('future')
  }
  if(currentTime > 13) {
    thirteen.classList.remove('present')
    thirteen.classList.add('past')
  } else if (currentTime < 13){
    thirteen.classList.remove('present')
    thirteen.classList.add('future')
  }
  if(currentTime > 14) {
    fourteen.classList.remove('present')
    fourteen.classList.add('past')
  } else if (currentTime < 14){
    fourteen.classList.remove('present')
    fourteen.classList.add('future')
  }
  if(currentTime > 15) {
    fifteen.classList.remove('present')
    fifteen.classList.add('past')
  } else if (currentTime < 15){
    fifteen.classList.remove('present')
    fifteen.classList.add('future')
  }
  if(currentTime > 16) {
    sixteen.classList.remove('present')
    sixteen.classList.add('past')
  } else if (currentTime < 16){
    sixteen.classList.remove('present')
    sixteen.classList.add('future')
  }
  if(currentTime > 17) {
    seventeen.classList.remove('present')
    seventeen.classList.add('past')
  } else if (currentTime < 17){
    seventeen.classList.remove('present')
    seventeen.classList.add('future')
  }
  }

  // Calling change color function
  changeColor();
  

  let save_9 = document.getElementById('save-9');
  let timeBlock_9 = document.querySelector('#text-9')


  // saves inputs to local storage upon click
  save_9.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-9').value;

   localStorage.setItem('text-9', text);

  })

  //gets text-9 from local storage upon page load.
  let input_9 = localStorage.getItem('text-9');
  timeBlock_9.textContent = input_9;


  //time block 10
  let save_10 = document.getElementById('save-10');
  let timeBlock_10 = document.querySelector('#text-10')


  // saves inputs to local storage upon click
  save_10.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-10').value;

   localStorage.setItem('text-10', text);

  })

  //gets text-10 from local storage upon page load.
  let input_10 = localStorage.getItem('text-10');
  timeBlock_10.textContent = input_10;


  //time block 11
  let save_11 = document.getElementById('save-11');
  let timeBlock_11 = document.querySelector('#text-11')


  // saves inputs to local storage upon click
  save_11.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-11').value;

   localStorage.setItem('text-11', text);

  })

  //gets text-11 from local storage upon page load.
  let input_11 = localStorage.getItem('text-11');
  timeBlock_11.textContent = input_11;


  //time block 12
  let save_12 = document.getElementById('save-12');
  let timeBlock_12 = document.querySelector('#text-12')


  // saves inputs to local storage upon click
  save_12.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-12').value;

   localStorage.setItem('text-12', text);

  })

  //gets text-12 from local storage upon page load.
  let input_12 = localStorage.getItem('text-12');
  timeBlock_12.textContent = input_12;


  //time block 13
  let save_13 = document.getElementById('save-13');
  let timeBlock_13 = document.querySelector('#text-13')


  // saves inputs to local storage upon click
  save_13.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-13').value;

   localStorage.setItem('text-13', text);

  })

  //gets text-13 from local storage upon page load.
  let input_13 = localStorage.getItem('text-13');
  timeBlock_13.textContent = input_13;


  //time block 14
  let save_14 = document.getElementById('save-14');
  let timeBlock_14 = document.querySelector('#text-14')


  // saves inputs to local storage upon click
  save_14.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-14').value;

   localStorage.setItem('text-14', text);

  })

  //gets text-14 from local storage upon page load.
  let input_14 = localStorage.getItem('text-14');
  timeBlock_14.textContent = input_14;


  //time block 15
  let save_15 = document.getElementById('save-15');
  let timeBlock_15 = document.querySelector('#text-15')


  // saves inputs to local storage upon click
  save_15.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-15').value;

   localStorage.setItem('text-15', text);

  })

  //gets text-15 from local storage upon page load.
  let input_15 = localStorage.getItem('text-15');
  timeBlock_15.textContent = input_15;


  //time block 16
  let save_16 = document.getElementById('save-16');
  let timeBlock_16 = document.querySelector('#text-16')


  // saves inputs to local storage upon click
  save_16.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-16').value;

   localStorage.setItem('text-16', text);

  })

  //gets text-16 from local storage upon page load.
  let input_16 = localStorage.getItem('text-16');
  timeBlock_16.textContent = input_16;


  //time block 17
  let save_17 = document.getElementById('save-17');
  let timeBlock_17 = document.querySelector('#text-17')


  // saves inputs to local storage upon click
  save_17.addEventListener('click', function(event) {

   event.preventDefault();

   let text = document.querySelector('#text-17').value;

   localStorage.setItem('text-17', text);

  })

  //gets text-11 from local storage upon page load.
  let input_17 = localStorage.getItem('text-17');
  timeBlock_17.textContent = input_17;
 

});
