//Kelvin to Fahrenheit
module.exports.kelvinToFahrenheit = (temperature) => {
  let fahrenheit = (9/5) * (temperature - 273) + 32;
  fahrenheit = Math.floor(fahrenheit);
  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. Taken from ${temperature} degrees Kelvin.`);
};