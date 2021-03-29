//Celsius to Fahrenheit
module.exports.celsiusToFahrenheit = (temperature) => {
  let fahrenheit = (9/5) * temperature + 32;
  fahrenheit = Math.floor(fahrenheit);
  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. Taken from ${temperature} degrees Celsius.`);
};