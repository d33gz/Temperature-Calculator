//Several example Kelvin to Fahrenheit Calculations

  //Today's forecast in Kelvin at 293
  const kelvin = 293;
  //Converting Kelvin to Celsius
  let celsius = kelvin - 273;
  //Converting Celsius to Fahrenheit
  let fahrenheit = celsius * (9/5) + 32;
  //Rounding down Fahrenheit to a Whole Number
  fahrenheit = Math.floor(fahrenheit);
  //The Console Log
  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

  // //Today's forecast in Kelvin at 0
  // const kelvin = 0;
  // //Converting Kelvin to Celsius
  // let celsius = kelvin - 273;
  // //Converting Celsius to Fahrenheit
  // let fahrenheit = celsius * (9/5) + 32;
  // //Rounding down Fahrenheit to a Whole Number
  // fahrenheit = Math.floor(fahrenheit);
  // //The Console Log
  // console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

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
    let celsius = temperature - 273;
    let fahrenheit = celsius * (9/5) + 32;
    fahrenheit = Math.floor(fahrenheit);
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
  };
//Create Master Function that takes one parameter, (temperature)
//This function will use /if else/ statements to determine which other function is the best to use and pass (temperature) down to them