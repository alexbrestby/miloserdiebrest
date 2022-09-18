const mainCards = document.createElement("div");
mainCards.classList.add("main-cards");

const mainCardsSlider = document.createElement("div");
mainCardsSlider.classList.add("main-cards__slider", "cards-slider");

const cardSliderItemTitlesArray = ["организация обедов", "банный день", "медобеспечение", "сбор одежды", "автобус милосердия", "восстановление документов"];

const cardSliderItemLinksArray = ["organizaciya-obedov", "banniy-den", "medobespechenie", "sbor-odejdi", "avtobus-miloserdiya", "vosstanovlenie-doc"];


for (let i = 0; i < 6; i++) {
  let cardSliderItem = document.createElement("div");
  cardSliderItem.classList.add("cards-slider__item", "card-item");

  let cardSliderItemLink = document.createElement("a");
  cardSliderItemLink.href = `${cardSliderItemLinksArray[i]}`;
  cardSliderItemLink.target = "_blank";

  let cardSliderItemImage = document.createElement("img");
  cardSliderItemImage.classList.add("card-item__img");
  cardSliderItemImage.src = `assets/images/slide_${[i + 5]}.jpg`;
  cardSliderItemImage.alt = cardSliderItemLinksArray[i];
  cardSliderItemLink.appendChild(cardSliderItemImage);

  let cardSliderItemTitle = document.createElement("h2");
  cardSliderItemTitle.classList.add("card-item__title");
  cardSliderItemTitle.innerHTML = `${cardSliderItemTitlesArray[i]}`;
  cardSliderItemLink.appendChild(cardSliderItemTitle);

  cardSliderItem.appendChild(cardSliderItemLink);
  mainCardsSlider.appendChild(cardSliderItem);
}

mainCards.appendChild(mainCardsSlider);


export { mainCards };