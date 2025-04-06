
let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
  reviewCount = 0;
}

reviewCount = parseInt(reviewCount) + 1;

localStorage.setItem("reviewCount", reviewCount);

const message = document.createElement("p");
message.textContent = `You have submitted ${reviewCount} review(s).`;
document.body.appendChild(message);
