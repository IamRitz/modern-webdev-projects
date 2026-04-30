
const convertBtn = document.getElementById('convertBtn');
const inputValue = document.getElementById('inputValue');

const lengthResult = document.getElementById('lengthResult');
const massResult = document.getElementById('massResult');
const volumeResult = document.getElementById('volumeResult');

function meterToFeet(meter) {
    return meter * 3.281;
}

function feetToMeter(feet) {
    return feet / 3.281;
}

function literToGallon(liter) {
    return liter * 0.264;
}

function gallonToLiter(gallon) {
    return gallon / 0.264;
}

function kilogramToPound(kg) {
    return kg * 2.204;
}

function poundToKilogram(pound) {
    return pound / 2.204;
}

convertBtn.addEventListener('click', () => {
  const value = parseFloat(inputValue.value);

  if (isNaN(value)) {
    alert('Please enter a valid number');
    return;
  }

  lengthResult.textContent = `${value} meters = ${meterToFeet(value).toFixed(3)} feet | ${value} feet = ${feetToMeter(value).toFixed(3)} meters`;
  massResult.textContent = `${value} kilograms = ${kilogramToPound(value).toFixed(3)} pounds | ${value} pounds = ${poundToKilogram(value).toFixed(3)} kilograms`;
  volumeResult.textContent = `${value} liters = ${literToGallon(value).toFixed(3)} gallons | ${value} gallons = ${gallonToLiter(value).toFixed(3)} liters`;
  
})
