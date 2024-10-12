  // <body>
  //   <div class="stopwatch-container">
  //     <div class="display">
  //     </div>
  //     <div class="buttons">
  //       <button id="start" onclick="start()">Start</button>
  //       <button id="pause" onclick="pause()">Pause</button>
  //       <button id="lap" onclick="lap()">Lap</button>
  //       <button id="reset" onclick="lap()">Reset</button>
  //     </div>
  //     <div class="laps-container">
  //     </div>
  //
  //**Task**
  //show clock
  //start 
  //pause
  //reset
  //lap  store obj
  // cret div lap  from obj 
  //
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const lapBtn = document.getElementById('lap');
const resetBtn = document.getElementById('reset');

const currentDate = new Date();
resetBtn.addEventListener('click',function(){
  let startTime = {
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    milliseconds:parseInt( String(currentDate.getMilliseconds()).substr(0,2))
  };
console.log(startTime);
});

