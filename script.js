const year = new Date().getFullYear();
const yearBanned = document.querySelectorAll(".year");
Array.from(yearBanned).forEach((banner) => (banner.innerText = year));

const images = ["大阪街頭", "日本櫻花", "京都古城"];
const backgroundImage = document.querySelector(".background-image");
let imageIndex = 0;
function rotateImage() {
    imageIndex >= images.length - 1 ? (imageIndex = 0) : imageIndex++;
    backgroundImage.style.backgroundImage = `url(./images/${images[imageIndex]}.jpg)`;
}

setInterval(rotateImage, 5000);