const ftoc = function(farenheit) {
  const celsius = (farenheit - 32) * (5/9);
  const celsiusParsed = parseFloat(celsius.toFixed(1));
  return celsiusParsed;
};

const ctof = function(celsius) {
  const farenheit = (celsius * 9 / 5) + 32;
  const farenheitParsed = parseFloat(farenheit.toFixed(1));
  return farenheitParsed;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
