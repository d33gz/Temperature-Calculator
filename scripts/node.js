let cToF = require('./ctF.js');
let cToK = require('./ctK.js');
let fToC = require('./ftC.js');
let fToK = require('./ftK.js');
let kToC = require('./ktC.js');
let kToF = require('./ktF.js');

const input = 100;

console.log('node mode');

cToF.celsiusToFahrenheit(input);
cToK.celsiusToKelvin(input);
fToC.fahrenheitToCelsius(input);
fToK.fahrenheitToKelvin(input);
kToC.kelvinToCelsius(input);
kToF.kelvinToFahrenheit(input);

console.log('Six calls, yeah?');