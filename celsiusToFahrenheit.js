const celsiusToFahrenheit = (celsius) => {
  return `${(celsius * 9) / 5 + 32}° Fahrenheit`;
};

const [, , num] = process.argv;

console.log(celsiusToFahrenheit(num));
