/*
1) Mergesort left half of array
2) Mergesort right half of array
3) Merge left and right half in sorted order
*/

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    console.log(left, right, 'result', result);
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  console.log(result, left, right);
  return result;
}

const arr = [10,9,5,1,2,4,3,7,8];
console.log(mergeSort(arr));
