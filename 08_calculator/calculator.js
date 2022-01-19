const add = function(x, y) {
	let answer = x + y;
  return answer;
};

const subtract = function(x, y) {
	let answer = x - y;
  return answer;
};

const sum = function(input) {
  let answer = 0;
	for (i = 0; i < input.length; i++) {
    answer += input[i];
  }
  return answer;
};

const multiply = function(input) {
  let answer = 1;
	for (i = 0; i < input.length; i++) {
    answer *= input[i];
  }
  return answer;
};

const power = function(x, y) {
	let answer = x ** y;
  return answer;
};

const factorial = function(x) {
	let answer = 1;
  for (i = x; i > 0; i--) {
    answer *= i;
  }
  return answer;
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
