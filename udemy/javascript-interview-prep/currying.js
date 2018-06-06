// Currying is a sequence of functions returning another function

// Question: Why use currying in the first place? Take a look at traveltime

function getTravelTime(distance) {
  return speed => distance / speed;
}

// Currying can be useful for storing result of first argument
// travelTimeBosNyc currently returns the inner function
// if you pass another argument, then it'll return distance / speed
const travelTimeBosNyc = getTravelTime(400);
// then pass second argument later
console.log(travelTimeBosNyc(50));

function getProduct(num1, num2) {
  return num1 * num2;
}
function getProductCurryES5(num1) {
  return function(num2) {
    return num1 * num2;
  };
}
function getProductCurryES6(num1) {
  return num2 => num1 * num2;
}

// console.log(getProduct(2, 3));
// console.log(getProductCurryES5(2)(3));
// console.log(getProductCurryES6(2)(3));
