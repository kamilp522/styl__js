const nav = document.querySelector(".navbar-main");
const nav_about_item = document.querySelector(".about-nav-item");
const nav_services_item = document.querySelector(".services-nav-item");
const nav_gallery_item = document.querySelector(".gallery-nav-item");
const nav_contact_item = document.querySelector(".contact-nav-item");
const nav_logo = document.querySelector(".nav-logo");

const footer_logo = document.querySelector(".footer-logo");

const hero = document.querySelector(".hero-container");
const about = document.getElementById("about");
const services = document.getElementById("services");
const gallery_section = document.getElementById("gallery-section");
const contact = document.getElementById("contact");

let hero_height = hero.offsetHeight - 72;
let about_height = hero.offsetHeight + about.offsetHeight - 72;
let services_height =
  hero.offsetHeight + about.offsetHeight + services.offsetHeight - 72;
let gallery_section_height =
  hero.offsetHeight +
  about.offsetHeight +
  services.offsetHeight +
  gallery_section.offsetHeight -
  72;
let contact_height =
  hero.offsetHeight +
  about.offsetHeight +
  services.offsetHeight +
  gallery_section.offsetHeight +
  contact.offsetHeight -
  72;

const changeNav = () => {
  if (window.scrollY >= 80) {
    nav.style.backgroundColor = "#0d0d0d";
    localStorage.setItem("nav-color", "#0d0d0d");
  } else {
    nav.style.backgroundColor = "transparent";
    localStorage.setItem("nav-color", "transparent");
  }
};

const changeNavItemColor = () => {
  if (window.scrollY >= hero_height) {
    nav_about_item.classList.add("active");
  }

  if (window.scrollY > about_height - 1 || window.scrollY < hero_height) {
    nav_about_item.classList.remove("active");
  }

  if (window.scrollY >= about_height) {
    nav_services_item.classList.add("active");
  }

  if (window.scrollY > services_height - 1 || window.scrollY < about_height) {
    nav_services_item.classList.remove("active");
  }

  if (window.scrollY >= services_height) {
    nav_gallery_item.classList.add("active");
  }

  if (
    window.scrollY > gallery_section_height - 1 ||
    window.scrollY < services_height
  ) {
    nav_gallery_item.classList.remove("active");
  }

  if (window.scrollY >= gallery_section_height) {
    nav_contact_item.classList.add("active");
  }

  if (
    window.scrollY > contact_height - 1 ||
    window.scrollY < gallery_section_height
  ) {
    nav_contact_item.classList.remove("active");
  }
};

const goToSection = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav-logo")) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (e.target.classList.contains("about-nav-item")) {
    window.scrollTo({
      top: hero_height,
      left: 0,
      behavior: "smooth",
    });
  }

  if (e.target.classList.contains("services-nav-item")) {
    window.scrollTo({
      top: about_height,
      left: 0,
      behavior: "smooth",
    });
  }

  if (e.target.classList.contains("gallery-nav-item")) {
    window.scrollTo({
      top: services_height,
      left: 0,
      behavior: "smooth",
    });
  }

  if (e.target.classList.contains("contact-nav-item")) {
    window.scrollTo({
      top: gallery_section_height,
      left: 0,
      behavior: "smooth",
    });
  }

  if (e.target.classList.contains("footer-logo")) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};

const registerResize = () => {
  hero_height = hero.offsetHeight - 72;
  about_height = hero.offsetHeight + about.offsetHeight - 72;
  services_height =
    hero.offsetHeight + about.offsetHeight + services.offsetHeight - 72;
  gallery_section_height =
    hero.offsetHeight +
    about.offsetHeight +
    services.offsetHeight +
    gallery_section.offsetHeight -
    72;
  contact_height =
    hero.offsetHeight +
    about.offsetHeight +
    services.offsetHeight +
    gallery_section.offsetHeight +
    contact.offsetHeight -
    72;
};

//registerResize();
setTimeout(registerResize, 500);
changeNav();
changeNavItemColor();

window.addEventListener("resize", registerResize);
document.addEventListener("scroll", changeNav);
document.addEventListener("scroll", changeNavItemColor);
nav_logo.addEventListener("click", goToSection);
nav_about_item.addEventListener("click", goToSection);
nav_services_item.addEventListener("click", goToSection);
nav_gallery_item.addEventListener("click", goToSection);
nav_contact_item.addEventListener("click", goToSection);
footer_logo.addEventListener("click", goToSection);

//console.log(hero_height + about_height);
