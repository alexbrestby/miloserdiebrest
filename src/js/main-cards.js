const mainCards = document.createElement("div");
mainCards.classList.add("main-cards");

const mainCardsSlider = document.createElement("div");
mainCardsSlider.classList.add("main-cards__slider", "cards-slider");

const cardSliderNameArray = ["организация обедов", "банный день", "медобеспечение", "сбор одежды", "автобус милосердия", "восстановление документов"];


for (let i = 0; i < 6; i++) {
  let cardSliderItem = document.createElement("div");
  cardSliderItem.classList.add("cards-slider__item");
  cardSliderItem.innerHTML = `${cardSliderNameArray[i]}`
  mainCardsSlider.appendChild(cardSliderItem);
}

mainCards.appendChild(mainCardsSlider);


export { mainCards };