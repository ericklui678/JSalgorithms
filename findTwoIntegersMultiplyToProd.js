/*
Find two integers that multiply to product 'p'

Input: [2,4,1,6,5,40,-1]
Output: [4,5]

Logical Flowchart ->
- Assumptions:
  - Any negative numbers? Yes
  - Any duplicate numbers? No

- Logic
  1) Brute force method O(n) with nested for loops
  2) Hash table to reduce runtime to O(n)
    a) Iterate thr
*/

const findTwoIntMultiplyToP = (arr, p) => {
  let hash = {};
  for (num of arr) {
    let quotient = p / num;
    if (num in hash) return [hash[num], num];
    else hash[quotient] = num;
  }
  console.log(hash);
  return false;
};

const arr = [2,4,1,6,5,40,-1];
const p = 20;
console.log(findTwoIntMultiplyToP(arr, p));
