const header = document.createElement("div");
header.classList.add("header");

const nav = document.createElement("nav");
nav.classList.add("nav");
header.appendChild(nav);

const navLogo = document.createElement("div");
navLogo.classList.add("nav-logo");
const navLogoImg = document.createElement("img");
navLogoImg.classList.add("nav-logo__img");
navLogoImg.src = `assets/images/miloserdie_logo.jpg`;
navLogo.appendChild(navLogoImg);
nav.appendChild(navLogo);

const navUl = document.createElement("ul");
navUl.classList.add("nav-list");
nav.appendChild(navUl);

const navArray = ["Главная", "Продукты", "Помочь", "Контакты"]

for (let i = 0; i < 4; i++) {
    let navLi = document.createElement("li");
    navLi.classList.add("nav-item");

    let navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.href = `#`;
    navLink.innerHTML = navArray[i];

    navLi.appendChild(navLink);
    navUl.appendChild(navLi);
}


export { header };