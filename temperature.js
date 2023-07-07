/**
 * @param {number} celsius
 * @return {number[]}
 */

var convertTemperature = function (celsius) {
  let kelvin = (celsius + 273.15).toFixed(6);
  let fahrenheit = (celsius * 1.8 + 32.0).toFixed(6);

  return [kelvin, fahrenheit];
};

console.log(convertTemperature(36.5));
