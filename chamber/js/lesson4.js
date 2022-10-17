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