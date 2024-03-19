/*
 <div id="temperatureConverter">
      <div id="celsius-label">Celsius</div>
      <div id="celsius-slider">
        <input type="range" min="-50" max="300" id="celsius-range">
      </div>
      <div id="celsius-input">
        <input id="celsius-input-box" type="number" min="-50" max="300">
      </div>
      <div id="fahrenheit-lable">Fahrenheit</div>
      <div id="fahrenheit-slider">
        <input type="range" id="fahrenheit-slider">
      </div>
      <div id="fahrenheit-input">
      <input type="number" id="fahrenheit-input-box" min=""
    
 */

const celsiusInputElement = document.getElementById("celsius-input-box");
const fahrenheitInputElement = document.getElementById("fahrenheit-input-box");
const fahrenheitSliderElement = document.getElementById("fahrenheit-slider-element");
const celsiusSliderElement = document.getElementById("celsius-slider-element");

celsiusInputElement.addEventListener('input', (event)=>{
celsiusSliderElement.value = event.target.value;
const fahrenheitValue = ((event.target.value*9/5)+32).toFixed(2);
fahrenheitSliderElement.value = fahrenheitValue;
fahrenheitInputElement.value = fahrenheitValue;
});

celsiusSliderElement.addEventListener('input',(event)=>{
celsiusInputElement.value = event.target.value;
const fahrenheitValue = ((event.target.value*9/5)+32).toFixed(2);
fahrenheitSliderElement.value = fahrenheitValue;
fahrenheitInputElement.value = fahrenheitValue;
});

fahrenheitInputElement.addEventListener('input', (event)=>{
fahrenheitSliderElement.value = event.target.value;
const celsiusValue = ((event.target.value-32)*5/9).toFixed(2);
celsiusSliderElement.value = celsiusValue;
celsiusInputElement.value = celsiusValue;
});

fahrenheitSliderElement.addEventListener('input',(event)=>{
fahrenheitInputElement.value = event.target.value;
const celsiusValue = ((event.target.value-32)*5/9).toFixed(2);
celsiusSliderElement.value = celsiusValue;
celsiusInputElement.value = celsiusValue;
});

