/*
Questions:
1) Can there be multiple numbers with same max occurance?
  - No
2) How to handle empty arr?
  - return null
3) Can there be negative numbers?
  - Yes

Possible Solutions:
Hash Table Sort
1) Create hash table for mapping number and occurance
2) Map the keys of the hash based on sorting occurance descending order
3) Return first idx of that array mapping
SPACE: O(n) since you are creating hash table based on arr size
TIME: O(n log n) since you are map sorting based on occurance

Hash Table Find Max
1) Create hash table for mapping number and occurance
2) If num exists in hash, increment count by 1
  a) If current num's occurance is greater than max, update maxKey and maxOccur
3) Else hash of num is set to 1
4) Return maxKey
SPACE: O(n) since you are creating hash table based on arr size
TIME: O(n) since you only loop through arr once
*/

function mostFreqOccurItemInArr(arr) {
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  let hash = {};
  let maxKey = null;
  let maxOccur = 0;

  for (num of arr) {
    if (num in hash) {
      hash[num] += 1;
      if (hash[num] > maxOccur) {
        maxOccur = hash[num];
        maxKey = num;
      }
    } else {
      hash[num] = 1;
    }
  }

  return maxKey;
}

const arr1 = [1, 3, 1, 3, 2, 1]; // -> 1
const arr2 = [3, 3, 1, 3, 2, 1]; // -> 3
const arr3 = []; // -> null
const arr4 = [0]; // -> 0
const arr5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, -1]; // -> -1
console.log(mostFreqOccurItemInArr(arr5));
