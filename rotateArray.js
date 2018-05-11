//
// Given any array, rotate the numbers n times. n can also be negative which rotates in the other direction
// Ex 1)
//   In: [1,2,3,4,5], n = 3
//   Out: [3,4,5,1,2]
//
// Ex 2)
//   In: [1,2,3,4,5], n = -1
//   Out: [2,3,4,5,1]


const rotateArrayInPlace = (arr, k) => {
  let rotateBy = k % arr.length;
  if (rotateBy === 0) return arr;

  arr.reverse();
  // reverse first half
  for (let i = 0; i < Math.floor(k/2); i++) {
    let lastIdx = k - i - 1;
    [arr[i], arr[lastIdx]] = [arr[lastIdx], arr[i]];
  }
  // reverse second half
  for (let i = 0; i < Math.floor((arr.length - k)/2); i++) {
    let firstIdx = i + k;
    let lastIdx = arr.length - i - 1;
    [[arr[firstIdx]], [arr[lastIdx]]] = [[arr[lastIdx]], [arr[firstIdx]]];
  }
  return arr;
};

/*
Space Complexity: O(n) where n is the size of the array
Time Complexity: O(n) since arr splice has to iteratively copy the array
*/
const rotateArrayWithSpace = (arr, k) => {
  let rotateBy = k % arr.length;
  if (rotateBy === 0) return arr;

  let newArr = arr.slice(arr.length - rotateBy);
  for (let i = 0; i < rotateBy; i++) {
    arr.unshift(newArr.pop());
    arr.pop();
  }
  console.log(arr);
};

let arr = [1,2,3,4,5,6];
let k = 5;

let newArr = rotateArrayInPlace(arr, k);
console.log(newArr);
