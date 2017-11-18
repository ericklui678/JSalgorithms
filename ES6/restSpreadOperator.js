// Operator that can take any amount of arguments and converts to array
const convertToArr = (...nameOfVar) => nameOfVar;
console.log(convertToArr(1, 2, 3)); // [1, 2, 3]

// Function that takes any amount of arguments and console logs them
const log = (...args) => console.log(...args);
log(1,2,3); // prints 1, 2, 3

// Destructuring - Way to pull out values out of arrays or objects
  // Set first element to variable
  // Set remaining elements to a arr variable
const langs = ['JavaScript', 'Ruby', 'Python'];
const [firstItem, ...remainingItems] = langs;
console.log(firstItem, remainingItems);

// Another destructuring example
// Get first element from arrays
const firstElement = ([x]) => x;
console.log(firstElement([1,2,3])); // 1

// Default parameter values
const defaultVal = (str = 'hello') => {
  console.log(str);
};
console.log(defaultVal());

// Combining multiple objects
let newObj = Object.assign(
  {},
  { hello: 'Chattanooga' },
  { hi: 'Summit' }
);
console.log(newObj); // { hello: 'Chattanooga', hi: 'Summit' }

// ES6 Classes
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveBy(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}
  // ... is equivalent to

function Point2(x, y) {
  this.x = x;
  this.y = y;
}

Point2.prototype.moveBy = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}

// Object.freeze prevents object from changing
const hobbies = Object.freeze([
  'programming',
  'reading',
  'music'
]);

// const firstTwo = hobbies.splice(0,2); <-- TypeError:
// TypeError where splice tries to edit hobbies but object is frozen

// Currying
const addFirstParam = x => y => x + y;
const addSecParam = addFirstParam(3)
console.log(addSecParam(2));
