const aboutPage = document.createElement("div");
aboutPage.classList.add("about");

const aboutPageRow1 = document.createElement("div");
aboutPageRow1.classList.add("row-1");

const aboutHeader = document.createElement("h1");
aboutHeader.classList.add("about-header");
aboutHeader.innerHTML = `О службе`;

const aboutQuote = document.createElement("blockquote");
aboutQuote.innerHTML = `Отпускай хлеб твой по водам, потому что по прошествии многих дней опять найдешь его.`;

const aboutQuoteCiteLink = document.createElement("a");
aboutQuoteCiteLink.href = `https://azbyka.ru/biblia/in/?Eccl.11:1&r`;
aboutQuoteCiteLink.target = `_blank`;

const aboutQuoteCite = document.createElement("cite");
aboutQuoteCite.innerHTML = `Еккл.11.1`;
aboutQuoteCiteLink.appendChild(aboutQuoteCite);

aboutQuote.appendChild(aboutQuoteCiteLink);
aboutPageRow1.appendChild(aboutHeader);
aboutPageRow1.appendChild(aboutQuote);

aboutPage.appendChild(aboutPageRow1);

const aboutPageRow2 = document.createElement("div");
aboutPageRow2.classList.add("row-2");

const aboutPageText = document.createElement("div");
aboutPageText.classList.add("about-text");
aboutPageText.innerHTML = `<p>Православная служба помощи "Милосердие в Бресте"
действует по благословению Высокопреосвященнейшего Иоанна, Архиепископа Брестского и Кобринского.</p><p>Бездомные люди – кто они? Мужчины и женщины, вчерашние мальчишки и глубокие старики, работяги и беспомощные инвалиды, тихони и те, кто вечно «на взводе». Те, кто за годы жизни на улице приспособился и обустроил свой нехитрый быт, и те, кто совсем недавно имел дом и семью и лелеет надежду вернуться. Разные люди, разные судьбы. Бездомными становятся по-разному. Среди них: бывшие детдомовцы, те, кто приехал в на заработки, выходцы из мест лишения свободы, старики, которых выгнали собственные дети. В большом городе бездомным легче выжить. По некоторым данным, в Бресте около 200 бездомных. И им нужна наша помощь!</p>`;


const aboutPageImgBusWrapper = document.createElement("div");
aboutPageImgBusWrapper.classList.add("img-wrapper");
const aboutPageImgBus = document.createElement("img");
aboutPageImgBus.src = `assets/images/slide_20.jpg`;
aboutPageImgBus.alt = 'slide_20';
aboutPageImgBusWrapper.appendChild(aboutPageImgBus);

aboutPageRow2.appendChild(aboutPageText);
aboutPageRow2.appendChild(aboutPageImgBusWrapper);
aboutPage.appendChild(aboutPageRow2);




export { aboutPage }