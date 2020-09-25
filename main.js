const loader = document.querySelector(".preload");
const main = document.querySelector(".main");
const site = document.querySelector(".site");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 8000);
  setTimeout(() => {
    main.style.opacity = 0;
    main.style.display = "none";

    site.style.display = "block";
    setTimeout(() => (site.style.opacity = 1), 50);
  }, 12000);
}

init();
