const footer = document.createElement("div");
footer.classList.add("footer");

const copyRight = document.createElement("div");
copyRight.classList.add("copy-right");
copyRight.innerHTML = `&copy_Милосердие Брест 2022`;

const links = document.createElement("div");
links.classList.add("links");

const bpc = document.createElement("img");
bpc.src = `assets/images/bpc.jpg`;

const ekklisia = document.createElement("img");
ekklisia.src = `assets/images/ekklisia.jpg`;

const forts = document.createElement("img");
forts.src = `assets/images/forts.jpg`;

links.appendChild(bpc);
links.appendChild(ekklisia);
links.appendChild(forts);

const socialMedia = document.createElement("div");
socialMedia.classList.add("social-media");

const vk = document.createElement("div");
vk.innerHTML = `<i class="fa-brands fa-2x fa-vk"></i>`;

const facebook = document.createElement("div");
facebook.innerHTML = `<i class="fa-brands fa-2x fa-square-facebook"></i>`;

socialMedia.appendChild(vk);
socialMedia.appendChild(facebook);

footer.appendChild(copyRight);
footer.appendChild(links);
footer.append(socialMedia);

export { footer };