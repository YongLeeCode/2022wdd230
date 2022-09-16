let date = new Date();
let year = date.getFullYear();  
let currentdate = document.lastModified;

document.querySelector('.year').textContent = year;
console.log(currentdate);
document.querySelector('.updated').textContent = currentdate;