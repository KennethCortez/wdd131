// ======= Hamburger menu and blur efect =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const background = document.querySelector("main");

if (hamburger && navMenu && background) {
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);

    background.classList.toggle("blur", isOpen);
  });
}