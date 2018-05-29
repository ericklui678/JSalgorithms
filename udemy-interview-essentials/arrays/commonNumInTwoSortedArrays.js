/*
Questions:
1) Can one of the arrays be empty?
  - Yes
    -> In that case, immediately return empty array
2) Can there be duplicate numbers?
  - Yes

Possible Solutions:
MyFirstAttempt
1) Loop through the array with smaller length and create hash to save unique num
2) Loop through the other array
  a) If num is already in hash, push to common arr
3) Return common
SPACE: O(min(n, m)) which is the minimum size of the two arrays
TIME: O(max(n, m)) where you still need to traverse through longer array
Problem? You are creating more space than needed, it is possible for inplace

Solution 2:
1) Create two pointers i and j that start at 0
2) while i and j are not undefined (means if one has not reached end of arr)
  a) if numbers at i and j are equal
    i) push num to common arr
    ii) incr both i and j
  b) else if num at i is less than num at j
    i) incr i
  c) else
    ii) incr j
SPACE: O(1) since no extra space created
TIME: O(max(n, m)) where worst case you'll traverse longer arr
*/

function commonNumInTwoSortedArray(arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];
  if (arr1[arr1.length - 1] < arr2[0] || arr1[0] > arr2[arr2.length - 1])
    return [];

  let i = 0;
  let j = 0;
  let common = [];
  while (i < arr1.length && j < arr2.length) {
    console.log(i, j);
    if (arr1[i] === arr2[j]) {
      common.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return common;
}

function myFirstAttempt(arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];
  if (arr1[arr1.length - 1] < arr2[0] || arr1[0] > arr2[arr2.length - 1])
    return [];

  // find array that has smaller length
  const findSmallerArrLength = (arr1, arr2) => {
    return arr1.length <= arr2.length ? arr1 : arr2;
  };

  const findLargerArrLength = (arr1, arr2) => {
    return arr1.length > arr2.length ? arr1 : arr2;
  };

  let hash = {};
  let common = [];
  for (num of findSmallerArrLength(arr1, arr2)) {
    if (!(num in hash)) hash[num] = true;
  }

  for (num of findLargerArrLength(arr1, arr2)) {
    if (num in hash) common.push(num);
  }
  return common;
}

const a1 = [1, 3, 4, 6, 7, 9];
const a2 = [1, 2, 4, 5, 9, 10]; // -> [1,4,9]

const b1 = [1, 2, 9, 10, 11, 12];
const b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]; // -> [1,2,9,10,12]

const c1 = [0, 1, 2, 3, 4, 5];
const c2 = [6, 7, 8, 9, 10, 11]; // -> []

console.log(commonNumInTwoSortedArray(a1, a2));
