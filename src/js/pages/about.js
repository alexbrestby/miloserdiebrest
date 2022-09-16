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

const aboutPageRow3 = document.createElement("div");
aboutPageRow3.classList.add("row-3");

const aboutPageText1 = document.createElement("div");
aboutPageText1.classList.add("about-text");
aboutPageText1.innerHTML = `<p>Мы считаем крайне важным видеть в каждом из наших подопечных человека, нуждающегося в помощи, а не представителя «социального слоя» или пример «социальной проблемы». Часто работа с подопечным строится на совместном вырабатывании индивидуального плана выхода из кризисной ситуации и последовательном его выполнении. Мы понимаем, что даже такой большой организации, как наша, не под силу изменить весь мир. Но мы точно знаем, что можем оказать реальную помощь десяткам людей, и стремимся к этому..</p><p>На 80% наша служба  существует на пожертвования, поэтому судьба всех, кому мы помогаем, зависит от того, насколько регулярно поступают средства от благотворителей. Сегодня у нас около 70 постоянных подопечных - тех, о ком мы заботимся из года в год. </p>`;

const aboutPageImgPigeonsWrapper = document.createElement("div");
aboutPageImgPigeonsWrapper.classList.add("img-wrapper");
const aboutPageImgPigeons = document.createElement("img");
aboutPageImgPigeons.src = `assets/images/slide_21.jpg`;
aboutPageImgPigeons.alt = 'slide_21';
aboutPageImgPigeonsWrapper.appendChild(aboutPageImgPigeons);

aboutPageRow3.appendChild(aboutPageImgPigeonsWrapper);
aboutPageRow3.appendChild(aboutPageText1);
aboutPage.appendChild(aboutPageRow3);

export { aboutPage }