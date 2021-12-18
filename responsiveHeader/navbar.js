const navBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".header_menus");
const icon = document.querySelector(".header_icons");

navBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
});
