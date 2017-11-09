/*
1) Set pivot to middle element

2) Partition will swap elements in arr where left side is less than pivot and right side is greater than pivot

3) Partition will also return index where arr is to be separated

4) Now recursively call quicksort for those left and right subarrays until subarrays only have 1 element

*** Further explanation of n log n https://www.youtube.com/watch?v=kjDR1NBB9MU
*/

function quicksort(arr, left = 0, right = arr.length - 1) {
  console.log(left, right);
  if (left >= right) return;

  let pivot = arr[Math.floor((left + right) / 2)];
  let index = partition(arr, left, right, pivot);
  quicksort(arr, left, index - 1);
  quicksort(arr, index, right);
  return arr;
}

function partition(arr, left, right, pivot) {
  while (left <= right) {
    // move left pointer until it reaches element larger than pivot
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    // now that left and right pointers are in correct position, make sure they // didn't cross over and swap them
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  console.log(arr);
  // returns left pointer which is now the position of where arr will be separated
  return left;
}

const arr = [15,3,9,8,5,2,7,1,6];
console.log(quicksort(arr));
