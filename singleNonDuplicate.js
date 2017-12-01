/*
Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find the single element that appears once.

Note: Your solution should run in O(log n) and O(1) space

Ex 1)
  In: [1,1,2,3,3,4,4,8,8] -> 2
Ex 2)
  In: [3,3,7,7,10,11,11] -> 10
*/

const singleNonDuplicate = nums => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    console.log(start, mid, end);
    if (mid % 2 === 1) mid--;
    if (nums[mid] !== nums[mid + 1]) end = mid;
    else start = mid + 2;
  }
  return nums[start];
};

const arr1 = [1,1,3,3,4,8,8];
const arr2 = [1,1,2,2,3,4,4,8,8];
const arr3 = [3,3,7,7,10,11,11]
console.log(singleNonDuplicate(arr1));
