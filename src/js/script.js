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
        autoplay: false,
        // arrows: false,
        slidesToShow: 1,
    });
});