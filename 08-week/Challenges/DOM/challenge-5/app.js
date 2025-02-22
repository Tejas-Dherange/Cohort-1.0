/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

console.log(images[2]);

let num = 0;
const img = document.createElement("img");
img.src = images[num].url;
img.width = 800;
document.getElementById("caption").textContent = images[num].caption;
document.getElementById("carouselTrack").appendChild(img);
function showimg(num) {
  img.src = images[num].url;

  document.getElementById("caption").textContent = images[num].caption;
}

document.getElementById("nextButton").addEventListener("click", () => {
  num = (num + 1) % images.length;
  showimg(num);
});

document.getElementById("prevButton").addEventListener("click", () => {
  num = (num - 1 + images.length) % images.length;
  showimg(num);
});

let play = false;
let intervalID;
let countdownID;
let timeleft = 5; // Correct variable name

const autoBtn = document.getElementById("autoPlayButton");

autoBtn.addEventListener("click", () => {
  if (!play) {
    play = true;
    autoBtn.textContent = "Stop Auto Play";

    // Start countdown
    countdownID = setInterval(() => {
      document.getElementById("timerDisplay").textContent = `Next image in ${timeleft}s`;
      timeleft--;

      if (timeleft <=0) {
        timeleft = 5; // Reset countdown when it reaches 0
      }
    }, 1000);

    // Start image change every 5 seconds
    intervalID = setInterval(() => {
      num = (num + 1) % images.length;
      showimg(num);
      timeleft = 5; // Reset countdown when changing the image
    }, 5000);

  } else {
    // Stop autoplay and countdown
    clearInterval(intervalID);
    clearInterval(countdownID);
    autoBtn.textContent = "Start Auto Play";
    play = false;
    document.getElementById("timerDisplay").textContent = "";
  }
});
