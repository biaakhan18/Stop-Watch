let timer;
let isRunning = false;
let elapsedTime = 0; // in seconds

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    display.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startBtn.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
});

resetBtn.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();
