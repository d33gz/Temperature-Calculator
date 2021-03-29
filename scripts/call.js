let cToF = require('./ctF.js');
let cToK = require('./ctK.js');
let fToC = require('./ftC.js');
let fToK = require('./ftK.js');
let kToC = require('./ktC.js');
let kToF = require('./ktF.js');

/* */

console.log('node mode');

cToF.celsiusToFahrenheit(0);
cToK.celsiusToKelvin(100);
fToC.fahrenheitToCelsius(32);
fToK.fahrenheitToKelvin(212);
kToC.kelvinToCelsius(273);
kToF.kelvinToFahrenheit(373);

console.log('Six calls, yeah?');