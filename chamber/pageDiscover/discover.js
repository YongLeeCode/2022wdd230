let datePlacement = document.querySelector("#currentDate");

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

const imagesToLoad = document.querySelectorAll("img[data-src]")

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
};

if("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
      });
}

if (localStorage.getItem("visitTimes"))
{
  let value = localStorage.getItem("visitTimes");
  localStorage.setItem("visitTimes", parseInt(value)+1);
}
else{
  localStorage.setItem("visitTimes", 1);
}
let time = localStorage.getItem("visitTimes");
document.querySelector(".visitTimes").textContent=`This is your ${time} ${time>1?"times":"time"} visit`;