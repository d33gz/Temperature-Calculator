//Fahrenheit to Kelvin
module.exports.fahrenheitToKelvin = (temperature) => {
  let kelvin = (5/9) * (temperature - 32) + 273;
  kelvin = Math.floor(kelvin);
  console.log(`The temperature is ${kelvin} degrees Kelvin. Taken from ${temperature} degrees Fahrenheit.`);
};