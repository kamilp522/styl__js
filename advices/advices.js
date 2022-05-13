const nav = document.querySelector(".navbar-main");
const advices_container = document.querySelector(".advices-container");
const advices_content = document.querySelector(".advices-content");
const website_rigths = document.querySelector(".website-rights");

advices_length = advices_content.offsetHeight;
window_width = window.offsetWidth;

const changeNav = () => {
  if (window.scrollY >= 80) {
    nav.style.backgroundColor = "#0d0d0d";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

website_rigths.textContent = `Copyright © Styl-Art-Kom ${new Date().getFullYear()}`;

document.addEventListener("scroll", changeNav);
document.addEventListener("resize", registerContainerHeight);
