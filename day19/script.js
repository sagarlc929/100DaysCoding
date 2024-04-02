/*
    <div id="pomodoro-container">
      <div id="display-div">
        <span id="min-span"></span> Min : <span id="sec-span"></span> Sec
      </div>
      <div id="buttons-div">
        <button id="start-btn">Start</button>
        <button id="pause-btn">Pause</button>
        <button id="reset-btn">Reset</button>
      </div>
      <div id="info-div"></div>
    </div>
*/


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
resetBtn.addEventListener('click',()=>{
  location.reload();
});
function showAlert(message){
  alert(message);
  return true;
}
function myAlert(message){
  audio.play();
  if(showAlert(message)){
    audio.pause();
    audio.currentTime = 0;
  }

}
function startPomodoro() {
    infoDiv.innerText = "First Pomodoro Session."
    startTimer('pomodoro', () => {
    myAlert(`First Short Break Session for ${data.find(item => item.session === 'shortBreak').duration} minutes`);
        infoDiv.innerText = "First Short Break Session."
        startTimer('shortBreak', () => {
    myAlert(`Second Pomodoro Session for ${data.find(item => item.session === 'pomodoro').duration} minutes`);
            infoDiv.innerText = "Second Pomodoro Session."
            startTimer('pomodoro', () => {
    myAlert(`Second Short Break Session for ${data.find(item => item.session === 'shortBreak').duration} minutes`);
              infoDiv.innerText = "Second Short Break Session."
              startTimer('shortBreak', () => {
    myAlert(`Third Pomodoro Session for ${data.find(item => item.session === 'pomodoro').duration} minutes`);
                    infoDiv.innerText = "Third Pomodoro Session."
                    startTimer('pomodoro', () => {
    myAlert(`Third Short Break Session for ${data.find(item => item.session === 'shortBreak').duration} minutes`);
                        infoDiv.innerText = "Third Short Break Session."
                        startTimer('shortBreak', () => {
    myAlert(`Forth Pomodoro Session for ${data.find(item => item.session === 'pomodoro').duration} minutes`);
                            infoDiv.innerText = "Fourth Pomodoro Session."
                            startTimer('pomodoro', () => {
    myAlert(`Fourth Short Break Session for ${data.find(item => item.session === 'shortBreak').duration} minutes`);
                                infoDiv.innerText = "Fourth Short Session."
                                startTimer('shortBreak',()=>{
    myAlert(`Long Break Session for ${data.find(item => item.session === 'longBreak').duration} minutes`);
                                  infoDiv.innerText = "Long Break Session."
                                  startTimer('longBreak');
                });
                            });
                        });
                    });
                });
            });
        });
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


/*

let timer;
        let seconds = 0;
        let isRunning = false;

        function displayTimer() {
            const minutes = Math.floor(seconds / 60);
            const remainderSeconds = seconds % 60;
            const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
            document.getElementById('timer').textContent = display;
        }

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(() => {
                    seconds++;
                    displayTimer();
                }, 1000);
            }
        }

        function pauseTimer() {
            clearInterval(timer);
            isRunning = false;
        }

        function resetTimer() {
            clearInterval(timer);
            isRunning = false;
            seconds = 0;
            displayTimer();
        }
*/
