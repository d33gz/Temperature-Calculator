let cToF = require('./ctF.js');
let cToK = require('./ctK.js');
let fToC = require('./ftC.js');
let fToK = require('./ftK.js');
let kToC = require('./ktC.js');
let kToF = require('./ktF.js');

/* */
//these variables hold information about the 2 temperature scales selected, in and out.
//they also allow us to log the number a User wishes to convert
//and set-space for where our eventual converted number will go
const scaleIn = document.getElementById('scale-in');
const scaleOut = document.getElementById('scale-out');
const input = document.getElementById('input');
const output = document.getElementById('output');

//the calculator needs to know when to calculate; a submit button and listener(found below)
const submitButton = document.getElementById('submit');

/* */
//before calling a function, we need to establish which one is converting with the proper scales
const conversionLogic = (from, to) => {
  if (from === 'Celsius' && to === 'Fahrenheit') {
    const outNum = cToF.celsiusToFahrenheit(input);
    output.innerHTML = outNum.toString();
  } else if (from === 'Celsius' && to === 'Kelvin') {
    const outNum = cToK.celsiusToKelvin(input);
    output.innerHTML = outNum.toString();
  } else if (from === 'Fahrenheit' && to === 'Celsius') {
    const outNum = fToC.fahrenheitToCelsius(input);
    output.innerHTML = outNum.toString();
  } else if (from === 'Fahrenheit' && to === 'Kelvin') {
    const outNum = fToK.fahrenheitToKelvin(input);
    output.innerHTML = outNum.toString();
  } else if (from === 'Kelvin' && to === 'Celsius') {
    const outNum = kToC.kelvinToCelsius(input);
    output.innerHTML = outNum.toString();
  } else if (from === 'Kelvin' && to === 'Fahrenheit') {
    const outNum = kToF.kelvinToFahrenheit(input);
    output.innerHTML = outNum.toString();
  };
};

submitButton.onsubmit(conversionLogic(scaleIn, scaleOut));
submitButton.addEventListener('click', console.log('clicked'));


console.log('Six calls, yeah?');