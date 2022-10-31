let date = new Date();
let year = date.getFullYear();
document.querySelector(".year").textContent = year;
document.querySelector(".lastUpdate").textContent = document.lastModified;

function toggleMenu() {
    document.getElementById(".navigation").classList.toggle("open");
}

const x = document.getElementById("menu")
x.onclick = toggleMenu;