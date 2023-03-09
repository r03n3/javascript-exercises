const convertToCelsius = function(temp) {
let tempConvert=(temp-32)*5/9;
return tempConvert.toFixed(1);
};

const convertToFahrenheit = function(temp) {
let tempConvert=(temp*9/5+32);
return tempConvert.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
