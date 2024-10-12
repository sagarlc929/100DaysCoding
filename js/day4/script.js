const kgWeightInput = document.getElementById("kg-weight-input");
const lbWeightInput = document.getElementById("lb-weight-input");
const mHeightInput = document.getElementById("m-height-input");
const inHeightInput = document.getElementById("in-height-input");
const categoryResult = document.getElementById("category-result");
const BMIResult = document.getElementById("BMI-result");
const resultBmi = document.getElementById("result-bmi");

kgWeightInput.addEventListener('input', (event) => {
  lbWeightInput.value = (2.20462 * event.target.value).toFixed(2);
  updateBMIResult();
});

lbWeightInput.addEventListener('input', (event) => {
  kgWeightInput.value = (0.4536 * event.target.value).toFixed(2);
  updateBMIResult();
});

mHeightInput.addEventListener('input', (event) => {
  inHeightInput.value = (39.3701 * event.target.value).toFixed(2);
  updateBMIResult();
});

inHeightInput.addEventListener('input', (event) => {
  mHeightInput.value = (0.0254 * event.target.value).toFixed(2);
  updateBMIResult();
});

function updateBMIResult() {
  const weight = parseFloat(kgWeightInput.value);
  const height = parseFloat(mHeightInput.value);
  
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    categoryResult.innerText = "Invalid input";
    BMIResult.innerText = "";
    return;
  }

  const bmi = weight / Math.pow(height, 2);
  BMIResult.innerText = bmi.toFixed(2);

  if (bmi < 16.5) {
    categoryResult.innerText = "Underweight (Severe thinness)";
    resultBmi.style.backgroundColor = "#ED2B00";
  } else if (bmi < 16.9) {
    categoryResult.innerText = "Underweight (Moderate thinness)";
    resultBmi.style.backgroundColor = "#F36E51";
  } else if (bmi < 18.4) {
    categoryResult.innerText = "Underweight (Mild thinness)";
    resultBmi.style.backgroundColor = "#F79D89";
  } else if (bmi < 24.9) {
    categoryResult.innerText = "Normal range";
    resultBmi.style.backgroundColor = "#3CB371";
  } else if (bmi < 29.9) {
    categoryResult.innerText = "Overweight (Pre-obese)";
    resultBmi.style.backgroundColor = "#F79D89";
  } else if (bmi < 34.9) {
    categoryResult.innerText = "Obese (Class I)";
    resultBmi.style.backgroundColor = "#F36E51";
  } else if (bmi < 39.9) {
    categoryResult.innerText = "Obese (Class II)";
    resultBmi.style.backgroundColor = "#F15735";
  } else {
    categoryResult.innerText = "Obese (Class III)";
    resultBmi.style.backgroundColor = "#ED2B00";
  }
}

// Initial BMI calculation on page load
window.onload = function() {
  updateBMIResult();
};

