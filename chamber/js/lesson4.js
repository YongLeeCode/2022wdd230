let datePlacement = document.querySelector(".currentDate");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let today = new Date();
let month = months[today.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayText = days[today.getDay()];
let dayNum = today.getDate();

let year = today.getFullYear();

console.log(today);
console.log(days);
console.log(dayNum);
console.log(dayText);

datePlacement.innerHTML = `${dayText}, ${dayNum} ${month}, ${year}`;

let button = document.querySelector(".btn");
let links = document.querySelector(".links");

function show() {
  links.classList.toggle("disappear");
}

button.addEventListener("click", show);

let date = new Date();
let yearFoot = date.getFullYear();

document.querySelector(".yearFoot").textContent = yearFoot;

let currentDate = document.lastModified;

document.querySelector(".lastModified").textContent = currentDate;


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=1835224&appid=f99daf4b1bf7a8d11c7e7d380eb8d3b2";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  
    document.querySelector('#tempNumbers').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
    document.querySelector('#ws').textContent = jsObject.wind.speed;
    document.querySelector('#weatherCondition').textContent = jsObject.weather[0].main;

    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@2x.png`;
    
    const desc = jsObject.weather[0].description;
    document.querySelector('#weatherPic').textContent = iconsrc;
    document.querySelector('#weatherPic').setAttribute('src', iconsrc)
    document.querySelector('#weatherPic').setAttribute('alt', sunny);
  };
getWeather();