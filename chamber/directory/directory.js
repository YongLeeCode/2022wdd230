const requestURL = "C:\Users\dydgh\Documents\YongLeeCode\wdd230\wdd230\chamber\directory\data.json";

async function getDirectory(requestURL){
    const response = await fetch('data.json');
    console.log(response);
    if(response.ok){ 
        const jsonObject = await response.json();
        console.log(jsonObject);
        const directory = jsonObject['directory'];
        directory.forEach(directoryTable);
        directory.forEach(directoryCard);
    }
};

getDirectory(requestURL);

function directoryTable(item)
{
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdAddress = document.createElement("td");
    let tdNumber = document.createElement("td");
    let tdWebsite = document.createElement("a");
    
    tdName.textContent = item.name;
    tdAddress.textContent = item.address;
    tdNumber.textContent = item.number;
    tdWebsite.textContent = item.website;

    tdWebsite.href = item.website;  // Add the link to it 

    tr.appendChild(tdName);
    tr.appendChild(tdAddress);
    tr.appendChild(tdNumber);
    tr.appendChild(tdWebsite);

    document.querySelector(".directoryTable").appendChild(tr);
}

function directoryCard(item)
{
    let section = document.createElement("section");
    let pAddress = document.createElement('p');
    let pNumber = document.createElement('p');
    let pWebsite = document.createElement('a');
    let img = document.createElement('img');

    pAddress.textContent = item.address;
    pNumber.textContent = item.number;
    pWebsite.textContent = item.website;

    pWebsite.href = item.website;  // Add the link to it 

    img.setAttribute('src', item.img);

    section.appendChild(img);
    section.appendChild(pAddress);
    section.appendChild(pNumber);
    section.appendChild(pWebsite);

    document.querySelector(".directoryCards").appendChild(section);
}

function hideTable()
{
    let card = document.querySelector(".directoryCards");
    let cardStyle = getComputedStyle(card);
    let table = document.querySelector(".directoryTable");
    if (cardStyle.display == "none")
    {
        card.style.display = "grid"; 
        table.style.display = "none"; 
    }
}

function hideCard()
{
    let table = document.querySelector(".directoryTable");
    let tableStyle = getComputedStyle(table);
    let card = document.querySelector(".directoryCards");
    if (tableStyle.display == "none")
    {
        table.style.display = "block";
        card.style.display = "none";
    }
}

document.querySelector("#cardsButton").addEventListener('click', hideTable); // if add switchButton() meaning calling the button without clicking
document.querySelector("#tableButton").addEventListener('click', hideCard);