const btnMenu = document.querySelector(".btn__menu");
const btnMenuClose = document.querySelector(".btn__menu__close");
const closeSideNav = document.querySelector(".nav__side__container");
const popup = document.querySelector(".popup");

const open = () => {
  popup.classList.remove("hide");
  closeSideNav.classList.remove("hide");
};

const close = () => {
  popup.classList.add("hide");
  closeSideNav.classList.add("hide");
};

popup.addEventListener("click", close);
btnMenu.addEventListener("click", open);
btnMenuClose.addEventListener("click", close);
