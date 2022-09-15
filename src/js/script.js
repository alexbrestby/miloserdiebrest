import '../style/style.sass'
import { header } from './header'
import { mainPage } from './pages/main-page'
import { helpHomeless } from './pages/help-homeless';
import { aboutPage } from './pages/about';
import { howToHelp } from './pages/how-help';
import { askForHelp } from './pages/ask-help';
import { errorPage } from './pages/error';
import { footer } from './footer';

const app = document.querySelector("#app");

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

wrapper.appendChild(header);
// wrapper.append(router(document.location.pathname.slice(1)));

//for deploy version
wrapper.append(router(document.location.search.slice(1)));

wrapper.appendChild(footer);

app.appendChild(wrapper);

$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    slidesToShow: 1,
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
  });

  $('.cards-slider').slick({
    dots: false,
    arrows: true,
    nextArrow: '<i class="fa-solid fa-circle-arrow-right fa-2x"></i>',
    prevArrow: '<i class="fa-solid fa-circle-arrow-left fa-2x"></i>',
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
});

function router(pagePath) {
  let result = ''
  switch (pagePath) {
    case '':
      result = mainPage;
      break;
    case 'about':
      result = aboutPage;
      break;
    case 'help-homeless':
      result = helpHomeless;
      break;
    case 'how-to-help':
      result = howToHelp;
      break;
    case 'ask-for-help':
      result = askForHelp;
      break;
    default:
      result = errorPage;
      break;
  }
  return result;
}
