//Fahrenheit to Celsius
module.exports.fahrenheitToCelsius = (temperature) => {
  let celsius = (temperature - 32)/(9/5);
  celsius = Math.floor(celsius);
  console.log(`The temperature is ${celsius} degrees Celsius. Taken from ${temperature} degrees Fahrenheit.`);
};