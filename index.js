let timer;
let elapsedTime = 0;
let isRunning = false;
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsContainer = document.getElementById('laps');

function updateDisplay() {
    const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            elapsedTime += 1000;
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    lapsContainer.innerHTML = '';
}

function lap() {
    const lapTime = document.createElement('div');
    lapTime.classList.add('lap');
    lapTime.textContent = display.textContent;
    lapsContainer.appendChild(lapTime);
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

updateDisplay();