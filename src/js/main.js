const main = document.createElement("div");
main.classList.add("main");

const mainTop = document.createElement("div");
mainTop.classList.add("main-top");

const mainTopSlider = document.createElement("div");
mainTopSlider.classList.add("main-top__slider", "slider");

const sliderImagesArray = ["slide_0", "slide_1", "slide_2", "slide_3"]

for (let i = 0; i < 4; i++) {
    let sliderItem = document.createElement("div");
    sliderItem.classList.add("slider__item");
    let sliderImage = document.createElement("img");
    sliderImage.src = `assets/images/${sliderImagesArray[i]}.webp`;
    sliderImage.alt = sliderImagesArray[i];
    sliderItem.appendChild(sliderImage);
    mainTopSlider.appendChild(sliderItem);
}

const mainTopContacts = document.createElement("div");
mainTopContacts.classList.add("main-top__contacts");
mainTopContacts.innerHTML = `contacts`;

mainTop.appendChild(mainTopSlider);
mainTop.appendChild(mainTopContacts);

main.appendChild(mainTop);

export { main };


