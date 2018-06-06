// Create the tripleAdd(10)(20)(30) that sums all 3 numbers // returns 60

// This is an example of currying
// Currying is translating one function that takes multiple arguments into
// a sequence of functions that take individual arguments

// TLDR Currying is a sequence of functions
function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}

// How you would usually write functions
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(tripleAdd(10)(20)(30)); // curried function
console.log(tripleAdd1(10, 20, 30));
console.log(quadrupleAdd(10)(20)(30, 40)); // curried function
