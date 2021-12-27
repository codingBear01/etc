const moreBtn = document.querySelector(".title__moreBtn");
const title = document.querySelector(".video__mainTitle");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
