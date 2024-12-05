const audio = document.getElementById("myAudio");
const animatedImages = document.querySelectorAll(".animated-image");

function playAudio() {
  audio.play();
  animatedImages.forEach((image) => {
    image.classList.remove("paused");
  });
}

function pauseAudio() {
  audio.pause();
  animatedImages.forEach((image) => {
    image.classList.add("paused");
  });
}

const progressBar = document.querySelector(".progressbar > div");

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});
