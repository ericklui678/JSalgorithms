// What is the value of y when it is logged out?
// What is the value of x when it is logged out?

// Variable 'x' is function scoped, so you'll receive 'x is not defined'
// Variable 'y' is an accidental global in the IIFE

(function() {
  var x = (y = 200);
  // you can read this like
  // y = 200; -> accidental global variable when not in strict mode
  // var x = y
})();

console.log("y: ", y);
console.log("x: ", x);
