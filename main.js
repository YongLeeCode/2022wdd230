let date = new Date();
let year = date.getFullYear();  
let currentdate = document.lastModified;

document.querySelector('.year').textContent = year;
console.log(currentdate);
document.querySelector('.updated').textContent = currentdate;

const fulldate1 = dayName + ", " + d.getDate() + ", "+ monthName + " " + year;
const fulldate2= `${dayName}, ${d.getDate()}, ${monthName} ${year}`;
const daysUntil= `There are ${daycount} days until ${targetEvent}!`;
