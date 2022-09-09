import '../style/style.sass'
import { header } from './header'
import { main } from './main'
import { footer } from './footer';

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.appendChild(header);
wrapper.appendChild(main);
wrapper.appendChild(footer);

const app = document.querySelector("#app");
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

  // $('.cards-slider').slick({
  //   autoplay: false,
  //   slidesToShow: 3,
  //   arrows: true,
  //   prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  //   nextArrow: '<button class="slide-arrow next-arrow"></button>'
  // });

  $('.cards-slider').slick({
    dots: false,
    arrows: true,
    nextArrow: '<i class="fa-solid fa-circle-arrow-right fa-2x"></i>',
    prevArrow: '<i class="fa-solid fa-circle-arrow-left fa-2x"></i>',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
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
