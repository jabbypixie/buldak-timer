const timer = document.getElementById("timer");
const start = document.getElementById("start");

let timeleft = 3;
let interval;

const startTimer = () => {
  interval = setInterval(() => {
    timeleft--;
    updateTimer();

    if (timeleft === 0) {
      clearInterval(interval);
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

start.addEventListener("click", startTimer);
