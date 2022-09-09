import { mainCards } from './main-cards'

const main = document.createElement("div");
main.classList.add("main");

const mainTop = document.createElement("div");
mainTop.classList.add("main-top");

const mainTopSlider = document.createElement("div");
mainTopSlider.classList.add("main-top__slider", "slider");

const sliderImagesArray = ["slide_1", "slide_2", "slide_3", "slide_4"]

for (let i = 0; i < 4; i++) {
  let sliderItem = document.createElement("div");
  sliderItem.classList.add("slider__item");
  let sliderImage = document.createElement("img");
  sliderImage.src = `assets/images/${sliderImagesArray[i]}.jpg`;
  sliderImage.alt = sliderImagesArray[i];
  sliderItem.appendChild(sliderImage);
  mainTopSlider.appendChild(sliderItem);
}

const mainTopContacts = document.createElement("div");
mainTopContacts.classList.add("main-top__contacts", "main-contacts");

const mainTopInfo = document.createElement("div");
mainTopInfo.classList.add("main-contacts__info");

const mainTopInfoText = document.createElement("div");
mainTopInfoText.classList.add("main-contacts__text");
mainTopInfoText.innerHTML = `работа службы организована на пожертвования`;
mainTopInfo.appendChild(mainTopInfoText);

const mainTopInfoDonateButton = document.createElement("div");
mainTopInfoDonateButton.classList.add("main-contacts__donate", "donate");
mainTopInfoDonateButton.innerHTML = `сделать пожертвование`;
mainTopInfo.appendChild(mainTopInfoDonateButton);

const mainTopInfoCoordinator = document.createElement("div");
mainTopInfoCoordinator.classList.add("main-contact__cordinator", "coordinator");

const mainTopInfoCoordinatorTitle = document.createElement("p");
mainTopInfoCoordinatorTitle.classList.add("coordinator__title");
mainTopInfoCoordinatorTitle.innerHTML = `координатор службы`;
mainTopInfoCoordinator.appendChild(mainTopInfoCoordinatorTitle);

const mainTopInfoCoordinatorName = document.createElement("h3");
mainTopInfoCoordinatorName.classList.add("coordinator__name");
mainTopInfoCoordinatorName.innerHTML = `Игорь Павлович ДМИТРУК`;
mainTopInfoCoordinator.appendChild(mainTopInfoCoordinatorName);

const mainTopInfoCoordinatorPhone1 = document.createElement("p");
mainTopInfoCoordinatorPhone1.classList.add("coordinator__phone");
mainTopInfoCoordinatorPhone1.innerHTML = `+375 297 20 49 46`;
mainTopInfoCoordinator.appendChild(mainTopInfoCoordinatorPhone1);

const mainTopInfoCoordinatorPhone2 = document.createElement("p");
mainTopInfoCoordinatorPhone2.classList.add("coordinator__phone");
mainTopInfoCoordinatorPhone2.innerHTML = `+375 336 86 24 00`;
mainTopInfoCoordinator.appendChild(mainTopInfoCoordinatorPhone2);

mainTopInfo.appendChild(mainTopInfoCoordinator);
mainTopContacts.appendChild(mainTopInfo);


mainTop.appendChild(mainTopSlider);
mainTop.appendChild(mainTopContacts);

main.appendChild(mainTop);
main.appendChild(mainCards);

export { main };


