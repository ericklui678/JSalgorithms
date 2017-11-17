// Given a binary array, find the maximum number of consecutive 1s
// Ex1: [1,1,0,1,1,1] => 3
// Ex2: [1,0,1,1,0,1] => 2

const consecutiveOnes = (arr) => {
  let maxCount = currCount = 0;
  for (num of arr) {
    if (num) {
      currCount++;
    } else {
      if (currCount > maxCount) {
        maxCount = currCount;
      }
      currCount = 0;
    }
  }
  return currCount > maxCount ? currCount : maxCount;
};

const arr = [1,0,1,1,1,0,1,1,1,1];
console.log(consecutiveOnes(arr));
