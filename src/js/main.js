const main = document.createElement("div");
main.classList.add("main");

const mainTop = document.createElement("div");
mainTop.classList.add("main-top");

const mainTopSlider = document.createElement("div");
mainTopSlider.classList.add("main-top__slider", "slider");

const mainTopContacts = document.createElement("div");
mainTopContacts.classList.add("main-top__contacts");

mainTop.appendChild(mainTopSlider);
mainTop.appendChild(mainTopContacts);

main.appendChild(mainTop);

export { main };


