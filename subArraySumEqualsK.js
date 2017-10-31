function subArraySumEqualsK(nums, k) {
  if (!nums.length) return 0;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
    sum = 0;
  }
  return count;
}

let nums = [1,2,1,2,1];
let k = 3;
console.log(subArraySumEqualsK(nums, k));
