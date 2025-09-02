const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
  let difference = a - b;
  return difference;
};

const sum = function(arr) {
  let result = arr.reduce((total, current) => total + current, 0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((total, current) => total * current);
  return result;
};

const power = function(a, b) {
	let result = a**b;
  return result;
};

const factorial = function(a) {
	let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  };
  return product;
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
