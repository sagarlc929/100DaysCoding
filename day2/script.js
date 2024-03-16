/*
    <div id="calculator">
      <div id="displayCalculator"></div>
      <div id="buttonsCalculator"></div>
    </div> 
*/
const displayCalculator = document.getElementById("display-calculator");

function allClear() {
  displayCalculator.value = "";
}
function writeInDisplay(id) {
  displayCalculator.value += id;
}
function calculate() {
  let displayString = displayCalculator.value;
  let result = eval(displayString);
  displayCalculator.value = result;
}
function backspace() {
  let displayString = displayCalculator.value;
  displayCalculator.value = displayString.slice(0, -1);
}
