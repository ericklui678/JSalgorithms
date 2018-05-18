// Given an arr of random integers and 0s, move all 0s to back while
// retaining order of nonzeroes

/* Logical Breakdown
1) Init count to 0
2) Iterate through arr
  a) if current num is nonzero, set arr[count] to current num
  b) increment count
3) Once loop finishes, all nonzeroes should be shifted to the front, but there are still remaining leftover copies of nonzeroes near end of arr
4) Loop through count to end of array to set elements to 0
*/

/*
Time Complexity: O(n) since longest for loop based on arr length
Space Complexity: O(1) since modifying arr inplace
*/

const moveZeroesToBack = (arr, count = 0) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < arr.length) arr[count++] = 0;
  return arr;
}

const arr = [0,2,4,5,0,0,0,7,3];
console.log(moveZeroesToBack(arr));
