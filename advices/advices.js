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

registerContainerHeight();

// setInterval(registerContainerHeight, 100);

// if (screen.orientation) {
//   screen.orientation.addEventListener("change", registerContainerHeight);
// }

// document.addEventListener("change", registerContainerHeight);

// setInterval(registerContainerHeight, 100);

// const registerContainerHeight = () => {
//   if (advices_length <= 800 || window_width <= 1000)
//     advices_container.style.minHeight = `${advices_length + 80}px`;
//   else advices_container.style.minHeight = "120vh";
// };
