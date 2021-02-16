//One example Celsius to Newton Calculation

  // //Today's forecast in Celsius
  // const celsius = 50;
  // //Converting Celsius to Newton
  // let Newton = celsius * (33/100);
  // //Rounding down Newton to a Whole Number
  // Newton = Math.floor(Newton);
  // //The Console Log
  // console.log(`The temperature is ${Newton} degrees Newton`);

//The Functions
//Kelvin to Fahrenheit
  function kelvinToFahrenheit(temperature) {
    let fahrenheit = (9/5) * (temperature - 273) + 32;
    fahrenheit = Math.floor(fahrenheit);
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. Taken from ${temperature} degrees Kelvin.`);
  };

//Kelvin to Celsius
  function kelvinToCelsius(temperature) {
    let celsius = temperature - 273;
    console.log(`The temperature is ${celsius} degrees Celsius. Taken from ${temperature} degrees Kelvin.`);
  };

//Celsius to Kelvin
  function celsiusToKelvin(temperature) {
    let kelvin = temperature + 273;
    console.log(`The temperature is ${kelvin} degrees Kelvin. Taken from ${temperature} degrees Celsius.`);
  };

//Celsius to Fahrenheit
  function celsiusToFahrenheit(temperature) {
    let fahrenheit = (9/5) * temperature + 32;
    fahrenheit = Math.floor(fahrenheit);
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. Taken from ${temperature} degrees Celsius.`);
  };

//Fahrenheit to Kelvin
  function fahrenheitToKelvin(temperature) {
    let kelvin = (5/9) * (temperature - 32) + 273;
    kelvin = Math.floor(kelvin);
    console.log(`The temperature is ${kelvin} degrees Kelvin. Taken from ${temperature} degrees Fahrenheit.`);
  };

//Fahrenheit to Celsius
  function fahrenheitToCelsius(temperature) {
    let celsius = (temperature - 32)/(9/5);
    celsius = Math.floor(celsius);
    console.log(`The temperature is ${celsius} degrees Celsius. Taken from ${temperature} degrees Fahrenheit.`);
  };

//The Function Calls
  kelvinToFahrenheit(373);
  kelvinToCelsius(273);
  celsiusToKelvin(100);
  celsiusToFahrenheit(0);
  fahrenheitToKelvin(212);
  fahrenheitToCelsius(32);
//Create Master Function that takes one parameter, (temperature)
//This function will use /if else/ statements to determine which other function is the best to use and pass (temperature) down to them