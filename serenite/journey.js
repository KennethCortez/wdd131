const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector("main");

if (hamburger && navMenu && main) {
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);

    main.classList.toggle("blur", isOpen);
  });
}

let cloud1X = 0;
let cloud2X = 0;
let mountainX = 0;
let mountainY = 0;
let cloud0X = 0;
let cloud02X = 0;
let cloud11X = 0;
let cloud22X = 0;
let cloud00X = 0;

function animateParallax() {
  const cloud0 = document.getElementById("cloud0");
  const cloud02 = document.getElementById("cloud02");
  const cloud1 = document.getElementById("cloud1");
  const cloud2 = document.getElementById("cloud2");
  const mountains = document.querySelector(".layer2 img");
  const mountains0 = document.querySelector(".layer0 img");
  const cloud11 = document.getElementById("cloud11");
  const cloud22 = document.getElementById("cloud22");
  const cloud00 = document.getElementById("cloud00");

  // velocidades
  const cloud1Speed = 1.0;
  const cloud2Speed = 0.15;
  const mountainSpeed = 0.1;
  const mountain0Speed = 0.05;
  const cloud11Speed = 1.0;
  const cloud0Speed = 0.05;  // más lento = más lejano
  const cloud02Speed = 0.2;
  const cloud22Speed = 0.08;
  const cloud00Speed = 0.1;

  cloud1X += cloud1Speed;
  cloud2X += cloud2Speed;
  mountainX += mountainSpeed;
  mountainY += mountain0Speed;
  cloud0X += cloud0Speed;
  cloud02X += cloud02Speed;
  cloud11X += cloud11Speed;
  cloud22X += cloud22Speed;
  cloud00X += cloud00Speed;
  
  cloud1.style.transform = `translateX(${-cloud1X}px)`;
  cloud2.style.transform = `translateX(${-cloud2X}px)`;
  cloud0.style.transform = `translateX(${-cloud0X}px)`;
  cloud02.style.transform = `translateX(${-cloud02X}px)`;
  cloud11.style.transform = `translateX(${-cloud11X}px)`;
  cloud22.style.transform = `translateX(${-cloud22X}px)`;
  cloud00.style.transform = `translateX(${-cloud00X}px)`;
  mountains.style.transform = `translateX(${-mountainX}px)`;
  mountains0.style.transform = `translateX(${-mountainY}px)`;

  requestAnimationFrame(animateParallax);
}

animateParallax();


const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 150;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.alpha += star.delta;
    if (star.alpha <= 0 || star.alpha >= 1) {
      star.delta = -star.delta;
    }

    ctx.beginPath();
    ctx.globalAlpha = star.alpha;
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  ctx.globalAlpha = 1.0;
  requestAnimationFrame(animateStars);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createStars();
});

resizeCanvas();
createStars();
animateStars();
