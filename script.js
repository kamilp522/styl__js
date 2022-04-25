//====================================================

//  VARIABLES

//====================================================

const sidebar = document.querySelector(".sidebar-container");
const sidebar_menu = document.querySelector(".mobile-icon");
const sidebar_close = document.querySelector(".sidebar-icon");
const sidebar_about_item = document.querySelector(".about-sidebar-link");
const sidebar_services_item = document.querySelector(".services-sidebar-link");
const sidebar_gallery_item = document.querySelector(".gallery-sidebar-link");
const sidebar_contact_item = document.querySelector(".contact-sidebar-link");

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

let hero_lenght = hero.offsetHeight - 72;
let about_lenght = hero.offsetHeight + about.offsetHeight - 72;
let services_lenght =
  hero.offsetHeight + about.offsetHeight + services.offsetHeight - 72;
let gallery_section_lenght =
  hero.offsetHeight +
  about.offsetHeight +
  services.offsetHeight +
  gallery_section.offsetHeight -
  72;
let contact_lenght =
  hero.offsetHeight +
  about.offsetHeight +
  services.offsetHeight +
  gallery_section.offsetHeight +
  contact.offsetHeight -
  72;

//====================================================

//  FUNCTIONS

//====================================================

const openSidebarMenu = (e) => {
  e.preventDefault();
  sidebar.classList.add("active");
};

const closeSidebarMenu = (e) => {
  e.preventDefault();
  sidebar.classList.remove("active");
};

const changeNav = () => {
  if (window.scrollY >= 80) {
    nav.style.backgroundColor = "#0d0d0d";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

const changeNavItemColor = () => {
  if (window.scrollY >= hero_lenght) {
    nav_about_item.classList.add("active");
  }

  if (window.scrollY > about_lenght - 1 || window.scrollY < hero_lenght) {
    nav_about_item.classList.remove("active");
  }

  if (window.scrollY >= about_lenght) {
    nav_services_item.classList.add("active");
  }

  if (window.scrollY > services_lenght - 1 || window.scrollY < about_lenght) {
    nav_services_item.classList.remove("active");
  }

  if (window.scrollY >= services_lenght) {
    nav_gallery_item.classList.add("active");
  }

  if (
    window.scrollY > gallery_section_lenght - 1 ||
    window.scrollY < services_lenght
  ) {
    nav_gallery_item.classList.remove("active");
  }

  if (window.scrollY >= gallery_section_lenght) {
    nav_contact_item.classList.add("active");
  }

  if (
    window.scrollY > contact_lenght - 1 ||
    window.scrollY < gallery_section_lenght
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

  if (
    e.target.classList.contains("about-nav-item") ||
    e.target.classList.contains("about-sidebar-link")
  ) {
    window.scrollTo({
      top: hero_lenght + 2,
      left: 0,
      behavior: "smooth",
    });
  }

  if (
    e.target.classList.contains("services-nav-item") ||
    e.target.classList.contains("services-sidebar-link")
  ) {
    window.scrollTo({
      top: about_lenght + 2,
      left: 0,
      behavior: "smooth",
    });
  }

  if (
    e.target.classList.contains("gallery-nav-item") ||
    e.target.classList.contains("gallery-sidebar-link")
  ) {
    window.scrollTo({
      top: services_lenght + 2,
      left: 0,
      behavior: "smooth",
    });
  }

  if (
    e.target.classList.contains("contact-nav-item") ||
    e.target.classList.contains("contact-sidebar-link")
  ) {
    window.scrollTo({
      top: gallery_section_lenght + 2,
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
  hero_lenght = hero.offsetHeight - 72;
  about_lenght = hero.offsetHeight + about.offsetHeight - 72;
  services_lenght =
    hero.offsetHeight + about.offsetHeight + services.offsetHeight - 72;
  gallery_section_lenght =
    hero.offsetHeight +
    about.offsetHeight +
    services.offsetHeight +
    gallery_section.offsetHeight -
    72;
  contact_lenght =
    hero.offsetHeight +
    about.offsetHeight +
    services.offsetHeight +
    gallery_section.offsetHeight +
    contact.offsetHeight -
    72;
};

//====================================================

//  EVENTS

//====================================================

//registerResize();
setTimeout(registerResize, 250);
changeNav();
changeNavItemColor();

window.addEventListener("resize", registerResize);
document.addEventListener("scroll", changeNav);
document.addEventListener("scroll", changeNavItemColor);

sidebar_menu.addEventListener("click", openSidebarMenu);
sidebar_close.addEventListener("click", closeSidebarMenu);

sidebar_about_item.addEventListener("click", goToSection);
sidebar_services_item.addEventListener("click", goToSection);
sidebar_gallery_item.addEventListener("click", goToSection);
sidebar_contact_item.addEventListener("click", goToSection);

sidebar_about_item.addEventListener("click", closeSidebarMenu);
sidebar_services_item.addEventListener("click", closeSidebarMenu);
sidebar_gallery_item.addEventListener("click", closeSidebarMenu);
sidebar_contact_item.addEventListener("click", closeSidebarMenu);

nav_logo.addEventListener("click", goToSection);
nav_about_item.addEventListener("click", goToSection);
nav_services_item.addEventListener("click", goToSection);
nav_gallery_item.addEventListener("click", goToSection);
nav_contact_item.addEventListener("click", goToSection);

footer_logo.addEventListener("click", goToSection);

//console.log(hero_lenght + about_lenght);
