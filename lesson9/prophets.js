const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

async function getProphets(requestURL){
    const response = await fetch(requestURL); // Await is designed for waiting for the server of the json file response
    console.log(response);
    if(response.ok){ // to make sure the server is running
        const jsonObject = await response.json();
        console.log(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    }
};

getProphets(requestURL);

function displayProphets(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let img = document.createElement('img');

    h2.textContent = item.name + ' ' + item.lastname;
    h3.textContent = 'Date of Birth: ' + item.birthdate;
    h4.textContent = 'Place of Birth: ' + item.birthplace;

    img.setAttribute('src', item.imageurl);
    

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(img);
    document.querySelector(".cards").appendChild(card);
}


// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//   });

//   const prophets = jsonObject['prophets'];

//   prophets.forEach(displayProphets);

//   function displayProphets(prophet) {  // Create elements to add to the document
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
//     h2.textContent = prophet.name + ' ' + prophet.lastname;
//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
//     // Add/append the existing HTML div with the cards class with the section(card)
//     document.querySelector('div.cards').appendChild(card);
//   }

//   image.setAttribute('src', prophet.imageurl);
// // const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// // fetch(requestURL)
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (jsonObject) {
// //     console.table(jsonObject);  // temporary checking for valid response and data parsing
// //   });

// // const prophets = jsonObject['prophets'];
// // prophets.forEach(displayProphets);

// // function displayProphets(prophet) {  // Create elements to add to the document
// //     let card = document.createElement('section');
// //     let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
// //     h2.textContent = prophet.name + ' ' + prophet.lastname;
// //     // Add/append the section(card) with the h2 element
// //     card.appendChild(h2);
// //     // Add/append the existing HTML div with the cards class with the section(card)
// //     document.querySelector('div.cards').appendChild(card);
// //   }

// // let h2 = documents.createElement('h2');
// // let dob = documents.createElement('p');
// // let pob = documents.createElement('p');
// // let img = documents.createElement('img');

// // h2.textContent = item.name + ' ' + item.lastname;
// // dob.textContent = item.birthdate;
// // pob.textContent = item.birthplace;
// // img.setAttribute('src', item.imageurl);
// // img.setAttribute('alt', item.name + ' ' + item.lastname);

// // card.appendChild(h2).appendChild(dob).appendChild(pob).appendChild(img);
// // document.querySelector('.cards').appendChild(card);