/*
Given an array of random integers and another array of numbers you want to find,
return the number of occurances for each number

Input: [1,5,2,3,1,10] k = [10,1,3]
Output: [1,2,1] since 10 occurs 1, 1 occurs twice, and 3 occurs once
*/

const findKNumInArr = (arr, k) => {
  let result = k.map(num => num = 0);
  for (num of arr) {
    let idx = k.indexOf(num);
    if (idx !== -1) result[idx] = result[idx] + 1;
  }
  return result;
};

const arr = [1,5,2,3,1,10];
const k = [11,12,1];
console.log(findKNumInArr(arr, k));
