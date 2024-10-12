const minSpan = document.getElementById('min-span');
const secSpan = document.getElementById('sec-span');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const infoDiv = document.getElementById('info-div');
const audio = document.getElementById('myAudio');
let isRunning = false;
let timer;

const data = [
    { session: 'pomodoro', duration: 25 },
    { session: 'shortBreak', duration: 5 },
    { session: 'longBreak', duration: 15 }
];

startBtn.addEventListener('click', () => {
    startPomodoro();
});
resetBtn.addEventListener('click', () => {
    location.reload();
});

function showAlert(message) {
    audio.play();
    const confirmed = confirm(message);
    audio.pause();
    audio.currentTime = 0;
    return confirmed;
}

function startPomodoro() {
    infoDiv.innerText = "First Pomodoro Session."
    startTimer('pomodoro', () => {
        if (showAlert(`First Short Break Session for ${data.find(item => item.session === 'shortBreak').duration} minutes`)) {
            infoDiv.innerText = "First Short Break Session."
            startTimer('shortBreak', () => {
                if (showAlert(`Second Pomodoro Session for ${data.find(item => item.session === 'pomodoro').duration} minutes`)) {
                    infoDiv.innerText = "Second Pomodoro Session."
                    startTimer('pomodoro', () => {
                        if (showAlert(`Second Short Break Session for ${data.find(item => item.session === 'shortBreak').duration} minutes`)) {
                            infoDiv.innerText = "Second Short Break Session."
                            startTimer('shortBreak', () => {
                                if (showAlert(`Third Pomodoro Session for ${data.find(item => item.session === 'pomodoro').duration} minutes`)) {
                                    infoDiv.innerText = "Third Pomodoro Session."
                                    startTimer('pomodoro', () => {
                                        if (showAlert(`Third Short Break Session for ${data.find(item => item.session === 'shortBreak').duration} minutes`)) {
                                            infoDiv.innerText = "Third Short Break Session."
                                            startTimer('shortBreak', () => {
                                                if (showAlert(`Forth Pomodoro Session for ${data.find(item => item.session === 'pomodoro').duration} minutes`)) {
                                                    infoDiv.innerText = "Fourth Pomodoro Session."
                                                    startTimer('pomodoro', () => {
                                                        if (showAlert(`Fourth(final) Long Break Session for ${data.find(item => item.session === 'longBreak').duration} minutes`)) {
                                                            infoDiv.innerText = "Fourth(final) Long Break Session."
                                                            startTimer('longBreak', () => {
                                                                showAlert(`Pomodoro Session Completed.`);
                                                                	infoDiv.innerText = "Restart the Session."
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

function startTimer(type, callback) {
    const sessionDur = data.find(item => item.session === type).duration;
    let seconds = sessionDur * 60;

    function displayTimer() {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        minSpan.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
        secSpan.innerText = `${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    }

    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds--;
            displayTimer();
            if (seconds <= 0) {
                clearInterval(timer);
                isRunning = false;
                if (callback && typeof callback === 'function') {
                    callback();
                }
            }
        }, 1000);
    }
}
