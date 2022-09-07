const header = document.createElement("div");
header.classList.add("header");

const nav = document.createElement("nav");
nav.classList.add("nav");
header.appendChild(nav);

const navLogo = document.createElement("div");
navLogo.classList.add("nav-logo");

const navHeader = document.createElement("div");
navHeader.classList.add("nav-header");

const navLogoImg = document.createElement("img");
navLogoImg.classList.add("nav-logo__img");
navLogoImg.src = `assets/images/miloserdie_logo.jpg`;

navLogo.appendChild(navLogoImg);
nav.appendChild(navLogo);

const navHeaderH1 = document.createElement("h1");
navHeaderH1.classList.add("nav-header__h1");
navHeaderH1.innerHTML = `милосердие`;

const navHeaderP = document.createElement("p");
navHeaderP.classList.add("nav-header__p")
navHeaderP.innerHTML = `православная служба помощи`;

navHeader.appendChild(navHeaderH1);
navHeader.append(navHeaderP);
nav.appendChild(navHeader);

const navUl = document.createElement("ul");
navUl.classList.add("nav-list");
nav.appendChild(navUl);

const navArray = ["О службе", "Помощь бездомным", "Как помочь", "Новости", "Попросить о помощи"]

for (let i = 0; i < 5; i++) {
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