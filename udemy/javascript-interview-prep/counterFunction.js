// Problem:
// - Write a function that keeps track of how many times it was
// called and returns that number
// - All functionality should be inside of the function - none outside

// Solution: Create closure where private variable is the count
// Then create an instance of the invoked function

function counterFunc() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const instanceOne = counterFunc();
const instanceTwo = counterFunc();

console.log("instanceOne", instanceOne());
console.log("instanceOne", instanceOne());
console.log("instanceOne", instanceOne());
console.log("instanceTwo", instanceTwo());
console.log("instanceTwo", instanceTwo());
console.log("instanceTwo", instanceTwo());
