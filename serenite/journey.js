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

// ======= Parallax background =======
const elements = {
  cloud0: document.getElementById("cloud0"),
  cloud02: document.getElementById("cloud02"),
  cloud1: document.getElementById("cloud1"),
  cloud2: document.getElementById("cloud2"),
  cloud11: document.getElementById("cloud11"),
  cloud22: document.getElementById("cloud22"),
  cloud00: document.getElementById("cloud00"),
  mountains: document.querySelector(".layer2 img"),
  mountains0: document.querySelector(".layer0 img")
};

const speeds = {
  cloud0: 0.05,
  cloud02: 0.2,
  cloud1: 1.5,
  cloud2: 0.15,
  cloud11: 1.0,
  cloud22: 0.08,
  cloud00: 0.1,
  mountains: 0.1,
  mountains0: 0.05
};

const positions = {};
for (const key in speeds) {
  positions[key] = 0;
}

function animateParallax() {
  for (const key in elements) {
    if (elements[key]) {
      positions[key] += speeds[key];
      elements[key].style.transform = `translateX(${-positions[key]}px)`;
    }
  }
  requestAnimationFrame(animateParallax);
}

animateParallax();

// ======= Animated Stars =======
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

// ======= Balloon =======
const balloon = document.querySelector(".balloon-wrapper");

let posX = 0;
let posY = 10;
let isAscending = false;

function animateBalloon() {
  posX += 0.19;

  if (isAscending) {
    posY += 1.0;
    if (posY > 450) posY = 450;
  } else {
    posY -= 0.4;
    if (posY < 0) posY = 0;
  }

  balloon.style.transform = `translate(${posX}px, -${posY}%)`;
  requestAnimationFrame(animateBalloon);
}

["keydown", "mousedown", "touchstart"].forEach(evt => {
  document.addEventListener(evt, (e) => {
    if (evt === "mousedown" || evt === "touchstart" || e.code === "Space") isAscending = true;
  });
});

["keyup", "mouseup", "touchend"].forEach(evt => {
  document.addEventListener(evt, (e) => {
    if (evt === "mouseup" || evt === "touchend" || e.code === "Space") isAscending = false;
  });
});

animateBalloon();

// ======= Loading page =======
window.addEventListener('load', function () {
  document.getElementById('loading-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});

// ======= Secuential Messages =======
document.addEventListener("DOMContentLoaded", () => {
  const messages = document.querySelectorAll(".message");
  const inspirationMessages = document.querySelectorAll(".messageInspiration");
  const reflectionmessages = document.querySelectorAll(".messageReflection");
  const reflectionInterval = 15000;
  const interval = 4000;
  const inspirationInterval = 5000;
  const pauseBeforeInspiration = 6000;
  const pauseBeforeReflection = 10000;
  let current = 0;

  function showNextMessage() {
    if (current > 0) {
      messages[current - 1].classList.remove("show");
      messages[current - 1].classList.add("hidden");
    }

    if (current < messages.length) {
      messages[current].classList.remove("hidden");
      messages[current].classList.add("show");
      current++;
      setTimeout(showNextMessage, interval);
    } else {
      setTimeout(() => {
        showInspirationMessages(0);
      }, pauseBeforeInspiration);
    }
  }

  function showInspirationMessages(index) {
    if (index > 0) {
      inspirationMessages[index - 1].classList.remove("show");
      inspirationMessages[index - 1].classList.add("hidden");
    }

    if (index < inspirationMessages.length) {
      inspirationMessages[index].classList.remove("hidden");
      inspirationMessages[index].classList.add("show");
      setTimeout(() => showInspirationMessages(index + 1), inspirationInterval);
    } else {
      setTimeout(() => {
        showRefrectionMessages(0);
      }, pauseBeforeReflection);
    }
  }

  function showRefrectionMessages(index) {
    if (index > 0) {
      reflectionmessages[index - 1].classList.remove("show");
      reflectionmessages[index - 1].classList.add("hidden");
    }

    if (index < reflectionmessages.length) {
      reflectionmessages[index].classList.remove("hidden");
      reflectionmessages[index].classList.add("show");
      setTimeout(() => showRefrectionMessages(index + 1), reflectionInterval);
    }
  }
  showNextMessage();
});

window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("music");
  music.volume = 0.5;
});