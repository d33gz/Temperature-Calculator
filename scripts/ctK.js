//Celsius to Kelvin
module.exports.celsiusToKelvin = (temperature) => {
  let kelvin = temperature + 273;
  console.log(`The temperature is ${kelvin} degrees Kelvin. Taken from ${temperature} degrees Celsius.`);
};