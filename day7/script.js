
const minuteInput = document.getElementById("minute-input");
const secondInput = document.getElementById("second-input");
const firstButton = document.getElementById("first-button");
const timerDiv = document.getElementById("timer-div");
const clockDiv = document.getElementById("clock-div");

let startTime; // Variable to store the start time
let elapsedTime = 0; // Variable to track elapsed time when paused
let intervalId;

function setInputTime() {
    const now = new Date();
    startTime = now.getTime() + (minuteInput.value * 60 + secondInput.value) * 1000;
}

function updateCountdown() {
    const now = new Date();
    let remainingTime = startTime - now.getTime();

    if (remainingTime <= 0) {
        clearInterval(intervalId);
        timerDiv.innerText = "Countdown Complete!";
         const gradient = `linear-gradient(white, white) content-box no-repeat, conic-gradient(tomato 100%, 0, MediumSeaGreen) border-box`;
          clockDiv.style.background = gradient;
        return;
    }

    const totalSeconds = (minuteInput.value * 60) + secondInput.value;
    const percentageComplete = Math.ceil(((totalSeconds - remainingTime / 1000) / totalSeconds) * 100);
console.log(percentageComplete);
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    const gradient = `linear-gradient(white, white) content-box no-repeat, conic-gradient(tomato ${percentageComplete}%, 0, MediumSeaGreen) border-box`;
    clockDiv.style.background = gradient;
    timerDiv.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startCountdown() {
    if (!intervalId) {
        setInputTime();
        intervalId = setInterval(updateCountdown, 1000);
        firstButton.textContent = "Pause";

    } else {
        clearInterval(intervalId);
        intervalId = null;
        firstButton.textContent = "Resume";
        elapsedTime = new Date().getTime() - startTime;
    }
}

function restartCountdown() {
    clearInterval(intervalId);
    intervalId = null;
    timerDiv.innerText = "";
    minuteInput.value = "";
    secondInput.value = "";
    elapsedTime = 0;
    firstButton.textContent = "Start";
}

window.onload = function () {
    firstButton.textContent = "Start";
    firstButton.addEventListener("click", startCountdown);
};

