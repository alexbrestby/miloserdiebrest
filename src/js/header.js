const header = document.createElement("div");
header.classList.add("header");

const logo = document.createElement("div");
logo.classList.add("logo");

const logoLink = document.createElement("a");
logoLink.href = `https://miloserdiebrest.com`;

const logoImg = document.createElement("img");
logoImg.classList.add("logo__img");
logoImg.src = `assets/images/logo.jpg`;
logoLink.appendChild(logoImg)
logo.appendChild(logoLink);

const logoBrand = document.createElement("div");
logoBrand.classList.add("logo__brand");

const logoHeaderH1 = document.createElement("h1");
logoHeaderH1.classList.add("logo__brand-h1");
logoHeaderH1.innerHTML = `милосердие`;

const logoText = document.createElement("p");
logoText.classList.add("logo__brand-p")
logoText.innerHTML = `православная служба помощи`;

logoBrand.appendChild(logoHeaderH1);
logoBrand.appendChild(logoText);
logo.appendChild(logoBrand);

header.appendChild(logo);

const nav = document.createElement("nav");
nav.classList.add("nav");


const navUl = document.createElement("ul");
navUl.classList.add("nav-list");
nav.appendChild(navUl);

const navArray = ["О службе", "Помощь бездомным", "Как помочь", "Попросить о помощи"]
const navArrayLinks = ["about", "help-homeless", "how-to-help", "ask-for-help"]

for (let i = 0; i < 4; i++) {
  let navLi = document.createElement("li");
  navLi.classList.add("nav-item");

  let navLink = document.createElement("a");
  navLink.classList.add("nav-link");
  navLink.href = `?${navArrayLinks[i]}`;
  navLink.innerHTML = navArray[i];

  navLi.appendChild(navLink);
  navUl.appendChild(navLi);
}

header.appendChild(nav);


export { header };