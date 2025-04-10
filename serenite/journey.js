const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector("main");

if (hamburger && navMenu && main) {
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);

    // Aplica o quita el blur
    main.classList.toggle("blur", isOpen);
  });
}

let cloud1X = 0;
let cloud2X = 0;
let mountainX = 0;
let mountainY = 0;

function animateParallax() {
  const cloud1 = document.getElementById("cloud1");
  const cloud2 = document.getElementById("cloud2");
  const mountains = document.querySelector(".layer2 img");
  const mountains0 = document.querySelector(".layer0 img");

  // velocidades
  const cloud1Speed = 1.0;
  const cloud2Speed = 0.15;
  const mountainSpeed = 0.1;
  const mountain0Speed = 0.05;

  cloud1X += cloud1Speed;
  cloud2X += cloud2Speed;
  mountainX += mountainSpeed;
  mountainY += mountain0Speed;
  

  // ancho base para reiniciar la imagen (ajusta según tus imágenes si es necesario)
  const resetWidth = window.innerWidth;

  // si pasa todo el ancho, vuelve al inicio sin corte visual
  if (cloud1X >= resetWidth) cloud1X = 0;
  if (cloud2X >= resetWidth) cloud2X = 0;
  if (mountainX >= resetWidth) mountainX = 0;
  if (mountainY >= resetWidth) mountainY = 0;

  cloud1.style.transform = `translateX(${-cloud1X}px)`;
  cloud2.style.transform = `translateX(${-cloud2X}px)`;
  mountains.style.transform = `translateX(${-mountainX}px)`;
  mountains0.style.transform = `translateX(${-mountainY}px)`;

  requestAnimationFrame(animateParallax);
}

animateParallax();
