const timer = document.getElementById("timer");
const start = document.getElementById("start");
const giff = document.getElementById("giff");

let timeleft = 2;
let interval;

const startTimer = () => {
  interval = setInterval(() => {
    timeleft--;
    updateTimer();

    if (timeleft === 0) {
      clearInterval(interval);
      window.location.href = "final.html";
    }
  }, 1000);
};

const updateTimer = () => {
  const minutes = Math.floor(timeleft / 60);
  const seconds = timeleft % 60;

  timer.innerHTML =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
};

const startGif = () => {
  giff.src = "";
  giff.classList.add("gif");
  giff.src = "../assets/buldakGif.gif";
  giff.classList.remove("nongif");
};

start.addEventListener("click", startTimer);
start.addEventListener("click", startGif);
start.addEventListener("click", () => {
  start.style.display = "none";
});
