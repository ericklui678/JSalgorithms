/*
Given an array of numbers, find whether any two elements within the array is equal to sum k

Time Complexity: O(n)
  - Only iterated through array with for loop based on arr length n
Space Complexity: O(n)
  - Additional dictionary used to keep track of iterated array elements
*/

const sumTwoElementsInArr = (arr, k) => {
  let numMap = {};

  for (let i = 0; i < arr.length; i++) {
    let dif = k - arr[i];
    if (dif in numMap) return true;
    numMap[arr[i]] = 0;
  }
  return false;
};

const arr = [5,3,6,2,4,7];
const k = 10;
console.log(sumTwoElementsInArr(arr, k));
