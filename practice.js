// SEQUENCE
//'let' is variable
let date = new Date();

console.log(date);

let year = date.getFullYear();  

//'console.log' is method (print와 비슷한 의미인듯)
console.log("무슨일이야.")

//괄호(h1)에 해당되는 것을 변환시키는 것이다.
document.querySelector('h1').textContent = year;

let currentdate = document.lastModified;
console.log(currentdate);
document.querySelector('div').textContent = currentdate;
let month = date.getMonth();
document.querySelector('h2').textContent = month;