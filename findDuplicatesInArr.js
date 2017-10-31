/*
Given an array of integers, 1 <= a[i] <= n (n = size of array), some elemnts appear twice and others appear once.

Find all elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Input: [4,3,2,7,8,2,3,1]
Output: [2,3]
*/

// 1) Step through arr and treat value of arr[i] as idx
// 2) Check whether arr[idx] is positive
  // 2a) If arr[idx] is positive, set arr[idx] to negative
  // 2b) Else push arr[i] to result array

// Time Complexity: O(n)
// Space Complexity: O(1) excluding
const findDupInArr = (arr) => {
  if (!arr) return null;
  if (!Array.isArray(arr)) return `Entered ${typeof arr}. Input must be array type`

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let idx = Math.abs(arr[i]) - 1;
    if (arr[idx] >= 0) {
      arr[idx] = Math.abs(arr[idx]) * -1;
    } else {
      result.push(Math.abs(arr[i]));
    }
  }
  return result;
}

// 1) Create dictionary to keep track of num occurances
// 2) Step through dictionary and push keys that have values greater than 1
// Time Complexity: O(n)
// Space Complexity: O(n)
/////////////////////////////////////////////////////////
// const findDupInArr = (arr) => {
//   let res = [];
//   let numMap = {};
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in numMap) numMap[arr[i]]++;
//     else numMap[arr[i]] = 1;
//   }
//
//   for (key in numMap) {
//     if (numMap[key] > 1) res.push(Number(key));
//   }
//   return res;
// };

const arr = [4,3,2,7,8,2,3,1];
console.log(findDupInArr(arr));
