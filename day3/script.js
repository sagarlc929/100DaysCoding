/*   <div id="container-digital-clock">
      <div id="digital-clock-display">
        <div id="day-display">
        
        </div>
        <div id="time-display">
        </div>
        <div id="date-display">
      </div>
 */
const dayDisplay = document.getElementById("day-display");
const timeDisplay = document.getElementById("time-display");
const dateDisplay = document.getElementById("date-display");
const containerDigitalClock = document.getElementById("container-digital-clock");
const buttonElements = document.querySelectorAll(".button");

const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const fontsArray = ["font1", "font2", "font3"];
function updateTimeDate() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  const currentDate = now.toLocaleDateString();
  const currentDay = now.getDay();
  timeDisplay.innerText = currentTime;
  dateDisplay.innerText = currentDate;
  dayDisplay.innerText = daysOfWeek[currentDay];
}

setInterval(updateTimeDate, 1000);

function randomClockFont() {

  const randomFontIndex = Math.floor(Math.random() * fontsArray.length);
  containerDigitalClock.style.fontFamily = fontsArray[randomFontIndex];
}
function randomClockColor() {

  containerDigitalClock.style.backgroundColor = getRandomColor();
  const textColor = getRandomColor();

  containerDigitalClock.style.color = textColor;
  const buttonColor = getRandomColor();

  buttonElements.forEach(button => {
    button.style.color = textColor;
    button.style.backgroundColor = buttonColor;
  })

}
window.onload = function() {
  randomClockFont();
  randomClockColor();
}

function getRandomColor() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Convert the RGB values to a hexadecimal string
  const hexRed = red.toString(16).padStart(2, '0'); // Ensure two digits and pad with zero if needed
  const hexGreen = green.toString(16).padStart(2, '0');
  const hexBlue = blue.toString(16).padStart(2, '0');

  // Concatenate the hexadecimal values to form the color hex value
  const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

  return hexColor;
}
