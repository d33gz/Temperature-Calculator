//Kelvin to Celsius
module.exports.kelvinToCelsius = (temperature) => {
  let celsius = temperature - 273;
  console.log(`The temperature is ${celsius} degrees Celsius. Taken from ${temperature} degrees Kelvin.`);
};