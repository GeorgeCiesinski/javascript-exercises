const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sumAmount = 0;
  numArray.forEach(num => sumAmount += num);
  return sumAmount;
};

const multiply = function(numArray) {
  let total = 1;
  numArray.forEach(num => total *= num);  // Multiply total with each value in numArray
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let total = 1;
  for (let i = 0; i < num; i++) {
    total *= i + 1;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
