const vrema = document.querySelector(".vrema p");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const sbros = document.getElementById("sbros");

let min = 0;
let sek = 0;
let chas = 0;
let timerId = null;

function updateDisplay() {
  const fChas = chas < 10 ? "0" + chas : chas;
  const fMin = min < 10 ? "0" + min : min;
  const fSek = sek < 10 ? "0" + sek : sek;

  vrema.textContent = `${fChas}:${fMin}:${fSek}`;
}

function vpered() {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    sek++;

    if (sek === 60) {
      sek = 0;
      min++;
    }

    if (min === 60) {
      min = 0;
      chas++;
    }

    updateDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function sbrosTimer() {
  stopTimer();
  chas = 0;
  min = 0;
  sek = 0;
  updateDisplay();
}

start.addEventListener("click", vpered);
stop.addEventListener("click", stopTimer);
sbros.addEventListener("click", sbrosTimer);

updateDisplay();