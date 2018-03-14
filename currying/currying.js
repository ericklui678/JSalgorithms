// Currying is the idea that you only run part of a function
// It is functional programming rather than object oriented

function ninjaBelt(ninja) {
  return function belt(beltColor) {
    console.log(`Ninja ${ninja} has earned a ${beltColor} belt`);
  }
}

let beltType = ninjaBelt('Erick');
beltType('black');
beltType('white');
beltType('yellow');

// ninjaBelt is a curried function; it is designed for the first argument to be
// 'prefilled' before the function itself is fully executed
