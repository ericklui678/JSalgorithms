/*
Given two arrays, check if one of the arrays is a rotation of the other

Clarifying Questions:
1) Are there duplicates?
  - No
2) How to handle if both arrays are empty?
  - Return true
3) Can the numbers in array only be from 1 < n <= arr.length?
  - No, they can be random unique numbers

Logic:
1) Case 0: If both arrays are empty, return true
2) Case 1: If both arrays have different lengths, return false
3) Set pointer i to be 0
4) Set pointer j to be indexOf first element of arr1
5) Set offset to be j - i
6) Loop through arr1 length
  a) If arr1[i] !== arr2[j] return false
7) Return true
*/

const isRotation = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let offset = arr2.indexOf(arr1[0]);
  if (offset === -1) return false;

  for (let i = 0; i < arr1.length; i++) {
    let j = (i + offset) % arr1.length;
    if (arr1[i] !== arr2[j]) return false;
  }
  return true;
};

let a1 = [1, 2, 3, 4, 5, 6, 7];
let a2 = [4, 5, 6, 7, 1, 2, 3];
console.log(isRotation(a1, a2));
