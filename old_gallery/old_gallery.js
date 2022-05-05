//====================================================

//  VARIABLES

//====================================================

const website_rigths = document.querySelector(".website-rights");
const nav = document.querySelector(".gallery-nav");

const photos = [...document.querySelectorAll(".image-wrapper")];

const gallery_modal = document.querySelector(".gallery-modal");

const gallery_modal_image_wrapper = document.querySelector(
  ".gallery-modal-image-wrapper"
);

const close_icon_bar = document.querySelector(".close-icon-bar");
const close_icon = document.querySelector(".close-icon");
const gallery_bar_right = document.querySelector(".gallery-bar-right");
const gallery_modal_arrow_right = document.querySelector(
  ".gallery-modal-arrow-right"
);
const gallery_bar_left = document.querySelector(".gallery-bar-left");
const gallery_modal_arrow_left = document.querySelector(
  ".gallery-modal-arrow-left"
);

//====================================================

//  FUNCTIONS

//====================================================

console.log(photos);

const changeNav = () => {
  if (window.scrollY >= 80) {
    nav.style.backgroundColor = "#0d0d0d";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

const getImageModal = (e) => {
  gallery_modal.classList.add("active");
  const source = e.target.getAttribute("src");
  console.log(source);

  const gallery_modal_image = document.createElement("img");
  gallery_modal_image.classList.add("gallery-modal-image");
  gallery_modal_image.setAttribute("src", source);

  gallery_modal_image_wrapper.removeChild(
    gallery_modal_image_wrapper.lastChild
  );

  gallery_modal_image_wrapper.appendChild(gallery_modal_image);
};

const closeModal = (e) => {
  e.preventDefault();
  gallery_modal.classList.remove("active");
};

const nextSlide = (e) => {
  e.preventDefault();

  length = photos.length;

  const current_image = document.querySelector(".gallery-modal-image");

  const src_string = current_image.getAttribute("src");

  number = +src_string.replace(/^\D+/g, "").replace(".jpg", "");
  number++;

  // if (number < 10) number = `0${number}`;
  if (number === length + 1)
    current_image.setAttribute("src", src_string.replace(/[0-9]+/, `1`));
  else
    current_image.setAttribute(
      "src",
      src_string.replace(/[0-9]+/, `${number}`)
    );
};

const prevSlide = (e) => {
  e.preventDefault();

  length = photos.length;

  const current_image = document.querySelector(".gallery-modal-image");

  const src_string = current_image.getAttribute("src");

  number = +src_string.replace(/^\D+/g, "").replace(".jpg", "");
  number--;

  if (number == 0)
    current_image.setAttribute(
      "src",
      src_string.replace(/[0-9]+/, `${length}`)
    );
  else
    current_image.setAttribute(
      "src",
      src_string.replace(/[0-9]+/, `${number}`)
    );
};

//====================================================

//  EVENTS

//====================================================

website_rigths.textContent = `Copyright © Styl-Art-Kom ${new Date().getFullYear()}`;
website_rigths.style.textAlign = "left";

document.addEventListener("scroll", changeNav);
photos.forEach((photo) => photo.addEventListener("click", getImageModal));

//////////////////////////////////////////////

close_icon.addEventListener("click", closeModal);
close_icon_bar.addEventListener("click", closeModal);

//////////////////////////////////////////////

gallery_modal_arrow_right.addEventListener("click", nextSlide);
gallery_bar_right.addEventListener("click", nextSlide);

//////////////////////////////////////////////

gallery_modal_arrow_left.addEventListener("click", prevSlide);
gallery_bar_left.addEventListener("click", prevSlide);

//////////////////////////////////////////////
