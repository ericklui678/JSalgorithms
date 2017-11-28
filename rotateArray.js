/*
Given any array, rotate the numbers n times. n can also be negative which rotates in the other direction
Ex 1)
  In: [1,2,3,4,5], n = 3
  Out: [3,4,5,1,2]

Ex 2)
  In: [1,2,3,4,5], n = -1
  Out: [2,3,4,5,1]


Pseudocode - USE TWO POINTERS
1) Start index at 0
2) Save the item that will be overwritten
3) Save the item that will do the overwriting
4) For loop based on arr length times
  a) Set current value to the item doing the overwriting
  b) Set your previous value as the new current value
  c) Increment index based on number of rotations
  d) Set current value as the next rotation spot

LOGIC EXAMPLE
  In: [1,2,3,4,5], n = 3
        3 stored in prevVal
        1 stored in currVal
      [3,2,3,4,5]
        idx 0 set to 3
        idx increments to 3
        1 stored in prevVal
        4 stored in currVal
      [3,2,3,1,5]
        idx 3 set to 1
        idx increments to 1
        4 stored in prevVal
        2 stored in currVal
      [3,4,3,1,5]
        idx 1 set to 4
        idx increments to 4
        2 stored in prevVal
        5 stored in currVal
      [3,4,3,1,2]
        idx 4 set to 2
        idx increments to 2
        5 stored in prevVal
        3 stored in currVal
      [3,4,5,1,2]
        idx 2 set to 5
        idx increments to 5
        // last statements don't matter at this point, array has been rotated
*/

'use strict';

const rotateArrByN = (arr, n) => {
  // Case 0: Empty array
  if (!arr.length) return `Array cannot be empty`;

  // Case 1: Rotating the array n amount where it returns the same Array
  if (n % arr.length === 0) return arr;

  // Case 2: Rotating arr by n in place
  n %= arr.length;
  // Handle when n is negative
  if (n < 0) n += arr.length;
  let idx = 0;
  let prevVal = arr[arr.length - n];
  let currVal = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[idx] = prevVal;
    prevVal = currVal;
    idx = (idx + n) % arr.length;
    currVal = arr[idx]
  }
  return arr;
};

console.log(rotateArrByN([1,2,3,4,5], 3));
console.log(rotateArrByN([1,2,3,4,5], -1));
console.log(rotateArrByN([1,2,3,4,5], 5));
console.log(rotateArrByN([1,2,3,4,5], -7));
